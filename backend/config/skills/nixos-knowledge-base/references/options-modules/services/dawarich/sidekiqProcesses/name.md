---
module: services.dawarich.sidekiqProcesses.<name>
option_count: 2
source: options.html
---

# services.dawarich.sidekiqProcesses.<name>

## services.dawarich.sidekiqProcesses.<name>.jobClasses

If not empty, which job classes should be executed by this process. If left empty, all job classes will be executed by this process. Type: list of (one of “app_version_checking”, “archival”, “cache”, “data_migrations”, “default”, “digests”, “exports”, “families”, “imports”, “mailers”, “places”, “points”, “reverse_geocoding”, “stats”, “tracks”, “trips”, “visit_suggesting”) Declared by: <nixpkgs/nixos/modules/services/web-apps/dawarich.nix>

## services.dawarich.sidekiqProcesses.<name>.threads

Number of threads this process should use for executing jobs. If null, the configured sidekiqThreads are used. Type: null or signed integer Declared by: <nixpkgs/nixos/modules/services/web-apps/dawarich.nix>
