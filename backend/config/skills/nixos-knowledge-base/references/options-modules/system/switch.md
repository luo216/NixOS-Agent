---
module: system.switch
option_count: 1
source: options.html
---

# system.switch

## system.switch.enable

Whether to include the capability to switch configurations. Disabling this makes the system unable to be reconfigured via nixos-rebuild. This is good for image based appliances where updates are handled outside the image. Reducing features makes the image lighter and slightly more secure. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/system/activation/switchable-system.nix>
