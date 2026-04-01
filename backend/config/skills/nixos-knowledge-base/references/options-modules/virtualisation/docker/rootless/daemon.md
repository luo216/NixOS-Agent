---
module: virtualisation.docker.rootless.daemon
option_count: 1
source: options.html
---

# virtualisation.docker.rootless.daemon

## virtualisation.docker.rootless.daemon.settings

Configuration for docker daemon. The attributes are serialized to JSON used as daemon.conf. See https://docs.docker.com/engine/reference/commandline/dockerd/#daemon-configuration-file Type: JSON value Default: { } Example: { fixed-cidr-v6 = "fd00::/80"; ipv6 = true; } Declared by: <nixpkgs/nixos/modules/virtualisation/docker-rootless.nix>
