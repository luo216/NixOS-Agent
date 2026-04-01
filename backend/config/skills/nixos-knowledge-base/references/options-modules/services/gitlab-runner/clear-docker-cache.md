---
module: services.gitlab-runner.clear-docker-cache
option_count: 4
source: options.html
---

# services.gitlab-runner.clear-docker-cache

## services.gitlab-runner.clear-docker-cache.enable

Whether to periodically prune gitlab runner’s Docker resources. If enabled, a systemd timer will run clear-docker-cache as specified by the dates option. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitlab-runner.nix>

## services.gitlab-runner.clear-docker-cache.package

Docker package to use for clearing up docker cache. Type: unspecified value Default: config.virtualisation.docker.package Example: pkgs.docker Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitlab-runner.nix>

## services.gitlab-runner.clear-docker-cache.dates

Specification (in the format described by systemd.time(7)) of the time at which the prune will occur. Type: string Default: "weekly" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitlab-runner.nix>

## services.gitlab-runner.clear-docker-cache.flags

Any additional flags passed to clear-docker-cache. Type: list of string Default: [ ] Example: [ "prune" ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitlab-runner.nix>
