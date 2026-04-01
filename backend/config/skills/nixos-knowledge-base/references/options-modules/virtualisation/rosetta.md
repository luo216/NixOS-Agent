---
module: virtualisation.rosetta
option_count: 2
source: options.html
---

# virtualisation.rosetta

## virtualisation.rosetta.enable

Whether to enable Rosetta support. This feature requires the system to be a virtualised guest on an Apple silicon host. The default settings are suitable for the UTM virtualisation package. Make sure to select ‘Apple Virtualization’ as the virtualisation engine and then tick the ‘Enable Rosetta’ option. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/rosetta.nix>

## virtualisation.rosetta.mountTag

The VirtioFS mount tag for the Rosetta runtime, exposed by the host’s virtualisation software. If supported, your virtualisation software should provide instructions on how register the Rosetta runtime inside Linux guests. These instructions should mention the name of the mount tag used for the VirtioFS directory share that contains the Rosetta runtime. Type: string Default: "rosetta" Declared by: <nixpkgs/nixos/modules/virtualisation/rosetta.nix>
