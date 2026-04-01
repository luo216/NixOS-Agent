---
module: services.nextcloud-spreed-signaling.settings.backend
option_count: 4
source: options.html
---

# services.nextcloud-spreed-signaling.settings.backend

## services.nextcloud-spreed-signaling.settings.backend.allowall

Allow any hostname as backend endpoint. This is insecure and not advised. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/nextcloud-spreed-signaling.nix>

## services.nextcloud-spreed-signaling.settings.backend.backendtype

Type of backend configuration. Defaults to “static”. Possible values: static: A comma-separated list of backends is given in the “backends” option (derived from config.services.nextcloud-spreed-signaling.backends) etcd: Backends are retrieved from an etcd cluster. Type: one of “static”, “etcd” Default: "static" Declared by: <nixpkgs/nixos/modules/services/networking/nextcloud-spreed-signaling.nix>

## services.nextcloud-spreed-signaling.settings.backend.connectionsperhost

Maximum number of concurrent backend connections per host Type: positive integer, meaning >0 Default: 8 Example: 12 Declared by: <nixpkgs/nixos/modules/services/networking/nextcloud-spreed-signaling.nix>

## services.nextcloud-spreed-signaling.settings.backend.timeout

Timeout in seconds for requests to the backend Type: positive integer, meaning >0 Default: 10 Example: 30 Declared by: <nixpkgs/nixos/modules/services/networking/nextcloud-spreed-signaling.nix>
