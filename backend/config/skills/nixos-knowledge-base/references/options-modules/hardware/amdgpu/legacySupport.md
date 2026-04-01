---
module: hardware.amdgpu.legacySupport
option_count: 1
source: options.html
---

# hardware.amdgpu.legacySupport

## hardware.amdgpu.legacySupport.enable

Whether to enable using amdgpu kernel driver instead of radeon for Southern Islands (Radeon HD 7000) series and Sea Islands (Radeon HD 8000) series cards. Note: this removes support for analog video outputs, which is only available in the radeon driver . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/amdgpu.nix>
