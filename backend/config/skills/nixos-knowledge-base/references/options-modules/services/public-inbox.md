---
module: services.public-inbox
option_count: 7
source: options.html
---

# services.public-inbox

## services.public-inbox.enable

Whether to enable the public-inbox mail archiver. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/mail/public-inbox.nix>

## services.public-inbox.package

The public-inbox package to use. Type: package Default: pkgs.public-inbox Declared by: <nixpkgs/nixos/modules/services/mail/public-inbox.nix>

## services.public-inbox.inboxes

Inboxes to configure, where attribute names are inbox names. Type: attribute set of (open submodule of attribute set of (INI atom (null, bool, int, float or string) or a list of them for duplicate keys)) Default: { } Declared by: <nixpkgs/nixos/modules/services/mail/public-inbox.nix>

## services.public-inbox.openFirewall

Whether to enable opening the firewall when using a port option. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/mail/public-inbox.nix>

## services.public-inbox.path

Additional packages to place in the path of public-inbox-mda, public-inbox-watch, etc. Type: list of package Default: [ ] Example: with pkgs; [ spamassassin ] Declared by: <nixpkgs/nixos/modules/services/mail/public-inbox.nix>

## services.public-inbox.settings

Settings for the public-inbox config file. Type: open submodule of attribute set of attribute set of (INI atom (null, bool, int, float or string) or a list of them for duplicate keys or attribute set of (INI atom (null, bool, int, float or string) or a list of them for duplicate keys)) Default: { } Declared by: <nixpkgs/nixos/modules/services/mail/public-inbox.nix>

## services.public-inbox.spamAssassinRules

SpamAssassin configuration specific to public-inbox. Type: null or absolute path Default: ${cfg.package.sa_config}/user/.spamassassin/user_prefs Declared by: <nixpkgs/nixos/modules/services/mail/public-inbox.nix>
