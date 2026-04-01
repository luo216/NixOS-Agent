---
module: services.peertube.secrets
option_count: 1
source: options.html
---

# services.peertube.secrets

## services.peertube.secrets.secretsFile

Secrets to run PeerTube. Generate one using openssl rand -hex 32 Type: null or absolute path Default: null Example: "/run/secrets/peertube" Declared by: <nixpkgs/nixos/modules/services/web-apps/peertube.nix>
