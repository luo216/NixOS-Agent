---
module: services.yggdrasil
option_count: 9
source: options.html
---

# services.yggdrasil

## services.yggdrasil.enable

Whether to enable the yggdrasil system service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/yggdrasil.nix>

## services.yggdrasil.package

The yggdrasil package to use. Type: package Default: pkgs.yggdrasil Declared by: <nixpkgs/nixos/modules/services/networking/yggdrasil.nix>

## services.yggdrasil.configFile

A file which contains JSON or HJSON configuration for yggdrasil. See the settings option for more information. Note: This file must not be larger than 1 MB because it is passed to the yggdrasil process via systemd‘s LoadCredential mechanism. For details, see https://systemd.io/CREDENTIALS/ and man 5 systemd.exec. Type: null or absolute path Default: null Example: "/run/keys/yggdrasil.conf" Declared by: <nixpkgs/nixos/modules/services/networking/yggdrasil.nix>

## services.yggdrasil.denyDhcpcdInterfaces

Disable the DHCP client for any interface whose name matches any of the shell glob patterns in this list. Use this option to prevent the DHCP client from broadcasting requests on the yggdrasil network. It is only necessary to do so when yggdrasil is running in TAP mode, because TUN interfaces do not support broadcasting. Type: list of string Default: [ ] Example: [ "tap*" ] Declared by: <nixpkgs/nixos/modules/services/networking/yggdrasil.nix>

## services.yggdrasil.extraArgs

Extra command line arguments. Type: list of string Default: [ ] Example: [ "-loglevel" "info" ] Declared by: <nixpkgs/nixos/modules/services/networking/yggdrasil.nix>

## services.yggdrasil.group

Group to grant access to the Yggdrasil control socket. If null, only root can access the socket. Type: null or string Default: null Example: "wheel" Declared by: <nixpkgs/nixos/modules/services/networking/yggdrasil.nix>

## services.yggdrasil.openMulticastPort

Whether to open the UDP port used for multicast peer discovery. The NixOS firewall blocks link-local communication, so in order to make incoming local peering work you will also need to configure MulticastInterfaces in your Yggdrasil configuration (settings or configFile). You will then have to add the ports that you configure there to your firewall configuration (networking.firewall.allowedTCPPorts or networking.firewall.interfaces.<name>.allowedTCPPorts). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/yggdrasil.nix>

## services.yggdrasil.persistentKeys

Whether to enable persistent keys. If enabled then keys will be generated once and Yggdrasil will retain the same IPv6 address when the service is restarted. Keys are stored at /var/lib/yggdrasil/keys.json . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/yggdrasil.nix>

## services.yggdrasil.settings

Configuration for yggdrasil, as a Nix attribute set. Warning: this is stored in the WORLD-READABLE Nix store! Therefore, it is not appropriate for private keys. If you wish to specify the keys, use configFile. If the persistentKeys is enabled then the keys that are generated during activation will override those in settings or configFile. If no keys are specified then ephemeral keys are generated and the Yggdrasil interface will have a random IPv6 address each time the service is started. This is the default. If both configFile and settings are supplied, they will be combined, with values from configFile taking precedence. You can use the command nix-shell -p yggdrasil --run "yggdrasil -genconf" to generate default configuration values with documentation. Type: JSON value Default: { } Example: { Listen = [ "tcp://0.0.0.0:xxxxx" ]; Peers = [ "tcp://aa.bb.cc.dd:eeeee" "tcp://[aaaa:bbbb:cccc:dddd::eeee]:fffff" ]; } Declared by: <nixpkgs/nixos/modules/services/networking/yggdrasil.nix>
