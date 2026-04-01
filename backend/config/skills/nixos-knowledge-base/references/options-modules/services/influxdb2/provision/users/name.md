---
module: services.influxdb2.provision.users.<name>
option_count: 2
source: options.html
---

# services.influxdb2.provision.users.<name>

## services.influxdb2.provision.users.<name>.passwordFile

Password for the user. If unset, the user will not be able to log in until a password is set by an operator! Don’t use a file from the nix store! Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/databases/influxdb2.nix>

## services.influxdb2.provision.users.<name>.present

Whether to ensure that this user is present or absent. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/databases/influxdb2.nix>
