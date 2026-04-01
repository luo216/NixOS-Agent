---
module: services.consul-template
option_count: 1
source: options.html
---

# services.consul-template

## services.consul-template.instances

Attribute set of consul-template instances. Creates independent consul-template-${name}.service systemd units for each instance defined here. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/security/vault-agent.nix>
