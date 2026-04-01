---
module: services.consul-template.instances.<name>
option_count: 5
source: options.html
---

# services.consul-template.instances.<name>

## services.consul-template.instances.<name>.enable

Whether to enable this consul-template instance. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/security/vault-agent.nix>

## services.consul-template.instances.<name>.package

The consul-template package to use. Type: package Default: pkgs.consul-template Declared by: <nixpkgs/nixos/modules/services/security/vault-agent.nix>

## services.consul-template.instances.<name>.group

Group under which this instance runs. Type: string Default: "root" Declared by: <nixpkgs/nixos/modules/services/security/vault-agent.nix>

## services.consul-template.instances.<name>.settings

Free-form settings written directly to the config.json file. Refer to https://github.com/hashicorp/consul-template/blob/main/docs/configuration.md#configuration-file for supported values. Note Resulting format is JSON not HCL. Refer to https://www.hcl2json.com/ if you are unsure how to convert HCL options to JSON. Type: open submodule of (JSON value) Default: { } Declared by: <nixpkgs/nixos/modules/services/security/vault-agent.nix>

## services.consul-template.instances.<name>.user

User under which this instance runs. Type: string Default: "root" Declared by: <nixpkgs/nixos/modules/services/security/vault-agent.nix>
