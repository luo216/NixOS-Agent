---
module: services.tsidp
option_count: 3
source: options.html
---

# services.tsidp

## services.tsidp.enable

Whether to enable tsidp server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/tsidp.nix>

## services.tsidp.package

The tsidp package to use. Type: package Default: pkgs.tsidp Declared by: <nixpkgs/nixos/modules/services/security/tsidp.nix>

## services.tsidp.environmentFile

Path to an environment file loaded for the tsidp service. This can be used to securely store tokens and secrets outside of the world-readable Nix store. Example contents of the file: TS_AUTH_KEY=YOUR_TAILSCALE_AUTHKEY Type: null or absolute path Default: null Example: "/run/secrets/tsidp" Declared by: <nixpkgs/nixos/modules/services/security/tsidp.nix>
