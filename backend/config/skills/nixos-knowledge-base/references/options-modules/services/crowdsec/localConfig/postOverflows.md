---
module: services.crowdsec.localConfig.postOverflows
option_count: 1
source: options.html
---

# services.crowdsec.localConfig.postOverflows

## services.crowdsec.localConfig.postOverflows.s01Whitelist

A list of stage s01-whitelist specifications. Inside this list, you can specify Postoverflows Whitelists. See https://docs.crowdsec.net/docs/whitelist/intro for details. Type: list of (YAML 1.1 value) Default: [ ] Example: [ { description = "Whitelist my reverse DNS"; name = "postoverflows/whitelist_my_dns_domain"; whitelist = { expression = [ "evt.Enriched.reverse_dns endsWith '.local.'" ]; reason = "Don't ban me"; }; } ] Declared by: <nixpkgs/nixos/modules/services/security/crowdsec.nix>
