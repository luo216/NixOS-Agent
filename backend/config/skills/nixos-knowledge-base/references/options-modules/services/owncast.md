---
module: services.owncast
option_count: 8
source: options.html
---

# services.owncast

## services.owncast.enable

Whether to enable owncast, a video live streaming solution. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/owncast.nix>

## services.owncast.dataDir

The directory where owncast stores its data files. If left as the default value this directory will automatically be created before the owncast server starts, otherwise the sysadmin is responsible for ensuring the directory exists with appropriate ownership and permissions. Type: string Default: "/var/lib/owncast" Declared by: <nixpkgs/nixos/modules/services/misc/owncast.nix>

## services.owncast.group

Group under which owncast runs. Type: string Default: "owncast" Declared by: <nixpkgs/nixos/modules/services/misc/owncast.nix>

## services.owncast.listen

The IP address to bind the owncast web server to. Type: string Default: "127.0.0.1" Example: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/misc/owncast.nix>

## services.owncast.openFirewall

Open the appropriate ports in the firewall for owncast. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/owncast.nix>

## services.owncast.port

TCP port where owncast web-gui listens. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Declared by: <nixpkgs/nixos/modules/services/misc/owncast.nix>

## services.owncast.rtmp-port

TCP port where owncast rtmp service listens. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 1935 Declared by: <nixpkgs/nixos/modules/services/misc/owncast.nix>

## services.owncast.user

User account under which owncast runs. Type: string Default: "owncast" Declared by: <nixpkgs/nixos/modules/services/misc/owncast.nix>
