---
module: services.mastodon.elasticsearch
option_count: 6
source: options.html
---

# services.mastodon.elasticsearch

## services.mastodon.elasticsearch.host

Elasticsearch host. If it is not null, Elasticsearch full text search will be enabled. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/mastodon.nix>

## services.mastodon.elasticsearch.passwordFile

Path to file containing password for optionally authenticating with Elasticsearch. Type: null or absolute path Default: null Example: "/var/lib/mastodon/secrets/elasticsearch-password" Declared by: <nixpkgs/nixos/modules/services/web-apps/mastodon.nix>

## services.mastodon.elasticsearch.port

Elasticsearch port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9200 Declared by: <nixpkgs/nixos/modules/services/web-apps/mastodon.nix>

## services.mastodon.elasticsearch.prefix

If provided, adds a prefix to indexes in Elasticsearch. This allows to use the same Elasticsearch cluster between different projects or Mastodon servers. Type: null or string Default: null Example: "mastodon" Declared by: <nixpkgs/nixos/modules/services/web-apps/mastodon.nix>

## services.mastodon.elasticsearch.preset

It controls the ElasticSearch indices configuration (number of shards and replica). Type: one of “single_node_cluster”, “small_cluster”, “large_cluster” Default: "single_node_cluster" Example: "large_cluster" Declared by: <nixpkgs/nixos/modules/services/web-apps/mastodon.nix>

## services.mastodon.elasticsearch.user

Used for optionally authenticating with Elasticsearch. Type: null or string Default: null Example: "elasticsearch-mastodon" Declared by: <nixpkgs/nixos/modules/services/web-apps/mastodon.nix>
