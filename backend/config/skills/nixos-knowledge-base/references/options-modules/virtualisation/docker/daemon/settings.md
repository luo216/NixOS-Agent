---
module: virtualisation.docker.daemon.settings
option_count: 1
source: options.html
---

# virtualisation.docker.daemon.settings

## virtualisation.docker.daemon.settings.live-restore

Allow dockerd to be restarted without affecting running container. This option is incompatible with docker swarm. Type: boolean Default: lib.versionOlder config.system.stateVersion "24.11" Declared by: <nixpkgs/nixos/modules/virtualisation/docker.nix>
