---
module: services.buffyboard
option_count: 5
source: options.html
---

# services.buffyboard

## services.buffyboard.enable

Whether to enable buffyboard framebuffer keyboard (on-screen keyboard). Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/buffyboard.nix>

## services.buffyboard.package

The buffybox package to use. Type: package Default: pkgs.buffybox Declared by: <nixpkgs/nixos/modules/services/hardware/buffyboard.nix>

## services.buffyboard.configFile

Path to an INI format configuration file to provide Buffyboard. By default, this is generated from whatever you’ve set in settings. If specified manually, then settings is ignored. For an example config file see here Type: absolute path Default: ini.generate "buffyboard.conf" cfg.settings Declared by: <nixpkgs/nixos/modules/services/hardware/buffyboard.nix>

## services.buffyboard.extraFlags

Extra CLI arguments to pass to buffyboard. Type: list of string Default: [ ] Example: [ "--geometry=1920x1080@640,0" "--dpi=192" "--rotate=2" "--verbose" ] Declared by: <nixpkgs/nixos/modules/services/hardware/buffyboard.nix>

## services.buffyboard.settings

Settings to include in /etc/buffyboard.conf. Every option here is strictly optional: Buffyboard will use its own baked-in defaults for those options left unset. Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Declared by: <nixpkgs/nixos/modules/services/hardware/buffyboard.nix>
