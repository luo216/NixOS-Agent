---
module: services.vault-agent
option_count: 1
source: options.html
---

# services.vault-agent

## services.vault-agent.instances

Attribute set of vault-agent instances. Creates independent vault-agent-${name}.service systemd units for each instance defined here. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/security/vault-agent.nix>
