---
module: services.prometheus.scrapeConfigs.*.relabel_configs.*
option_count: 7
source: options.html
---

# services.prometheus.scrapeConfigs.*.relabel_configs.*

## services.prometheus.scrapeConfigs.*.relabel_configs.*.action

Action to perform based on regex matching. Defaults to replace in prometheus when set to null. Type: null or one of “replace”, “lowercase”, “uppercase”, “keep”, “drop”, “hashmod”, “labelmap”, “labeldrop”, “labelkeep” Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.relabel_configs.*.modulus

Modulus to take of the hash of the source label values. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.relabel_configs.*.regex

Regular expression against which the extracted value is matched. Defaults to (.*) in prometheus when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.relabel_configs.*.replacement

Replacement value against which a regex replace is performed if the regular expression matches. Defaults to $1 in prometheus when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.relabel_configs.*.separator

Separator placed between concatenated source label values. Defaults to ; in prometheus when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.relabel_configs.*.source_labels

The source labels select values from existing labels. Their content is concatenated using the configured separator and matched against the configured regular expression. Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.relabel_configs.*.target_label

Label to which the resulting value is written in a replace action. It is mandatory for replace actions. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>
