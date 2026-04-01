---
module: programs.regreet
option_count: 5
source: options.html
---

# programs.regreet

## programs.regreet.enable

Enable ReGreet, a clean and customizable greeter for greetd. To use ReGreet, services.greetd has to be enabled and services.greetd.settings.default_session should contain the appropriate configuration to launch config.programs.regreet.package. For examples, see the ReGreet Readme. A minimal configuration that launches ReGreet in cage is enabled by this module by default. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/regreet.nix>

## programs.regreet.package

The regreet package to use. Type: package Default: pkgs.regreet Declared by: <nixpkgs/nixos/modules/programs/regreet.nix>

## programs.regreet.cageArgs

Additional arguments to be passed to cage. Type: list of string Default: [ "-s" ] Example: [ "-s" "-m" "last" ] Declared by: <nixpkgs/nixos/modules/programs/regreet.nix>

## programs.regreet.extraCss

Extra CSS rules to apply on top of the GTK theme. Refer to GTK CSS Properties for modifiable properties. Type: absolute path or strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/programs/regreet.nix>

## programs.regreet.settings

ReGreet configuration file. Refer https://github.com/rharish101/ReGreet/blob/main/regreet.sample.toml for options. Type: TOML value Default: { } Declared by: <nixpkgs/nixos/modules/programs/regreet.nix>
