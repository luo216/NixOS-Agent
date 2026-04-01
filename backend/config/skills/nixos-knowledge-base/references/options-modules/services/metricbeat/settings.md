---
module: services.metricbeat.settings
option_count: 2
source: options.html
---

# services.metricbeat.settings

## services.metricbeat.settings.name

Name of the beat. Defaults to the hostname. See https://www.elastic.co/guide/en/beats/metricbeat/current/configuration-general-options.html#_name. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/monitoring/metricbeat.nix>

## services.metricbeat.settings.tags

Tags to place on the shipped metrics. See https://www.elastic.co/guide/en/beats/metricbeat/current/configuration-general-options.html#_tags_2. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/metricbeat.nix>
