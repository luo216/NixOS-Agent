---
module: powerManagement
option_count: 6
source: options.html
---

# powerManagement

## powerManagement.enable

Whether to enable power management. This includes support for suspend-to-RAM and powersave features on laptops. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/config/power-management.nix>

## powerManagement.cpuFreqGovernor

Configure the governor used to regulate the frequency of the available CPUs. By default, the kernel configures the performance governor, although this may be overwritten in your hardware-configuration.nix file. Often used values: “ondemand”, “powersave”, “performance” Type: null or string Default: null Example: "ondemand" Declared by: <nixpkgs/nixos/modules/tasks/cpu-freq.nix>

## powerManagement.powerDownCommands

Commands executed when the machine powers down. That is, they’re executed both when the system shuts down and when it goes to suspend or hibernation. Type: strings concatenated with “\n” Default: "" Example: "${pkgs.hdparm}/sbin/hdparm -B 255 /dev/sda" Declared by: <nixpkgs/nixos/modules/config/power-management.nix>

## powerManagement.powerUpCommands

Commands executed when the machine powers up. That is, they’re executed both when the system first boots and when it resumes from suspend or hibernation. Type: strings concatenated with “\n” Default: "" Example: "${pkgs.hdparm}/sbin/hdparm -B 255 /dev/sda" Declared by: <nixpkgs/nixos/modules/config/power-management.nix>

## powerManagement.resumeCommands

Commands executed after the system resumes from suspend-to-RAM. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/config/power-management.nix>

## powerManagement.scsiLinkPolicy

SCSI link power management policy. The kernel default is “max_performance”. “med_power_with_dipm” is supported by kernel versions 4.15 and newer. Type: null or one of “min_power”, “max_performance”, “medium_power”, “med_power_with_dipm” Default: null Declared by: <nixpkgs/nixos/modules/tasks/scsi-link-power-management.nix>
