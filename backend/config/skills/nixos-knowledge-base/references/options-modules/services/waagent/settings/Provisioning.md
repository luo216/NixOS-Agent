---
module: services.waagent.settings.Provisioning
option_count: 2
source: options.html
---

# services.waagent.settings.Provisioning

## services.waagent.settings.Provisioning.Agent

Which provisioning agent to use. Type: one of “auto”, “waagent”, “cloud-init”, “disabled” Default: "auto" Declared by: <nixpkgs/nixos/modules/virtualisation/waagent.nix>

## services.waagent.settings.Provisioning.Enable

Whether to enable provisioning functionality in the agent. If provisioning is disabled, SSH host and user keys in the image are preserved and configuration in the Azure provisioning API is ignored. Set to false if cloud-init is used for provisioning tasks. Type: boolean Default: !config.services.cloud-init.enable Declared by: <nixpkgs/nixos/modules/virtualisation/waagent.nix>
