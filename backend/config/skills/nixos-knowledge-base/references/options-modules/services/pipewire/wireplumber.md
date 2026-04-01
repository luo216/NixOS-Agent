---
module: services.pipewire.wireplumber
option_count: 6
source: options.html
---

# services.pipewire.wireplumber

## services.pipewire.wireplumber.enable

Whether to enable WirePlumber, a modular session / policy manager for PipeWire Type: boolean Default: config.services.pipewire.enable Declared by: <nixpkgs/nixos/modules/services/desktops/pipewire/wireplumber.nix>

## services.pipewire.wireplumber.package

The WirePlumber derivation to use. Type: package Default: pkgs.wireplumber Declared by: <nixpkgs/nixos/modules/services/desktops/pipewire/wireplumber.nix>

## services.pipewire.wireplumber.configPackages

List of packages that provide WirePlumber configuration, in the form of share/wireplumber/*/*.conf files. LV2 dependencies will be picked up from config packages automatically via passthru.requiredLv2Packages. Type: list of package Default: [ ] Example: [ (pkgs.writeTextDir "share/wireplumber/wireplumber.conf.d/10-bluez.conf" '' monitor.bluez.properties = { bluez5.roles = [ a2dp_sink a2dp_source bap_sink bap_source hsp_hs hsp_ag hfp_hf hfp_ag ] bluez5.codecs = [ sbc sbc_xq aac ] bluez5.enable-sbc-xq = true bluez5.hfphsp-backend = "native" } '') ] Declared by: <nixpkgs/nixos/modules/services/desktops/pipewire/wireplumber.nix>

## services.pipewire.wireplumber.extraConfig

Additional configuration for the WirePlumber daemon when run in single-instance mode (the default in nixpkgs and currently the only supported way to run WirePlumber configured via extraConfig). See also: The configuration file Modifying configuration Locations of files and the configuration section of the docs in general Note that WirePlumber (and PipeWire) use dotted attribute names like device.product.id. These are not nested, but flat objects for WirePlumber/PipeWire, so to write these in nix expressions, remember to quote them like "device.product.id". Have a look at the example for this. Type: attribute set of attribute set of (JSON value) Default: { } Example: { "log-level-debug" = { "context.properties" = { # Output Debug log messages as opposed to only the default level (Notice) "log.level" = "D"; }; }; "wh-1000xm3-ldac-hq" = { "monitor.bluez.rules" = [ { matches = [ { # Match any bluetooth device with ids equal to that of a WH-1000XM3 "device.name" = "~bluez_card.*"; "device.product.id" = "0x0cd3"; "device.vendor.id" = "usb:054c"; } ]; actions = { update-props = { # Set quality to high quality instead of the default of auto "bluez5.a2dp.ldac.quality" = "hq"; }; }; } ]; }; } Declared by: <nixpkgs/nixos/modules/services/desktops/pipewire/wireplumber.nix>

## services.pipewire.wireplumber.extraLv2Packages

List of packages that provide LV2 plugins in lib/lv2 that should be made available to WirePlumber for filter chains. Config packages have their required LV2 plugins added automatically, so they don’t need to be specified here. Config packages need to set passthru.requiredLv2Packages for this to work. Type: list of package Default: [ ] Example: [ pkgs.lsp-plugins ] Declared by: <nixpkgs/nixos/modules/services/desktops/pipewire/wireplumber.nix>

## services.pipewire.wireplumber.extraScripts

Additional scripts for WirePlumber to be used by configuration files. Every item in this attrset becomes a separate lua file with the path relative to the scripts directory specified in the name of the item. The scripts get passed to the WirePlumber service via the XDG_DATA_DIRS variable. Scripts specified here are preferred over those shipped with WirePlumber if they occupy the same relative path. For a script to be loaded, it needs to be specified as part of a component, and that component needs to be required by an active profile (e.g. main). Components can be defined in config files either via extraConfig or configPackages. For the hello-world example, you’d have to add the following extraConfig: services.pipewire.wireplumber.extraConfig."99-hello-world" = { "wireplumber.components" = [ { name = "test/hello-world.lua"; type = "script/lua"; provides = "custom.hello-world"; } ]; "wireplumber.profiles" = { main = { "custom.hello-world" = "required"; }; }; }; See also: Location of scripts Components & Profiles Migration - Loading custom scripts Type: attribute set of strings concatenated with “\n” Default: { } Example: { "test/hello-world.lua" = '' print("Hello, world!") ''; } Declared by: <nixpkgs/nixos/modules/services/desktops/pipewire/wireplumber.nix>
