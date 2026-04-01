---
module: services.dsnet.settings
option_count: 8
source: options.html
---

# services.dsnet.settings

## services.dsnet.settings.ExternalHostname

The hostname that clients should use to connect to this server. This is used to generate the client configuration files. This is preferred over ExternalIP, as it allows for IPv4 and IPv6, as well as enabling the ability tp change IP. Type: null or string Default: null Example: "vpn.example.com" Declared by: <nixpkgs/nixos/modules/services/networking/dsnet.nix>

## services.dsnet.settings.ExternalIP

The external IP address of the server. This is used to generate the client configuration files for when an ExternalHostname is not set. Leaving this empty will cause dsnet to use the IP address of what looks like the WAN interface. Type: null or string Default: null Example: "192.0.2.1" Declared by: <nixpkgs/nixos/modules/services/networking/dsnet.nix>

## services.dsnet.settings.ExternalIP6

The external IPv6 address of the server. This is used to generate the client configuration files for when an ExternalHostname is not set. Used in preference to ExternalIP. Leaving this empty will cause dsnet to use the IP address of what looks like the WAN interface. Type: null or string Default: null Example: "2001:db8::1" Declared by: <nixpkgs/nixos/modules/services/networking/dsnet.nix>

## services.dsnet.settings.IP

The IPv4 address that the server will use on the network. Leave this empty to let dsnet choose an address. Type: null or string Default: null Example: "172.18.0.1" Declared by: <nixpkgs/nixos/modules/services/networking/dsnet.nix>

## services.dsnet.settings.IP6

The IPv6 address that the server will use on the network Leave this empty to let dsnet choose an address. Type: null or string Default: null Example: "2001:db8::1" Declared by: <nixpkgs/nixos/modules/services/networking/dsnet.nix>

## services.dsnet.settings.Network

The IPv4 network that the server will use to allocate IPs on the network. Leave this empty to let dsnet choose a network. Type: null or string Default: null Example: "172.18.0.0/24" Declared by: <nixpkgs/nixos/modules/services/networking/dsnet.nix>

## services.dsnet.settings.Network6

The IPv6 network that the server will use to allocate IPs on the network. Leave this empty to let dsnet choose a network. Type: null or string Default: null Example: "2001:db8::1/64" Declared by: <nixpkgs/nixos/modules/services/networking/dsnet.nix>

## services.dsnet.settings.Networks

The CIDR networks that should route through this server. Clients will be configured to route traffic for these networks through the server peer. Type: null or (list of string) Default: null Example: [ "0.0.0.0/0" "192.168.0.0/24" ] Declared by: <nixpkgs/nixos/modules/services/networking/dsnet.nix>
