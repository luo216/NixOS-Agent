---
module: power.ups.upsmon.monitor.<name>
option_count: 5
source: options.html
---

# power.ups.upsmon.monitor.<name>

## power.ups.upsmon.monitor.<name>.passwordFile

The full path to a file containing the password from upsd.users for accessing this UPS. The password file is read on service start. See upsmon.conf for details. Type: string Default: power.ups.users.${user}.passwordFile Declared by: <nixpkgs/nixos/modules/services/monitoring/ups.nix>

## power.ups.upsmon.monitor.<name>.powerValue

Number of power supplies that the UPS feeds on this system. See upsmon.conf for details. Type: signed integer Default: 1 Declared by: <nixpkgs/nixos/modules/services/monitoring/ups.nix>

## power.ups.upsmon.monitor.<name>.system

Identifier of the UPS to monitor, in this form: <upsname>[@<hostname>[:<port>]] See upsmon.conf for details. Type: string Default: "‹name›" Declared by: <nixpkgs/nixos/modules/services/monitoring/ups.nix>

## power.ups.upsmon.monitor.<name>.type

The relationship with upsd. See upsmon.conf for details. Type: string Default: "master" Declared by: <nixpkgs/nixos/modules/services/monitoring/ups.nix>

## power.ups.upsmon.monitor.<name>.user

Username from upsd.users for accessing this UPS. See upsmon.conf for details. Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/ups.nix>
