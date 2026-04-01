---
module: services.cloud-init
option_count: 4
source: options.html
---

# services.cloud-init

## services.cloud-init.enable

Enable the cloud-init service. This services reads configuration metadata in a cloud environment and configures the machine according to this metadata. This configuration is not completely compatible with the NixOS way of doing configuration, as configuration done by cloud-init might be overridden by a subsequent nixos-rebuild call. However, some parts of cloud-init fall outside of NixOS’s responsibility, like filesystem resizing and ssh public key provisioning, and cloud-init is useful for that parts. Thus, be wary that using cloud-init in NixOS might come as some cost. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/system/cloud-init.nix>

## services.cloud-init.config

raw cloud-init configuration. Takes precedence over the settings option if set. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/system/cloud-init.nix>

## services.cloud-init.extraPackages

List of additional packages to be available within cloud-init jobs. Type: list of package Default: [ ] Declared by: <nixpkgs/nixos/modules/services/system/cloud-init.nix>

## services.cloud-init.settings

Structured cloud-init configuration. Type: open submodule of (YAML 1.1 value) Default: { } Declared by: <nixpkgs/nixos/modules/services/system/cloud-init.nix>
