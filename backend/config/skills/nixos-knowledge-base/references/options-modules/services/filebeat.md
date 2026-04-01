---
module: services.filebeat
option_count: 5
source: options.html
---

# services.filebeat

## services.filebeat.enable

Whether to enable filebeat. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/logging/filebeat.nix>

## services.filebeat.package

The filebeat package to use. Type: package Default: pkgs.filebeat Example: filebeat7 Declared by: <nixpkgs/nixos/modules/services/logging/filebeat.nix>

## services.filebeat.inputs

Inputs specify how Filebeat locates and processes input data. This is like services.filebeat.settings.filebeat.inputs, but structured as an attribute set. This has the benefit that multiple NixOS modules can contribute settings to a single filebeat input. An input type can be specified multiple times by choosing a different <name> for each, but setting services.filebeat.inputs.<name>.type to the same value. See https://www.elastic.co/guide/en/beats/filebeat/current/configuration-filebeat-options.html. Type: attribute set of (open submodule of (JSON value)) Default: { } Example: { journald.id = "everything"; # Only for filebeat7 log = { enabled = true; paths = [ "/var/log/*.log" ]; }; }; Declared by: <nixpkgs/nixos/modules/services/logging/filebeat.nix>

## services.filebeat.modules

Filebeat modules provide a quick way to get started processing common log formats. They contain default configurations, Elasticsearch ingest pipeline definitions, and Kibana dashboards to help you implement and deploy a log monitoring solution. This is like services.filebeat.settings.filebeat.modules, but structured as an attribute set. This has the benefit that multiple NixOS modules can contribute settings to a single filebeat module. A module can be specified multiple times by choosing a different <name> for each, but setting services.filebeat.modules.<name>.module to the same value. See https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-modules.html. Type: attribute set of (open submodule of (JSON value)) Default: { } Example: { nginx = { access = { enabled = true; var.paths = [ "/path/to/log/nginx/access.log*" ]; }; error = { enabled = true; var.paths = [ "/path/to/log/nginx/error.log*" ]; }; }; }; Declared by: <nixpkgs/nixos/modules/services/logging/filebeat.nix>

## services.filebeat.settings

Configuration for filebeat. See https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-reference-yml.html for supported values. Options containing secret data should be set to an attribute set containing the attribute _secret - a string pointing to a file containing the value the option should be set to. See the example to get a better picture of this: in the resulting filebeat.yml file, the output.elasticsearch.password key will be set to the contents of the /var/keys/elasticsearch_password file. Type: open submodule of (JSON value) Default: { } Example: { settings = { output.elasticsearch = { hosts = [ "myEShost:9200" ]; username = "filebeat_internal"; password = { _secret = "/var/keys/elasticsearch_password"; }; }; logging.level = "info"; }; }; Declared by: <nixpkgs/nixos/modules/services/logging/filebeat.nix>
