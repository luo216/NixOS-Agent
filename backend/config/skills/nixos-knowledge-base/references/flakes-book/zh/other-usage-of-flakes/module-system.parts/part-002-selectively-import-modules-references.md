## 如何选择性地导入模块 {#selectively-import-modules}

在上面的例子中，我们已经介绍了如何通过自定义的 options 来决定是否启用某个功能，但我们的代码实现都是在同一个 nix 文件中的，那么如果我们的模块是分散在不同的文件中的，该如何实现呢？

我们先来看看一些常见的错误用法，然后再来介绍正确的使用方式。

### 错误用法一 - 在 `config = { ... };` 中使用 `imports` {#wrong-usage-1}

你最先想到的，大概是直接在 `config = { ... };` 中使用 `imports`，类似这样：

```nix
# ./flake.nix
{
  description = "NixOS Flake for Test";
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.11";

  outputs = {nixpkgs, ...}: {
    nixosConfigurations = {
      "test" = nixpkgs.lib.nixosSystem {
        modules = [
          ({config, lib, ...}: {
            options = {
              foo = lib.mkOption {
                default = false;
                type = lib.types.bool;
              };
            };

            config = lib.mkIf config.foo {
              # 在 config 中使用 imports 会报错
              imports = [
                {warnings = ["foo"];}

                # ...省略其他模块或文件路径
              ];
            };
          })
        ];
      };
    };
  };
}
```

但这样是行不通的。你可以尝试使用上述 `flake.nix` 运行
`nix eval .#nixosConfigurations.test.config.warnings`，会遇到报错
`error: The option 'imports' does not exist.`

这是因为 `config` 是一个普通的 attribute set，而 `imports` 是模块系统的特殊参数。并不存在
`config.imports` 这样的 options 定义。

### 正确用法一 - 为所有需要条件导入的模块定义各自的 `options` {#correct-usage-1}

这是最推荐的方式。NixOS 系统中的模块都是这样实现的，在 <https://search.nixos.org/options>
中搜索 `enable` 能看到非常多的可通过 `enable` option 启用或关闭的系统模块。

具体的写法已经在前面的 [基本结构与用法](#basic-structure-and-usage)
中介绍过了，这里不再赘述。

它的缺点是，所有需要条件导入的 Nix 模块都要做改造，把其中的配置声明全部移到
`config = { ...};` 代码块中，代码复杂度会增加，同时也对新手不太友好。

### 正确用法二 - 在 `imports = [];` 中使用 `lib.optionals` {#correct-usage-2}

这种方式的主要好处是，它要比前面介绍的方法简单许多，不需要对模块内容做任何修改，只需要在
`imports` 中使用 `lib.optionals` 来决定是否导入某个模块即可。

> `lib.optionals` 函数的详细文档: <https://noogle.dev/f/lib/optionals>

直接看例子：

```nix
# ./flake.nix
{
  description = "NixOS Flake for Test";
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.11";

  outputs = {nixpkgs, ...}: {
    nixosConfigurations = {
      "test" = nixpkgs.lib.nixosSystem {
        specialArgs = { enableFoo = true; };
        modules = [
          ({config, lib, enableFoo ? false, ...}: {
            imports =
              [
                 # 这里写其他模块
              ]
              # 通过 lib.optionals 来决定是否foo.nix
              ++ (lib.optionals (enableFoo) [./foo.nix]);
          })
        ];
      };
    };
  };
}
```

```nix
# ./foo.nix
{ warnings = ["foo"];}
```

将上述两个 nix 文件保存到一个文件夹中，然后在文件夹中运行
`nix eval .#nixosConfigurations.test.config.warnings`，运行正常：

```bash
› nix eval .#nixosConfigurations.test.config.warnings
[ "foo" ]
```

这里需要注意的一点是，**不能在 `imports =[ ... ];` 中使用由 `_module.args`
传递的参数**，我们在前面
[传递非默认参数到模块系统中 ](../nixos-with-flakes/nixos-flake-and-module-system#pass-non-default-parameters-to-submodules)
一章中已经做过详细说明。

## References

- [Best resources for learning about the NixOS module system? - Discourse](https://discourse.nixos.org/t/best-resources-for-learning-about-the-nixos-module-system/1177/4)
- [NixOS modules - NixOS Wiki](https://wiki.nixos.org/wiki/NixOS_modules)
- [NixOS: config argument - NixOS Wiki](https://wiki.nixos.org/wiki/NixOS:config_argument)
- [Module System - Nixpkgs][Module System - Nixpkgs]
- [Writing NixOS Modules - Nixpkgs][Writing NixOS Modules - Nixpkgs]

[lib/modules.nix]: https://github.com/NixOS/nixpkgs/blob/nixos-25.11/lib/modules.nix
[Module System - Nixpkgs]:
  https://github.com/NixOS/nixpkgs/blob/nixos-25.11/doc/module-system/module-system.chapter.md
[Writing NixOS Modules - Nixpkgs]:
  https://github.com/NixOS/nixpkgs/blob/nixos-25.11/nixos/doc/manual/development/writing-modules.chapter.md
[Option Definitions - NixOS]:
  https://github.com/NixOS/nixpkgs/blob/nixos-25.11/nixos/doc/manual/development/option-def.section.md
[Option Declarations - NixOS]:
  https://github.com/NixOS/nixpkgs/blob/nixos-25.11/nixos/doc/manual/development/option-declarations.section.md
[Options Types - NixOS]:
  https://github.com/NixOS/nixpkgs/blob/nixos-25.11/nixos/doc/manual/development/option-types.section.md
