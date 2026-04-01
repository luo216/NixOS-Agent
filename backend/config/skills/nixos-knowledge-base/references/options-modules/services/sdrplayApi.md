---
module: services.sdrplayApi
option_count: 1
source: options.html
---

# services.sdrplayApi

## services.sdrplayApi.enable

Whether to enable the SDRplay API service and udev rules. Note To enable integration with SoapySDR and GUI applications like gqrx create an overlay containing soapysdr-with-plugins = super.soapysdr.override { extraPackages = [ super.soapysdrplay ]; }; Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/sdrplay.nix>
