---
module: services.icecast
option_count: 6
source: options.html
---

# services.icecast

## services.icecast.enable

Whether to enable Icecast server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/audio/icecast.nix>

## services.icecast.extraConf

icecast.xml content. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/audio/icecast.nix>

## services.icecast.group

Group privileges for the server. Type: string Default: "nogroup" Declared by: <nixpkgs/nixos/modules/services/audio/icecast.nix>

## services.icecast.hostname

DNS name or IP address that will be used for the stream directory lookups or possibly the playlist generation if a Host header is not provided. Type: null or string Default: config.networking.domain Declared by: <nixpkgs/nixos/modules/services/audio/icecast.nix>

## services.icecast.logDir

Base directory used for logging. Type: absolute path Default: "/var/log/icecast" Declared by: <nixpkgs/nixos/modules/services/audio/icecast.nix>

## services.icecast.user

User privileges for the server. Type: string Default: "nobody" Declared by: <nixpkgs/nixos/modules/services/audio/icecast.nix>
