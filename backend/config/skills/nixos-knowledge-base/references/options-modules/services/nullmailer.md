---
module: services.nullmailer
option_count: 5
source: options.html
---

# services.nullmailer

## services.nullmailer.enable

Whether to enable nullmailer daemon. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/mail/nullmailer.nix>

## services.nullmailer.group

Group to use to run nullmailer-send. Type: string Default: "nullmailer" Declared by: <nixpkgs/nixos/modules/services/mail/nullmailer.nix>

## services.nullmailer.remotesFile

Path to the remotes control file. This file contains a list of remote servers to which to send each message. See man 8 nullmailer-send for syntax and available options. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/mail/nullmailer.nix>

## services.nullmailer.setSendmail

Whether to set the system sendmail to nullmailer’s. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/mail/nullmailer.nix>

## services.nullmailer.user

User to use to run nullmailer-send. Type: string Default: "nullmailer" Declared by: <nixpkgs/nixos/modules/services/mail/nullmailer.nix>
