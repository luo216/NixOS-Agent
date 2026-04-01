---
module: services.oauth2-proxy.email
option_count: 2
source: options.html
---

# services.oauth2-proxy.email

## services.oauth2-proxy.email.addresses

Line-separated email addresses that are allowed to authenticate. Type: null or strings concatenated with “\n” Default: null Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>

## services.oauth2-proxy.email.domains

Authenticate emails with the specified domains. Use * to authenticate any email. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>
