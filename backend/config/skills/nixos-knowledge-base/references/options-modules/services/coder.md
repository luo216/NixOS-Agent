---
module: services.coder
option_count: 10
source: options.html
---

# services.coder

## services.coder.enable

Whether to enable Coder service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/coder.nix>

## services.coder.package

The coder package to use. Type: package Default: pkgs.coder Declared by: <nixpkgs/nixos/modules/services/web-apps/coder.nix>

## services.coder.accessUrl

Access URL should be a external IP address or domain with DNS records pointing to Coder. Type: null or string Default: null Example: "https://coder.example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/coder.nix>

## services.coder.group

Group under which the coder service runs. Note If left as the default value this group will automatically be created on system activation, otherwise it needs to be configured manually. Type: string Default: "coder" Declared by: <nixpkgs/nixos/modules/services/web-apps/coder.nix>

## services.coder.homeDir

Home directory for coder user. Type: string Default: "/var/lib/coder" Declared by: <nixpkgs/nixos/modules/services/web-apps/coder.nix>

## services.coder.listenAddress

Listen address. Type: string Default: "127.0.0.1:3000" Declared by: <nixpkgs/nixos/modules/services/web-apps/coder.nix>

## services.coder.tlsCert

The path to the TLS certificate. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/coder.nix>

## services.coder.tlsKey

The path to the TLS key. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/coder.nix>

## services.coder.user

User under which the coder service runs. Note If left as the default value this user will automatically be created on system activation, otherwise it needs to be configured manually. Type: string Default: "coder" Declared by: <nixpkgs/nixos/modules/services/web-apps/coder.nix>

## services.coder.wildcardAccessUrl

If you are providing TLS certificates directly to the Coder server, you must use a single certificate for the root and wildcard domains. Type: null or string Default: null Example: "*.coder.example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/coder.nix>
