---
module: services.gitlab.sidekiq.memoryKiller
option_count: 4
source: options.html
---

# services.gitlab.sidekiq.memoryKiller

## services.gitlab.sidekiq.memoryKiller.enable

Whether the Sidekiq MemoryKiller should be turned on. MemoryKiller kills Sidekiq when its memory consumption exceeds a certain limit. See https://docs.gitlab.com/ee/administration/operations/sidekiq_memory_killer.html for details. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.sidekiq.memoryKiller.graceTime

The time MemoryKiller waits after noticing excessive memory consumption before killing Sidekiq. Type: signed integer Default: 900 Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.sidekiq.memoryKiller.maxMemory

The maximum amount of memory, in MiB, a Sidekiq worker is allowed to consume before being killed. Type: signed integer Default: 2000 Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.sidekiq.memoryKiller.shutdownWait

The time allowed for all jobs to finish before Sidekiq is killed forcefully. Type: signed integer Default: 30 Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>
