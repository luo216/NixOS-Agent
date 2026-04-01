---
module: services.synapse-auto-compressor
option_count: 4
source: options.html
---

# services.synapse-auto-compressor

## services.synapse-auto-compressor.enable

Whether to enable synapse-auto-compressor. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/matrix/synapse-auto-compressor.nix>

## services.synapse-auto-compressor.package

The rust-synapse-compress-state package to use. Type: package Default: pkgs.rust-synapse-compress-state Declared by: <nixpkgs/nixos/modules/services/matrix/synapse-auto-compressor.nix>

## services.synapse-auto-compressor.postgresUrl

Connection string to postgresql in the rust postgres crate config format. The module will attempt to build a URL-style connection string out of the services.matrix-synapse.settings.database.args if a local synapse is enabled. Type: string Default: let synapseConfig = config.services.matrix-synapse; args = synapseConfig.settings.database.args; in if synapseConfig.enable then ''postgresql://${args.user}${lib.optionalString (args ? password) (":" + args.password)}@${ lib.escapeURL (if (args ? host) then args.host else "/run/postgresql") }${lib.optionalString (args ? port) (":" + args.port)}${args.database}'' else null; Example: "postgresql://username:password@mydomain.com:port/database" Declared by: <nixpkgs/nixos/modules/services/matrix/synapse-auto-compressor.nix>

## services.synapse-auto-compressor.startAt

How often to run this service in systemd calendar syntax (see systemd.time(7)) Type: string or list of string Default: "weekly" Example: "daily" Declared by: <nixpkgs/nixos/modules/services/matrix/synapse-auto-compressor.nix>
