---
module: services.zeyple
option_count: 6
source: options.html
---

# services.zeyple

## services.zeyple.enable

Whether to enable Zeyple, an utility program to automatically encrypt outgoing emails with GPG. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/mail/zeyple.nix>

## services.zeyple.group

Group to use to run Zeyple. Note If left as the default value this group will automatically be created on system activation, otherwise the sysadmin is responsible for ensuring the user exists. Type: string Default: "zeyple" Declared by: <nixpkgs/nixos/modules/services/mail/zeyple.nix>

## services.zeyple.keys

List of public key files that will be imported by gpg. Type: list of absolute path Declared by: <nixpkgs/nixos/modules/services/mail/zeyple.nix>

## services.zeyple.rotateLogs

Whether to enable rotation of log files. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/mail/zeyple.nix>

## services.zeyple.settings

Zeyple configuration. refer to https://github.com/infertux/zeyple/blob/master/zeyple/zeyple.conf.example for details on supported values. Type: attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Declared by: <nixpkgs/nixos/modules/services/mail/zeyple.nix>

## services.zeyple.user

User to run Zeyple as. Note If left as the default value this user will automatically be created on system activation, otherwise the sysadmin is responsible for ensuring the user exists. Type: string Default: "zeyple" Declared by: <nixpkgs/nixos/modules/services/mail/zeyple.nix>
