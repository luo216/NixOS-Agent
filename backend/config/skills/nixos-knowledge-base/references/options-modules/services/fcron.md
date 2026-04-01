---
module: services.fcron
option_count: 6
source: options.html
---

# services.fcron

## services.fcron.enable

Whether to enable the fcron daemon. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/scheduling/fcron.nix>

## services.fcron.allow

Users allowed to use fcrontab and fcrondyn (one name per line, all for everyone). Type: list of string Default: [ "all" ] Declared by: <nixpkgs/nixos/modules/services/scheduling/fcron.nix>

## services.fcron.deny

Users forbidden from using fcron. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/scheduling/fcron.nix>

## services.fcron.maxSerialJobs

Maximum number of serial jobs which can run simultaneously. Type: signed integer Default: 1 Declared by: <nixpkgs/nixos/modules/services/scheduling/fcron.nix>

## services.fcron.queuelen

Number of jobs the serial queue and the lavg queue can contain. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/scheduling/fcron.nix>

## services.fcron.systab

The “system” crontab contents. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/scheduling/fcron.nix>
