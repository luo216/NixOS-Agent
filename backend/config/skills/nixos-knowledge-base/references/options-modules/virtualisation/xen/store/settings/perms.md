---
module: virtualisation.xen.store.settings.perms
option_count: 2
source: options.html
---

# virtualisation.xen.store.settings.perms

## virtualisation.xen.store.settings.perms.enable

Whether to enable the node permission system. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/virtualisation/xen-dom0.nix>

## virtualisation.xen.store.settings.perms.enableWatch

Whether to enable the watch permission system. When this is set to true, unprivileged guests can only get watch events for xenstore entries that they would’ve been able to read. When this is set to false, unprivileged guests may get watch events for xenstore entries that they cannot read. The watch event contains only the entry name, not the value. This restores behaviour prior to XSA-115. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/virtualisation/xen-dom0.nix>
