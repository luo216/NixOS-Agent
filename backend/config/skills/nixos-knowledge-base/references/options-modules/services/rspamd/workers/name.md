---
module: services.rspamd.workers.<name>
option_count: 7
source: options.html
---

# services.rspamd.workers.<name>

## services.rspamd.workers.<name>.enable

Whether to run the rspamd worker. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/mail/rspamd.nix>

## services.rspamd.workers.<name>.bindSockets

List of sockets to listen, in format acceptable by rspamd Type: list of (string or (submodule)) Default: [ ] Example: [ { mode = "0666"; owner = "rspamd"; socket = "/run/rspamd.sock"; } "*:11333" ] Declared by: <nixpkgs/nixos/modules/services/mail/rspamd.nix>

## services.rspamd.workers.<name>.count

Number of worker instances to run Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/mail/rspamd.nix>

## services.rspamd.workers.<name>.extraConfig

Additional entries to put verbatim into worker section of rspamd config file. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/mail/rspamd.nix>

## services.rspamd.workers.<name>.includes

List of files to include in configuration Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/mail/rspamd.nix>

## services.rspamd.workers.<name>.name

Name of the worker Type: null or string Default: "‹name›" Declared by: <nixpkgs/nixos/modules/services/mail/rspamd.nix>

## services.rspamd.workers.<name>.type

The type of this worker. The type proxy is deprecated and only kept for backwards compatibility and should be replaced with rspamd_proxy. Type: null or one of “normal”, “controller”, “fuzzy”, “rspamd_proxy”, “lua”, “proxy” Declared by: <nixpkgs/nixos/modules/services/mail/rspamd.nix>
