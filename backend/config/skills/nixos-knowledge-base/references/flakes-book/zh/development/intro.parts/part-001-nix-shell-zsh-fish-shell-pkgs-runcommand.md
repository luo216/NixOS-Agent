# 在 NixOS 上进行开发工作

由于 NixOS 自身可复现的特性，它非常适合用于搭建开发环境。但是如果你想直接将在其他发行版上的环境搭建经验用在 NixOS 上，可能会遇到许多问题，因为 NixOS 有自己的一套逻辑在，下面我们先对此稍作说明。

在本章中我们先学习一下 Nix
Flakes 开发环境的实现原理，后面的章节再按使用场景介绍一些更具体的内容。

## 通过 `nix shell` 创建开发环境

在 NixOS 上，最简单的创建开发环境的方法是使用
`nix shell`，它会创建一个含有指定 Nix 包的 shell 环境。

示例：

```shell
# hello 不存在
› hello
hello: command not found

# 进入到一个含有 hello 与 cowsay 的 shell 环境
# 可以指定多个包，用空格分隔
› nix shell nixpkgs#hello nixpkgs#cowsay

# hello 可以用了
› hello
Hello, world!

# cowsay 也可以用了
› cowsay "Hello, world!"
 _______
< hello >
 -------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

`nix shell` 非常适合用于临时试用一些软件包或者快速创建一个干净的环境。

## 创建与使用开发环境

`nix shell` 用起来非常简单，但它并不够灵活，对于更复杂的开发环境管理，我们需要使用
`pkgs.mkShell` 与 `nix develop`。

在 Nix Flakes 中，我们可以通过 `pkgs.mkShell { ... }` 来定义一个项目环境，通过
`nix develop` 来打开一个该开发环境的交互式 Bash Shell.

为了更好的使用上述两个功能，我们先来看看它们的原理。

[`pkgs.mkShell`] 的源码如下：

```nix
{ lib, stdenv, buildEnv }:

# A special kind of derivation that is only meant to be consumed by the
# nix-shell.
{ name ? "nix-shell"
, # a list of packages to add to the shell environment
  packages ? [ ]
, # propagate all the inputs from the given derivations
  inputsFrom ? [ ]
, buildInputs ? [ ]
, nativeBuildInputs ? [ ]
, propagatedBuildInputs ? [ ]
, propagatedNativeBuildInputs ? [ ]
, ...
}@attrs:
let
  mergeInputs = name:
    (attrs.${name} or [ ]) ++
    (lib.subtractLists inputsFrom (lib.flatten (lib.catAttrs name inputsFrom)));

  rest = builtins.removeAttrs attrs [
    "name"
    "packages"
    "inputsFrom"
    "buildInputs"
    "nativeBuildInputs"
    "propagatedBuildInputs"
    "propagatedNativeBuildInputs"
    "shellHook"
  ];
in

stdenv.mkDerivation ({
  inherit name;

  buildInputs = mergeInputs "buildInputs";
  nativeBuildInputs = packages ++ (mergeInputs "nativeBuildInputs");
  propagatedBuildInputs = mergeInputs "propagatedBuildInputs";
  propagatedNativeBuildInputs = mergeInputs "propagatedNativeBuildInputs";

  shellHook = lib.concatStringsSep "\n" (lib.catAttrs "shellHook"
    (lib.reverseList inputsFrom ++ [ attrs ]));

  phases = [ "buildPhase" ];

  # ......

  # when distributed building is enabled, prefer to build locally
  preferLocalBuild = true;
} // rest)
```

可以看到 `pkgs.mkShell { ... }` 本质上就是一个特殊的 Derivation（Nix 包），它的 `name`
`buildInputs` 等参数都是可自定义的，而 `shellHook` 则是一个特殊的参数，它会在
`nix develop` 进入该环境时被执行。

如下是一份 `flake.nix` 文件，它定义了一个 nodejs 24 的开发环境：

```nix
{
  description = "A Nix-flake-based Node.js development environment";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-25.11";
  };

  outputs = { self , nixpkgs ,... }: let
    # system should match the system you are running on
    system = "x86_64-linux";
  in {
    devShells."${system}".default = let
      pkgs = import nixpkgs { inherit system; };
    in pkgs.mkShell {
      # create an environment with nodejs, pnpm, and yarn
      packages = with pkgs; [
        nodejs_24
        nodePackages.pnpm
        (yarn.override { nodejs = nodejs_24; })
      ];

      shellHook = ''
        echo "node `node --version`"
      '';
    };
  };
}
```

建个空文件夹，将上面的配置保存为 `flake.nix`，然后执行 `nix develop`（或者更精确点，可以用
`nix develop .#default`），首先会打印出当前 nodejs 的版本，之后 `node` `pnpm` `yarn`
等命令就都能正常使用了。

