---
module: services.openbao
option_count: 4
source: options.html
---

# services.openbao

## services.openbao.enable

Whether to enable OpenBao daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/openbao.nix>

## services.openbao.package

The openbao package to use. Type: package Default: pkgs.openbao Example: pkgs.openbao.override { withHsm = false; withUi = false; } Declared by: <nixpkgs/nixos/modules/services/security/openbao.nix>

## services.openbao.extraArgs

Additional arguments given to OpenBao. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/security/openbao.nix>

## services.openbao.settings

Settings of OpenBao. See documentation for more details. Type: open submodule of (JSON value) Example: { ui = true; listener.default = { type = "tcp"; tls_acme_email = config.security.acme.defaults.email; tls_acme_domains = [ "example.com" ]; tls_acme_disable_http_challenge = true; }; cluster_addr = "http://127.0.0.1:8201"; api_addr = "https://example.com"; storage.raft.path = "/var/lib/openbao"; } Declared by: <nixpkgs/nixos/modules/services/security/openbao.nix>
