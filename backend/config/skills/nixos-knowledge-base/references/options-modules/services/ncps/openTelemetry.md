---
module: services.ncps.openTelemetry
option_count: 2
source: options.html
---

# services.ncps.openTelemetry

## services.ncps.openTelemetry.enable

Whether to enable Enable OpenTelemetry logs, metrics, and tracing. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/ncps.nix>

## services.ncps.openTelemetry.grpcURL

Configure OpenTelemetry gRPC URL. Missing or “https” scheme enables secure gRPC, “insecure” otherwise. Omit to emit telemetry to stdout. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/ncps.nix>
