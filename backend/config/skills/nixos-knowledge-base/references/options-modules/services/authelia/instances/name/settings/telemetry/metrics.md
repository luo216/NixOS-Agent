---
module: services.authelia.instances.<name>.settings.telemetry.metrics
option_count: 2
source: options.html
---

# services.authelia.instances.<name>.settings.telemetry.metrics

## services.authelia.instances.<name>.settings.telemetry.metrics.enabled

Enable Metrics. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/authelia.nix>

## services.authelia.instances.<name>.settings.telemetry.metrics.address

The address to listen on for metrics. This should be on a different port to the main server.port value. Type: string Default: "tcp://127.0.0.1:9959" Example: "tcp://0.0.0.0:8888" Declared by: <nixpkgs/nixos/modules/services/security/authelia.nix>
