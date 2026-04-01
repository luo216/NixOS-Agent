---
module: services.prosody-filer
option_count: 2
source: options.html
---

# services.prosody-filer

## services.prosody-filer.enable

Whether to enable Prosody Filer XMPP upload file server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/prosody-filer.nix>

## services.prosody-filer.settings

Configuration for Prosody Filer. Refer to https://github.com/ThomasLeister/prosody-filer#configure-prosody-filer for details on supported values. Type: TOML value Default: { listenport = mkDefault "127.0.0.1:5050"; uploadSubDir = mkDefault "upload/"; } Example: { secret = "mysecret"; storeDir = "/srv/http/nginx/prosody-upload"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/prosody-filer.nix>
