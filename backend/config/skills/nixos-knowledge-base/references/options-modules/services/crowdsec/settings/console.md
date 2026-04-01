---
module: services.crowdsec.settings.console
option_count: 2
source: options.html
---

# services.crowdsec.settings.console

## services.crowdsec.settings.console.configuration

Attributes inside the console.yaml file. Type: YAML 1.1 value Default: { share_context = false; share_custom = false; share_manual_decisions = false; share_tainted = false; } Declared by: <nixpkgs/nixos/modules/services/security/crowdsec.nix>

## services.crowdsec.settings.console.tokenFile

The Console Token file to use. Type: null or absolute path Default: null Example: "/run/crowdsec/console_token.yaml" Declared by: <nixpkgs/nixos/modules/services/security/crowdsec.nix>
