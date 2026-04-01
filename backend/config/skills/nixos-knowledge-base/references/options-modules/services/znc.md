---
module: services.znc
option_count: 11
source: options.html
---

# services.znc

## services.znc.enable

Whether to enable ZNC. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/znc/default.nix>

## services.znc.config

Configuration for ZNC, see https://wiki.znc.in/Configuration for details. The Nix value declared here will be translated directly to the xml-like format ZNC expects. This is much more flexible than the legacy options under services.znc.confOptions.*, but also can’t do any type checking. You can use nix-instantiate --eval --strict '<nixpkgs/nixos>' -A config.services.znc.config to view the current value. By default it contains a listener for port 5000 with SSL enabled. Nix attributes called extraConfig will be inserted verbatim into the resulting config file. If services.znc.useLegacyConfig is turned on, the option values in services.znc.confOptions.* will be gracefully be applied to this option. If you intend to update the configuration through this option, be sure to disable services.znc.mutable, otherwise none of the changes here will be applied after the initial deploy. Type: attribute set of (znc values (null, atoms (str, int, bool), list of atoms, or attrsets of znc values)) Default: { } Example: { LoadModule = [ "webadmin" "adminlog" ]; User.paul = { Admin = true; Nick = "paul"; AltNick = "paul1"; LoadModule = [ "chansaver" "controlpanel" ]; Network.libera = { Server = "irc.libera.chat +6697"; LoadModule = [ "simple_away" ]; Chan = { "#nixos" = { Detached = false; }; "##linux" = { Disabled = true; }; }; }; Pass.password = { Method = "sha256"; Hash = "e2ce303c7ea75c571d80d8540a8699b46535be6a085be3414947d638e48d9e93"; Salt = "l5Xryew4g*!oa(ECfX2o"; }; }; } Declared by: <nixpkgs/nixos/modules/services/networking/znc/default.nix>

## services.znc.configFile

Configuration file for ZNC. It is recommended to use the config option instead. Setting this option will override any auto-generated config file through the confOptions or config options. Type: absolute path Example: ~/.znc/configs/znc.conf Declared by: <nixpkgs/nixos/modules/services/networking/znc/default.nix>

## services.znc.dataDir

The state directory for ZNC. The config and the modules will be linked to from this directory as well. Type: absolute path Default: "/var/lib/znc" Example: "/home/john/.znc" Declared by: <nixpkgs/nixos/modules/services/networking/znc/default.nix>

## services.znc.extraFlags

Extra arguments to use for executing znc. Type: list of string Default: [ ] Example: [ "--debug" ] Declared by: <nixpkgs/nixos/modules/services/networking/znc/default.nix>

## services.znc.group

Group to own the ZNC process. Type: string Default: "znc" Example: "users" Declared by: <nixpkgs/nixos/modules/services/networking/znc/default.nix>

## services.znc.modulePackages

A list of global znc module packages to add to znc. Type: list of package Default: [ ] Example: [ pkgs.zncModules.fish pkgs.zncModules.push ] Declared by: <nixpkgs/nixos/modules/services/networking/znc/default.nix>

## services.znc.mutable

Indicates whether to allow the contents of the dataDir directory to be changed by the user at run-time. If enabled, modifications to the ZNC configuration after its initial creation are not overwritten by a NixOS rebuild. If disabled, the ZNC configuration is rebuilt on every NixOS rebuild. If the user wants to manage the ZNC service using the web admin interface, this option should be enabled. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/znc/default.nix>

## services.znc.openFirewall

Whether to open ports in the firewall for ZNC. Does work with ports for listeners specified in services.znc.config.Listener. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/znc/default.nix>

## services.znc.useLegacyConfig

Whether to propagate the legacy options under services.znc.confOptions.* to the znc config. If this is turned on, the znc config will contain a user with the default name “znc”, global modules “webadmin” and “adminlog” will be enabled by default, and more, all controlled through the services.znc.confOptions.* options. You can use nix-instantiate --eval --strict '<nixpkgs/nixos>' -A config.services.znc.config to view the current value of the config. In any case, if you need more flexibility, services.znc.config can be used to override/add to all of the legacy options. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/znc/options.nix>

## services.znc.user

The name of an existing user account to use to own the ZNC server process. If not specified, a default user will be created. Type: string Default: "znc" Example: "john" Declared by: <nixpkgs/nixos/modules/services/networking/znc/default.nix>
