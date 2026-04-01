---
module: services.thanos.rule.tracing
option_count: 2
source: options.html
---

# services.thanos.rule.tracing

## services.thanos.rule.tracing.config

Tracing configuration. When not null the attribute set gets converted to a YAML file and stored in the Nix store. The option tracing.config-file will default to its path. If tracing.config-file is set this option has no effect. See format details: https://thanos.io/tip/thanos/tracing.md/#configuration Type: YAML 1.1 value Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.rule.tracing.config-file

Path to YAML file that contains tracing configuration. See format details: https://thanos.io/tip/thanos/tracing.md/#configuration Type: null or string Default: if config.services.thanos.<cmd>.tracing.config == null then null else toString (format.generate "tracing.yaml" config.services.thanos.<cmd>.tracing.config); Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>
