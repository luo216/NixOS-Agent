---
module: services.pretalx.settings.celery
option_count: 2
source: options.html
---

# services.pretalx.settings.celery

## services.pretalx.settings.celery.backend

URI to the celery backend used for the asynchronous job queue. Type: null or string Default: optionalString config.services.pretalx.celery.enable "redis+socket://${config.services.redis.servers.pretalx.unixSocket}?virtual_host=1" Declared by: <nixpkgs/nixos/modules/services/web-apps/pretalx.nix>

## services.pretalx.settings.celery.broker

URI to the celery broker used for the asynchronous job queue. Type: null or string Default: optionalString config.services.pretalx.celery.enable "redis+socket://${config.services.redis.servers.pretalx.unixSocket}?virtual_host=2" Declared by: <nixpkgs/nixos/modules/services/web-apps/pretalx.nix>
