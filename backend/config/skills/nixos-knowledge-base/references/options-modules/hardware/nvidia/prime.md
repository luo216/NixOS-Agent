---
module: hardware.nvidia.prime
option_count: 4
source: options.html
---

# hardware.nvidia.prime

## hardware.nvidia.prime.allowExternalGpu

Whether to enable configuring X to allow external NVIDIA GPUs when using Prime [Reverse] sync optimus . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/hardware/video/nvidia.nix>

## hardware.nvidia.prime.amdgpuBusId

Bus ID of the AMD APU. You can find it using lspci; for example if lspci shows the AMD APU at “0001:02:03.4”, set this option to “PCI:2@1:3:4”. lspci might omit the PCI domain (0001 in above example) if it is zero. In which case, use “@0” instead. Please be aware that this option takes decimal address while lspci reports hexadecimal address. So for device at domain “10000”, use “@65536”. Type: string matching the pattern ([[:print:]]+:[0-9]{1,3}(@[0-9]{1,10})?:[0-9]{1,2}:[0-9])? Default: "" Example: "PCI:4@0:0:0" Declared by: <nixpkgs/nixos/modules/hardware/video/nvidia.nix>

## hardware.nvidia.prime.intelBusId

Bus ID of the Intel GPU. You can find it using lspci; for example if lspci shows the Intel GPU at “0001:02:03.4”, set this option to “PCI:2@1:3:4”. lspci might omit the PCI domain (0001 in above example) if it is zero. In which case, use “@0” instead. Please be aware that this option takes decimal address while lspci reports hexadecimal address. So for device at domain “10000”, use “@65536”. Type: string matching the pattern ([[:print:]]+:[0-9]{1,3}(@[0-9]{1,10})?:[0-9]{1,2}:[0-9])? Default: "" Example: "PCI:0@0:2:0" Declared by: <nixpkgs/nixos/modules/hardware/video/nvidia.nix>

## hardware.nvidia.prime.nvidiaBusId

Bus ID of the NVIDIA GPU. You can find it using lspci; for example if lspci shows the NVIDIA GPU at “0001:02:03.4”, set this option to “PCI:2@1:3:4”. lspci might omit the PCI domain (0001 in above example) if it is zero. In which case, use “@0” instead. Please be aware that this option takes decimal address while lspci reports hexadecimal address. So for device at domain “10000”, use “@65536”. Type: string matching the pattern ([[:print:]]+:[0-9]{1,3}(@[0-9]{1,10})?:[0-9]{1,2}:[0-9])? Default: "" Example: "PCI:1@0:0:0" Declared by: <nixpkgs/nixos/modules/hardware/video/nvidia.nix>
