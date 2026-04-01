---
module: services.dspam
option_count: 7
source: options.html
---

# services.dspam

## services.dspam.enable

Whether to enable the dspam spam filter. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/mail/dspam.nix>

## services.dspam.domainSocket

Path to local domain socket which is used for communication with the daemon. Set to null to disable UNIX socket. Type: null or absolute path Default: "/run/dspam/dspam.sock" Declared by: <nixpkgs/nixos/modules/services/mail/dspam.nix>

## services.dspam.extraConfig

Additional dspam configuration. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/mail/dspam.nix>

## services.dspam.group

Group for the dspam daemon. Type: string Default: "dspam" Declared by: <nixpkgs/nixos/modules/services/mail/dspam.nix>

## services.dspam.maintenanceInterval

If set, maintenance script will be run at specified (in systemd.timer format) interval Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/mail/dspam.nix>

## services.dspam.storageDriver

Storage driver backend to use for dspam. Type: string Default: "hash" Declared by: <nixpkgs/nixos/modules/services/mail/dspam.nix>

## services.dspam.user

User for the dspam daemon. Type: string Default: "dspam" Declared by: <nixpkgs/nixos/modules/services/mail/dspam.nix>
