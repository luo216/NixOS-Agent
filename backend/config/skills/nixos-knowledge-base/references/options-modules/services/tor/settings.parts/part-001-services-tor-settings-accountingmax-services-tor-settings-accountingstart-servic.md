---
module: services.tor.settings
option_count: 139
source: options.html
---

# services.tor.settings

## services.tor.settings.AccountingMax

See torrc manual. Type: null or signed integer or string Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.AccountingStart

See torrc manual. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.Address

See torrc manual. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.AssumeReachable

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.AuthDirHasIPv6Connectivity

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.AuthDirListBadExits

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.AuthDirPinKeys

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.AuthDirSharedRandomness

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.AuthDirTestEd25519LinkKeys

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.AuthoritativeDirectory

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.AutomapHostsOnResolve

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.AutomapHostsSuffixes

See torrc manual. Type: list of string Default: [ ".onion" ".exit" ] Example: [ ".onion" ] Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.BandwidthBurst

See torrc manual. Type: null or signed integer or string Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.BandwidthRate

See torrc manual. Type: null or signed integer or string Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.BridgeAuthoritativeDir

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.BridgeRecordUsageByCountry

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.BridgeRelay

See torrc manual. Type: null or boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.CacheDirectory

See torrc manual. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.CacheDirectoryGroupReadable

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.CellStatistics

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.ClientAutoIPv6ORPort

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.ClientDNSRejectInternalAddresses

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.ClientOnionAuthDir

See torrc manual. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.ClientPreferIPv6DirPort

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.ClientPreferIPv6ORPort

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.ClientRejectInternalAddresses

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.ClientUseIPv4

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.ClientUseIPv6

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.ConnDirectionStatistics

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.ConstrainedSockets

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.ContactInfo

See torrc manual. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.ControlPort

See torrc manual. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) or value “auto” (singular enum) or list of (16 bit unsigned integer; between 0 and 65535 (both inclusive) or value “auto” (singular enum) or (submodule)) Default: [ ] Example: [ { port = 9051; } ] Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.ControlPortFileGroupReadable

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.ControlPortWriteToFile

See torrc manual. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.ControlSocket

See torrc manual. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.ControlSocketsGroupWritable

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.CookieAuthFile

See torrc manual. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.CookieAuthFileGroupReadable

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.CookieAuthentication

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.DNSPort

See torrc manual. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) or value “auto” (singular enum) or (submodule) or list of (16 bit unsigned integer; between 0 and 65535 (both inclusive) or value “auto” (singular enum) or (submodule)) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.DataDirectory

See torrc manual. Type: null or absolute path Default: "/var/lib/tor" Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.DataDirectoryGroupReadable

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.DirAllowPrivateAddresses

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.DirCache

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.DirPolicy

See torrc manual. Type: list of string Default: [ ] Example: [ "accept *:*" ] Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.DirPort

See torrc manual. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) or value “auto” (singular enum) or list of (16 bit unsigned integer; between 0 and 65535 (both inclusive) or value “auto” (singular enum) or (submodule)) Default: [ ] Example: 443 Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.DirPortFrontPage

See torrc manual. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.DirReqStatistics

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.DisableAllSwap

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.DisableDebuggerAttachment

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.DisableNetwork

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.DisableOOSCheck

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.DoSCircuitCreationEnabled

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.DoSConnectionEnabled

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.DoSRefuseSingleHopClientRendezvous

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.DormantCanceledByStartup

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.DormantOnFirstStartup

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.DormantTimeoutDisabledByIdleStreams

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.DownloadExtraInfo

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.EnforceDistinctSubnets

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.EntryStatistics

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.ExitPolicy

See torrc manual. Type: list of string Default: [ "reject *:*" ] Example: [ "accept *:*" ] Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.ExitPolicyRejectLocalInterfaces

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.ExitPolicyRejectPrivate

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.ExitPortStatistics

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.ExitRelay

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.ExtORPort

See torrc manual. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) or value “auto” (singular enum) or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.ExtORPortCookieAuthFile

See torrc manual. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.ExtORPortCookieAuthFileGroupReadable

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.ExtendAllowPrivateAddresses

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.ExtraInfoStatistics

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.FascistFirewall

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.FetchDirInfoEarly

See torrc manual. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>
