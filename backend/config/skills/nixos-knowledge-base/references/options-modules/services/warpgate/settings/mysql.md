---
module: services.warpgate.settings.mysql
option_count: 5
source: options.html
---

# services.warpgate.settings.mysql

## services.warpgate.settings.mysql.enable

Whether to enable MySQL listener. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/warpgate.nix>

## services.warpgate.settings.mysql.certificate

Path to MySQL listener certificate. Type: string Default: "/var/lib/warpgate/tls.certificate.pem" Declared by: <nixpkgs/nixos/modules/services/security/warpgate.nix>

## services.warpgate.settings.mysql.external_port

The MySQL listener is reachable via this port externally. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/security/warpgate.nix>

## services.warpgate.settings.mysql.key

Path to MySQL listener private key. Type: string Default: "/var/lib/warpgate/tls.key.pem" Declared by: <nixpkgs/nixos/modules/services/security/warpgate.nix>

## services.warpgate.settings.mysql.listen

Listen endpoint of MySQL listener. Type: string Default: "[::]:33306" Declared by: <nixpkgs/nixos/modules/services/security/warpgate.nix>
