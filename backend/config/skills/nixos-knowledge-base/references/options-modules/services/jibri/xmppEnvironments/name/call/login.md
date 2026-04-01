---
module: services.jibri.xmppEnvironments.<name>.call.login
option_count: 3
source: options.html
---

# services.jibri.xmppEnvironments.<name>.call.login

## services.jibri.xmppEnvironments.<name>.call.login.domain

The domain part of the JID for the recorder. Type: string Example: "recorder.xmpp.example.org" Declared by: <nixpkgs/nixos/modules/services/networking/jibri/default.nix>

## services.jibri.xmppEnvironments.<name>.call.login.passwordFile

File containing the password for the user. Type: string Example: "/run/keys/jibri-recorder-xmpp1" Declared by: <nixpkgs/nixos/modules/services/networking/jibri/default.nix>

## services.jibri.xmppEnvironments.<name>.call.login.username

User part of the JID for the recorder. Type: string Default: "recorder" Declared by: <nixpkgs/nixos/modules/services/networking/jibri/default.nix>
