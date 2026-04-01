---
module: power.ups.ups.<name>
option_count: 7
source: options.html
---

# power.ups.ups.<name>

## power.ups.ups.<name>.description

Description of the UPS. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/monitoring/ups.nix>

## power.ups.ups.<name>.directives

List of configuration directives for this UPS. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/ups.nix>

## power.ups.ups.<name>.driver

Specify the program to run to talk to this UPS. apcsmart, bestups, and sec are some examples. Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/ups.nix>

## power.ups.ups.<name>.maxStartDelay

This can be set as a global variable above your first UPS definition and it can also be set in a UPS section. This value controls how long upsdrvctl will wait for the driver to finish starting. This keeps your system from getting stuck due to a broken driver or UPS. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/ups.nix>

## power.ups.ups.<name>.port

The serial port to which your UPS is connected. /dev/ttyS0 is usually the first port on Linux boxes, for example. Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/ups.nix>

## power.ups.ups.<name>.shutdownOrder

When you have multiple UPSes on your system, you usually need to turn them off in a certain order. upsdrvctl shuts down all the 0s, then the 1s, 2s, and so on. To exclude a UPS from the shutdown sequence, set this to -1. Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/services/monitoring/ups.nix>

## power.ups.ups.<name>.summary

Lines which would be added inside ups.conf for handling this UPS. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/monitoring/ups.nix>
