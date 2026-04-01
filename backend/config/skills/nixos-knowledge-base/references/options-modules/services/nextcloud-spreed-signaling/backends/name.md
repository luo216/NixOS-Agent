---
module: services.nextcloud-spreed-signaling.backends.<name>
option_count: 2
source: options.html
---

# services.nextcloud-spreed-signaling.backends.<name>

## services.nextcloud-spreed-signaling.backends.<name>.secretFile

The path to the file containing the value for backends.<name>.secret. Shared secret for requests from and to the backend servers. This must be the same value as configured in the Nextloud Talk admin UI. Type: absolute path Example: "/run/secrets/backends.<name>.secret" Declared by: <nixpkgs/nixos/modules/services/networking/nextcloud-spreed-signaling.nix>

## services.nextcloud-spreed-signaling.backends.<name>.urls

List of URLs of the Nextcloud instance Type: list of string Declared by: <nixpkgs/nixos/modules/services/networking/nextcloud-spreed-signaling.nix>
