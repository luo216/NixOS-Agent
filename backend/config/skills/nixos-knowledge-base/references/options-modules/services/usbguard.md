---
module: services.usbguard
option_count: 12
source: options.html
---

# services.usbguard

## services.usbguard.enable

Whether to enable USBGuard daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/usbguard.nix>

## services.usbguard.package

The usbguard package to use. Type: package Default: pkgs.usbguard Declared by: <nixpkgs/nixos/modules/services/security/usbguard.nix>

## services.usbguard.IPCAllowedGroups

A list of groupnames that the daemon will accept IPC connections from. Type: list of string Default: [ ] Example: [ "wheel" ] Declared by: <nixpkgs/nixos/modules/services/security/usbguard.nix>

## services.usbguard.IPCAllowedUsers

A list of usernames that the daemon will accept IPC connections from. Type: list of string Default: [ "root" ] Example: [ "root" "yourusername" ] Declared by: <nixpkgs/nixos/modules/services/security/usbguard.nix>

## services.usbguard.deviceRulesWithPort

Generate device specific rules including the “via-port” attribute. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/usbguard.nix>

## services.usbguard.implicitPolicyTarget

How to treat USB devices that don’t match any rule in the policy. Target should be one of allow, block or reject (logically remove the device node from the system). Type: one of “allow”, “block”, “reject” Default: "block" Declared by: <nixpkgs/nixos/modules/services/security/usbguard.nix>

## services.usbguard.insertedDevicePolicy

How to treat USB devices that are already connected after the daemon starts. One of block, reject, apply-policy. Type: one of “block”, “reject”, “apply-policy” Default: "apply-policy" Declared by: <nixpkgs/nixos/modules/services/security/usbguard.nix>

## services.usbguard.presentControllerPolicy

How to treat USB controller devices that are already connected when the daemon starts. One of allow, block, reject, keep or apply-policy. Type: one of “allow”, “block”, “reject”, “keep”, “apply-policy” Default: "keep" Declared by: <nixpkgs/nixos/modules/services/security/usbguard.nix>

## services.usbguard.presentDevicePolicy

How to treat USB devices that are already connected when the daemon starts. Policy should be one of allow, block, reject, keep (keep whatever state the device is currently in) or apply-policy (evaluate the rule set for every present device). Type: one of “allow”, “block”, “reject”, “keep”, “apply-policy” Default: "apply-policy" Declared by: <nixpkgs/nixos/modules/services/security/usbguard.nix>

## services.usbguard.restoreControllerDeviceState

The USBGuard daemon modifies some attributes of controller devices like the default authorization state of new child device instances. Using this setting, you can control whether the daemon will try to restore the attribute values to the state before modification on shutdown. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/usbguard.nix>

## services.usbguard.ruleFile

This tells the USBGuard daemon which file to load as policy rule set. The file can be changed manually or via the IPC interface assuming it has the right file permissions. For more details see usbguard-rules.conf(5). Type: null or absolute path Default: "/var/lib/usbguard/rules.conf" Example: "/run/secrets/usbguard-rules" Declared by: <nixpkgs/nixos/modules/services/security/usbguard.nix>

## services.usbguard.rules

The USBGuard daemon will load this as the policy rule set. As these rules are NixOS managed they are immutable and can’t be changed by the IPC interface. If you do not set this option, the USBGuard daemon will load it’s policy rule set from the option configured in services.usbguard.ruleFile. Running usbguard generate-policy as root will generate a config for your currently plugged in devices. For more details see usbguard-rules.conf(5). Type: null or strings concatenated with “\n” Default: null Example: '' allow with-interface equals { 08:*:* } '' Declared by: <nixpkgs/nixos/modules/services/security/usbguard.nix>
