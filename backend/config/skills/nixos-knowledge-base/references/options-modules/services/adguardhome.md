---
module: services.adguardhome
option_count: 9
source: options.html
---

# services.adguardhome

## services.adguardhome.enable

Whether to enable AdGuard Home network-wide ad blocker. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/adguardhome.nix>

## services.adguardhome.package

The package that runs adguardhome. Type: package Default: pkgs.adguardhome Declared by: <nixpkgs/nixos/modules/services/networking/adguardhome.nix>

## services.adguardhome.allowDHCP

Allows AdGuard Home to open raw sockets (CAP_NET_RAW), which is required for the integrated DHCP server. The default enables this conditionally if the declarative configuration enables the integrated DHCP server. Manually setting this option is only required for non-declarative setups. Type: boolean Default: config.services.adguardhome.settings.dhcp.enabled or false Declared by: <nixpkgs/nixos/modules/services/networking/adguardhome.nix>

## services.adguardhome.extraArgs

Extra command line parameters to be passed to the adguardhome binary. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/adguardhome.nix>

## services.adguardhome.host

Host address to bind HTTP server to. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/networking/adguardhome.nix>

## services.adguardhome.mutableSettings

Allow changes made on the AdGuard Home web interface to persist between service restarts. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/adguardhome.nix>

## services.adguardhome.openFirewall

Open ports in the firewall for the AdGuard Home web interface. Does not open the port needed to access the DNS resolver. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/adguardhome.nix>

## services.adguardhome.port

Port to serve HTTP pages on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3000 Declared by: <nixpkgs/nixos/modules/services/networking/adguardhome.nix>

## services.adguardhome.settings

AdGuard Home configuration. Refer to https://github.com/AdguardTeam/AdGuardHome/wiki/Configuration#configuration-file for details on supported values. Note On start and if mutableSettings is true, these options are merged into the configuration file on start, taking precedence over configuration changes made on the web interface. Set this to null (default) for a non-declarative configuration without any Nix-supplied values. Declarative configurations are supplied with a default schema_version, and http.address. Type: null or (open submodule of (YAML 1.1 value)) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/adguardhome.nix>
