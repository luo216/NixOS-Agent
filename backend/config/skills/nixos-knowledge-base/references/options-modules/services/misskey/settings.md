---
module: services.misskey.settings
option_count: 11
source: options.html
---

# services.misskey.settings

## services.misskey.settings.chmodSocket

The file access mode of the UNIX socket. Type: null or string Default: null Example: "777" Declared by: <nixpkgs/nixos/modules/services/web-apps/misskey.nix>

## services.misskey.settings.db

Database settings. Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/misskey.nix>

## services.misskey.settings.id

The ID generation method to use. Do not change after starting Misskey for the first time. Type: one of “aid”, “aidx”, “meid”, “ulid”, “objectid” Default: "aidx" Declared by: <nixpkgs/nixos/modules/services/web-apps/misskey.nix>

## services.misskey.settings.meilisearch

Meilisearch connection options. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/misskey.nix>

## services.misskey.settings.port

The port your Misskey server should listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3000 Declared by: <nixpkgs/nixos/modules/services/web-apps/misskey.nix>

## services.misskey.settings.redis

ioredis options. See README for reference. Type: open submodule of attribute set of (YAML 1.1 value) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/misskey.nix>

## services.misskey.settings.redisForJobQueue

ioredis options for the job queue. See README for reference. Type: null or (open submodule of attribute set of (YAML 1.1 value)) Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/misskey.nix>

## services.misskey.settings.redisForPubsub

ioredis options for pubsub. See README for reference. Type: null or (open submodule of attribute set of (YAML 1.1 value)) Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/misskey.nix>

## services.misskey.settings.redisForTimelines

ioredis options for timelines. See README for reference. Type: null or (open submodule of attribute set of (YAML 1.1 value)) Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/misskey.nix>

## services.misskey.settings.socket

The UNIX socket your Misskey server should listen on. Type: null or absolute path Default: null Example: "/path/to/misskey.sock" Declared by: <nixpkgs/nixos/modules/services/web-apps/misskey.nix>

## services.misskey.settings.url

The final user-facing URL. Do not change after running Misskey for the first time. This needs to match up with the configured reverse proxy and is automatically configured when using services.misskey.reverseProxy. Type: string Example: "https://example.tld/" Declared by: <nixpkgs/nixos/modules/services/web-apps/misskey.nix>
