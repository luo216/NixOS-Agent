---
module: services.pretix.gunicorn
option_count: 1
source: options.html
---

# services.pretix.gunicorn

## services.pretix.gunicorn.extraArgs

Extra arguments to pass to gunicorn. See https://docs.pretix.eu/en/latest/admin/installation/manual_smallscale.html#start-pretix-as-a-service for details. Type: list of string Default: [ "--name=pretix" ] Example: [ "--name=pretix" "--workers=4" "--max-requests=1200" "--max-requests-jitter=50" "--log-level=info" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/pretix.nix>
