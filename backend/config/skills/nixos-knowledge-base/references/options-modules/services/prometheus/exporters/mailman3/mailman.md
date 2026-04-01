---
module: services.prometheus.exporters.mailman3.mailman
option_count: 3
source: options.html
---

# services.prometheus.exporters.mailman3.mailman

## services.prometheus.exporters.mailman3.mailman.addr

Mailman3 Core REST API address. Type: string Default: "http://127.0.0.1:8001" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mailman3.mailman.passFile

Mailman3 Core REST API password. Type: string Default: config.services.mailman.restApiPassFile Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mailman3.mailman.user

Mailman3 Core REST API username. Type: string Default: "restadmin" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
