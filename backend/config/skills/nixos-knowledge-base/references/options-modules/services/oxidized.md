---
module: services.oxidized
option_count: 7
source: options.html
---

# services.oxidized

## services.oxidized.enable

Whether to enable the oxidized configuration backup service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/admin/oxidized.nix>

## services.oxidized.package

The oxidized package to use. Type: package Default: pkgs.oxidized Declared by: <nixpkgs/nixos/modules/services/admin/oxidized.nix>

## services.oxidized.configFile

Path to the oxidized configuration file. Type: null or absolute path Example: pkgs.writeText "oxidized-config.yml" '' --- debug: true use_syslog: true input: default: ssh ssh: secure: true interval: 3600 model_map: dell: powerconnect hp: procurve source: default: csv csv: delimiter: !ruby/regexp /:/ file: "/var/lib/oxidized/.config/oxidized/router.db" map: name: 0 model: 1 username: 2 password: 3 pid: "/var/lib/oxidized/.config/oxidized/pid" rest: 127.0.0.1:8888 retries: 3 # ... additional config ''; Declared by: <nixpkgs/nixos/modules/services/admin/oxidized.nix>

## services.oxidized.dataDir

State directory for the oxidized service. Type: absolute path Default: "/var/lib/oxidized" Declared by: <nixpkgs/nixos/modules/services/admin/oxidized.nix>

## services.oxidized.group

Group under which the oxidized service runs. Type: string Default: "oxidized" Declared by: <nixpkgs/nixos/modules/services/admin/oxidized.nix>

## services.oxidized.routerDB

Path to the file/database which contains the targets for oxidized. Type: null or absolute path Default: null Example: pkgs.writeText "oxidized-router.db" '' hostname-sw1:powerconnect:username1:password2 hostname-sw2:procurve:username2:password2 # ... additional hosts '' Declared by: <nixpkgs/nixos/modules/services/admin/oxidized.nix>

## services.oxidized.user

User under which the oxidized service runs. Type: string Default: "oxidized" Declared by: <nixpkgs/nixos/modules/services/admin/oxidized.nix>
