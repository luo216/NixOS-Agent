---
module: services.nextcloud-spreed-signaling.settings.http
option_count: 1
source: options.html
---

# services.nextcloud-spreed-signaling.settings.http

## services.nextcloud-spreed-signaling.settings.http.listen

IP and port to listen on for HTTP requests, in the format of ip:port. If set to null, will not spawn a HTTP listener at all. Type: null or string Default: null Example: "127.0.0.1:8080" Declared by: <nixpkgs/nixos/modules/services/networking/nextcloud-spreed-signaling.nix>
