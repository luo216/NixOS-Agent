---
module: services.postfix.headerChecks.*
option_count: 2
source: options.html
---

# services.postfix.headerChecks.*

## services.postfix.headerChecks.*.action

The action to be executed when the pattern is matched Type: string Default: "DUNNO" Example: "BCC mail@example.com" Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.headerChecks.*.pattern

A regexp pattern matching the header Type: string Default: "/^.*/" Example: "/^X-Mailer:/" Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>
