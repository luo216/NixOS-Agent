## Option Declaration and Type Checking

While assignment is the most commonly used feature of the module system, if you need to
customize some `options`, you also need to delve into option declaration and type
checking. I find this part relatively straightforward; it's much simpler than assignment,
and you can understand the basics by directly referring to the official documentation. I
won't go into detail here.

- [Option Declarations - NixOS]
- [Options Types - NixOS]

## Passing Non-default Parameters to the Module System

We have already introduced how to use `specialArgs` and `_module.args` to pass additional
parameters to other Modules functions in
[Managing Your NixOS with Flakes](../nixos-with-flakes/nixos-with-flakes-enabled.md#pass-non-default-parameters-to-submodules).
No further elaboration is needed here.

## How to Selectively Import Modules {#selectively-import-modules}

In the examples above, we have introduced how to enable or disable certain features
through custom options. However, our code implementations are all within the same Nix
file. If our modules are scattered across different files, how can we achieve selective
import?

Let's first look at some common incorrect usage patterns, and then introduce the correct
way to do it.

### Incorrect Usage #1 - Using `imports` in `config = { ... };` {#wrong-usage-1}

The first thought might be to directly use `imports` in `config = { ... };`, like this:

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
              # Using imports in config will cause an error
              imports = [
                {warnings = ["foo"];}
                # ...omit other module or file paths
              ];
            };
          })
        ];
      };
    };
  };
}
```

But this won't work. You can try save the above `flake.nix` in a new directory, and then
run `nix eval .#nixosConfigurations.test.config.warnings` in it, some error like
`error: The option 'imports' does not exist.` will be encountered.

This is because `config` is a regular attribute set, while `imports` is a special
parameter of the module system. There is no such definition as `config.imports`.

### Correct Usage #1 - Define Individual `options` for All Modules That Require Conditional Import {#correct-usage-1}

This is the most recommended method. Modules in NixOS systems are implemented in this way,
and searching for `enable` in <https://search.nixos.org/options> will show a large number
of system modules that can be enabled or disabled through the `enable` option.

The specific writing method has been introduced in the previous
[Basic Structure and Usage](#basic-structure-and-usage) section and will not be repeated
here.

The disadvantage of this method is that all Nix modules that require conditional import
need to be modified, moving all configuration declarations in the module to the
`config = { ... };` code block, increasing code complexity and being less friendly to
beginners.

### Correct Usage #2 - Use `lib.optionals` in `imports = [];` {#correct-usage-2}

The main advantage of this method is that it is much simpler than the methods previously
introduced, requiring no modification to the module content, just using `lib.optionals` in
`imports` to decide whether to import a module or not.

> Details about how `lib.optionals` works: <https://noogle.dev/f/lib/optionals>

Let's look at an example directly:

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
                 # Other Modules
              ]
              # Use lib.optionals to decide whether to import foo.nix
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

Save the two Nix files above in a folder, and then run
`nix eval .#nixosConfigurations.test.config.warnings` in the folder, and the operation is
normal:

```bash
› nix eval .#nixosConfigurations.test.config.warnings
[ "foo" ]
```

One thing to note here is that **you cannot use parameters passed by `_module.args` in
`imports =[ ... ];`**. We have already provided a detailed explanation in the previous
section
[Passing Non-default Parameters to Submodules](../nixos-with-flakes/nixos-flake-and-module-system#pass-non-default-parameters-to-submodules).

## References

- [Best resources for learning about the NixOS module system? - Discourse](https://discourse.nixos.org/t/best-resources-for-learning-about-the-nixos-module-system/1177/4)
- [NixOS modules - NixOS Wiki](https://wiki.nixos.org/wiki/NixOS_modules)
- [NixOS: config argument - NixOS Wiki](https://wiki.nixos.org/wiki/NixOS:config_argument)
- [Module System - Nixpkgs]
- [Writing NixOS Modules - Nixpkgs]

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
