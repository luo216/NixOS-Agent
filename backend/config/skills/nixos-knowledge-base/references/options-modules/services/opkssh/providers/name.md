---
module: services.opkssh.providers.<name>
option_count: 3
source: options.html
---

# services.opkssh.providers.<name>

## services.opkssh.providers.<name>.clientId

OAuth client ID Type: string Declared by: <nixpkgs/nixos/modules/services/networking/opkssh/opkssh.nix>

## services.opkssh.providers.<name>.issuer

Issuer URI Type: string Example: "https://accounts.google.com" Declared by: <nixpkgs/nixos/modules/services/networking/opkssh/opkssh.nix>

## services.opkssh.providers.<name>.lifetime

Token lifetime Type: one of “12h”, “24h”, “48h”, “1week”, “oidc”, “oidc-refreshed” Default: "24h" Declared by: <nixpkgs/nixos/modules/services/networking/opkssh/opkssh.nix>
