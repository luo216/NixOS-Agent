---
module: services.rsync.jobs.<name>
option_count: 7
source: options.html
---

# services.rsync.jobs.<name>

## services.rsync.jobs.<name>.destination

Destination directory. Type: string Example: "/srv/dst" Declared by: <nixpkgs/nixos/modules/services/misc/rsync.nix>

## services.rsync.jobs.<name>.group

The name of an existing user group under which the rsync process should run. Type: string Default: "root" Declared by: <nixpkgs/nixos/modules/services/misc/rsync.nix>

## services.rsync.jobs.<name>.inhibit

Run the rsync process with an inhibition lock taken; see systemd-inhibit(1) for a list of possible operations. Type: list of string matching the pattern ^[^:]+$ Default: [ ] Example: [ "sleep" ] Declared by: <nixpkgs/nixos/modules/services/misc/rsync.nix>

## services.rsync.jobs.<name>.settings

Settings that should be passed to rsync via long options. See rsync(1) for available options. Type: attribute set of (boolean or string or signed integer or floating point number or list of (boolean or string or signed integer or floating point number)) Default: { } Example: { archive = true; delete = true; mkpath = true; verbose = true; } Declared by: <nixpkgs/nixos/modules/services/misc/rsync.nix>

## services.rsync.jobs.<name>.sources

Source directories. Type: non-empty (list of string) Example: [ "/srv/src1/" "/srv/src2/" ] Declared by: <nixpkgs/nixos/modules/services/misc/rsync.nix>

## services.rsync.jobs.<name>.timerConfig

When to run the job. Type: null or (attribute set of (systemd option)) Default: { OnCalendar = "daily"; Persistent = true; } Declared by: <nixpkgs/nixos/modules/services/misc/rsync.nix>

## services.rsync.jobs.<name>.user

The name of an existing user account under which the rsync process should run. Type: string Default: "root" Declared by: <nixpkgs/nixos/modules/services/misc/rsync.nix>
