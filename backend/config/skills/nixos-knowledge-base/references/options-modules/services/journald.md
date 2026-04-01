---
module: services.journald
option_count: 7
source: options.html
---

# services.journald

## services.journald.audit

If enabled systemd-journald will turn on auditing on start-up. If disabled it will turn it off. If unset it will neither enable nor disable it, leaving the previous state unchanged. NixOS defaults to leaving this unset as enabling audit without auditd running leads to spamming /dev/kmesg with random messages and if you enable auditd then auditd is responsible for turning auditing on. If you want to have audit logs in journald and do not mind audit logs also ending up in /dev/kmesg you can set this option to true. If you want to for some ununderstandable reason disable auditing if auditd enabled it then you can set this option to false. It is of NixOS’ opinion that setting this to false is definitely the wrong thing to do - but it’s an option. Type: boolean or value “keep” (singular enum) Default: "keep" Declared by: <nixpkgs/nixos/modules/system/boot/systemd/journald.nix>

## services.journald.console

If non-empty, write log messages to the specified TTY device. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/system/boot/systemd/journald.nix>

## services.journald.extraConfig

Extra config options for systemd-journald. See journald.conf(5) for available options. Type: strings concatenated with “\n” Default: "" Example: "Storage=volatile" Declared by: <nixpkgs/nixos/modules/system/boot/systemd/journald.nix>

## services.journald.forwardToSyslog

Whether to forward log messages to syslog. Type: boolean Default: services.rsyslogd.enable || services.syslog-ng.enable Declared by: <nixpkgs/nixos/modules/system/boot/systemd/journald.nix>

## services.journald.rateLimitBurst

Configures the rate limiting burst limit (number of messages per interval) that is applied to all messages generated on the system. This rate limiting is applied per-service, so that two services which log do not interfere with each other’s limit. Note that the effective rate limit is multiplied by a factor derived from the available free disk space for the journal as described on journald.conf(5). Note that the total amount of logs stored is limited by journald settings such as SystemMaxUse, which defaults to 10% the file system size (capped at max 4GB), and SystemKeepFree, which defaults to 15% of the file system size. It is thus recommended to compute what period of time that you will be able to store logs for when an application logs at full burst rate. With default settings for log lines that are 100 Bytes long, this can amount to just a few hours. Type: signed integer Default: 10000 Declared by: <nixpkgs/nixos/modules/system/boot/systemd/journald.nix>

## services.journald.rateLimitInterval

Configures the rate limiting interval that is applied to all messages generated on the system. This rate limiting is applied per-service, so that two services which log do not interfere with each other’s limit. The value may be specified in the following units: s, min, h, ms, us. To turn off any kind of rate limiting, set either value to 0. See services.journald.rateLimitBurst for important considerations when setting this value. Type: string Default: "30s" Declared by: <nixpkgs/nixos/modules/system/boot/systemd/journald.nix>

## services.journald.storage

Controls where to store journal data. See journald.conf(5) for further information. Type: one of “persistent”, “volatile”, “auto”, “none” Default: "persistent" Declared by: <nixpkgs/nixos/modules/system/boot/systemd/journald.nix>
