---
module: services.nixops-dns
option_count: 4
source: options.html
---

# services.nixops-dns

## services.nixops-dns.enable

Whether to enable the nixops-dns resolution of NixOps virtual machines via dnsmasq and fake domain name. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/nixops-dns.nix>

## services.nixops-dns.dnsmasq

Enable dnsmasq forwarding to nixops-dns. This allows to use nixops-dns for services.nixops-dns.domain resolution while forwarding the rest of the queries to original resolvers. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/nixops-dns.nix>

## services.nixops-dns.domain

Fake domain name to resolve to NixOps virtual machines. For example “ops” will resolve “vm.ops”. Type: string Default: "ops" Declared by: <nixpkgs/nixos/modules/services/networking/nixops-dns.nix>

## services.nixops-dns.user

The user the nixops-dns daemon should run as. This should be the user, which is also used for nixops and have the .nixops directory in its home. Type: string Declared by: <nixpkgs/nixos/modules/services/networking/nixops-dns.nix>
