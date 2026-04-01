---
module: services.i2pd
option_count: 24
source: options.html
---

# services.i2pd

## services.i2pd.enable

Enables I2Pd as a running service upon activation. Please read https://i2pd.readthedocs.io/en/latest/ for further configuration help. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.enableIPv4

Whether to enable IPv4 connectivity. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.enableIPv6

Whether to enable IPv6 connectivity. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.package

The i2pd package to use. Type: package Default: pkgs.i2pd Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.address

Your external IP or hostname. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.bandwidth

Set a router bandwidth limit integer in KBps. If not set, i2pd defaults to 32KBps. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.dataDir

Alternative path to storage of i2pd data (RI, keys, peer profiles, …) Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.family

Specify a family the router belongs to. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.floodfill

Makes your router a floodfill, that means what other routers will publish and get LeaseSets and RouterInfos on your router. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.ifname

Network interface to bind to. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.ifname4

IPv4 interface to bind to. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.ifname6

IPv6 interface to bind to. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.inTunnels

Serve something on I2P network at port and delegate requests to address inPort. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.logCLFTime

Whether to enable full CLF-formatted date and time to log. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.logLevel

The log level. i2pd defaults to “info” but that generates copious amounts of log messages. We default to “error” which is similar to the default log level of tor. Type: one of “debug”, “info”, “warn”, “error” Default: "error" Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.nat

Whether to enable NAT bypass. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.netid

I2P overlay netid. Type: signed integer Default: 2 Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.notransit

Tells the router to not accept transit tunnels during startup. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.ntcp

Whether to enable ntcp. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.ntcpProxy

Proxy URL for NTCP transport. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.outTunnels

Connect to someone as a client and establish a local accept endpoint Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.port

I2P listen port. If no one is given the router will pick between 9111 and 30777. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.share

Limit of transit traffic from max bandwidth in percents. Type: signed integer Default: 100 Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.ssu

Whether to enable ssu. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>
