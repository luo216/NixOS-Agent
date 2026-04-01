---
module: services.elasticsearch-curator
option_count: 5
source: options.html
---

# services.elasticsearch-curator

## services.elasticsearch-curator.enable

Whether to enable elasticsearch curator. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/search/elasticsearch-curator.nix>

## services.elasticsearch-curator.actionYAML

curator action.yaml file contents, alternatively use curator-cli which takes a simple action command Type: strings concatenated with “\n” Example: '' --- actions: 1: action: delete_indices description: >- Delete indices older than 45 days (based on index name), for logstash- prefixed indices. Ignore the error if the filter does not result in an actionable list of indices (ignore_empty_list) and exit cleanly. options: ignore_empty_list: True disable_action: False filters: - filtertype: pattern kind: prefix value: logstash- - filtertype: age source: name direction: older timestring: '%Y.%m.%d' unit: days unit_count: 45 '' Declared by: <nixpkgs/nixos/modules/services/search/elasticsearch-curator.nix>

## services.elasticsearch-curator.hosts

a list of elasticsearch hosts to connect to Type: list of string Default: [ "localhost" ] Declared by: <nixpkgs/nixos/modules/services/search/elasticsearch-curator.nix>

## services.elasticsearch-curator.interval

The frequency to run curator, a systemd.time such as ‘hourly’ Type: string Default: "hourly" Declared by: <nixpkgs/nixos/modules/services/search/elasticsearch-curator.nix>

## services.elasticsearch-curator.port

the port that elasticsearch is listening on Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9200 Declared by: <nixpkgs/nixos/modules/services/search/elasticsearch-curator.nix>
