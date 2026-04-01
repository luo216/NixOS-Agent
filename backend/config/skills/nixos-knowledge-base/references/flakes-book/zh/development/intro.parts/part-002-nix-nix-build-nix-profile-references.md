## 进入任何 Nix 包的构建环境

现在再来看看 `nix develop`，先读下 `nix develop --help` 输出的帮助文档：

```
Name
    nix develop - run a bash shell that provides the build environment of a derivation

Synopsis
    nix develop [option...] installable
# ......
```

可以看到 `nix develop` 接受的参数是
`installable`，这说明我们可以通过它进入任何一个 installable 的 Nix 包的开发环境，而不仅仅是
`pkgs.mkShell` 创建的环境。

默认情况下，`nix develop` 命令会尝试 flake outputs 中的如下属性：

- `devShells.<system>.default`
- `packages.<system>.default`

而如果我们通过 `nix develop /path/to/flake#<name>` 来指定了 flake 包地址以及 flake output
name，那么 `nix develop` 命令会尝试 flake outputs 中的如下属性：

- `devShells.<system>.<name>`
- `packages.<system>.<name>`
- `legacyPackages.<system>.<name>`

现在来尝试一下，首先测试下，确认我当前环境中没有 `c++` `g++` 这这些编译相关的命令：

```shell
ryan in 🌐 aquamarine in ~
› c++
c++: command not found

ryan in 🌐 aquamarine in ~
› g++
g++: command not found
```

现在通过 `nix develop` 进入到 `hello` 的构建环境，然后再次测试下：

```shell
# login to the build environment of the package `hello`
ryan in 🌐 aquamarine in ~
› nix develop nixpkgs#hello

ryan in 🌐 aquamarine in ~ via ❄️  impure (hello-2.12.1-env)
› env | grep CXX
CXX=g++

ryan in 🌐 aquamarine in ~ via ❄️  impure (hello-2.12.1-env)
› c++ --version
g++ (GCC) 12.3.0
Copyright (C) 2022 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

ryan in 🌐 aquamarine in ~ via ❄️  impure (hello-2.12.1-env)
› g++ --version
g++ (GCC) 12.3.0
Copyright (C) 2022 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
```

可以看到 `CXX` `CXXCPP` 环境变量已经被设置好了，而且 `c++` `g++` 等命令也可以正常使用了。

此外我们还可以正常调用 `hello` 这个 Nix 包的各构建阶段命令：

> 提前说明下，一个 Nix 包的所有构建阶段及其默认的执行顺序为：`$prePhases unpackPhase patchPhase $preConfigurePhases configurePhase $preBuildPhases buildPhase checkPhase $preInstallPhases installPhase fixupPhase installCheckPhase $preDistPhases distPhase $postPhases`

```shell
# 解压源码包
ryan in 🌐 aquamarine in /tmp/xxx via ❄️  impure (hello-2.12.1-env)
› unpackPhase
unpacking source archive /nix/store/pa10z4ngm0g83kx9mssrqzz30s84vq7k-hello-2.12.1.tar.gz
source root is hello-2.12.1
setting SOURCE_DATE_EPOCH to timestamp 1653865426 of file hello-2.12.1/ChangeLog

ryan in 🌐 aquamarine in /tmp/xxx via ❄️  impure (hello-2.12.1-env)
› ls
hello-2.12.1

ryan in 🌐 aquamarine in /tmp/xxx via ❄️  impure (hello-2.12.1-env)
› cd hello-2.12.1/

# generate Makefile
ryan in 🌐 aquamarine in /tmp/xxx/hello-2.12.1 via ❄️  impure (hello-2.12.1-env)
› configurePhase
configure flags: --prefix=/tmp/xxx/outputs/out --prefix=/tmp/xxx/outputs/out
checking for a BSD-compatible install... /nix/store/02dr9ymdqpkb75vf0v1z2l91z2q3izy9-coreutils-9.3/bin/install -c
checking whether build environment is sane... yes
checking for a thread-safe mkdir -p... /nix/store/02dr9ymdqpkb75vf0v1z2l91z2q3izy9-coreutils-9.3/bin/mkdir -p
checking for gawk... gawk
checking whether make sets $(MAKE)... yes
checking whether make supports nested variables... yes
checking for gcc... gcc
# ......
checking that generated files are newer than configure... done
configure: creating ./config.status
config.status: creating Makefile
config.status: creating po/Makefile.in
config.status: creating config.h
config.status: config.h is unchanged
config.status: executing depfiles commands
config.status: executing po-directories commands
config.status: creating po/POTFILES
config.status: creating po/Makefile

# build the package
ryan in 🌐 aquamarine in /tmp/xxx/hello-2.12.1 via C v12.3.0-gcc via ❄️  impure (hello-2.12.1-env) took 2s
› buildPhase
build flags: SHELL=/run/current-system/sw/bin/bash
make  all-recursive
make[1]: Entering directory '/tmp/xxx/hello-2.12.1'
# ......
ranlib lib/libhello.a
gcc  -g -O2   -o hello src/hello.o  ./lib/libhello.a
make[2]: Leaving directory '/tmp/xxx/hello-2.12.1'
make[1]: Leaving directory '/tmp/xxx/hello-2.12.1'

# run the built program
ryan in 🌐 aquamarine in /tmp/xxx/hello-2.12.1 via C v12.3.0-gcc via ❄️  impure (hello-2.12.1-env)
› ./hello
Hello, world!
```

