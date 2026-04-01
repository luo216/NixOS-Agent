---
module: services.postfix.settings.master.<name>
option_count: 10
source: options.html
---

# services.postfix.settings.master.<name>

## services.postfix.settings.master.<name>.args

Arguments to pass to the command. There is no shell processing involved and shell syntax is passed verbatim to the process. Type: list of string Default: [ ] Example: [ "-o" "smtp_helo_timeout=5" ] Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.settings.master.<name>.chroot

Whether the service is chrooted to have only access to the services.postfix.queueDir and the closure of store paths specified by the program option. Type: boolean Example: true Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.settings.master.<name>.command

A program name specifying a Postfix service/daemon process. By default it’s the attribute name. Type: string Default: "‹name›" Example: "smtpd" Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.settings.master.<name>.maxproc

The maximum number of processes to spawn for this service. If the value is 0 it doesn’t have any limit. If null is given it uses the postfix default of 100. Type: signed integer Example: 1 Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.settings.master.<name>.name

The name of the service to run. Defaults to the attribute set key. Type: string Default: "‹name›" Example: "smtp" Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.settings.master.<name>.private

Whether the service’s sockets and storage directory is restricted to be only available via the mail system. If null is given it uses the postfix default true. Type: boolean Example: false Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.settings.master.<name>.privileged

Type: boolean Example: true Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.settings.master.<name>.type

The type of the service Type: one of “inet”, “unix”, “unix-dgram”, “fifo”, “pass” Default: "unix" Example: "inet" Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.settings.master.<name>.wakeup

Automatically wake up the service after the specified number of seconds. If 0 is given, never wake the service up. Type: signed integer Example: 60 Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>

## services.postfix.settings.master.<name>.wakeupUnusedComponent

If set to false the component will only be woken up if it is used. This is equivalent to postfix’ notion of adding a question mark behind the wakeup time in master.cf Type: boolean Example: false Declared by: <nixpkgs/nixos/modules/services/mail/postfix.nix>
