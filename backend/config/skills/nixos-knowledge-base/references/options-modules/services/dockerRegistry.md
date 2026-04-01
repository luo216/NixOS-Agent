---
module: services.dockerRegistry
option_count: 14
source: options.html
---

# services.dockerRegistry

## services.dockerRegistry.enable

Whether to enable Docker Registry. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/docker-registry.nix>

## services.dockerRegistry.enableDelete

Enable delete for manifests and blobs. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/docker-registry.nix>

## services.dockerRegistry.enableGarbageCollect

Whether to enable garbage collect. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/docker-registry.nix>

## services.dockerRegistry.enableRedisCache

Whether to enable redis as blob cache. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/docker-registry.nix>

## services.dockerRegistry.package

The distribution package to use. Type: package Default: pkgs.distribution Example: gitlab-container-registry Declared by: <nixpkgs/nixos/modules/services/misc/docker-registry.nix>

## services.dockerRegistry.configFile

Path to CNCF distribution config file. Setting this option will override any configuration applied by the extraConfig option. Type: absolute path Default: pkgs.writeText "docker-registry-config.yml" "# my custom docker-registry-config.yml ..." Declared by: <nixpkgs/nixos/modules/services/misc/docker-registry.nix>

## services.dockerRegistry.extraConfig

Docker extra registry configuration. Type: attribute set Default: { } Example: { log.level = "debug"; } Declared by: <nixpkgs/nixos/modules/services/misc/docker-registry.nix>

## services.dockerRegistry.garbageCollectDates

Specification (in the format described by systemd.time(7)) of the time at which the garbage collect will occur. Type: string Default: "daily" Declared by: <nixpkgs/nixos/modules/services/misc/docker-registry.nix>

## services.dockerRegistry.listenAddress

Docker registry host or ip to bind to. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/misc/docker-registry.nix>

## services.dockerRegistry.openFirewall

Opens the port used by the firewall. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/docker-registry.nix>

## services.dockerRegistry.port

Docker registry port to bind to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5000 Declared by: <nixpkgs/nixos/modules/services/misc/docker-registry.nix>

## services.dockerRegistry.redisPassword

Set redis password. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/misc/docker-registry.nix>

## services.dockerRegistry.redisUrl

Set redis host and port. Type: string Default: "localhost:6379" Declared by: <nixpkgs/nixos/modules/services/misc/docker-registry.nix>

## services.dockerRegistry.storagePath

Docker registry storage path for the filesystem storage backend. Set to null to configure another backend via extraConfig. Type: null or absolute path Default: "/var/lib/docker-registry" Declared by: <nixpkgs/nixos/modules/services/misc/docker-registry.nix>
