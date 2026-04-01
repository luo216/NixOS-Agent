---
module: services.r53-ddns
option_count: 7
source: options.html
---

# services.r53-ddns

## services.r53-ddns.enable

Whether to enable r53-ddyns. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/r53-ddns.nix>

## services.r53-ddns.domain

The name of your domain in Route53 Type: string Declared by: <nixpkgs/nixos/modules/services/networking/r53-ddns.nix>

## services.r53-ddns.environmentFile

File containing the AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in the format of an EnvironmentFile as described by systemd.exec(5) Type: string Declared by: <nixpkgs/nixos/modules/services/networking/r53-ddns.nix>

## services.r53-ddns.hostname

Manually specify the hostname. Otherwise the tool will try to use the name returned by the OS (Call to gethostname) Type: string Declared by: <nixpkgs/nixos/modules/services/networking/r53-ddns.nix>

## services.r53-ddns.interval

How often to update the entry Type: string Default: "15min" Declared by: <nixpkgs/nixos/modules/services/networking/r53-ddns.nix>

## services.r53-ddns.ttl

The TTL for the generated record Type: signed integer Declared by: <nixpkgs/nixos/modules/services/networking/r53-ddns.nix>

## services.r53-ddns.zoneID

The ID of your zone in Route53 Type: string Declared by: <nixpkgs/nixos/modules/services/networking/r53-ddns.nix>
