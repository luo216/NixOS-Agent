---
module: services.sharkey.settings
option_count: 6
source: options.html
---

# services.sharkey.settings

## services.sharkey.settings.address

The address that Sharkey binds to. Type: string Default: "0.0.0.0" Example: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/web-apps/sharkey.nix>

## services.sharkey.settings.id

The ID generation method for Sharkey to use. Do NOT change this after initial setup! Type: one of “aid”, “aidx”, “meid”, “ulid”, “objectid” Default: "aidx" Declared by: <nixpkgs/nixos/modules/services/web-apps/sharkey.nix>

## services.sharkey.settings.mediaDirectory

Path to the folder where Sharkey stores uploaded media such as images and attachments. Type: absolute path Default: "/var/lib/sharkey" Declared by: <nixpkgs/nixos/modules/services/web-apps/sharkey.nix>

## services.sharkey.settings.port

The port that Sharkey will listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3000 Declared by: <nixpkgs/nixos/modules/services/web-apps/sharkey.nix>

## services.sharkey.settings.socket

If specified, creates a UNIX socket at the given path that Sharkey listens on. Type: null or absolute path Default: null Example: "/run/sharkey/sharkey.sock" Declared by: <nixpkgs/nixos/modules/services/web-apps/sharkey.nix>

## services.sharkey.settings.url

The full URL that the Sharkey instance will be publically accessible on. Do NOT change this after initial setup! Type: string Example: "https://blahaj.social/" Declared by: <nixpkgs/nixos/modules/services/web-apps/sharkey.nix>