这种用法的主要应用场景是调试某个 Nix 包的构建过程，或者在某个 Nix 包的构建环境中执行一些命令。

## `nix build`

`nix build` 用于构建一个软件包，并在当前目录下创建一个名为 `result`
的符号链接，链接到该构建结果。

一个示例：

```bash
# 构建 `nixpkgs` flake 中的 `ponysay` 这个包
nix build "nixpkgs#ponysay"
# 使用构建出来的 ponysay 命令
› ./result/bin/ponysay 'hey buddy!'
 ____________
< hey buddy! >
 ------------
     \
      \
       \
       ▄▄  ▄▄ ▄ ▄
    ▀▄▄▄█▄▄▄▄▄█▄▄▄
   ▀▄███▄▄██▄██▄▄██
  ▄██▄███▄▄██▄▄▄█▄██
 █▄█▄██▄█████████▄██
  ▄▄█▄█▄▄▄▄▄████████
 ▀▀▀▄█▄█▄█▄▄▄▄▄█████         ▄   ▄
    ▀▄████▄▄▄█▄█▄▄██       ▄▄▄▄▄█▄▄▄
    █▄██▄▄▄▄███▄▄▄██    ▄▄▄▄▄▄▄▄▄█▄▄
    ▀▄▄██████▄▄▄████    █████████████
       ▀▀▀▀▀█████▄▄ ▄▄▄▄▄▄▄▄▄▄██▄█▄▄▀
            ██▄███▄▄▄▄█▄▄▀  ███▄█▄▄▄█▀
            █▄██▄▄▄▄▄████   ███████▄██
            █▄███▄▄█████    ▀███▄█████▄
            ██████▀▄▄▄█▄█    █▄██▄▄█▄█▄
           ███████ ███████   ▀████▄████
           ▀▀█▄▄▄▀ ▀▀█▄▄▄▀     ▀██▄▄██▀█
                                ▀  ▀▀█
```

## 使用 `nix profile` 分别管理日常娱乐环境跟开发环境

`nix profile`
是 NixOS 中用于管理用户环境的工具，它可以用于创建管理多个用户环境，并在需要时切换到不同的环境。

与 `nix develop` 不同，`nix profile`
管理的是用户级别的系统环境，而不是临时创建的一个 shell 环境，因此它对 Jetbrains IDE /
VSCode 等 IDE 的兼容性会好很多，不会出现无法在 IDE 内使用我们配置好的开发环境的情况。

TODO 未完待续

## 其他命令

其他还有些 `nix flake init` 之类的命令，请自行查阅 [New Nix Commands][New Nix Commands]
学习研究，这里就不详细介绍了。

## References

- [pkgs.mkShell - nixpkgs manual](https://nixos.org/manual/nixpkgs/stable/#sec-pkgs-mkShell)
- [A minimal nix-shell](https://fzakaria.com/2021/08/02/a-minimal-nix-shell.html)
- [Wrapping packages - NixOS Cookbook](https://wiki.nixos.org/wiki/Nix_Cookbook#Wrapping_packages)
- [One too many shell, Clearing up with nix' shells nix shell and nix-shell - Yannik Sander](https://blog.ysndr.de/posts/guides/2021-12-01-nix-shells/)
- [Shell Scripts - NixOS Wiki](https://wiki.nixos.org/wiki/Shell_Scripts)

[New Nix Commands]: https://nixos.org/manual/nix/stable/command-ref/new-cli/nix.html
[pkgs/build-support/trivial-builders/default.nix - runCommand]: https://github.com/NixOS/nixpkgs/blob/nixos-25.11/pkgs/build-support/trivial-builders/default.nix#L25-L54
[pkgs/build-support/setup-hooks/make-wrapper.sh]: https://github.com/NixOS/nixpkgs/blob/nixos-25.11/pkgs/build-support/setup-hooks/make-wrapper.sh
[`pkgs.mkShell`]: https://github.com/NixOS/nixpkgs/blob/nixos-25.11/pkgs/build-support/mkshell/default.nix
