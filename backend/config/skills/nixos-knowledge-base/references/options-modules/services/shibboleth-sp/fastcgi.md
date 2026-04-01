---
module: services.shibboleth-sp.fastcgi
option_count: 3
source: options.html
---

# services.shibboleth-sp.fastcgi

## services.shibboleth-sp.fastcgi.enable

Whether to include the shibauthorizer and shibresponder FastCGI processes Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/shibboleth-sp.nix>

## services.shibboleth-sp.fastcgi.shibAuthorizerPort

Port for shibauthorizer FastCGI process to bind to Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9100 Declared by: <nixpkgs/nixos/modules/services/security/shibboleth-sp.nix>

## services.shibboleth-sp.fastcgi.shibResponderPort

Port for shibauthorizer FastCGI process to bind to Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9101 Declared by: <nixpkgs/nixos/modules/services/security/shibboleth-sp.nix>
