---
module: services.gitlab.logrotate
option_count: 3
source: options.html
---

# services.gitlab.logrotate

## services.gitlab.logrotate.enable

Enable rotation of log files. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.logrotate.frequency

How often to rotate the logs. Type: string Default: "daily" Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.logrotate.keep

How many rotations to keep. Type: signed integer Default: 30 Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>
