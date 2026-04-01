---
module: services.vault-agent.instances.<name>
option_count: 5
source: options.html
---

# services.vault-agent.instances.<name>

## services.vault-agent.instances.<name>.enable

Whether to enable this vault-agent instance. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/security/vault-agent.nix>

## services.vault-agent.instances.<name>.package

The vault package to use. Type: package Default: pkgs.vault Declared by: <nixpkgs/nixos/modules/services/security/vault-agent.nix>

## services.vault-agent.instances.<name>.group

Group under which this instance runs. Type: string Default: "root" Declared by: <nixpkgs/nixos/modules/services/security/vault-agent.nix>

## services.vault-agent.instances.<name>.settings

Free-form settings written directly to the config.json file. Refer to https://developer.hashicorp.com/vault/docs/agent#configuration-file-options for supported values. Note Resulting format is JSON not HCL. Refer to https://www.hcl2json.com/ if you are unsure how to convert HCL options to JSON. Type: open submodule of (JSON value) Default: { } Declared by: <nixpkgs/nixos/modules/services/security/vault-agent.nix>

## services.vault-agent.instances.<name>.user

User under which this instance runs. Type: string Default: "root" Declared by: <nixpkgs/nixos/modules/services/security/vault-agent.nix>
