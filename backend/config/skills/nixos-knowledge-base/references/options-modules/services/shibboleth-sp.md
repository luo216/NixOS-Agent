---
module: services.shibboleth-sp
option_count: 2
source: options.html
---

# services.shibboleth-sp

## services.shibboleth-sp.enable

Whether to enable the shibboleth service Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/shibboleth-sp.nix>

## services.shibboleth-sp.configFile

Path to shibboleth config file Type: absolute path Example: "${pkgs.shibboleth-sp}/etc/shibboleth/shibboleth2.xml" Declared by: <nixpkgs/nixos/modules/services/security/shibboleth-sp.nix>
