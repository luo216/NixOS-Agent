---
module: services.zitadel.settings.TLS
option_count: 4
source: options.html
---

# services.zitadel.settings.TLS

## services.zitadel.settings.TLS.Cert

The TLS certificate, as a base64-encoded string. Note that the contents of this option will be added to the Nix store as world-readable plain text. Set CertPath instead if this is undesired. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/zitadel.nix>

## services.zitadel.settings.TLS.CertPath

Path to the TLS certificate. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/zitadel.nix>

## services.zitadel.settings.TLS.Key

The TLS certificate private key, as a base64-encoded string. Note that the contents of this option will be added to the Nix store as world-readable plain text. Set KeyPath instead if this is undesired. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/zitadel.nix>

## services.zitadel.settings.TLS.KeyPath

Path to the TLS certificate private key. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/zitadel.nix>
