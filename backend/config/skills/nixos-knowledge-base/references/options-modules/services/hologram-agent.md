---
module: services.hologram-agent
option_count: 3
source: options.html
---

# services.hologram-agent

## services.hologram-agent.enable

Whether to enable the Hologram agent for AWS instance credentials Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/hologram-agent.nix>

## services.hologram-agent.dialAddress

Hologram server and port. Type: string Default: "localhost:3100" Declared by: <nixpkgs/nixos/modules/services/security/hologram-agent.nix>

## services.hologram-agent.httpPort

Port for metadata service to listen on. Type: string Default: "80" Declared by: <nixpkgs/nixos/modules/services/security/hologram-agent.nix>
