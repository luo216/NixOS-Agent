---
module: hardware.sensor.iio
option_count: 2
source: options.html
---

# hardware.sensor.iio

## hardware.sensor.iio.enable

Enable this option to support IIO sensors with iio-sensor-proxy. IIO sensors are used for orientation and ambient light sensors on some mobile devices. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/hardware/sensor/iio.nix>

## hardware.sensor.iio.package

The iio-sensor-proxy package to use. Type: package Default: pkgs.iio-sensor-proxy Declared by: <nixpkgs/nixos/modules/hardware/sensor/iio.nix>
