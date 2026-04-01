---
module: services.n8n
option_count: 3
source: options.html
---

# services.n8n

## services.n8n.enable

Whether to enable n8n server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/n8n.nix>

## services.n8n.environment

Environment variables to pass to the n8n service. See https://docs.n8n.io/hosting/configuration/environment-variables/ for available options. Type: open submodule of attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/services/misc/n8n.nix>

## services.n8n.openFirewall

Open ports in the firewall for the n8n web interface. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/n8n.nix>
