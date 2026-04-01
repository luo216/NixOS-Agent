## Custom build toolchain

Sometimes we may need to use a custom toolchain for building, such as using our own gcc,
or using our own musl libc, etc. This modification can be achieved through overlays.

For example, let's try to use a different version of gcc, and test it through `nix repl`:

```shell
› nix repl -f '<nixpkgs>'
Welcome to Nix 2.13.3. Type :? for help.

Loading installable ''...
Added 17755 variables.

# replace gcc through overlays, this will create a new instance of nixpkgs
nix-repl> a = import <nixpkgs> { crossSystem = "riscv64-linux"; overlays = [ (self: super: { gcc = self.gcc13; }) ]; }

# check the gcc version, it is indeed changed to 12.2
nix-repl> a.pkgsCross.riscv64.stdenv.cc
«derivation /nix/store/kdi3g7px1bxz2r1jmjnr4pahscw8jj96-riscv64-unknown-linux-gnu-gcc-wrapper-13.4.0.drv»

# take a look at the default pkgs, it is still 11.3
nix-repl> pkgs.pkgsCross.riscv64.stdenv.cc
«derivation /nix/store/xd8s47j71z3lym5f2j9zy3v9r0ifw209-riscv64-unknown-linux-gnu-gcc-wrapper-14.3.0.drv»
```

So how to use this method in Flakes? The example `flake.nix` is as follows:

```nix{20-21}
{
  description = "NixOS running on LicheePi 4A";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-25.11-small";
  };

  outputs = { self, nixpkgs, ... }:
  {
    nixosConfigurations.lp4a = nixpkgs.lib.nixosSystem {
      modules = [
        {
          # the platform that performs the build-step
          nixpkgs.buildPlatform.system = "x86_64-linux";

          # the platform that will execute the resulting binaries
          # add this to enable cross-compilation.
          nixpkgs.crossSystem.system = "riscv64-linux";

          # replace gcc with gcc13 through overlays
          nixpkgs.overlays = [ (self: super: { gcc = self.gcc13; }) ];
        }

        # other modules ......
      ];
    };
  };
}
```

`nixpkgs.overlays` is used to modify the `pkgs` instance globally, and the modified `pkgs`
instance will take effect to the whole flake. It will likely cause a large number of cache
missing, and thus require building a large number of Nix packages locally.

To avoid this problem, a better way is to create a new `pkgs` instance, and only use this
instance when building the packages we want to modify. The example `flake.nix` is as
follows:

```nix{10-17,32}
{
  description = "NixOS running on LicheePi 4A";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-25.11-small";
  };

  outputs = { self, nixpkgs, ... }: let
    # create a new pkgs instance with overlays
    pkgs-gcc13 = import nixpkgs {
      localSystem = "x86_64-linux";
      crossSystem = "riscv64-linux";

      overlays = [
        (self: super: { gcc = self.gcc13; })
      ];
    };
  in {
    nixosConfigurations.lp4a = nixpkgs.lib.nixosSystem {
      specialArgs = {
        # pass the new pkgs instance to the module
        inherit pkgs-gcc13;
      };
      modules = [
        {
          nixpkgs.buildPlatform.system = "x86_64-linux";
          nixpkgs.crossSystem.system = "riscv64-linux";
        }

        ({pkgs-gcc13, ...}: {
          # use the custom pkgs instance to build the package hello
          environment.systemPackages = [ pkgs-gcc13.hello ];
        })

        # other modules ......
      ];
    };
  };
}
```

Through the above method, we can easily customize the build toolchain of some packages
without affecting the build of other packages.

## References

- [Cross compilation - nix.dev](https://nix.dev/tutorials/cross-compilation)
