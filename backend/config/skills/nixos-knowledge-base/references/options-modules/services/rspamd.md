---
module: services.rspamd
option_count: 10
source: options.html
---

# services.rspamd

## services.rspamd.enable

Whether to enable rspamd, the Rapid spam filtering system. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/mail/rspamd.nix>

## services.rspamd.package

The rspamd package to use. Type: package Default: pkgs.rspamd Declared by: <nixpkgs/nixos/modules/services/mail/rspamd.nix>

## services.rspamd.debug

Whether to run the rspamd daemon in debug mode. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/mail/rspamd.nix>

## services.rspamd.extraConfig

Extra configuration to add at the end of the rspamd configuration file. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/mail/rspamd.nix>

## services.rspamd.group

Group to use when no root privileges are required. Type: string Default: "rspamd" Declared by: <nixpkgs/nixos/modules/services/mail/rspamd.nix>

## services.rspamd.localLuaRules

Path of file to link to /etc/rspamd/rspamd.local.lua for local rules written in Lua Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/mail/rspamd.nix>

## services.rspamd.locals

Local configuration files, written into /etc/rspamd/local.d/{name}. Type: attribute set of (submodule) Default: { } Example: { "redis.conf".source = "/nix/store/.../etc/dir/redis.conf"; "arc.conf".text = "allow_envfrom_empty = true;"; } Declared by: <nixpkgs/nixos/modules/services/mail/rspamd.nix>

## services.rspamd.overrides

Overridden configuration files, written into /etc/rspamd/override.d/{name}. Type: attribute set of (submodule) Default: { } Example: { "redis.conf".source = "/nix/store/.../etc/dir/redis.conf"; "arc.conf".text = "allow_envfrom_empty = true;"; } Declared by: <nixpkgs/nixos/modules/services/mail/rspamd.nix>

## services.rspamd.user

User to use when no root privileges are required. Type: string Default: "rspamd" Declared by: <nixpkgs/nixos/modules/services/mail/rspamd.nix>

## services.rspamd.workers

Attribute set of workers to start. Type: attribute set of (submodule) Default: { controller = { }; normal = { }; } Example: { normal = { includes = [ "$CONFDIR/worker-normal.inc" ]; bindSockets = [{ socket = "/run/rspamd/rspamd.sock"; mode = "0660"; owner = "${config.services.rspamd.user}"; group = "${config.services.rspamd.group}"; }]; }; controller = { includes = [ "$CONFDIR/worker-controller.inc" ]; bindSockets = [ "[::1]:11334" ]; }; } Declared by: <nixpkgs/nixos/modules/services/mail/rspamd.nix>
