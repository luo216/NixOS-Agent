---
module: system.image
option_count: 2
source: options.html
---

# system.image

## system.image.id

Image identifier. This corresponds to the IMAGE_ID field in os-release(5). See the upstream docs for more details on valid characters for this field: https://www.freedesktop.org/software/systemd/man/latest/os-release.html#IMAGE_ID= You would only want to set this option if you’re build NixOS appliance images. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/misc/version.nix>

## system.image.version

Image version. This corresponds to the IMAGE_VERSION field in os-release(5). See the upstream docs for more details on valid characters for this field: https://www.freedesktop.org/software/systemd/man/latest/os-release.html#IMAGE_VERSION= You would only want to set this option if you’re build NixOS appliance images. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/misc/version.nix>
