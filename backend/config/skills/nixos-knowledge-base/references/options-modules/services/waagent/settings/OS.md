---
module: services.waagent.settings.OS
option_count: 2
source: options.html
---

# services.waagent.settings.OS

## services.waagent.settings.OS.EnableRDMA

If enabled, the agent attempts to install and then load an RDMA kernel driver that matches the version of the firmware on the underlying hardware. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/waagent.nix>

## services.waagent.settings.OS.RootDeviceScsiTimeout

Configures the SCSI timeout in seconds on the OS disk and data drives. If set to null, the system defaults are used. Type: null or signed integer Default: 300 Declared by: <nixpkgs/nixos/modules/virtualisation/waagent.nix>
