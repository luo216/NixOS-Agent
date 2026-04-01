---
module: services.pretalx.gunicorn
option_count: 1
source: options.html
---

# services.pretalx.gunicorn

## services.pretalx.gunicorn.extraArgs

Extra arguments to pass to gunicorn. See https://docs.pretalx.org/administrator/installation.html#step-6-starting-pretalx-as-a-service for details. Type: list of string Default: [ "--name=pretalx" ] Example: [ "--name=pretalx" "--workers=4" "--max-requests=1200" "--max-requests-jitter=50" "--log-level=info" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/pretalx.nix>
