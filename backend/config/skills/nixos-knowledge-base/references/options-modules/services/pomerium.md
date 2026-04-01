---
module: services.pomerium
option_count: 5
source: options.html
---

# services.pomerium

## services.pomerium.enable

Whether to enable the Pomerium authenticating reverse proxy. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-servers/pomerium.nix>

## services.pomerium.configFile

Path to Pomerium config YAML. If set, overrides services.pomerium.settings. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-servers/pomerium.nix>

## services.pomerium.secretsFile

Path to file containing secrets for Pomerium, in systemd EnvironmentFile format. See the systemd.exec(5) man page. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-servers/pomerium.nix>

## services.pomerium.settings

The contents of Pomerium’s config.yaml, in Nix expressions. Specifying configFile will override this in its entirety. See the Pomerium configuration reference for more information about what to put here. Type: YAML 1.1 value Default: { } Declared by: <nixpkgs/nixos/modules/services/web-servers/pomerium.nix>

## services.pomerium.useACMEHost

If set, use a NixOS-generated ACME certificate with the specified name. Note that this will require you to use a non-HTTP-based challenge, or disable Pomerium’s in-built HTTP redirect server by setting http_redirect_addr to null and use a different HTTP server for serving the challenge response. If you’re using an HTTP-based challenge, you should use the Pomerium-native autocert option instead. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-servers/pomerium.nix>
