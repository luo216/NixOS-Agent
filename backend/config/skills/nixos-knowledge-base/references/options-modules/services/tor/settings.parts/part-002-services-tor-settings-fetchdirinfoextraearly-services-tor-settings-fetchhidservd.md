---
module: services.tor.settings
option_count: 139
source: options.html
---
## services.tor.settings.FetchDirInfoExtraEarly

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.FetchHidServDescriptors

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.FetchServerDescriptors

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.FetchUselessDescriptors

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.GeoIPFile

See torrc manual. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.GeoIPv6File

See torrc manual. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.GuardfractionFile

See torrc manual. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.HSLayer2Nodes

See torrc manual. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.HSLayer3Nodes

See torrc manual. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.HTTPTunnelPort

See torrc manual. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) or value “auto” (singular enum) or (submodule) or list of (16 bit unsigned integer; between 0 and 65535 (both inclusive) or value “auto” (singular enum) or (submodule)) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.HidServAuth

See torrc manual. Type: list of (submodule) Default: [ ] Example: [ { auth = "xxxxxxxxxxxxxxxxxxxxxx"; onion = "xxxxxxxxxxxxxxxx.onion"; } ] Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.HiddenServiceNonAnonymousMode

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.HiddenServiceStatistics

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.IPv6Exit

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.KeyDirectory

See torrc manual. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.KeyDirectoryGroupReadable

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.LogMessageDomains

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.LongLivedPorts

See torrc manual. Type: list of 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.MainloopStats

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.MaxAdvertisedBandwidth

See torrc manual. Type: null or signed integer or string Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.MaxCircuitDirtiness

See torrc manual. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.MaxClientCircuitsPending

See torrc manual. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.NATDPort

See torrc manual. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) or value “auto” (singular enum) or (submodule) or list of (16 bit unsigned integer; between 0 and 65535 (both inclusive) or value “auto” (singular enum) or (submodule)) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.NewCircuitPeriod

See torrc manual. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.Nickname

See torrc manual. Type: null or string matching the pattern ^[a-zA-Z0-9]{1,19}$ Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.ORPort

See torrc manual. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) or value “auto” (singular enum) or list of (16 bit unsigned integer; between 0 and 65535 (both inclusive) or value “auto” (singular enum) or (submodule)) Default: [ ] Example: 443 Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.OfflineMasterKey

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.OptimisticData

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.PaddingStatistics

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.PerConnBWBurst

See torrc manual. Type: null or signed integer or string Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.PerConnBWRate

See torrc manual. Type: null or signed integer or string Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.PidFile

See torrc manual. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.ProtocolWarnings

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.PublishHidServDescriptors

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.PublishServerDescriptor

See torrc manual. Type: null or one of false, true, 0, 1, “0”, “1”, “v3”, “bridge” Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.ReachableAddresses

See torrc manual. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.ReachableDirAddresses

See torrc manual. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.ReachableORAddresses

See torrc manual. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.ReducedExitPolicy

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.RefuseUnknownExits

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.RejectPlaintextPorts

See torrc manual. Type: list of 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.RelayBandwidthBurst

See torrc manual. Type: null or signed integer or string Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.RelayBandwidthRate

See torrc manual. Type: null or signed integer or string Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.SOCKSPort

See torrc manual. Type: list of (16 bit unsigned integer; between 0 and 65535 (both inclusive) or (submodule)) Default: if config.services.tor.settings.HiddenServiceNonAnonymousMode == true then [ { port = 0; } ] else [ ] Example: [ { port = 9090; } ] Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.Sandbox

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.ServerDNSAllowBrokenConfig

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.ServerDNSAllowNonRFC953Hostnames

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.ServerDNSDetectHijacking

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.ServerDNSRandomizeCase

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.ServerDNSResolvConfFile

See torrc manual. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.ServerDNSSearchDomains

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.ServerTransportPlugin

See torrc manual. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.ShutdownWaitLength

See torrc manual. Type: signed integer Default: 30 Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.SocksPolicy

See torrc manual. Type: list of string Default: [ ] Example: [ "accept *:*" ] Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.TestingTorNetwork

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.TransPort

See torrc manual. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) or value “auto” (singular enum) or (submodule) or list of (16 bit unsigned integer; between 0 and 65535 (both inclusive) or value “auto” (singular enum) or (submodule)) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.TransProxyType

See torrc manual. Type: null or one of “default”, “TPROXY”, “ipfw”, “pf-divert” Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.UnixSocksGroupWritable

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.UseDefaultFallbackDirs

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.UseMicrodescriptors

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.V3AuthUseLegacyKey

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.V3AuthoritativeDirectory

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.VersioningAuthoritativeDirectory

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.VirtualAddrNetworkIPv4

See torrc manual. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.VirtualAddrNetworkIPv6

See torrc manual. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.WarnPlaintextPorts

See torrc manual. Type: list of 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>
