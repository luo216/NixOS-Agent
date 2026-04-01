---
module: services.waagent
option_count: 4
source: options.html
---

# services.waagent

## services.waagent.enable

Whether to enable Windows Azure Linux Agent. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/virtualisation/waagent.nix>

## services.waagent.package

The waagent package to use. Type: package Default: pkgs.waagent Declared by: <nixpkgs/nixos/modules/virtualisation/waagent.nix>

## services.waagent.extraPackages

Additional packages to add to the waagent PATH. Type: list of package Default: [ ] Example: [ pkgs.powershell ] Declared by: <nixpkgs/nixos/modules/virtualisation/waagent.nix>

## services.waagent.settings

The waagent.conf configuration, see https://learn.microsoft.com/en-us/azure/virtual-machines/extensions/agent-linux for documentation. Type: open submodule of attribute set of (atom (bool, string, int or float) or null or a list of them or an attribute set of them) Default: { } Declared by: <nixpkgs/nixos/modules/virtualisation/waagent.nix>
