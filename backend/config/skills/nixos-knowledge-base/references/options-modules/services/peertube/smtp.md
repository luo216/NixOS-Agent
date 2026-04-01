---
module: services.peertube.smtp
option_count: 2
source: options.html
---

# services.peertube.smtp

## services.peertube.smtp.createLocally

Configure local Postfix SMTP server for PeerTube. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/peertube.nix>

## services.peertube.smtp.passwordFile

Password for smtp server. Type: null or absolute path Default: null Example: "/run/keys/peertube/password-smtp" Declared by: <nixpkgs/nixos/modules/services/web-apps/peertube.nix>
