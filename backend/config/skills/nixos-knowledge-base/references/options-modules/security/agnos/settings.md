---
module: security.agnos.settings
option_count: 2
source: options.html
---

# security.agnos.settings

## security.agnos.settings.accounts

A list of ACME accounts. Each account is associated with an email address and can be used to obtain an arbitrary amount of certificate (subject to provider’s rate limits, see e.g. Let’s Encrypt Rate Limits). Type: list of (open submodule of attribute set of (TOML value)) Declared by: <nixpkgs/nixos/modules/security/agnos.nix>

## security.agnos.settings.dns_listen_addr

Address for agnos to listen on. Note that this needs to be reachable by the outside world, and 53 is required in most situations since NS records do not allow specifying the port. Type: string Default: "0.0.0.0:53" Declared by: <nixpkgs/nixos/modules/security/agnos.nix>
