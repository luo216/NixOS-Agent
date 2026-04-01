---
module: services.mastodon.sidekiqProcesses.<name>
option_count: 2
source: options.html
---

# services.mastodon.sidekiqProcesses.<name>

## services.mastodon.sidekiqProcesses.<name>.jobClasses

If not empty, which job classes should be executed by this process. Only one process should handle the ‘scheduler’ class. If left empty, this process will handle the ‘scheduler’ class. Type: list of (one of “default”, “fasp”, “push”, “pull”, “mailers”, “scheduler”, “ingress”) Declared by: <nixpkgs/nixos/modules/services/web-apps/mastodon.nix>

## services.mastodon.sidekiqProcesses.<name>.threads

Number of threads this process should use for executing jobs. If null, the configured sidekiqThreads are used. Type: null or signed integer Declared by: <nixpkgs/nixos/modules/services/web-apps/mastodon.nix>
