---
module: containers.<name>.extraVeths.<name>
option_count: 6
source: options.html
---

# containers.<name>.extraVeths.<name>

## containers.<name>.extraVeths.<name>.forwardPorts

List of forwarded ports from host to container. Each forwarded port is specified by protocol, hostPort and containerPort. By default, protocol is tcp and hostPort and containerPort are assumed to be the same if containerPort is not explicitly given. Type: list of (submodule) Default: [ ] Example: [ { containerPort = 80; hostPort = 8080; protocol = "tcp"; } ] Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>

## containers.<name>.extraVeths.<name>.hostAddress

The IPv4 address assigned to the host interface. (Not used when hostBridge is set.) Type: null or string Default: null Example: "10.231.136.1" Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>

## containers.<name>.extraVeths.<name>.hostAddress6

The IPv6 address assigned to the host interface. (Not used when hostBridge is set.) Type: null or string Default: null Example: "fc00::1" Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>

## containers.<name>.extraVeths.<name>.hostBridge

Put the host-side of the veth-pair into the named bridge. Only one of hostAddress* or hostBridge can be given. Type: null or string Default: null Example: "br0" Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>

## containers.<name>.extraVeths.<name>.localAddress

The IPv4 address assigned to the interface in the container. If a hostBridge is used, this should be given with netmask to access the whole network. Otherwise the default netmask is /32 and routing is set up from localAddress to hostAddress and back. Type: null or string Default: null Example: "10.231.136.2" Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>

## containers.<name>.extraVeths.<name>.localAddress6

The IPv6 address assigned to the interface in the container. If a hostBridge is used, this should be given with netmask to access the whole network. Otherwise the default netmask is /128 and routing is set up from localAddress6 to hostAddress6 and back. Type: null or string Default: null Example: "fc00::2" Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>
