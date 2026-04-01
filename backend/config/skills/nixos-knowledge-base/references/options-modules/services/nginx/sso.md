---
module: services.nginx.sso
option_count: 3
source: options.html
---

# services.nginx.sso

## services.nginx.sso.enable

Whether to enable nginx-sso service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/nginx-sso.nix>

## services.nginx.sso.package

The nginx-sso package to use. Type: package Default: pkgs.nginx-sso Declared by: <nixpkgs/nixos/modules/services/security/nginx-sso.nix>

## services.nginx.sso.configuration

nginx-sso configuration (documentation) as a Nix attribute set. Options containing secret data should be set to an attribute set with the singleton attribute _secret - a string value set to the path to the file containing the secret value which should be used in the configuration. Type: YAML 1.1 value Default: { } Example: { listen = { addr = "127.0.0.1"; port = 8080; }; providers.token.tokens = { myuser = { _secret = "/path/to/secret/token.txt"; # File content should be the secret token }; }; acl = { rule_sets = [ { rules = [ { field = "x-application"; equals = "MyApp"; } ]; allow = [ "myuser" ]; } ]; }; } Declared by: <nixpkgs/nixos/modules/services/security/nginx-sso.nix>
