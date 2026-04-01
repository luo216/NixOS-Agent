---
module: services.open-web-calendar.settings
option_count: 1
source: options.html
---

# services.open-web-calendar.settings

## services.open-web-calendar.settings.ALLOWED_HOSTS

The hosts that the Open Web Calendar permits. This is required to mitigate the Host Header Injection vulnerability. We always set this to the empty list, as Nginx already checks the Host header. Type: string (read only) Default: "" Declared by: <nixpkgs/nixos/modules/services/web-apps/open-web-calendar.nix>
