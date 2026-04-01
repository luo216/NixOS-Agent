---
module: services.gitlab.puma
option_count: 3
source: options.html
---

# services.gitlab.puma

## services.gitlab.puma.threadsMax

The maximum number of threads Puma should use per worker. This limits how many threads Puma will automatically spawn in response to requests. In contrast to workers, threads will never be able to run Ruby code in parallel, but give higher IO parallelism. Note Each thread consumes memory and contributes to Global VM Lock contention, so be careful when increasing this. Type: signed integer Default: 4 Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.puma.threadsMin

The minimum number of threads Puma should use per worker. Note Each thread consumes memory and contributes to Global VM Lock contention, so be careful when increasing this. Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.puma.workers

The number of worker processes Puma should spawn. This controls the amount of parallel Ruby code can be executed. GitLab recommends Number of CPU cores - 1, but at least two. Note Each worker consumes quite a bit of memory, so be careful when increasing this. Type: signed integer Default: 2 Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>
