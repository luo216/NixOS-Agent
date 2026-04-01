---
module: services.parsedmarc.settings.elasticsearch
option_count: 5
source: options.html
---

# services.parsedmarc.settings.elasticsearch

## services.parsedmarc.settings.elasticsearch.cert_path

The path to a TLS certificate bundle used to verify the server’s certificate. Type: absolute path Default: config.security.pki.caBundle Declared by: <nixpkgs/nixos/modules/services/monitoring/parsedmarc.nix>

## services.parsedmarc.settings.elasticsearch.hosts

A list of Elasticsearch hosts to push parsed reports to. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/parsedmarc.nix>

## services.parsedmarc.settings.elasticsearch.password

The password to use when connecting to Elasticsearch, if required. Always handled as a secret whether the value is wrapped in a { _secret = ...; } attrset or not (refer to services.parsedmarc.settings for details). Type: null or absolute path or attribute set of absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/parsedmarc.nix>

## services.parsedmarc.settings.elasticsearch.ssl

Whether to use an encrypted SSL/TLS connection. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/parsedmarc.nix>

## services.parsedmarc.settings.elasticsearch.user

Username to use when connecting to Elasticsearch, if required. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/parsedmarc.nix>
