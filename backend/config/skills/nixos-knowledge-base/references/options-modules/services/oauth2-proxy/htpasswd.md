---
module: services.oauth2-proxy.htpasswd
option_count: 2
source: options.html
---

# services.oauth2-proxy.htpasswd

## services.oauth2-proxy.htpasswd.displayForm

Display username / password login form if an htpasswd file is provided. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>

## services.oauth2-proxy.htpasswd.file

Additionally authenticate against a htpasswd file. Entries must be created with htpasswd -s for SHA encryption. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>
