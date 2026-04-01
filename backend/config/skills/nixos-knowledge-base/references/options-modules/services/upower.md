---
module: services.upower
option_count: 14
source: options.html
---

# services.upower

## services.upower.enable

Whether to enable Upower, a DBus service that provides power management support to applications. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/upower.nix>

## services.upower.enableWattsUpPro

Enable the Watts Up Pro device. The Watts Up Pro contains a generic FTDI USB device without a specific vendor and product ID. When we probe for WUP devices, we can cause the user to get a perplexing “Device or resource busy” error when attempting to use their non-WUP device. The generic FTDI device is known to also be used on: Sparkfun FT232 breakout board Parallax Propeller Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/upower.nix>

## services.upower.package

The upower package to use. Type: package Default: pkgs.upower Declared by: <nixpkgs/nixos/modules/services/hardware/upower.nix>

## services.upower.allowRiskyCriticalPowerAction

Enable the risky critical power actions “Suspend” and “Ignore”. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/upower.nix>

## services.upower.criticalPowerAction

The action to take when timeAction or percentageAction has been reached for the batteries (UPS or laptop batteries) supplying the computer. When set to Suspend or Ignore, services.upower.allowRiskyCriticalPowerAction must be set to true. Type: one of “PowerOff”, “Hibernate”, “HybridSleep”, “Suspend”, “Ignore” Default: "HybridSleep" Declared by: <nixpkgs/nixos/modules/services/hardware/upower.nix>

## services.upower.ignoreLid

Do we ignore the lid state Some laptops are broken. The lid state is either inverted, or stuck on or off. We can’t do much to fix these problems, but this is a way for users to make the laptop panel vanish, a state that might be used by a couple of user-space daemons. On Linux systems, see also logind.conf(5). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/upower.nix>

## services.upower.noPollBatteries

Don’t poll the kernel for battery level changes. Some hardware will send us battery level changes through events, rather than us having to poll for it. This option allows disabling polling for hardware that sends out events. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/upower.nix>

## services.upower.percentageAction

When usePercentageForPolicy is true, the levels at which UPower will take action for the critical battery level. This will also be used for batteries which don’t have time information such as that of peripherals. If any value (of percentageLow, percentageCritical and percentageAction) is invalid, or not in descending order, the defaults will be used. Type: unsigned integer, meaning >=0 Default: 2 Declared by: <nixpkgs/nixos/modules/services/hardware/upower.nix>

## services.upower.percentageCritical

When usePercentageForPolicy is true, the levels at which UPower will consider the battery critical. This will also be used for batteries which don’t have time information such as that of peripherals. If any value (of percentageLow, percentageCritical and percentageAction) is invalid, or not in descending order, the defaults will be used. Type: unsigned integer, meaning >=0 Default: 5 Declared by: <nixpkgs/nixos/modules/services/hardware/upower.nix>

## services.upower.percentageLow

When usePercentageForPolicy is true, the levels at which UPower will consider the battery low. This will also be used for batteries which don’t have time information such as that of peripherals. If any value (of percentageLow, percentageCritical and percentageAction) is invalid, or not in descending order, the defaults will be used. Type: unsigned integer, meaning >=0 Default: 20 Declared by: <nixpkgs/nixos/modules/services/hardware/upower.nix>

## services.upower.timeAction

When usePercentageForPolicy is false, the time remaining in seconds at which UPower will take action for the critical battery level. If any value (of timeLow, timeCritical and timeAction) is invalid, or not in descending order, the defaults will be used. Type: unsigned integer, meaning >=0 Default: 120 Declared by: <nixpkgs/nixos/modules/services/hardware/upower.nix>

## services.upower.timeCritical

When usePercentageForPolicy is false, the time remaining in seconds at which UPower will consider the battery critical. If any value (of timeLow, timeCritical and timeAction) is invalid, or not in descending order, the defaults will be used. Type: unsigned integer, meaning >=0 Default: 300 Declared by: <nixpkgs/nixos/modules/services/hardware/upower.nix>

## services.upower.timeLow

When usePercentageForPolicy is false, the time remaining in seconds at which UPower will consider the battery low. If any value (of timeLow, timeCritical and timeAction) is invalid, or not in descending order, the defaults will be used. Type: unsigned integer, meaning >=0 Default: 1200 Declared by: <nixpkgs/nixos/modules/services/hardware/upower.nix>

## services.upower.usePercentageForPolicy

Policy for warnings and action based on battery levels Whether battery percentage based policy should be used. The default is to use the percentage, which should work around broken firmwares. It is also more reliable than the time left (frantically saving all your files is going to use more battery than letting it rest for example). Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/hardware/upower.nix>
