---
module: networking.wireguard.interfaces.<name>
option_count: 20
source: options.html
---

# networking.wireguard.interfaces.<name>

## networking.wireguard.interfaces.<name>.allowedIPsAsRoutes

Determines whether to add allowed IPs as routes or not. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/networking/wireguard.nix>

## networking.wireguard.interfaces.<name>.dynamicEndpointRefreshSeconds

Periodically refresh the endpoint hostname or address for all peers. Allows WireGuard to notice DNS and IPv4/IPv6 connectivity changes. This option can be set or overridden for individual peers. Setting this to 0 disables periodic refresh. Type: signed integer Default: 0 Example: 300 Declared by: <nixpkgs/nixos/modules/services/networking/wireguard.nix>

## networking.wireguard.interfaces.<name>.extraOptions

Extra options to append to the interface section. Can be used to define AmneziaWG-specific options. Type: attribute set of (string or signed integer) Default: { } Example: { H4 = 12345; Jc = 5; Jmax = 42; Jmin = 10; S1 = 60; S2 = 90; } Declared by: <nixpkgs/nixos/modules/services/networking/wireguard.nix>

## networking.wireguard.interfaces.<name>.fwMark

Mark all wireguard packets originating from this interface with the given firewall mark. The firewall mark can be used in firewalls or policy routing to filter the wireguard packets. This can be useful for setup where all traffic goes through the wireguard tunnel, because the wireguard packets need to be routed differently. Type: null or string Default: null Example: "0x6e6978" Declared by: <nixpkgs/nixos/modules/services/networking/wireguard.nix>

## networking.wireguard.interfaces.<name>.generatePrivateKeyFile

Automatically generate a private key with wg genkey, at the privateKeyFile location. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/wireguard.nix>

## networking.wireguard.interfaces.<name>.interfaceNamespace

The pre-existing network namespace the WireGuard interface is moved to. The special value init means the init namespace. When null, the interface is not moved. See documentation. Type: null or string Default: null Example: "init" Declared by: <nixpkgs/nixos/modules/services/networking/wireguard.nix>

## networking.wireguard.interfaces.<name>.ips

The IP addresses of the interface. Type: list of string Default: [ ] Example: [ "192.168.2.1/24" ] Declared by: <nixpkgs/nixos/modules/services/networking/wireguard.nix>

## networking.wireguard.interfaces.<name>.listenPort

16-bit port for listening. Optional; if not specified, automatically generated based on interface name. Type: null or signed integer Default: null Example: 51820 Declared by: <nixpkgs/nixos/modules/services/networking/wireguard.nix>

## networking.wireguard.interfaces.<name>.metric

Set the metric of routes related to this Wireguard interface. Type: null or signed integer Default: null Example: 700 Declared by: <nixpkgs/nixos/modules/services/networking/wireguard.nix>

## networking.wireguard.interfaces.<name>.mtu

Set the maximum transmission unit in bytes for the wireguard interface. Beware that the wireguard packets have a header that may add up to 80 bytes to the mtu. By default, the MTU is (1500 - 80) = 1420. However, if the MTU of the upstream network is lower, the MTU of the wireguard network has to be adjusted as well. Type: null or signed integer Default: null Example: 1280 Declared by: <nixpkgs/nixos/modules/services/networking/wireguard.nix>

## networking.wireguard.interfaces.<name>.peers

Peers linked to the interface. Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/wireguard.nix>

## networking.wireguard.interfaces.<name>.postSetup

Commands called at the end of the interface setup. Type: strings concatenated with “\n” or (list of string) convertible to it Default: "" Example: ''printf "nameserver 10.200.100.1" | ${pkgs.openresolv}/bin/resolvconf -a wg0 -m 0'' Declared by: <nixpkgs/nixos/modules/services/networking/wireguard.nix>

## networking.wireguard.interfaces.<name>.postShutdown

Commands called after shutting down the interface. Type: strings concatenated with “\n” or (list of string) convertible to it Default: "" Example: "${pkgs.openresolv}/bin/resolvconf -d wg0" Declared by: <nixpkgs/nixos/modules/services/networking/wireguard.nix>

## networking.wireguard.interfaces.<name>.preSetup

Commands called at the start of the interface setup. Type: strings concatenated with “\n” or (list of string) convertible to it Default: "" Example: "${pkgs.iproute2}/bin/ip netns add foo" Declared by: <nixpkgs/nixos/modules/services/networking/wireguard.nix>

## networking.wireguard.interfaces.<name>.preShutdown

Commands called before shutting down the interface. Type: strings concatenated with “\n” or (list of string) convertible to it Default: "" Example: "${pkgs.iproute2}/bin/ip netns del foo" Declared by: <nixpkgs/nixos/modules/services/networking/wireguard.nix>

## networking.wireguard.interfaces.<name>.privateKey

Base64 private key generated by wg genkey. Warning: Consider using privateKeyFile instead if you do not want to store the key in the world-readable Nix store. Type: null or string Default: null Example: "yAnz5TF+lXXJte14tji3zlMNq+hd2rYUIgJBgB3fBmk=" Declared by: <nixpkgs/nixos/modules/services/networking/wireguard.nix>

## networking.wireguard.interfaces.<name>.privateKeyFile

Private key file as generated by wg genkey. Type: null or string Default: null Example: "/private/wireguard_key" Declared by: <nixpkgs/nixos/modules/services/networking/wireguard.nix>

## networking.wireguard.interfaces.<name>.socketNamespace

The pre-existing network namespace in which the WireGuard interface is created, and which retains the socket even if the interface is moved via interfaceNamespace. When null, the interface is created in the init namespace. See documentation. Type: null or string Default: null Example: "container" Declared by: <nixpkgs/nixos/modules/services/networking/wireguard.nix>

## networking.wireguard.interfaces.<name>.table

The kernel routing table to add this interface’s associated routes to. Setting this is useful for e.g. policy routing (“ip rule”) or virtual routing and forwarding (“ip vrf”). Both numeric table IDs and table names (/etc/rt_tables) can be used. Defaults to “main”. Type: string Default: "main" Declared by: <nixpkgs/nixos/modules/services/networking/wireguard.nix>

## networking.wireguard.interfaces.<name>.type

The type of the interface. Currently only “wireguard” and “amneziawg” are supported. Type: one of “wireguard”, “amneziawg” Default: "wireguard" Example: "amneziawg" Declared by: <nixpkgs/nixos/modules/services/networking/wireguard.nix>
