---
module: services.openiscsi
option_count: 7
source: options.html
---

# services.openiscsi

## services.openiscsi.enable

Whether to enable the openiscsi iscsi daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/iscsi/initiator.nix>

## services.openiscsi.enableAutoLoginOut

Whether to enable automatic login and logout of all automatic targets. You probably do not want this . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/iscsi/initiator.nix>

## services.openiscsi.package

The openiscsi package to use. Type: package Default: pkgs.openiscsi Declared by: <nixpkgs/nixos/modules/services/networking/iscsi/initiator.nix>

## services.openiscsi.discoverPortal

Portal to discover targets on Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/iscsi/initiator.nix>

## services.openiscsi.extraConfig

Lines to append to default iscsid.conf Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/iscsi/initiator.nix>

## services.openiscsi.extraConfigFile

Append an additional file’s contents to /etc/iscsid.conf. Use a non-store path and store passwords in this file. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/iscsi/initiator.nix>

## services.openiscsi.name

Name of this iscsi initiator Type: string Example: "iqn.2020-08.org.linux-iscsi.initiatorhost:example" Declared by: <nixpkgs/nixos/modules/services/networking/iscsi/initiator.nix>
