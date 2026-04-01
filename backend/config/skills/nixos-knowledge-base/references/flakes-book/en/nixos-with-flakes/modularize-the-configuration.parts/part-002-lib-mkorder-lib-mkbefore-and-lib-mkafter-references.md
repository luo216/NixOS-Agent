## `lib.mkOrder`, `lib.mkBefore`, and `lib.mkAfter`

In addition to `lib.mkDefault` and `lib.mkForce`, there are also `lib.mkBefore` and
`lib.mkAfter`, which are used to set the merge order of **list-type options**. These
functions further contribute to the modularization of the configuration.

> I haven't found the official documentation for list-type options, but I simply
> understand that they are types whose merge results are related to the order of merging.
> According to this understanding, both `list` and `string` types are list-type options,
> and these functions can indeed be used on these two types in practice.

As mentioned earlier, when you define multiple values with the same **override priority**,
Nix will throw an error. However, by using `lib.mkOrder`, `lib.mkBefore`, or
`lib.mkAfter`, you can define multiple values with the same override priority, and they
will be merged in the order you specify.

To examine the source code of `lib.mkBefore`, you can run `nix repl -f '<nixpkgs>'` and
then enter `:e lib.mkBefore`. To learn more about `nix repl`, type `:?` for the help
information:

```nix
  # ......

  mkOrder = priority: content:
    { _type = "order";
      inherit priority content;
    };

  mkBefore = mkOrder 500;
  defaultOrderPriority = 1000;
  mkAfter = mkOrder 1500;

  # ......
```

Therefore, `lib.mkBefore` is a shorthand for `lib.mkOrder 500`, and `lib.mkAfter` is a
shorthand for `lib.mkOrder 1500`.

To test the usage of `lib.mkBefore` and `lib.mkAfter`, let's create a simple Flake
project:

```nix{8-36}
# flake.nix
{
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.11";
  outputs = {nixpkgs, ...}: {
    nixosConfigurations = {
      "my-nixos" = nixpkgs.lib.nixosSystem {
        modules = [
          ({lib, ...}: {
            programs.bash.shellInit = lib.mkBefore ''
              echo 'insert before default'
            '';
            programs.zsh.shellInit = lib.mkBefore "echo 'insert before default';";
            nix.settings.substituters = lib.mkBefore [
              "https://nix-community.cachix.org"
            ];
          })

          ({lib, ...}: {
            programs.bash.shellInit = lib.mkAfter ''
              echo 'insert after default'
            '';
            programs.zsh.shellInit = lib.mkAfter "echo 'insert after default';";
            nix.settings.substituters = lib.mkAfter [
              "https://ryan4yin.cachix.org"
            ];
          })

          ({lib, ...}: {
            programs.bash.shellInit = ''
              echo 'this is default'
            '';
            programs.zsh.shellInit = "echo 'this is default';";
            nix.settings.substituters = [
              "https://nix-community.cachix.org"
            ];
          })
        ];
      };
    };
  };
}
```

The flake above contains the usage of `lib.mkBefore` and `lib.mkAfter` on multiline
strings, single-line strings, and lists. Let's test the results:

```bash
# Example 1: multiline string merging
› echo $(nix eval .#nixosConfigurations.my-nixos.config.programs.bash.shellInit)
trace: warning: system.stateVersion is not set, defaulting to 25.11. Read why this matters on https://nixos.org/manual/nixos/stable/options.html#opt-system.stateVersio
n.
"echo 'insert before default'

echo 'this is default'

if [ -z \"$__NIXOS_SET_ENVIRONMENT_DONE\" ]; then
 . /nix/store/60882lm9znqdmbssxqsd5bgnb7gybaf2-set-environment
fi



echo 'insert after default'
"

# example 2: single-line string merging
› echo $(nix eval .#nixosConfigurations.my-nixos.config.programs.zsh.shellInit)
"echo 'insert before default';
echo 'this is default';
echo 'insert after default';"

# Example 3: list merging
› nix eval .#nixosConfigurations.my-nixos.config.nix.settings.substituters
[ "https://nix-community.cachix.org" "https://nix-community.cachix.org" "https://cache.nixos.org/" "https://ryan4yin.cachix.org" ]

```

As you can see, `lib.mkBefore` and `lib.mkAfter` can define the order of merging of
multiline strings, single-line strings, and lists. The order of merging is the same as the
order of definition.

> For a deeper introduction to the module system, see
> [Module System & Custom Options](../other-usage-of-flakes/module-system.md).

## References

- [Nix modules: Improving Nix's discoverability and usability](https://cfp.nixcon.org/nixcon2020/talk/K89WJY/)
- [Module System - Nixpkgs](https://github.com/NixOS/nixpkgs/blob/nixos-25.11/doc/module-system/module-system.chapter.md)
