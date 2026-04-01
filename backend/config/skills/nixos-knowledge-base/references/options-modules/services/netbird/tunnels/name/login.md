---
module: services.netbird.tunnels.<name>.login
option_count: 3
source: options.html
---

# services.netbird.tunnels.<name>.login

## services.netbird.tunnels.<name>.login.enable

Whether to enable automated login for NetBird client. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/netbird.nix>

## services.netbird.tunnels.<name>.login.setupKeyFile

A Setup Key file path used for automated login of the machine. Type: null or string Default: null Example: "/run/secrets/netbird-priv/setup-key" Declared by: <nixpkgs/nixos/modules/services/networking/netbird.nix>

## services.netbird.tunnels.<name>.login.systemdDependencies

Additional systemd dependencies required to succeed before the Setup Key file becomes available. Type: list of string Default: [ ] Example: [ "sops-install-secrets.service" ] Declared by: <nixpkgs/nixos/modules/services/networking/netbird.nix>
