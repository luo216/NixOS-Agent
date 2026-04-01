---
module: virtualisation.docker.daemon
option_count: 1
source: options.html
---

# virtualisation.docker.daemon

## virtualisation.docker.daemon.settings

Configuration for docker daemon. The attributes are serialized to JSON used as daemon.conf. See https://docs.docker.com/engine/reference/commandline/dockerd/#daemon-configuration-file Type: open submodule of (JSON value) Default: { } Example: { fixed-cidr-v6 = "fd00::/80"; ipv6 = true; live-restore = true; } Declared by: <nixpkgs/nixos/modules/virtualisation/docker.nix>
