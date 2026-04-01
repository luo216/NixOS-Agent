---
module: services.freeswitch
option_count: 5
source: options.html
---

# services.freeswitch

## services.freeswitch.enable

Whether to enable FreeSWITCH. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/freeswitch.nix>

## services.freeswitch.enableReload

Issue the reloadxml command to FreeSWITCH when configuration directory changes (instead of restart). See FreeSWITCH documentation for more info. The configuration directory is exposed at /etc/freeswitch. See also systemd.services.*.restartIfChanged. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/freeswitch.nix>

## services.freeswitch.package

The freeswitch package to use. Type: package Default: pkgs.freeswitch Declared by: <nixpkgs/nixos/modules/services/misc/freeswitch.nix>

## services.freeswitch.configDir

Override file in FreeSWITCH config template directory. Each top-level attribute denotes a file path in the configuration directory, its value is the file path. See FreeSWITCH documentation for more info. Also check available templates in FreeSWITCH repository. Type: attribute set of absolute path Default: { } Example: { "freeswitch.xml" = ./freeswitch.xml; "dialplan/default.xml" = pkgs.writeText "dialplan-default.xml" '' [xml lines] ''; } Declared by: <nixpkgs/nixos/modules/services/misc/freeswitch.nix>

## services.freeswitch.configTemplate

Configuration template to use. See available templates in FreeSWITCH repository. You can also set your own configuration directory. Type: absolute path Default: "${config.services.freeswitch.package}/share/freeswitch/conf/vanilla" Example: "${config.services.freeswitch.package}/share/freeswitch/conf/minimal" Declared by: <nixpkgs/nixos/modules/services/misc/freeswitch.nix>
