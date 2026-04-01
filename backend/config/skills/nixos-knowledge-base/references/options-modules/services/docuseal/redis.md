---
module: services.docuseal.redis
option_count: 4
source: options.html
---

# services.docuseal.redis

## services.docuseal.redis.createLocally

Whether to create a local redis automatically. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/docuseal.nix>

## services.docuseal.redis.host

Redis server address. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/docuseal.nix>

## services.docuseal.redis.name

Name of the redis server. Only used if createLocally is set to true. Type: string Default: "docuseal" Declared by: <nixpkgs/nixos/modules/services/web-apps/docuseal.nix>

## services.docuseal.redis.port

Port of the redis server. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 6379 Declared by: <nixpkgs/nixos/modules/services/web-apps/docuseal.nix>
