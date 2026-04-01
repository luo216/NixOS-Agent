---
module: services.dsnet
option_count: 3
source: options.html
---

# services.dsnet

## services.dsnet.enable

Whether to enable dsnet, a centralised Wireguard VPN manager. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/dsnet.nix>

## services.dsnet.package

The dsnet package to use. Type: package Default: pkgs.dsnet Declared by: <nixpkgs/nixos/modules/services/networking/dsnet.nix>

## services.dsnet.settings

The settings to use for dsnet. This will be converted to a JSON object that will be passed to dsnet as a patch, using the patch command when the service is started. See the dsnet documentation for more information on the additional options. Note that the resulting /etc/dsnetconfg.json is more of a database than it is a configuration file. It is therefore recommended that system specific values are configured here, rather than the full configuration including peers. Peers may be managed via the dsnet add/remove commands, negating the need to manage key material and cumbersom configuration with nix. If you want peer configuration in nix, you may as well use the regular wireguard module. Type: open submodule of (JSON value) Default: { } Example: { DNS = "8.8.8.8"; ExternalHostname = "vpn.example.com"; ExternalIP = "127.0.0.1"; ExternalIP6 = ""; IP = "10.3.148.1"; IP6 = ""; ListenPort = 51820; Network = "10.3.148.0/22"; Network6 = ""; Networks = [ "0.0.0.0/0" ]; } Declared by: <nixpkgs/nixos/modules/services/networking/dsnet.nix>
