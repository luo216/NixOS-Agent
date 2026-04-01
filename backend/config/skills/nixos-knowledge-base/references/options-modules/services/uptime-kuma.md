---
module: services.uptime-kuma
option_count: 4
source: options.html
---

# services.uptime-kuma

## services.uptime-kuma.enable

Whether to enable Uptime Kuma, this assumes a reverse proxy to be set. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/uptime-kuma.nix>

## services.uptime-kuma.package

The uptime-kuma package to use. Type: package Default: pkgs.uptime-kuma Declared by: <nixpkgs/nixos/modules/services/monitoring/uptime-kuma.nix>

## services.uptime-kuma.appriseSupport

Whether to enable apprise support for notifications. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/uptime-kuma.nix>

## services.uptime-kuma.settings

Additional configuration for Uptime Kuma, see https://github.com/louislam/uptime-kuma/wiki/Environment-Variables for supported values. Type: open submodule of attribute set of string Default: { } Example: { NODE_EXTRA_CA_CERTS = { _type = "literalExpression"; text = "config.security.pki.caBundle"; }; PORT = "4000"; } Declared by: <nixpkgs/nixos/modules/services/monitoring/uptime-kuma.nix>
