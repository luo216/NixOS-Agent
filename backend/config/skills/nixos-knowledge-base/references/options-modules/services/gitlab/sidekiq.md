---
module: services.gitlab.sidekiq
option_count: 1
source: options.html
---

# services.gitlab.sidekiq

## services.gitlab.sidekiq.concurrency

How many processor threads to use for processing sidekiq background job queues. When null, the GitLab default is used. See https://docs.gitlab.com/ee/administration/sidekiq/extra_sidekiq_processes.html#manage-thread-counts-explicitly for details. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>
