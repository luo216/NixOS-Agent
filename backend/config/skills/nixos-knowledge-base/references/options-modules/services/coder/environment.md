---
module: services.coder.environment
option_count: 2
source: options.html
---

# services.coder.environment

## services.coder.environment.extra

Extra environment variables to pass run Coder’s server with. See Coder documentation. Type: attribute set Default: { } Example: { CODER_OAUTH2_GITHUB_ALLOWED_ORGS = "your-org"; CODER_OAUTH2_GITHUB_ALLOW_SIGNUPS = true; } Declared by: <nixpkgs/nixos/modules/services/web-apps/coder.nix>

## services.coder.environment.file

Systemd environment file to add to Coder. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/coder.nix>
