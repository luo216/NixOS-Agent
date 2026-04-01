---
module: services.prometheus.exporters.process.settings
option_count: 1
source: options.html
---

# services.prometheus.exporters.process.settings

## services.prometheus.exporters.process.settings.process_names

All settings expressed as an Nix attrset. Check the official documentation for the corresponding YAML settings that can all be used here: https://github.com/ncabatoff/process-exporter Type: list of anything Default: [ ] Example: [ # Remove nix store path from process name { name = "{{.Matches.Wrapped}} {{ .Matches.Args }}"; cmdline = [ "^/nix/store[^ ]*/(?P<Wrapped>[^ /]*) (?P<Args>.*)" ]; } ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
