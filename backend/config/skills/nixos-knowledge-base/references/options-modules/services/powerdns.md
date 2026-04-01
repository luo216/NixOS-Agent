---
module: services.powerdns
option_count: 3
source: options.html
---

# services.powerdns

## services.powerdns.enable

Whether to enable PowerDNS domain name server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/powerdns.nix>

## services.powerdns.extraConfig

PowerDNS configuration. Refer to https://doc.powerdns.com/authoritative/settings.html for details on supported values. Type: strings concatenated with “\n” Default: "launch=bind" Declared by: <nixpkgs/nixos/modules/services/networking/powerdns.nix>

## services.powerdns.secretFile

Environment variables from this file will be interpolated into the final config file using envsubst with this syntax: $ENVIRONMENT or ${VARIABLE}. The file should contain lines formatted as SECRET_VAR=SECRET_VALUE. This is useful to avoid putting secrets into the nix store. Type: null or absolute path Default: null Example: "/run/keys/powerdns.env" Declared by: <nixpkgs/nixos/modules/services/networking/powerdns.nix>
