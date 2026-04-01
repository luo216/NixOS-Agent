---
module: services.kea.dhcp6
option_count: 4
source: options.html
---

# services.kea.dhcp6

## services.kea.dhcp6.enable

Whether to enable Kea DHCP6 server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/kea.nix>

## services.kea.dhcp6.configFile

Kea DHCP6 configuration as a path, see https://kea.readthedocs.io/en/kea-3.0.2/arm/dhcp6-srv.html. Takes preference over settings. Most users should prefer using settings instead. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/kea.nix>

## services.kea.dhcp6.extraArgs

List of additional arguments to pass to the daemon. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/kea.nix>

## services.kea.dhcp6.settings

Kea DHCP6 configuration as an attribute set, see https://kea.readthedocs.io/en/kea-3.0.2/arm/dhcp6-srv.html. Type: JSON value Default: null Example: { interfaces-config = { interfaces = [ "eth0" ]; }; lease-database = { name = "/var/lib/kea/dhcp6.leases"; persist = true; type = "memfile"; }; preferred-lifetime = 3000; rebind-timer = 2000; renew-timer = 1000; subnet6 = [ { id = 1; pools = [ { pool = "2001:db8:1::1-2001:db8:1::ffff"; } ]; subnet = "2001:db8:1::/64"; } ]; valid-lifetime = 4000; } Declared by: <nixpkgs/nixos/modules/services/networking/kea.nix>
