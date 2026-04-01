---
module: services.nebula.networks.<name>
option_count: 12
source: options.html
---

# services.nebula.networks.<name>

## services.nebula.networks.<name>.enable

Enable or disable this network. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/nebula.nix>

## services.nebula.networks.<name>.enableReload

Enable automatic config reload on config change. This setting is not enabled by default as nix cannot determine if the config change is reloadable. Please refer to the config reference for documentation on reloadable changes. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/nebula.nix>

## services.nebula.networks.<name>.package

The nebula package to use. Type: package Default: pkgs.nebula Declared by: <nixpkgs/nixos/modules/services/networking/nebula.nix>

## services.nebula.networks.<name>.ca

Path to the certificate authority certificate. Type: absolute path Example: "/etc/nebula/ca.crt" Declared by: <nixpkgs/nixos/modules/services/networking/nebula.nix>

## services.nebula.networks.<name>.cert

Path to the host certificate. Type: absolute path Example: "/etc/nebula/host.crt" Declared by: <nixpkgs/nixos/modules/services/networking/nebula.nix>

## services.nebula.networks.<name>.isLighthouse

Whether this node is a lighthouse. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/nebula.nix>

## services.nebula.networks.<name>.isRelay

Whether this node is a relay. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/nebula.nix>

## services.nebula.networks.<name>.key

Path or reference to the host key. Type: non-empty string or absolute path Example: "/etc/nebula/host.key" Declared by: <nixpkgs/nixos/modules/services/networking/nebula.nix>

## services.nebula.networks.<name>.lighthouses

List of IPs of lighthouse hosts this node should report to and query from. This should be empty on lighthouse nodes. The IPs should be the lighthouse’s Nebula IPs, not their external IPs. Type: list of string Default: [ ] Example: [ "192.168.100.1" ] Declared by: <nixpkgs/nixos/modules/services/networking/nebula.nix>

## services.nebula.networks.<name>.relays

List of IPs of relays that this node should allow traffic from. Type: list of string Default: [ ] Example: [ "192.168.100.1" ] Declared by: <nixpkgs/nixos/modules/services/networking/nebula.nix>

## services.nebula.networks.<name>.settings

Nebula configuration. Refer to https://github.com/slackhq/nebula/blob/master/examples/config.yml for details on supported values. Type: YAML 1.1 value Default: { } Example: { lighthouse.interval = 15; } Declared by: <nixpkgs/nixos/modules/services/networking/nebula.nix>

## services.nebula.networks.<name>.staticHostMap

The static host map defines a set of hosts with fixed IP addresses on the internet (or any network). A host can have multiple fixed IP addresses defined here, and nebula will try each when establishing a tunnel. Type: attribute set of list of string Default: { } Example: { "192.168.100.1" = [ "100.64.22.11:4242" ]; } Declared by: <nixpkgs/nixos/modules/services/networking/nebula.nix>
