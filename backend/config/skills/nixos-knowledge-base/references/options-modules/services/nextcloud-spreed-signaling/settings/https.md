---
module: services.nextcloud-spreed-signaling.settings.https
option_count: 3
source: options.html
---

# services.nextcloud-spreed-signaling.settings.https

## services.nextcloud-spreed-signaling.settings.https.certificate

Path to the certificate used for the HTTPS listener. Must be set if config.services.nextcloud-spreed-signaling.settings.https.listen is not null. Type: null or absolute path Default: null Example: "/etc/nginx/ssl/server.crt" Declared by: <nixpkgs/nixos/modules/services/networking/nextcloud-spreed-signaling.nix>

## services.nextcloud-spreed-signaling.settings.https.key

Path to the private key used for the HTTPS listener. Must be set if config.services.nextcloud-spreed-signaling.settings.https.listen is not null. Type: null or absolute path Default: null Example: "/etc/nginx/ssl/server.key" Declared by: <nixpkgs/nixos/modules/services/networking/nextcloud-spreed-signaling.nix>

## services.nextcloud-spreed-signaling.settings.https.listen

IP and port to listen on for HTTPS requests, in the format of ip:port. If set, must also specify config.services.nextcloud-spreed-signaling.settings.https.certificate and config.services.nextcloud-spreed-signaling.settings.https.key. If set to null, will not spawn a HTTPS listener at all. Type: null or string Default: null Example: "127.0.0.1:8443" Declared by: <nixpkgs/nixos/modules/services/networking/nextcloud-spreed-signaling.nix>
