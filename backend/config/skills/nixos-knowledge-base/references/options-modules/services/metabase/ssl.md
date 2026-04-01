---
module: services.metabase.ssl
option_count: 3
source: options.html
---

# services.metabase.ssl

## services.metabase.ssl.enable

Whether to enable SSL (https) support. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/metabase.nix>

## services.metabase.ssl.keystore

Java KeyStore file containing the certificates. Type: null or absolute path Default: "/var/lib/metabase/metabase.jks" Example: "/etc/secrets/keystore.jks" Declared by: <nixpkgs/nixos/modules/services/misc/metabase.nix>

## services.metabase.ssl.port

Listen port over SSL (https) for Metabase. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8443 Declared by: <nixpkgs/nixos/modules/services/misc/metabase.nix>
