---
module: services.ncdns.dnssec
option_count: 1
source: options.html
---

# services.ncdns.dnssec

## services.ncdns.dnssec.enable

Whether to enable DNSSEC support in ncdns. This will generate KSK and ZSK keypairs (unless provided via the options services.ncdns.dnssec.publicKey, services.ncdns.dnssec.privateKey etc.) and add a trust anchor to recursive resolvers . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/ncdns.nix>
