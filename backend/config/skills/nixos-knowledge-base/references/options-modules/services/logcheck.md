---
module: services.logcheck
option_count: 11
source: options.html
---

# services.logcheck

## services.logcheck.enable

Whether to enable logcheck cron job, to mail anomalies in the system logfiles to the administrator. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/logging/logcheck.nix>

## services.logcheck.config

Config options that you would like in logcheck.conf. Type: strings concatenated with “\n” Default: "FQDN=1" Declared by: <nixpkgs/nixos/modules/services/logging/logcheck.nix>

## services.logcheck.extraGroups

Extra groups for the logcheck user, for example to be able to use sendmail, or to access certain log files. Type: list of string Default: [ ] Example: [ "postdrop" "mongodb" ] Declared by: <nixpkgs/nixos/modules/services/logging/logcheck.nix>

## services.logcheck.extraRulesDirs

Directories with extra rules. Type: list of absolute path Default: [ ] Example: [ "/etc/logcheck" ] Declared by: <nixpkgs/nixos/modules/services/logging/logcheck.nix>

## services.logcheck.files

Which log files to check. Type: list of absolute path Default: [ "/var/log/messages" ] Example: [ "/var/log/messages" "/var/log/mail" ] Declared by: <nixpkgs/nixos/modules/services/logging/logcheck.nix>

## services.logcheck.ignore

This option defines extra ignore rules. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/logging/logcheck.nix>

## services.logcheck.ignoreCron

This option defines extra ignore rules for cronjobs. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/logging/logcheck.nix>

## services.logcheck.level

Set the logcheck level. Either “workstation”, “server”, or “paranoid”. Type: string Default: "server" Declared by: <nixpkgs/nixos/modules/services/logging/logcheck.nix>

## services.logcheck.mailTo

Email address to send reports to. Type: string Default: "root" Example: "you@domain.com" Declared by: <nixpkgs/nixos/modules/services/logging/logcheck.nix>

## services.logcheck.timeOfDay

Time of day to run logcheck. A logcheck will be scheduled at xx:02 each day. Leave default (*) to run every hour. Of course when nothing special was logged, logcheck will be silent. Type: string Default: "*" Example: "6" Declared by: <nixpkgs/nixos/modules/services/logging/logcheck.nix>

## services.logcheck.user

Username for the logcheck user. Type: string Default: "logcheck" Declared by: <nixpkgs/nixos/modules/services/logging/logcheck.nix>
