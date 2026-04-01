---
module: services.filebeat.settings.output.elasticsearch
option_count: 1
source: options.html
---

# services.filebeat.settings.output.elasticsearch

## services.filebeat.settings.output.elasticsearch.hosts

The list of Elasticsearch nodes to connect to. The events are distributed to these nodes in round robin order. If one node becomes unreachable, the event is automatically sent to another node. Each Elasticsearch node can be defined as a URL or IP:PORT. For example: http://192.15.3.2, https://es.found.io:9230 or 192.24.3.2:9300. If no port is specified, 9200 is used. Type: list of string Default: [ "127.0.0.1:9200" ] Example: [ "myEShost:9200" ] Declared by: <nixpkgs/nixos/modules/services/logging/filebeat.nix>
