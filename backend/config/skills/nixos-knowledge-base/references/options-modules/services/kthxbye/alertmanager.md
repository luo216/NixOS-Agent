---
module: services.kthxbye.alertmanager
option_count: 2
source: options.html
---

# services.kthxbye.alertmanager

## services.kthxbye.alertmanager.timeout

Alertmanager request timeout duration in the time.Duration format. Type: string Default: "1m0s" Example: "30s" Declared by: <nixpkgs/nixos/modules/services/monitoring/kthxbye.nix>

## services.kthxbye.alertmanager.uri

Alertmanager URI to use. Type: string Default: "http://localhost:9093" Example: "https://alertmanager.example.com" Declared by: <nixpkgs/nixos/modules/services/monitoring/kthxbye.nix>
