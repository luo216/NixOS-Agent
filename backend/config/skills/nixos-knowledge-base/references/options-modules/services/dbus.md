---
module: services.dbus
option_count: 5
source: options.html
---

# services.dbus

## services.dbus.packages

Packages whose D-Bus configuration files should be included in the configuration of the D-Bus system-wide or session-wide message bus. Specifically, files in the following directories will be included into their respective DBus configuration paths: «pkg»/etc/dbus-1/system.d «pkg»/share/dbus-1/system.d «pkg»/share/dbus-1/system-services «pkg»/etc/dbus-1/session.d «pkg»/share/dbus-1/session.d «pkg»/share/dbus-1/services Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/system/dbus.nix>

## services.dbus.apparmor

AppArmor mode for dbus. enabled enables mediation when it’s supported in the kernel, disabled always disables AppArmor even with kernel support, and required fails when AppArmor was not found in the kernel. Type: one of “enabled”, “disabled”, “required” Default: "disabled" Declared by: <nixpkgs/nixos/modules/services/system/dbus.nix>

## services.dbus.brokerPackage

The dbus-broker package to use. Type: package Default: pkgs.dbus-broker Declared by: <nixpkgs/nixos/modules/services/system/dbus.nix>

## services.dbus.dbusPackage

The dbus package to use. Type: package Default: pkgs.dbus Declared by: <nixpkgs/nixos/modules/services/system/dbus.nix>

## services.dbus.implementation

The implementation to use for the message bus defined by the D-Bus specification. Can be either the classic dbus daemon or dbus-broker, which aims to provide high performance and reliability, while keeping compatibility to the D-Bus reference implementation. Type: one of “dbus”, “broker” Default: "dbus" Declared by: <nixpkgs/nixos/modules/services/system/dbus.nix>
