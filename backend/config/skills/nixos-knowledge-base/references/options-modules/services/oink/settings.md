---
module: services.oink.settings
option_count: 2
source: options.html
---

# services.oink.settings

## services.oink.settings.interval

Seconds to wait before sending another request. Type: integer between 60 and 172800 (both inclusive) Default: 900 Declared by: <nixpkgs/nixos/modules/services/networking/oink.nix>

## services.oink.settings.ttl

The TTL (“Time to Live”) value to set for your DNS records. The TTL controls how long in seconds your records will be cached for. A smaller value will allow the record to update quicker. Type: integer between 600 and 172800 (both inclusive) Default: 600 Declared by: <nixpkgs/nixos/modules/services/networking/oink.nix>
