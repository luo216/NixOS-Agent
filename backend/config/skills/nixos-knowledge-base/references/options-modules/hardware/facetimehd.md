---
module: hardware.facetimehd
option_count: 2
source: options.html
---

# hardware.facetimehd

## hardware.facetimehd.enable

Whether to enable the facetimehd kernel module. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/hardware/video/webcam/facetimehd.nix>

## hardware.facetimehd.withCalibration

Whether to include sensor calibration files for facetimehd. This makes colors look much better but is experimental, see https://github.com/patjak/facetimehd/wiki/Extracting-the-sensor-calibration-files for details. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/hardware/video/webcam/facetimehd.nix>
