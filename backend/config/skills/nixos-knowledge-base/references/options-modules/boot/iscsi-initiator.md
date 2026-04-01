---
module: boot.iscsi-initiator
option_count: 8
source: options.html
---

# boot.iscsi-initiator

## boot.iscsi-initiator.discoverPortal

iSCSI portal to boot from. Type: null or string Default: null Example: "192.168.1.1:3260" Declared by: <nixpkgs/nixos/modules/services/networking/iscsi/root-initiator.nix>

## boot.iscsi-initiator.extraConfig

Extra lines to append to /etc/iscsid.conf Type: null or strings concatenated with “\n” Default: null Declared by: <nixpkgs/nixos/modules/services/networking/iscsi/root-initiator.nix>

## boot.iscsi-initiator.extraConfigFile

Append an additional file’s contents to /etc/iscsid.conf. Use a non-store path and store passwords in this file. Note: the file specified here must be available in the initrd, see: boot.initrd.secrets. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/iscsi/root-initiator.nix>

## boot.iscsi-initiator.extraIscsiCommands

Extra iscsi commands to run in the initrd. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/iscsi/root-initiator.nix>

## boot.iscsi-initiator.logLevel

Higher numbers elicits more logs. Type: signed integer Default: 1 Example: 8 Declared by: <nixpkgs/nixos/modules/services/networking/iscsi/root-initiator.nix>

## boot.iscsi-initiator.loginAll

Do not log into a specific target on the portal, but to all that we discover. This overrides setting target. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/iscsi/root-initiator.nix>

## boot.iscsi-initiator.name

Name of the iSCSI initiator to boot from. Note, booting from iscsi requires networkd based networking. Type: null or string Default: null Example: "iqn.2020-08.org.linux-iscsi.initiatorhost:example" Declared by: <nixpkgs/nixos/modules/services/networking/iscsi/root-initiator.nix>

## boot.iscsi-initiator.target

Name of the iSCSI target to boot from. Type: null or string Default: null Example: "iqn.2020-08.org.linux-iscsi.targethost:example" Declared by: <nixpkgs/nixos/modules/services/networking/iscsi/root-initiator.nix>
