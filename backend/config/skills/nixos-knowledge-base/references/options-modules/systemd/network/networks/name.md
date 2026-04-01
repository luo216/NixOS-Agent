---
module: systemd.network.networks.<name>
option_count: 66
source: options.html
---

# systemd.network.networks.<name>

## systemd.network.networks.<name>.enable

Whether to manage network configuration using systemd-network. This also enables systemd.networkd.enable. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.DHCP

Whether to enable DHCP on the interfaces matched. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.address

A list of addresses to be added to the network section of the unit. See systemd.network(5) for details. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.addresses

A list of address sections to be added to the unit. See systemd.network(5) for details. Type: list of attribute set of (systemd option) Default: [ ] Example: [ { Address = "192.168.0.100/24"; } ] Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.bfifoConfig

Each attribute in this set specifies an option in the [BFIFO] section of the unit. See systemd.network(5) for details. Type: attribute set of (systemd option) Default: { } Example: { LimitBytes = "20K"; Parent = "ingress"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.bond

A list of bond interfaces to be added to the network section of the unit. See systemd.network(5) for details. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.bridge

A list of bridge interfaces to be added to the network section of the unit. See systemd.network(5) for details. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.bridgeConfig

Each attribute in this set specifies an option in the [Bridge] section of the unit. See systemd.network(5) for details. Type: attribute set of (systemd option) Default: { } Example: { Cost = 20; MulticastFlood = false; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.bridgeFDBs

A list of BridgeFDB sections to be added to the unit. See systemd.network(5) for details. Type: list of attribute set of (systemd option) Default: [ ] Example: [ { Destination = "192.168.100.4"; MACAddress = "90:e2:ba:43:fc:71"; VNI = 3600; } ] Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.bridgeMDBs

A list of BridgeMDB sections to be added to the unit. See systemd.network(5) for details. Type: list of attribute set of (systemd option) Default: [ ] Example: [ { MulticastGroupAddress = "ff02::1:2:3:4"; VLANId = 10; } ] Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.bridgeVLANs

A list of BridgeVLAN sections to be added to the unit. See systemd.network(5) for details. Type: list of attribute set of (systemd option) Default: [ ] Example: [ { VLAN = "10-20"; } ] Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.cakeConfig

Each attribute in this set specifies an option in the [CAKE] section of the unit. See systemd.network(5) for details. Type: attribute set of (systemd option) Default: { } Example: { Bandwidth = "40M"; CompensationMode = "ptm"; OverheadBytes = 8; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.canConfig

Each attribute in this set specifies an option in the [CAN] section of the unit. See systemd.network(5) for details. Type: attribute set of (systemd option) Default: { } Example: { } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.controlledDelayConfig

Each attribute in this set specifies an option in the [ControlledDelay] section of the unit. See systemd.network(5) for details. Type: attribute set of (systemd option) Default: { } Example: { Parent = "ingress"; TargetSec = "20msec"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.deficitRoundRobinSchedulerClassConfig

Each attribute in this set specifies an option in the [DeficitRoundRobinSchedulerClass] section of the unit. See systemd.network(5) for details. Type: attribute set of (systemd option) Default: { } Example: { Parent = "root"; QuantumBytes = "300k"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.deficitRoundRobinSchedulerConfig

Each attribute in this set specifies an option in the [DeficitRoundRobinScheduler] section of the unit. See systemd.network(5) for details. Type: attribute set of (systemd option) Default: { } Example: { Parent = "root"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.dhcpPrefixDelegationConfig

Each attribute in this set specifies an option in the [DHCPPrefixDelegation] section of the unit. See systemd.network(5) for details. Type: attribute set of (systemd option) Default: { } Example: { Announce = true; SubnetId = "auto"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.dhcpServerConfig

Each attribute in this set specifies an option in the [DHCPServer] section of the unit. See systemd.network(5) for details. Type: attribute set of (systemd option) Default: { } Example: { EmitDNS = false; PoolOffset = 50; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.dhcpServerStaticLeases

A list of DHCPServerStaticLease sections to be added to the unit. See systemd.network(5) for details. Type: list of attribute set of (systemd option) Default: [ ] Example: [ { Address = "192.168.1.42"; MACAddress = "65:43:4a:5b:d8:5f"; } ] Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.dhcpV4Config

Each attribute in this set specifies an option in the [DHCPv4] section of the unit. See systemd.network(5) for details. Type: attribute set of (systemd option) Default: { } Example: { UseDNS = true; UseRoutes = true; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.dhcpV6Config

Each attribute in this set specifies an option in the [DHCPv6] section of the unit. See systemd.network(5) for details. Type: attribute set of (systemd option) Default: { } Example: { UseDNS = true; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.dns

A list of dns servers to be added to the network section of the unit. See systemd.network(5) for details. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.domains

A list of domains to pass to the network config. Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.enhancedTransmissionSelectionConfig

Each attribute in this set specifies an option in the [EnhancedTransmissionSelection] section of the unit. See systemd.network(5) for details. Type: attribute set of (systemd option) Default: { } Example: { Bands = 3; Parent = "root"; PriorityMap = "100 200 300"; QuantumBytes = "300k"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.extraConfig

Extra configuration append to unit Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.fairQueueingConfig

Each attribute in this set specifies an option in the [FairQueueing] section of the unit. See systemd.network(5) for details. Type: attribute set of (systemd option) Default: { } Example: { FlowLimit = 5; Parent = "root"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.fairQueueingControlledDelayConfig

Each attribute in this set specifies an option in the [FairQueueingControlledDelay] section of the unit. See systemd.network(5) for details. Type: attribute set of (systemd option) Default: { } Example: { Flows = 5; Parent = "root"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.flowQueuePIEConfig

Each attribute in this set specifies an option in the [FlowQueuePIE] section of the unit. See systemd.network(5) for details. Type: attribute set of (systemd option) Default: { } Example: { PacketLimit = "3847"; Parent = "ingress"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.gateway

A list of gateways to be added to the network section of the unit. See systemd.network(5) for details. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.genericRandomEarlyDetectionConfig

Each attribute in this set specifies an option in the [GenericRandomEarlyDetection] section of the unit. See systemd.network(5) for details. Type: attribute set of (systemd option) Default: { } Example: { DefaultVirtualQueue = 3; Parent = "root"; VirtualQueues = 5; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.heavyHitterFilterConfig

Each attribute in this set specifies an option in the [HeavyHitterFilter] section of the unit. See systemd.network(5) for details. Type: attribute set of (systemd option) Default: { } Example: { PacketLimit = 10000; Parent = "root"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.hierarchyTokenBucketClassConfig

Each attribute in this set specifies an option in the [HierarchyTokenBucketClass] section of the unit. See systemd.network(5) for details. Type: attribute set of (systemd option) Default: { } Example: { Parent = "root"; Rate = "10M"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.hierarchyTokenBucketConfig

Each attribute in this set specifies an option in the [HierarchyTokenBucket] section of the unit. See systemd.network(5) for details. Type: attribute set of (systemd option) Default: { } Example: { Parent = "root"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.ipoIBConfig

Each attribute in this set specifies an option in the [IPoIB] section of the unit. See systemd.network(5) for details. Type: attribute set of (systemd option) Default: { } Example: { } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.ipv6AcceptRAConfig

Each attribute in this set specifies an option in the [IPv6AcceptRA] section of the unit. See systemd.network(5) for details. Type: attribute set of (systemd option) Default: { } Example: { DHCPv6Client = "always"; UseDNS = true; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.ipv6PREF64Prefixes

A list of IPv6PREF64Prefix sections to be added to the unit. See systemd.network(5) for details. Type: list of attribute set of (systemd option) Default: [ ] Example: [ { Prefix = "64:ff9b::/96"; } ] Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.ipv6Prefixes

A list of ipv6Prefix sections to be added to the unit. See systemd.network(5) for details. Type: list of attribute set of (systemd option) Default: [ ] Example: [ { AddressAutoconfiguration = true; OnLink = true; } ] Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.ipv6RoutePrefixes

A list of ipv6RoutePrefix sections to be added to the unit. See systemd.network(5) for details. Type: list of attribute set of (systemd option) Default: [ ] Example: [ { LifetimeSec = 3600; Route = "fd00::/64"; } ] Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.ipv6SendRAConfig

Each attribute in this set specifies an option in the [IPv6SendRA] section of the unit. See systemd.network(5) for details. Type: attribute set of (systemd option) Default: { } Example: { EmitDNS = true; Managed = true; OtherInformation = true; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.linkConfig

Each attribute in this set specifies an option in the [Link] section of the unit. See systemd.network(5) for details. Type: attribute set of (systemd option) Default: { } Example: { Unmanaged = true; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.lldpConfig

Each attribute in this set specifies an option in the [LLDP] section of the unit. See systemd.network(5) for details. Type: attribute set of (systemd option) Default: { } Example: { MUDURL = "https://things.example.org/product_abc123/v5"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.macvlan

A list of macvlan interfaces to be added to the network section of the unit. See systemd.network(5) for details. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.macvtap

A list of macvtap interfaces to be added to the network section of the unit. See systemd.network(5) for details. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.matchConfig

Each attribute in this set specifies an option in the [Match] section of the unit. See systemd.link(5) systemd.netdev(5) systemd.network(5) for details. Type: attribute set of (systemd option) Default: { } Example: { Name = "eth0"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.name

The name of the network interface to match against. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.networkConfig

Each attribute in this set specifies an option in the [Network] section of the unit. See systemd.network(5) for details. Type: attribute set of (systemd option) Default: { } Example: { Description = "My Network"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.networkEmulatorConfig

Each attribute in this set specifies an option in the [NetworkEmulator] section of the unit. See systemd.network(5) for details. Type: attribute set of (systemd option) Default: { } Example: { DelaySec = "20msec"; Parent = "ingress"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.ntp

A list of ntp servers to be added to the network section of the unit. See systemd.network(5) for details. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.pfifoConfig

Each attribute in this set specifies an option in the [PFIFO] section of the unit. See systemd.network(5) for details. Type: attribute set of (systemd option) Default: { } Example: { PacketLimit = "300"; Parent = "ingress"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.pfifoFastConfig

Each attribute in this set specifies an option in the [PFIFOFast] section of the unit. See systemd.network(5) for details. Type: attribute set of (systemd option) Default: { } Example: { Parent = "ingress"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.pfifoHeadDropConfig

Each attribute in this set specifies an option in the [PFIFOHeadDrop] section of the unit. See systemd.network(5) for details. Type: attribute set of (systemd option) Default: { } Example: { PacketLimit = "300"; Parent = "ingress"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.pieConfig

Each attribute in this set specifies an option in the [PIE] section of the unit. See systemd.network(5) for details. Type: attribute set of (systemd option) Default: { } Example: { PacketLimit = "3847"; Parent = "ingress"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.qdiscConfig

Each attribute in this set specifies an option in the [QDisc] section of the unit. See systemd.network(5) for details. Type: attribute set of (systemd option) Default: { } Example: { Parent = "ingress"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.quickFairQueueingConfig

Each attribute in this set specifies an option in the [QuickFairQueueing] section of the unit. See systemd.network(5) for details. Type: attribute set of (systemd option) Default: { } Example: { Parent = "root"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.quickFairQueueingConfigClass

Each attribute in this set specifies an option in the [QuickFairQueueingClass] section of the unit. See systemd.network(5) for details. Type: attribute set of (systemd option) Default: { } Example: { Parent = "root"; Weight = 133; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.routes

A list of route sections to be added to the unit. See systemd.network(5) for details. Type: list of attribute set of (systemd option) Default: [ ] Example: [ { Gateway = "192.168.0.1"; } ] Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.routingPolicyRules

A list of routing policy rules sections to be added to the unit. See systemd.network(5) for details. Type: list of attribute set of (systemd option) Default: [ ] Example: [ { Family = "both"; IncomingInterface = "eth1"; Table = 10; } ] Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.stochasticFairBlueConfig

Each attribute in this set specifies an option in the [StochasticFairBlue] section of the unit. See systemd.network(5) for details. Type: attribute set of (systemd option) Default: { } Example: { PacketLimit = "3847"; Parent = "ingress"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.stochasticFairnessQueueingConfig

Each attribute in this set specifies an option in the [StochasticFairnessQueueing] section of the unit. See systemd.network(5) for details. Type: attribute set of (systemd option) Default: { } Example: { Parent = "ingress"; PerturbPeriodSec = "30"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.tokenBucketFilterConfig

Each attribute in this set specifies an option in the [TokenBucketFilter] section of the unit. See systemd.network(5) for details. Type: attribute set of (systemd option) Default: { } Example: { Parent = "ingress"; Rate = "100k"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.trivialLinkEqualizerConfig

Each attribute in this set specifies an option in the [TrivialLinkEqualizer] section of the unit. See systemd.network(5) for details. Type: attribute set of (systemd option) Default: { } Example: { Id = 0; Parent = "root"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.tunnel

A list of tunnel interfaces to be added to the network section of the unit. See systemd.network(5) for details. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.vlan

A list of vlan interfaces to be added to the network section of the unit. See systemd.network(5) for details. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.vrf

A list of vrf interfaces to be added to the network section of the unit. See systemd.network(5) for details. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.vxlan

A list of vxlan interfaces to be added to the network section of the unit. See systemd.network(5) for details. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.networks.<name>.xfrm

A list of xfrm interfaces to be added to the network section of the unit. See systemd.network(5) for details. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>
