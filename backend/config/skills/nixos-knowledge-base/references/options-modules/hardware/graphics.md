---
module: hardware.graphics
option_count: 6
source: options.html
---

# hardware.graphics

## hardware.graphics.enable

Whether to enable hardware accelerated graphics drivers. This is required to allow most graphical applications and environments to use hardware rendering, video encode/decode acceleration, etc. This option should be enabled by default by the corresponding modules, so you do not usually have to set it yourself. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/hardware/graphics.nix>

## hardware.graphics.enable32Bit

On 64-bit systems, whether to also install 32-bit drivers for 32-bit applications (such as Wine). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/hardware/graphics.nix>

## hardware.graphics.package

The package that provides the default driver set. Type: package Declared by: <nixpkgs/nixos/modules/hardware/graphics.nix>

## hardware.graphics.package32

The package that provides the 32-bit driver set. Used when enable32Bit is enabled. Type: package Declared by: <nixpkgs/nixos/modules/hardware/graphics.nix>

## hardware.graphics.extraPackages

Additional packages to add to the default graphics driver lookup path. This can be used to add OpenCL drivers, VA-API/VDPAU drivers, etc. Note intel-media-driver supports hardware Broadwell (2014) or newer. Older hardware should use the mostly unmaintained intel-vaapi-driver driver. Type: list of package Default: [ ] Example: with pkgs; [ intel-media-driver intel-ocl intel-vaapi-driver ] Declared by: <nixpkgs/nixos/modules/hardware/graphics.nix>

## hardware.graphics.extraPackages32

Additional packages to add to 32-bit graphics driver lookup path on 64-bit systems. Used when enable32Bit is set. This can be used to add OpenCL drivers, VA-API/VDPAU drivers, etc. Note intel-media-driver supports hardware Broadwell (2014) or newer. Older hardware should use the mostly unmaintained intel-vaapi-driver driver. Type: list of package Default: [ ] Example: with pkgs.pkgsi686Linux; [ intel-media-driver intel-vaapi-driver ] Declared by: <nixpkgs/nixos/modules/hardware/graphics.nix>
