# Development Environments on NixOS

NixOS's reproducibility makes it ideal for building development environments. However, if
you're used to other distros, you may encounter problems because NixOS has its own logic.
We'll briefly explain this below.

In the following sections, we'll introduce how the development environment works in NixOS.

## Creating a Custom Shell Environment with `nix shell`

The simplest way to create a development environment is to use `nix shell`. `nix shell`
will create a shell environment with the specified Nix package installed.

Here's an example:

```shell
# hello is not available
› hello
hello: command not found

# Enter an environment with the 'hello' and `cowsay` package
› nix shell nixpkgs#hello nixpkgs#cowsay

# hello is now available
› hello
Hello, world!

# ponysay is also available
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

`nix shell` is very useful when you just want to try out some packages or quickly create a
clean environment.

## Creating a Development Environment

`nix shell` is simple and easy to use, but it's not very flexible, for a more complex
development environment, we need to use `pkgs.mkShell` and `nix develop`.

We can create a development environment using `pkgs.mkShell { ... }` and open an
interactive Bash shell of this development environment using `nix develop`.

To see how [`pkgs.mkShell`] works, let's take a look at
its source code.

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

`pkgs.mkShell { ... }` is a special derivation (Nix package). Its `name`, `buildInputs`,
and other parameters are customizable, and `shellHook` is a special parameter that will be
executed when `nix develop` enters the environment.

Here is a `flake.nix` that defines a development environment with Node.js 24 installed:

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

Create an empty folder, save the above configuration as `flake.nix`, and then execute
`nix develop` (or more precisely, you can use `nix develop .#default`), the current
version of nodejs will be outputted, and now you can use `node` `pnpm` `yarn` seamlessly.

## Using zsh/fish/... instead of bash

`pkgs.mkShell` uses `bash` by default, but you can also use `zsh` or `fish` by add
`exec <your-shell>` into `shellHook`.

Here is an example:

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

With the above configuration, `nix develop` will enter the REPL environment of nushell.

## Creating a Development Environment with `pkgs.runCommand`

The derivation created by `pkgs.mkShell` cannot be used directly, but must be accessed via
`nix develop`.

It is actually possible to create a shell wrapper containing the required packages via
`pkgs.stdenv.mkDerivation`, which can then be run directly into the environment by
executing the wrapper.

Using `mkDerivation` directly is a bit cumbersome, and Nixpkgs provides some simpler
functions to help us create such wrappers, such as `pkgs.runCommand`.

Example:

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

Then execute `nix run .#dev` or `nix shell .#dev --command 'dev-shell'`, you will enter a
nushell session, where you can use the `node` `pnpm` command normally, and the node
version is 22.

The wrapper generated in this way is an executable file, which does not actually depend on
the `nix run` or `nix shell` command.

For example, we can directly install this wrapper through NixOS's
`environment.systemPackages`, and then execute it directly:

```nix
{pkgs, lib, ...}:{

  environment.systemPackages = [
    # Install the wrapper into the system
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

Add the above configuration to any NixOS Module, then deploy it with
`sudo nixos-rebuild switch`, and you can enter the development environment directly with
the `dev-shell` command, which is the special feature of `pkgs.runCommand` compared to
`pkgs.mkShell`.

Related source code:

- [pkgs/build-support/trivial-builders/default.nix - runCommand]
- [pkgs/build-support/setup-hooks/make-wrapper.sh]
