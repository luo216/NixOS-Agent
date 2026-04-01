---
module: services.firewalld
option_count: 7
source: options.html
---

# services.firewalld

## services.firewalld.enable

Whether to enable FirewallD. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/firewalld>

## services.firewalld.package

The firewalld package to use. Type: package Default: pkgs.firewalld Declared by: <nixpkgs/nixos/modules/services/networking/firewalld>

## services.firewalld.packages

Packages providing firewalld zones and other files. Files found in /lib/firewalld will be included. Type: list of package Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/firewalld>

## services.firewalld.extraArgs

Extra arguments to pass to FirewallD. Type: list of string Default: [ ] Example: [ "--debug" ] Declared by: <nixpkgs/nixos/modules/services/networking/firewalld>

## services.firewalld.services

firewalld service configuration files. See firewalld.service(5). Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/service.nix>

## services.firewalld.settings

FirewallD config file. See firewalld.conf(5). Type: open submodule of attribute set of (atom (null, bool, int, float or string)) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/settings.nix>

## services.firewalld.zones

firewalld zone configuration files. See firewalld.zone(5). Type: attribute set of (submodule) Default: { } Example: { dmz = { forward = true; services = [ "ssh" ]; }; external = { forward = true; masquerade = true; services = [ "ssh" ]; }; home = { forward = true; services = [ "ssh" "mdns" "samba-client" "dhcpv6-client" ]; }; internal = { forward = true; services = [ "ssh" "mdns" "samba-client" "dhcpv6-client" ]; }; public = { forward = true; services = [ "ssh" "dhcpv6-client" ]; }; work = { forward = true; services = [ "ssh" "dhcpv6-client" ]; }; } Declared by: <nixpkgs/nixos/modules/services/networking/firewalld/zone.nix>
