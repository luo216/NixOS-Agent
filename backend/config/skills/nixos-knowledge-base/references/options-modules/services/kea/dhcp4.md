---
module: services.kea.dhcp4
option_count: 4
source: options.html
---

# services.kea.dhcp4

## services.kea.dhcp4.enable

Whether to enable Kea DHCP4 server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/kea.nix>

## services.kea.dhcp4.configFile

Kea DHCP4 configuration as a path, see https://kea.readthedocs.io/en/kea-3.0.2/arm/dhcp4-srv.html. Takes preference over settings. Most users should prefer using settings instead. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/kea.nix>

## services.kea.dhcp4.extraArgs

List of additional arguments to pass to the daemon. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/kea.nix>

## services.kea.dhcp4.settings

Kea DHCP4 configuration as an attribute set, see https://kea.readthedocs.io/en/kea-3.0.2/arm/dhcp4-srv.html. Type: JSON value Default: null Example: { interfaces-config = { interfaces = [ "eth0" ]; }; lease-database = { name = "/var/lib/kea/dhcp4.leases"; persist = true; type = "memfile"; }; rebind-timer = 2000; renew-timer = 1000; subnet4 = [ { id = 1; pools = [ { pool = "192.0.2.100 - 192.0.2.240"; } ]; subnet = "192.0.2.0/24"; } ]; valid-lifetime = 4000; } Declared by: <nixpkgs/nixos/modules/services/networking/kea.nix>
