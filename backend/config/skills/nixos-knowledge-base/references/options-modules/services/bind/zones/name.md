---
module: services.bind.zones.<name>
option_count: 7
source: options.html
---

# services.bind.zones.<name>

## services.bind.zones.<name>.allowQuery

List of address ranges allowed to query this zone. Instead of the address(es), this may instead contain the single string “any”. Type: list of string Default: [ "any" ] Declared by: <nixpkgs/nixos/modules/services/networking/bind.nix>

## services.bind.zones.<name>.extraConfig

Extra zone config to be appended at the end of the zone section. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/bind.nix>

## services.bind.zones.<name>.file

Zone file resource records contain columns of data, separated by whitespace, that define the record. Type: string or absolute path Declared by: <nixpkgs/nixos/modules/services/networking/bind.nix>

## services.bind.zones.<name>.master

Master=false means slave server Type: boolean Declared by: <nixpkgs/nixos/modules/services/networking/bind.nix>

## services.bind.zones.<name>.masters

List of servers for inclusion in stub and secondary zones. Type: list of string Declared by: <nixpkgs/nixos/modules/services/networking/bind.nix>

## services.bind.zones.<name>.name

Name of the zone. Type: string Default: "‹name›" Declared by: <nixpkgs/nixos/modules/services/networking/bind.nix>

## services.bind.zones.<name>.slaves

Addresses who may request zone transfers. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/bind.nix>
