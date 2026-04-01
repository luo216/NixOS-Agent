---
module: services.tinc.networks.<name>
option_count: 13
source: options.html
---

# services.tinc.networks.<name>

## services.tinc.networks.<name>.package

The tinc_pre package to use. Type: package Default: pkgs.tinc_pre Declared by: <nixpkgs/nixos/modules/services/networking/tinc.nix>

## services.tinc.networks.<name>.bindToAddress

The ip address to bind to (both listen on and send packets from). Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/tinc.nix>

## services.tinc.networks.<name>.chroot

Change process root directory to the directory where the config file is located (/etc/tinc/netname/), for added security. The chroot is performed after all the initialization is done, after writing pid files and opening network sockets. Note that this currently breaks dns resolution and tinc can’t run scripts anymore (such as tinc-down or host-up), unless it is setup to be runnable inside chroot environment. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/tinc.nix>

## services.tinc.networks.<name>.debugLevel

The amount of debugging information to add to the log. 0 means little logging while 5 is the most logging. man tincd for more details. Type: integer between 0 and 5 (both inclusive) Default: 0 Declared by: <nixpkgs/nixos/modules/services/networking/tinc.nix>

## services.tinc.networks.<name>.ed25519PrivateKeyFile

Path of the private ed25519 keyfile. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/tinc.nix>

## services.tinc.networks.<name>.extraConfig

Extra lines to add to the tinc service configuration file. Note that using the declarative service.tinc.networks.<name>.settings option is preferred. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/tinc.nix>

## services.tinc.networks.<name>.hostSettings

The name of the host in the network as well as the configuration for that host. This name should only contain alphanumerics and underscores. Type: attribute set of (submodule) Default: { } Example: { host1 = { addresses = [ { address = "192.168.1.42"; } { address = "192.168.1.42"; port = 1655; } ]; subnets = [ { address = "10.0.0.42"; } ]; rsaPublicKey = "..."; settings = { Ed25519PublicKey = "..."; }; }; host2 = { subnets = [ { address = "10.0.1.0"; prefixLength = 24; weight = 2; } ]; rsaPublicKey = "..."; settings = { Compression = 10; }; }; } Declared by: <nixpkgs/nixos/modules/services/networking/tinc.nix>

## services.tinc.networks.<name>.hosts

The name of the host in the network as well as the configuration for that host. This name should only contain alphanumerics and underscores. Note that using the declarative service.tinc.networks.<name>.hostSettings option is preferred. Type: attribute set of strings concatenated with “\n” Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/tinc.nix>

## services.tinc.networks.<name>.interfaceType

The type of virtual interface used for the network connection. Type: one of “tun”, “tap” Default: "tun" Declared by: <nixpkgs/nixos/modules/services/networking/tinc.nix>

## services.tinc.networks.<name>.listenAddress

The ip address to listen on for incoming connections. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/tinc.nix>

## services.tinc.networks.<name>.name

The name of the node which is used as an identifier when communicating with the remote nodes in the mesh. If null then the hostname of the system is used to derive a name (note that tinc may replace non-alphanumeric characters in hostnames by underscores). Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/tinc.nix>

## services.tinc.networks.<name>.rsaPrivateKeyFile

Path of the private RSA keyfile. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/tinc.nix>

## services.tinc.networks.<name>.settings

Configuration of the Tinc daemon for this network. See https://tinc-vpn.org/documentation-1.1/Main-configuration-variables.html for supported values. Type: open submodule of attribute set of (boolean or string or signed integer or list of (boolean or string or signed integer)) Default: { } Example: { Interface = "custom.interface"; DirectOnly = true; Mode = "switch"; } Declared by: <nixpkgs/nixos/modules/services/networking/tinc.nix>
