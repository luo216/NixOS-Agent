---
module: services.scrutiny.collector.settings.api
option_count: 1
source: options.html
---

# services.scrutiny.collector.settings.api

## services.scrutiny.collector.settings.api.endpoint

Scrutiny app API endpoint for sending metrics to. Type: string Default: "http://${config.services.scrutiny.settings.web.listen.host}:${config.services.scrutiny.settings.web.listen.port}${config.services.scrutiny.settings.web.listen.basepath}" Declared by: <nixpkgs/nixos/modules/services/monitoring/scrutiny.nix>
