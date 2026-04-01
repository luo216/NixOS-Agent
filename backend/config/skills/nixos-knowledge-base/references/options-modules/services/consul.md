---
module: services.consul
option_count: 9
source: options.html
---

# services.consul

## services.consul.enable

Enables the consul daemon. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/consul.nix>

## services.consul.package

The consul package to use. Type: package Default: pkgs.consul Declared by: <nixpkgs/nixos/modules/services/networking/consul.nix>

## services.consul.dropPrivileges

Whether the consul agent should be run as a non-root consul user. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/consul.nix>

## services.consul.extraConfig

Extra configuration options which are serialized to json and added to the config.json file. Type: attribute set of anything Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/consul.nix>

## services.consul.extraConfigFiles

Additional configuration files to pass to consul NOTE: These will not trigger the service to be restarted when altered. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/consul.nix>

## services.consul.forceAddrFamily

Whether to bind ipv4/ipv6 or both kind of addresses. Type: one of “any”, “ipv4”, “ipv6” Default: "any" Declared by: <nixpkgs/nixos/modules/services/networking/consul.nix>

## services.consul.forceIpv4

Deprecated: Use consul.forceAddrFamily instead. Whether we should force the interfaces to only pull ipv4 addresses. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/networking/consul.nix>

## services.consul.leaveOnStop

If enabled, causes a leave action to be sent when closing consul. This allows a clean termination of the node, but permanently removes it from the cluster. You probably don’t want this option unless you are running a node which going offline in a permanent / semi-permanent fashion. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/consul.nix>

## services.consul.webUi

Enables the web interface on the consul http port. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/consul.nix>
