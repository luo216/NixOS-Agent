---
module: services.ncdns.identity
option_count: 3
source: options.html
---

# services.ncdns.identity

## services.ncdns.identity.address

The IP address the hostname specified in services.ncdns.identity.hostname should resolve to. If you are only using ncdns locally you can ignore this. Type: string Default: "127.127.127.127" Declared by: <nixpkgs/nixos/modules/services/networking/ncdns.nix>

## services.ncdns.identity.hostmaster

An email address for the SOA record at the bit zone. If you are only using ncdns locally you can ignore this. Type: string Default: "" Example: "root@example.com" Declared by: <nixpkgs/nixos/modules/services/networking/ncdns.nix>

## services.ncdns.identity.hostname

The hostname of this ncdns instance, which defaults to the machine hostname. If specified, ncdns lists the hostname as an NS record at the zone apex: bit. IN NS ns1.example.com. If unset ncdns will generate an internal pseudo-hostname under the zone, which will resolve to the value of services.ncdns.identity.address. If you are only using ncdns locally you can ignore this. Type: string Default: config.networking.hostName Example: "example.com" Declared by: <nixpkgs/nixos/modules/services/networking/ncdns.nix>
