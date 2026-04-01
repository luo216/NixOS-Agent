---
module: services.matrix-synapse.workers.<name>
option_count: 3
source: options.html
---

# services.matrix-synapse.workers.<name>

## services.matrix-synapse.workers.<name>.worker_app

Type of this worker Type: one of “synapse.app.generic_worker”, “synapse.app.media_repository” Default: "synapse.app.generic_worker" Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.workers.<name>.worker_listeners

List of ports that this worker should listen on, their purpose and their configuration. Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>

## services.matrix-synapse.workers.<name>.worker_log_config

The file for log configuration. See the python documentation for the schema and the upstream repository for an example. Type: absolute path Default: Path to a yaml file generated from this Nix expression: { disable_existing_loggers = false; formatters = { journal_fmt = { format = "%(name)s: [%(request)s] %(message)s"; }; }; handlers = { journal = { SYSLOG_IDENTIFIER = "synapse-‹name›"; class = "systemd.journal.JournalHandler"; formatter = "journal_fmt"; }; }; root = { handlers = [ "journal" ]; level = "INFO"; }; version = 1; } Declared by: <nixpkgs/nixos/modules/services/matrix/synapse.nix>
