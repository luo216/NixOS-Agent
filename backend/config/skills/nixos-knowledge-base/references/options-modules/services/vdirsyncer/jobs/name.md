---
module: services.vdirsyncer.jobs.<name>
option_count: 7
source: options.html
---

# services.vdirsyncer.jobs.<name>

## services.vdirsyncer.jobs.<name>.enable

Whether to enable this vdirsyncer job. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/networking/vdirsyncer.nix>

## services.vdirsyncer.jobs.<name>.additionalGroups

additional groups to add the dynamic user to Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/vdirsyncer.nix>

## services.vdirsyncer.jobs.<name>.configFile

existing configuration file Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/vdirsyncer.nix>

## services.vdirsyncer.jobs.<name>.forceDiscover

Run yes | vdirsyncer discover prior to vdirsyncer sync Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/vdirsyncer.nix>

## services.vdirsyncer.jobs.<name>.group

group to run vdirsyncer as Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/vdirsyncer.nix>

## services.vdirsyncer.jobs.<name>.timerConfig

systemd timer configuration Type: attribute set Default: { OnBootSec = "1h"; OnUnitActiveSec = "6h"; } Declared by: <nixpkgs/nixos/modules/services/networking/vdirsyncer.nix>

## services.vdirsyncer.jobs.<name>.user

User account to run vdirsyncer as, otherwise as a systemd dynamic user Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/vdirsyncer.nix>
