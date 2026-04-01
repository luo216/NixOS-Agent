---
module: services.crowdsec.localConfig.parsers
option_count: 3
source: options.html
---

# services.crowdsec.localConfig.parsers

## services.crowdsec.localConfig.parsers.s00Raw

A list of stage s00-raw specifications. Most of the time, those are already included in the hub, but are presented here anyway. See https://docs.crowdsec.net/docs/parsers/intro for details. Type: list of (YAML 1.1 value) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/security/crowdsec.nix>

## services.crowdsec.localConfig.parsers.s01Parse

A list of stage s01-parse specifications. See https://docs.crowdsec.net/docs/parsers/intro for details. Type: list of (YAML 1.1 value) Default: [ ] Example: [ { debug = true; description = "Parsing custom service logs"; filter = "1=1"; grok = { apply_on = "message"; pattern = "^%{DATA:some_data}$"; }; name = "example/custom-service-logs"; onsuccess = "next_stage"; statics = [ { parsed = "is_my_custom_service"; value = "yes"; } ]; } ] Declared by: <nixpkgs/nixos/modules/services/security/crowdsec.nix>

## services.crowdsec.localConfig.parsers.s02Enrich

A list of stage s02-enrich specifications. Inside this list, you can specify Parser Whitelists. See https://docs.crowdsec.net/docs/whitelist/intro for details. Type: list of (YAML 1.1 value) Default: [ ] Example: [ { description = "Whitelist parse events from my IPs"; name = "myips/whitelist"; whitelist = { cidr = [ "1.2.3.0/24" ]; ip = [ "1.2.3.4" ]; reason = "My IP ranges"; }; } ] Declared by: <nixpkgs/nixos/modules/services/security/crowdsec.nix>
