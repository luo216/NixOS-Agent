---
module: services.dex
option_count: 4
source: options.html
---

# services.dex

## services.dex.enable

Whether to enable the OpenID Connect and OAuth2 identity provider. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/dex.nix>

## services.dex.package

The dex-oidc package to use. Type: package Default: pkgs.dex-oidc Declared by: <nixpkgs/nixos/modules/services/web-apps/dex.nix>

## services.dex.environmentFile

Environment file (see systemd.exec(5) “EnvironmentFile=” section for the syntax) to define variables for dex. This option can be used to safely include secret keys into the dex configuration. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/dex.nix>

## services.dex.settings

The available options can be found in the example configuration. It’s also possible to refer to environment variables (defined in services.dex.environmentFile) using the syntax $VARIABLE_NAME. Type: YAML 1.1 value Default: { } Example: { # External url issuer = "http://127.0.0.1:5556/dex"; storage = { type = "postgres"; config.host = "/var/run/postgres"; }; web = { http = "127.0.0.1:5556"; }; enablePasswordDB = true; staticClients = [ { id = "oidcclient"; name = "Client"; redirectURIs = [ "https://example.com/callback" ]; secretFile = "/etc/dex/oidcclient"; # The content of `secretFile` will be written into to the config as `secret`. } ]; } Declared by: <nixpkgs/nixos/modules/services/web-apps/dex.nix>
