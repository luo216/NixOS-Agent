---
module: services.mailman.serve
option_count: 3
source: options.html
---

# services.mailman.serve

## services.mailman.serve.enable

Whether to enable automatic nginx and uwsgi setup for mailman-web. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/mail/mailman.nix>

## services.mailman.serve.uwsgiSettings

Extra configuration to merge into uwsgi config. Type: JSON value Default: { } Example: { uwsgi = { buffer-size = 8192; }; } Declared by: <nixpkgs/nixos/modules/services/mail/mailman.nix>

## services.mailman.serve.virtualRoot

Path to mount the mailman-web django application on. Type: string Default: "/" Example: /lists Declared by: <nixpkgs/nixos/modules/services/mail/mailman.nix>
