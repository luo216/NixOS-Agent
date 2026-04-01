---
module: services.nextcloud-spreed-signaling.settings.clients
option_count: 1
source: options.html
---

# services.nextcloud-spreed-signaling.settings.clients

## services.nextcloud-spreed-signaling.settings.clients.internalsecretFile

The path to the file containing the value for clients.internalsecret. Shared secret for connections from internal clients. This must be the same value as configured in the respective internal services. Type: absolute path Example: "/run/secrets/clients.internalsecret" Declared by: <nixpkgs/nixos/modules/services/networking/nextcloud-spreed-signaling.nix>
