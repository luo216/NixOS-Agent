---
module: services.soju
option_count: 11
source: options.html
---

# services.soju

## services.soju.enable

Whether to enable soju. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/soju.nix>

## services.soju.enableMessageLogging

Whether to enable message logging. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/soju.nix>

## services.soju.package

The soju package to use. Type: package Default: pkgs.soju Declared by: <nixpkgs/nixos/modules/services/networking/soju.nix>

## services.soju.acceptProxyIP

Allow the specified IPs to act as a proxy. Proxys have the ability to overwrite the remote and local connection addresses (via the X-Forwarded-* HTTP header fields). The special name “localhost” accepts the loopback addresses 127.0.0.0/8 and ::1/128. By default, all IPs are rejected. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/soju.nix>

## services.soju.configFile

Path to config file. If this option is set, it will override any configuration done using other options, including extraConfig. Type: absolute path Default: "Config file generated from other options." Example: ./soju.conf Declared by: <nixpkgs/nixos/modules/services/networking/soju.nix>

## services.soju.extraConfig

Lines added verbatim to the generated configuration file. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/soju.nix>

## services.soju.hostName

Server hostname. Type: string Default: config.networking.hostName Declared by: <nixpkgs/nixos/modules/services/networking/soju.nix>

## services.soju.httpOrigins

List of allowed HTTP origins for WebSocket listeners. The parameters are interpreted as shell patterns, see glob(7). Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/soju.nix>

## services.soju.listen

Where soju should listen for incoming connections. See the listen directive in soju(1). Type: list of string Default: [ ":6697" ] Declared by: <nixpkgs/nixos/modules/services/networking/soju.nix>

## services.soju.tlsCertificate

Path to server TLS certificate. Type: null or absolute path Default: null Example: "/var/host.cert" Declared by: <nixpkgs/nixos/modules/services/networking/soju.nix>

## services.soju.tlsCertificateKey

Path to server TLS certificate key. Type: null or absolute path Default: null Example: "/var/host.key" Declared by: <nixpkgs/nixos/modules/services/networking/soju.nix>
