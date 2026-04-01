---
module: services.glance.settings
option_count: 1
source: options.html
---

# services.glance.settings

## services.glance.settings.pages

List of pages to be present on the dashboard. See https://github.com/glanceapp/glance/blob/main/docs/configuration.md#pages--columns Type: YAML 1.1 value Default: [ { columns = [ { size = "full"; widgets = [ { type = "calendar"; } ]; } ]; name = "Calendar"; } ] Example: [ { columns = [ { size = "full"; widgets = [ { type = "calendar"; } { location = { _secret = "/var/lib/secrets/glance/location"; }; type = "weather"; } ]; } ]; name = "Home"; } ] Declared by: <nixpkgs/nixos/modules/services/web-apps/glance.nix>
