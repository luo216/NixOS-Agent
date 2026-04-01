---
module: services.endlessh-go.prometheus
option_count: 3
source: options.html
---

# services.endlessh-go.prometheus

## services.endlessh-go.prometheus.enable

Whether to enable Prometheus integration. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/endlessh-go.nix>

## services.endlessh-go.prometheus.listenAddress

Interface address to bind the endlessh-go daemon to answer Prometheus queries. Type: string Default: "0.0.0.0" Example: "[::]" Declared by: <nixpkgs/nixos/modules/services/security/endlessh-go.nix>

## services.endlessh-go.prometheus.port

Specifies on which port the endlessh-go daemon listens for Prometheus queries. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 2112 Example: 9119 Declared by: <nixpkgs/nixos/modules/services/security/endlessh-go.nix>
