---
module: hardware.amdgpu.overdrive
option_count: 2
source: options.html
---

# hardware.amdgpu.overdrive

## hardware.amdgpu.overdrive.enable

Whether to enable amdgpu overdrive mode for overclocking. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/amdgpu.nix>

## hardware.amdgpu.overdrive.ppfeaturemask

Sets the amdgpu.ppfeaturemask kernel option. It can be used to enable the overdrive bit. Default is 0xfffd7fff as it is less likely to cause flicker issues. Setting it to 0xffffffff enables all features, but also can be unstable. See the kernel documentation for more information. Type: string Default: "0xfffd7fff" Example: "0xffffffff" Declared by: <nixpkgs/nixos/modules/services/hardware/amdgpu.nix>
