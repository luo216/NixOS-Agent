---
module: services.pretix.settings.celery
option_count: 2
source: options.html
---

# services.pretix.settings.celery

## services.pretix.settings.celery.backend

URI to the celery backend used for the asynchronous job queue. Type: string Default: redis+socket://${config.services.redis.servers.pretix.unixSocket}?virtual_host=1 Declared by: <nixpkgs/nixos/modules/services/web-apps/pretix.nix>

## services.pretix.settings.celery.broker

URI to the celery broker used for the asynchronous job queue. Type: string Default: redis+socket://${config.services.redis.servers.pretix.unixSocket}?virtual_host=2 Declared by: <nixpkgs/nixos/modules/services/web-apps/pretix.nix>
