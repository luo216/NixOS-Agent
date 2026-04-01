---
module: powerManagement.powertop
option_count: 3
source: options.html
---

# powerManagement.powertop

## powerManagement.powertop.enable

Whether to enable powertop auto tuning on startup. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/tasks/powertop.nix>

## powerManagement.powertop.postStart

Shell commands executed after powertop is started. This can be used to workaround problematic configurations. For example, you can retrigger an udev rule to disable power saving on unsupported USB devices: services.udev.extraRules = ''' # disable USB auto suspend for Logitech, Inc. G PRO Gaming Mouse ACTION=="bind", SUBSYSTEM=="usb", ATTR{idVendor}=="046d", ATTR{idProduct}=="c08c", TEST=="power/control", ATTR{power/control}="on" '''; Type: strings concatenated with “\n” Default: "" Example: '' ''${lib.getExe' config.systemd.package "udevadm"} trigger -c bind -s usb -a idVendor=046d -a idProduct=c08c '' Declared by: <nixpkgs/nixos/modules/tasks/powertop.nix>

## powerManagement.powertop.preStart

Shell commands executed before powertop is started. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/tasks/powertop.nix>
