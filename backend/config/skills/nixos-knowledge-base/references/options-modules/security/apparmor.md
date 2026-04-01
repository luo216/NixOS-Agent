---
module: security.apparmor
option_count: 6
source: options.html
---

# security.apparmor

## security.apparmor.enable

Whether to enable the AppArmor Mandatory Access Control system. If you’re enabling this module on a running system, note that a reboot will be required to activate AppArmor in the kernel. Also, beware that enabling this module privileges stability over security by not trying to kill unconfined but newly confinable running processes by default, though it would be needed because AppArmor can only confine new or already confined processes of an executable. This killing would for instance be necessary when upgrading to a NixOS revision introducing for the first time an AppArmor profile for the executable of a running process. Enable security.apparmor.killUnconfinedConfinables if you want this service to do such killing by sending a SIGTERM to those running processes. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/security/apparmor.nix>

## security.apparmor.enableCache

Whether to enable caching of AppArmor policies in /var/cache/apparmor/. Beware that AppArmor policies almost always contain Nix store paths, and thus produce at each change of these paths a new cached version accumulating in the cache. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/security/apparmor.nix>

## security.apparmor.packages

List of packages to be added to AppArmor’s include path Type: list of package Default: [ ] Declared by: <nixpkgs/nixos/modules/security/apparmor.nix>

## security.apparmor.includes

List of paths to be added to AppArmor’s searched paths when resolving include directives. Type: attribute set of strings concatenated with “\n” Default: { } Declared by: <nixpkgs/nixos/modules/security/apparmor.nix>

## security.apparmor.killUnconfinedConfinables

Whether to enable killing of processes which have an AppArmor profile enabled (in security.apparmor.policies) but are not confined (because AppArmor can only confine new processes). This is only sending a gracious SIGTERM signal to the processes, not a SIGKILL. Beware that due to a current limitation of AppArmor, only profiles with exact paths (and no name) can enable such kills. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/security/apparmor.nix>

## security.apparmor.policies

AppArmor policies. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/security/apparmor.nix>
