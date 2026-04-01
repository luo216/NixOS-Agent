---
module: services.nats
option_count: 9
source: options.html
---

# services.nats

## services.nats.enable

Whether to enable NATS messaging system. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/nats.nix>

## services.nats.dataDir

The NATS data directory. Only used if JetStream is enabled, for storing stream metadata and messages. If left as the default value this directory will automatically be created before the NATS server starts, otherwise the sysadmin is responsible for ensuring the directory exists with appropriate ownership and permissions. Type: absolute path Default: "/var/lib/nats" Declared by: <nixpkgs/nixos/modules/services/networking/nats.nix>

## services.nats.group

Group under which NATS runs. Type: string Default: "nats" Declared by: <nixpkgs/nixos/modules/services/networking/nats.nix>

## services.nats.jetstream

Whether to enable JetStream. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/nats.nix>

## services.nats.port

Port on which to listen. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 4222 Declared by: <nixpkgs/nixos/modules/services/networking/nats.nix>

## services.nats.serverName

Name of the NATS server, must be unique if clustered. Type: string Default: "nats" Example: "n1-c3" Declared by: <nixpkgs/nixos/modules/services/networking/nats.nix>

## services.nats.settings

Declarative NATS configuration. See the NATS documentation for a list of options. Type: JSON value Default: { } Example: { jetstream = { max_mem = "1G"; max_file = "10G"; }; }; Declared by: <nixpkgs/nixos/modules/services/networking/nats.nix>

## services.nats.user

User account under which NATS runs. Type: string Default: "nats" Declared by: <nixpkgs/nixos/modules/services/networking/nats.nix>

## services.nats.validateConfig

If true, validate nats config at build time. When the config can’t be checked during build time, for example when it includes other files, disable this option. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/nats.nix>
