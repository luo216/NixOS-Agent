---
module: services.litestream
option_count: 4
source: options.html
---

# services.litestream

## services.litestream.enable

Whether to enable litestream. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/litestream/default.nix>

## services.litestream.package

The litestream package to use. Type: package Default: pkgs.litestream Declared by: <nixpkgs/nixos/modules/services/network-filesystems/litestream/default.nix>

## services.litestream.environmentFile

Environment file as defined in systemd.exec(5). Secrets may be passed to the service without adding them to the world-readable Nix store, by specifying placeholder variables as the option value in Nix and setting these variables accordingly in the environment file. By default, Litestream will perform environment variable expansion within the config file before reading it. Any references to $VAR or ${VAR} formatted variables will be replaced with their environment variable values. If no value is set then it will be replaced with an empty string. # Content of the environment file LITESTREAM_ACCESS_KEY_ID=AKIAxxxxxxxxxxxxxxxx LITESTREAM_SECRET_ACCESS_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx/xxxxxxxxx Note that this file needs to be available on the host on which this exporter is running. Type: null or absolute path Default: null Example: "/run/secrets/litestream" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/litestream/default.nix>

## services.litestream.settings

See the documentation. Type: YAML 1.1 value Example: { dbs = [ { path = "/var/lib/db1"; replicas = [ { url = "s3://mybkt.litestream.io/db1"; } ]; } ]; } Declared by: <nixpkgs/nixos/modules/services/network-filesystems/litestream/default.nix>
