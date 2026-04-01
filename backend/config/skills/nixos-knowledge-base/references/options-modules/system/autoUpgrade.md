---
module: system.autoUpgrade
option_count: 13
source: options.html
---

# system.autoUpgrade

## system.autoUpgrade.enable

Whether to periodically upgrade NixOS to the latest version. If enabled, a systemd timer will run nixos-rebuild switch --upgrade once a day. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/tasks/auto-upgrade.nix>

## system.autoUpgrade.allowReboot

Reboot the system into the new generation instead of a switch if the new generation uses a different kernel, kernel modules or initrd than the booted system. See rebootWindow for configuring the times at which a reboot is allowed. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/tasks/auto-upgrade.nix>

## system.autoUpgrade.channel

The URI of the NixOS channel to use for automatic upgrades. By default, this is the channel set using nix-channel (run nix-channel --list to see the current value). Type: null or string Default: null Example: "https://channels.nixos.org/nixos-14.12-small" Declared by: <nixpkgs/nixos/modules/tasks/auto-upgrade.nix>

## system.autoUpgrade.dates

How often or when upgrade occurs. For most desktop and server systems a sufficient upgrade frequency is once a day. The format is described in systemd.time(7). Type: string Default: "04:40" Example: "daily" Declared by: <nixpkgs/nixos/modules/tasks/auto-upgrade.nix>

## system.autoUpgrade.fixedRandomDelay

Make the randomized delay consistent between runs. This reduces the jitter between automatic upgrades. See randomizedDelaySec for configuring the randomized delay. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/tasks/auto-upgrade.nix>

## system.autoUpgrade.flags

Any additional flags passed to nixos-rebuild. If you are using flakes and use a local repo you can add [ "--update-input" "nixpkgs" "--commit-lock-file" ] to update nixpkgs. Type: list of string Default: [ ] Example: [ "-I" "stuff=/home/alice/nixos-stuff" "--option" "extra-binary-caches" "http://my-cache.example.org/" ] Declared by: <nixpkgs/nixos/modules/tasks/auto-upgrade.nix>

## system.autoUpgrade.flake

The Flake URI of the NixOS configuration to build. Disables the option system.autoUpgrade.channel. Type: null or string Default: null Example: "github:kloenk/nix" Declared by: <nixpkgs/nixos/modules/tasks/auto-upgrade.nix>

## system.autoUpgrade.operation

Whether to run nixos-rebuild switch --upgrade or run nixos-rebuild boot --upgrade Type: one of “switch”, “boot” Default: "switch" Example: "boot" Declared by: <nixpkgs/nixos/modules/tasks/auto-upgrade.nix>

## system.autoUpgrade.persistent

Takes a boolean argument. If true, the time when the service unit was last triggered is stored on disk. When the timer is activated, the service unit is triggered immediately if it would have been triggered at least once during the time when the timer was inactive. Such triggering is nonetheless subject to the delay imposed by RandomizedDelaySec=. This is useful to catch up on missed runs of the service when the system was powered down. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/tasks/auto-upgrade.nix>

## system.autoUpgrade.randomizedDelaySec

Add a randomized delay before each automatic upgrade. The delay will be chosen between zero and this value. This value must be a time span in the format specified by systemd.time(7) Type: string Default: "0" Example: "45min" Declared by: <nixpkgs/nixos/modules/tasks/auto-upgrade.nix>

## system.autoUpgrade.rebootWindow

Define a lower and upper time value (in HH:MM format) which constitute a time window during which reboots are allowed after an upgrade. This option only has an effect when allowReboot is enabled. The default value of null means that reboots are allowed at any time. Type: null or (submodule) Default: null Example: { lower = "01:00"; upper = "05:00"; } Declared by: <nixpkgs/nixos/modules/tasks/auto-upgrade.nix>

## system.autoUpgrade.runGarbageCollection

Whether to automatically run nix-gc.service after a successful system upgrade. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/tasks/auto-upgrade.nix>

## system.autoUpgrade.upgrade

Disable adding the --upgrade parameter when channel is not set, such as when upgrading to the latest version of a flake honouring its lockfile. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/tasks/auto-upgrade.nix>
