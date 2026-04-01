---
module: services.go-csp-collector.settings
option_count: 2
source: options.html
---

# services.go-csp-collector.settings

## services.go-csp-collector.settings.output-format

Define how the violation reports are formatted for output. Type: one of “text”, “json” Default: "text" Example: "text" Declared by: <nixpkgs/nixos/modules/services/monitoring/go-csp-collector.nix>

## services.go-csp-collector.settings.port

The port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Example: 8080 Declared by: <nixpkgs/nixos/modules/services/monitoring/go-csp-collector.nix>
