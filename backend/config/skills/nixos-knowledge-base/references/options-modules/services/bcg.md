---
module: services.bcg
option_count: 14
source: options.html
---

# services.bcg

## services.bcg.enable

Whether to enable BigClown gateway. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/bcg.nix>

## services.bcg.package

The bcg package to use. Type: package Default: pkgs.python3Packages.bcg Declared by: <nixpkgs/nixos/modules/services/misc/bcg.nix>

## services.bcg.automaticRemoveKitFromNames

Automatically remove kits. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/misc/bcg.nix>

## services.bcg.automaticRenameGenericNodes

Automatically rename generic nodes. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/misc/bcg.nix>

## services.bcg.automaticRenameKitNodes

Automatically rename kit’s nodes. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/misc/bcg.nix>

## services.bcg.automaticRenameNodes

Automatically rename all nodes. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/misc/bcg.nix>

## services.bcg.baseTopicPrefix

Topic prefix added to all MQTT messages. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/misc/bcg.nix>

## services.bcg.device

Device name to configure gateway to use. Type: string Declared by: <nixpkgs/nixos/modules/services/misc/bcg.nix>

## services.bcg.environmentFiles

File to load as environment file. Environment variables from this file will be interpolated into the config file using envsubst with this syntax: $ENVIRONMENT or ${VARIABLE}. This is useful to avoid putting secrets into the nix store. Type: list of absolute path Default: [ ] Example: [ "/run/keys/bcg.env" ] Declared by: <nixpkgs/nixos/modules/services/misc/bcg.nix>

## services.bcg.name

Name for the device. Supported variables: {ip} IP address {id} The ID of the connected usb-dongle or core-module null can be used for automatic detection from gateway firmware. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/misc/bcg.nix>

## services.bcg.qosNodeMessages

Set the guarantee of MQTT message delivery. Type: signed integer Default: 1 Declared by: <nixpkgs/nixos/modules/services/misc/bcg.nix>

## services.bcg.rename

Rename nodes to different name. Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/services/misc/bcg.nix>

## services.bcg.retainNodeMessages

Specify that node messages should be retaied in MQTT broker. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/bcg.nix>

## services.bcg.verbose

Verbosity level. Type: one of “CRITICAL”, “ERROR”, “WARNING”, “INFO”, “DEBUG” Default: "WARNING" Declared by: <nixpkgs/nixos/modules/services/misc/bcg.nix>
