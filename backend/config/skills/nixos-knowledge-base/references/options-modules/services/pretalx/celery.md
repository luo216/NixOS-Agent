---
module: services.pretalx.celery
option_count: 2
source: options.html
---

# services.pretalx.celery

## services.pretalx.celery.enable

Whether to set up celery as an asynchronous task runner. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/web-apps/pretalx.nix>

## services.pretalx.celery.extraArgs

Extra arguments to pass to celery. See https://docs.celeryq.dev/en/stable/reference/cli.html#celery-worker for more info. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/web-apps/pretalx.nix>
