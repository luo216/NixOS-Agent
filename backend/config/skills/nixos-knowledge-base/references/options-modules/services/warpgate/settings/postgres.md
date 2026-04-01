---
module: services.warpgate.settings.postgres
option_count: 5
source: options.html
---

# services.warpgate.settings.postgres

## services.warpgate.settings.postgres.enable

Whether to enable PostgreSQL listener. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/warpgate.nix>

## services.warpgate.settings.postgres.certificate

Path to PostgreSQL listener certificate. Type: string Default: "/var/lib/warpgate/tls.certificate.pem" Declared by: <nixpkgs/nixos/modules/services/security/warpgate.nix>

## services.warpgate.settings.postgres.external_port

The PostgreSQL listener is reachable via this port externally. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/security/warpgate.nix>

## services.warpgate.settings.postgres.key

Path to PostgreSQL listener private key. Type: string Default: "/var/lib/warpgate/tls.key.pem" Declared by: <nixpkgs/nixos/modules/services/security/warpgate.nix>

## services.warpgate.settings.postgres.listen

Listen endpoint of PostgreSQL listener. Type: string Default: "[::]:55432" Declared by: <nixpkgs/nixos/modules/services/security/warpgate.nix>
