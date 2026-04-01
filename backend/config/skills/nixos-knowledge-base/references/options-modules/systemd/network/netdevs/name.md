---
module: systemd.network.netdevs.<name>
option_count: 24
source: options.html
---

# systemd.network.netdevs.<name>

## systemd.network.netdevs.<name>.enable

Whether to manage network configuration using systemd-network. This also enables systemd.networkd.enable. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.netdevs.<name>.batmanAdvancedConfig

Each attribute in this set specifies an option in the [BatmanAdvanced] section of the unit. See systemd.netdev(5) for details. Type: attribute set of (systemd option) Default: { } Example: { GatewayMode = "server"; RoutingAlgorithm = "batman-v"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.netdevs.<name>.bondConfig

Each attribute in this set specifies an option in the [Bond] section of the unit. See systemd.netdev(5) for details. Type: attribute set of (systemd option) Default: { } Example: { Mode = "802.3ad"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.netdevs.<name>.bridgeConfig

Each attribute in this set specifies an option in the [Bridge] section of the unit. See systemd.netdev(5) for details. Type: attribute set of (systemd option) Default: { } Example: { STP = true; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.netdevs.<name>.extraConfig

Extra configuration append to unit Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.netdevs.<name>.fooOverUDPConfig

Each attribute in this set specifies an option in the [FooOverUDP] section of the unit. See systemd.netdev(5) for details. Type: attribute set of (systemd option) Default: { } Example: { Port = 9001; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.netdevs.<name>.ipvlanConfig

Each attribute in this set specifies an option in the [IPVLAN] section of the unit. See systemd.netdev(5) for details. Type: attribute set of (systemd option) Default: { } Example: { Flags = "private"; Mode = "L2"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.netdevs.<name>.ipvtapConfig

Each attribute in this set specifies an option in the [IPVTAP] section of the unit. See systemd.netdev(5) for details. Type: attribute set of (systemd option) Default: { } Example: { Flags = "vepa"; Mode = "L3"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.netdevs.<name>.l2tpConfig

Each attribute in this set specifies an option in the [L2TP] section of the unit. See systemd.netdev(5) for details. Type: attribute set of (systemd option) Default: { } Example: { EncapsulationType = "ip"; Local = "static"; PeerTunnelId = 12; Remote = "192.168.30.101"; TunnelId = 10; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.netdevs.<name>.l2tpSessions

Each item in this array specifies an option in the [L2TPSession] section of the unit. See systemd.netdev(5) for details. Type: list of attribute set of (systemd option) Default: [ ] Example: [ { Name = "l2tp-sess"; PeerSessionId = 26; SessionId = 25; } ] Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.netdevs.<name>.macvlanConfig

Each attribute in this set specifies an option in the [MACVLAN] section of the unit. See systemd.netdev(5) for details. Type: attribute set of (systemd option) Default: { } Example: { Mode = "private"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.netdevs.<name>.matchConfig

Each attribute in this set specifies an option in the [Match] section of the unit. See systemd.link(5) systemd.netdev(5) systemd.network(5) for details. Type: attribute set of (systemd option) Default: { } Example: { Name = "eth0"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.netdevs.<name>.netdevConfig

Each attribute in this set specifies an option in the [Netdev] section of the unit. See systemd.netdev(5) for details. Type: attribute set of (systemd option) Example: { Kind = "bridge"; Name = "mybridge"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.netdevs.<name>.peerConfig

Each attribute in this set specifies an option in the [Peer] section of the unit. See systemd.netdev(5) for details. Type: attribute set of (systemd option) Default: { } Example: { Name = "veth2"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.netdevs.<name>.tapConfig

Each attribute in this set specifies an option in the [Tap] section of the unit. See systemd.netdev(5) for details. Type: attribute set of (systemd option) Default: { } Example: { User = "openvpn"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.netdevs.<name>.tunConfig

Each attribute in this set specifies an option in the [Tun] section of the unit. See systemd.netdev(5) for details. Type: attribute set of (systemd option) Default: { } Example: { User = "openvpn"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.netdevs.<name>.tunnelConfig

Each attribute in this set specifies an option in the [Tunnel] section of the unit. See systemd.netdev(5) for details. Type: attribute set of (systemd option) Default: { } Example: { Remote = "192.168.1.1"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.netdevs.<name>.vlanConfig

Each attribute in this set specifies an option in the [VLAN] section of the unit. See systemd.netdev(5) for details. Type: attribute set of (systemd option) Default: { } Example: { Id = 4; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.netdevs.<name>.vrfConfig

Each attribute in this set specifies an option in the [VRF] section of the unit. See systemd.netdev(5) for details. A detailed explanation about how VRFs work can be found in the kernel docs. Type: attribute set of (systemd option) Default: { } Example: { Table = 2342; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.netdevs.<name>.vxlanConfig

Each attribute in this set specifies an option in the [VXLAN] section of the unit. See systemd.netdev(5) for details. Type: attribute set of (systemd option) Default: { } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.netdevs.<name>.wireguardConfig

Each attribute in this set specifies an option in the [WireGuard] section of the unit. See systemd.netdev(5) for details. Use PrivateKeyFile instead of PrivateKey: the nix store is world-readable. Type: attribute set of (systemd option) Default: { } Example: { FirewallMark = 42; ListenPort = 51820; PrivateKeyFile = "/etc/wireguard/secret.key"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.netdevs.<name>.wireguardPeers

Each item in this array specifies an option in the [WireGuardPeer] section of the unit. See systemd.netdev(5) for details. Use PresharedKeyFile instead of PresharedKey: the nix store is world-readable. Type: list of attribute set of (systemd option) Default: [ ] Example: [ { AllowedIPs = [ "10.0.0.1/32" ]; Endpoint = "192.168.1.1:51820"; PersistentKeepalive = 15; PresharedKeyFile = "/etc/wireguard/psk.key"; PublicKey = "27s0OvaBBdHoJYkH9osZpjpgSOVNw+RaKfboT/Sfq0g="; } ] Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.netdevs.<name>.wlanConfig

Each attribute in this set specifies an option in the [WLAN] section of the unit. See systemd.netdev(5) for details. Type: attribute set of (systemd option) Default: { } Example: { PhysicalDevice = 0; Type = "station"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.netdevs.<name>.xfrmConfig

Each attribute in this set specifies an option in the [Xfrm] section of the unit. See systemd.netdev(5) for details. Type: attribute set of (systemd option) Default: { } Example: { InterfaceId = 1; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>
