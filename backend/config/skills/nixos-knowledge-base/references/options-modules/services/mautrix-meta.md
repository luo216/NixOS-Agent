---
module: services.mautrix-meta
option_count: 2
source: options.html
---

# services.mautrix-meta

## services.mautrix-meta.package

The mautrix-meta package to use. Type: package Default: pkgs.mautrix-meta Declared by: <nixpkgs/nixos/modules/services/matrix/mautrix-meta.nix>

## services.mautrix-meta.instances

Configuration of multiple mautrix-meta instances. services.mautrix-meta.instances.facebook and services.mautrix-meta.instances.instagram come preconfigured with network.mode, appservice.id, bot username, display name and avatar. Type: attribute set of (submodule) Example: '' { facebook = { enable = true; settings = { homeserver.domain = "example.com"; }; }; instagram = { enable = true; settings = { homeserver.domain = "example.com"; }; }; messenger = { enable = true; settings = { network.mode = "messenger"; homeserver.domain = "example.com"; appservice = { id = "messenger"; bot = { username = "messengerbot"; displayname = "Messenger bridge bot"; avatar = "mxc://maunium.net/ygtkteZsXnGJLJHRchUwYWak"; }; }; }; }; } '' Declared by: <nixpkgs/nixos/modules/services/matrix/mautrix-meta.nix>
