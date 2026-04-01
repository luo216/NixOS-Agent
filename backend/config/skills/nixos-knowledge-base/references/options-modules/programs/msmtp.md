---
module: programs.msmtp
option_count: 6
source: options.html
---

# programs.msmtp

## programs.msmtp.enable

Whether to enable msmtp - an SMTP client. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/msmtp.nix>

## programs.msmtp.package

The msmtp package to use. Type: package Default: pkgs.msmtp Declared by: <nixpkgs/nixos/modules/programs/msmtp.nix>

## programs.msmtp.accounts

Named accounts and their respective configurations. The special name “default” allows a default account to be defined. See msmtp(1) for the available options. Use programs.msmtp.extraConfig instead of this attribute set-based option if ordered account inheritance is needed. It is advised to use the passwordeval setting to read the password from a secret file to avoid having it written in the world-readable nix store. The password file must end with a newline (\n). Type: attribute set of (attribute set) Default: { } Example: { default = { auth = true; host = "smtp.example"; passwordeval = "cat /secrets/password.txt"; user = "someone"; }; } Declared by: <nixpkgs/nixos/modules/programs/msmtp.nix>

## programs.msmtp.defaults

Default values applied to all accounts. See msmtp(1) for the available options. Type: attribute set Default: { } Example: { aliases = "/etc/aliases"; port = 587; tls = true; } Declared by: <nixpkgs/nixos/modules/programs/msmtp.nix>

## programs.msmtp.extraConfig

Extra lines to add to the msmtp configuration verbatim. See msmtp(1) for the syntax and available options. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/programs/msmtp.nix>

## programs.msmtp.setSendmail

Whether to set the system sendmail to msmtp’s. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/programs/msmtp.nix>
