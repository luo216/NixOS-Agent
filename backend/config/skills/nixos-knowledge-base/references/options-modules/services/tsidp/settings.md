---
module: services.tsidp.settings
option_count: 9
source: options.html
---

# services.tsidp.settings

## services.tsidp.settings.enableFunnel

Use Tailscale Funnel to make tsidp available on the public internet so it works with SaaS products. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/tsidp.nix>

## services.tsidp.settings.enableSts

Enable OAuth token exchange using RFC 8693. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/security/tsidp.nix>

## services.tsidp.settings.debugAllRequests

For development. Prints all requests and responses. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/tsidp.nix>

## services.tsidp.settings.debugTsnet

For development. Enables debug level logging with tsnet connection. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/tsidp.nix>

## services.tsidp.settings.hostName

The hostname to use for the tsnet node. Type: string Default: "idp" Declared by: <nixpkgs/nixos/modules/services/security/tsidp.nix>

## services.tsidp.settings.localPort

Listen on localhost:<port>. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/security/tsidp.nix>

## services.tsidp.settings.logLevel

Set logging level: debug, info, warn, error. Type: one of “debug”, “info”, “warn”, “error” Default: "info" Declared by: <nixpkgs/nixos/modules/services/security/tsidp.nix>

## services.tsidp.settings.port

Port to listen on (default: 443). Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 443 Declared by: <nixpkgs/nixos/modules/services/security/tsidp.nix>

## services.tsidp.settings.useLocalTailscaled

Use local tailscaled instead of tsnet. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/tsidp.nix>
