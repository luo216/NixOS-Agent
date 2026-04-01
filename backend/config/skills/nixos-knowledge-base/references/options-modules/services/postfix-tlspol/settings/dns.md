---
module: services.postfix-tlspol.settings.dns
option_count: 1
source: options.html
---

# services.postfix-tlspol.settings.dns

## services.postfix-tlspol.settings.dns.address

IP and port to your DNS resolver. Uses resolvers from /etc/resolv.conf if unset. Note The configured DNS resolver must validate DNSSEC signatures. Type: null or string Default: null Example: "127.0.0.1:53" Declared by: <nixpkgs/nixos/modules/services/mail/postfix-tlspol.nix>
