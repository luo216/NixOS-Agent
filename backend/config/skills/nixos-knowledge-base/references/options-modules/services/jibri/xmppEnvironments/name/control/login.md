---
module: services.jibri.xmppEnvironments.<name>.control.login
option_count: 3
source: options.html
---

# services.jibri.xmppEnvironments.<name>.control.login

## services.jibri.xmppEnvironments.<name>.control.login.domain

The domain part of the JID for this Jibri instance. Type: string Declared by: <nixpkgs/nixos/modules/services/networking/jibri/default.nix>

## services.jibri.xmppEnvironments.<name>.control.login.passwordFile

File containing the password for the user. Type: string Example: "/run/keys/jibri-xmpp1" Declared by: <nixpkgs/nixos/modules/services/networking/jibri/default.nix>

## services.jibri.xmppEnvironments.<name>.control.login.username

User part of the JID. Type: string Default: "jvb" Declared by: <nixpkgs/nixos/modules/services/networking/jibri/default.nix>
