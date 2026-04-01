---
module: services.nextcloud-spreed-signaling.settings.grpc
option_count: 2
source: options.html
---

# services.nextcloud-spreed-signaling.settings.grpc

## services.nextcloud-spreed-signaling.settings.grpc.listen

IP and port to listen on for GRPC requests. Leave null to disable the listener. Type: null or string Default: null Example: "127.0.0.1:9090" Declared by: <nixpkgs/nixos/modules/services/networking/nextcloud-spreed-signaling.nix>

## services.nextcloud-spreed-signaling.settings.grpc.targets

For target type static: List of GRPC targets to connect to for clustering mode. Type: list of string Default: [ ] Example: [ "192.168.0.1:9090" ] Declared by: <nixpkgs/nixos/modules/services/networking/nextcloud-spreed-signaling.nix>
