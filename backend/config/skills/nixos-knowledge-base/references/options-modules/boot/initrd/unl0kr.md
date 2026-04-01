---
module: boot.initrd.unl0kr
option_count: 4
source: options.html
---

# boot.initrd.unl0kr

## boot.initrd.unl0kr.enable

Whether to enable the unl0kr on-screen keyboard in initrd to unlock LUKS. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/system/boot/unl0kr.nix>

## boot.initrd.unl0kr.package

The buffybox package to use. Type: package Default: pkgs.buffybox Declared by: <nixpkgs/nixos/modules/system/boot/unl0kr.nix>

## boot.initrd.unl0kr.allowVendorDrivers

Whether to load additional drivers for certain vendors (I.E: Wacom, Intel, etc.) Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/system/boot/unl0kr.nix>

## boot.initrd.unl0kr.settings

Configuration for unl0kr. See unl0kr.conf(5) for supported values. Alternatively, visit https://gitlab.postmarketos.org/postmarketOS/buffybox/-/blob/3.2.0/unl0kr/unl0kr.conf Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Example: { general.animations = true; general.backend = "drm"; theme = { default = "pmos-dark"; alternate = "pmos-light"; }; } Declared by: <nixpkgs/nixos/modules/system/boot/unl0kr.nix>