## 在开发环境中使用 zsh/fish 等其他 shell

`pkgs.mkShell` 默认使用 `bash`，但是你也可以通过在 `shellHook` 中添加 `exec <your-shell>`
来使用 `zsh` 或者 `fish` 等其他 shell。

示例如下：

```nix
{
  description = "A Nix-flake-based Node.js development environment";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-25.11";
  };

  outputs = { self , nixpkgs ,... }: let
    # system should match the system you are running on
    system = "x86_64-linux";
  in {
    devShells."${system}".default = let
      pkgs = import nixpkgs { inherit system; };
    in pkgs.mkShell {
      # create an environment with nodejs_24, pnpm, and yarn
      packages = with pkgs; [
        nodejs_24
        nodePackages.pnpm
        (yarn.override { nodejs = nodejs_24; })
        nushell
      ];

      shellHook = ''
        echo "node `node --version`"
        exec nu
      '';
    };
  };
}
```

使用上面的 `flake.nix` 配置，`nix develop` 将进入一个 nodejs 24 的开发环境，同时使用
`nushell` 作为交互式 shell.

## 通过 `pkgs.runCommand` 创建开发环境

`pkgs.mkShell` 创建的 derivation 不能直接使用，必须通过 `nix develop` 进入到该环境中。

实际上我们也可以通过 `pkgs.stdenv.mkDerivation` 来创建一个包含所需软件包的 shell
wrapper, 这样就能直接通过执行运行该 wrapper 来进入到该环境中。

直接使用 `mkDerivation`
略显繁琐，Nixpkgs 提供了一些更简单的函数来帮助我们创建这类 wrapper，比如
`pkgs.runCommand`.

示例：

```nix
{
  description = "A Nix-flake-based Node.js development environment";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-25.11";
  };

  outputs = { self , nixpkgs ,... }: let
    # system should match the system you are running on
    system = "x86_64-linux";
  in {
    packages."${system}".dev = let
      pkgs = import nixpkgs { inherit system; };
      packages = with pkgs; [
          nodejs_22
          nodePackages.pnpm
          nushell
      ];
    in pkgs.runCommand "dev-shell" {
      # Dependencies that should exist in the runtime environment
      buildInputs = packages;
      # Dependencies that should only exist in the build environment
      nativeBuildInputs = [ pkgs.makeWrapper ];
    } ''
      mkdir -p $out/bin/
      ln -s ${pkgs.nushell}/bin/nu $out/bin/dev-shell
      wrapProgram $out/bin/dev-shell --prefix PATH : ${pkgs.lib.makeBinPath packages}
    '';
  };
}
```

然后执行 `nix run .#dev` 或者 `nix shell .#dev --command 'dev-shell'`，就能进入一个nushell
session，可以在其中正常使用 `node` `pnpm` 命令.

这种方式生成的 wrapper 是一个可执行文件，它实际不依赖 `nix run`
命令，比如说我们可以直接通过 NixOS 的 `environment.systemPackages`
来安装这个 wrapper，然后直接执行它：

```nix
{pkgs, lib, ...}:{

  environment.systemPackages = [
    # 将 dev-shell 安装到系统环境中
    (let
      packages = with pkgs; [
          nodejs_22
          nodePackages.pnpm
          nushell
      ];
    in pkgs.runCommand "dev-shell" {
      # Dependencies that should exist in the runtime environment
      buildInputs = packages;
      # Dependencies that should only exist in the build environment
      nativeBuildInputs = [ pkgs.makeWrapper ];
    } ''
      mkdir -p $out/bin/
      ln -s ${pkgs.nushell}/bin/nu $out/bin/dev-shell
      wrapProgram $out/bin/dev-shell --prefix PATH : ${pkgs.lib.makeBinPath packages}
    '')
  ];
}
```

将上述配置添加到任一 NixOS Module 中，再通过 `sudo nixos-rebuild switch`
部署后，就能直接通过 `dev-shell` 命令进入到该开发环境，这就是 `pkgs.runCommand` 相比
`pkgs.mkShell` 的特别之处。

相关源代码：

- [pkgs/build-support/trivial-builders/default.nix - runCommand]
- [pkgs/build-support/setup-hooks/make-wrapper.sh]
