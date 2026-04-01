---
module: services.mirakurun
option_count: 8
source: options.html
---

# services.mirakurun

## services.mirakurun.enable

Whether to enable the Mirakurun DVR Tuner Server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/video/mirakurun.nix>

## services.mirakurun.allowSmartCardAccess

Install polkit rules to allow Mirakurun to access smart card readers which is commonly used along with tuner devices. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/video/mirakurun.nix>

## services.mirakurun.channelSettings

Options which are added to channels.yml. If none is specified, it will automatically be generated at runtime. Documentation: https://github.com/Chinachu/Mirakurun/blob/master/doc/Configuration.md Type: null or YAML 1.1 value Default: null Example: [ { name = "channel"; types = "GR"; channel = "0"; } ]; Declared by: <nixpkgs/nixos/modules/services/video/mirakurun.nix>

## services.mirakurun.openFirewall

Open ports in the firewall for Mirakurun. Warning Exposing Mirakurun to the open internet is generally advised against. Only use it inside a trusted local network, or consider putting it behind a VPN if you want remote access. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/video/mirakurun.nix>

## services.mirakurun.port

Port to listen on. If null, it won’t listen on any port. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 40772 Declared by: <nixpkgs/nixos/modules/services/video/mirakurun.nix>

## services.mirakurun.serverSettings

Options for server.yml. Documentation: https://github.com/Chinachu/Mirakurun/blob/master/doc/Configuration.md Type: YAML 1.1 value Default: { } Example: { highWaterMark = 25165824; overflowTimeLimit = 30000; }; Declared by: <nixpkgs/nixos/modules/services/video/mirakurun.nix>

## services.mirakurun.tunerSettings

Options which are added to tuners.yml. If none is specified, it will automatically be generated at runtime. Documentation: https://github.com/Chinachu/Mirakurun/blob/master/doc/Configuration.md Type: null or YAML 1.1 value Default: null Example: [ { name = "tuner-name"; types = [ "GR" "BS" "CS" "SKY" ]; dvbDevicePath = "/dev/dvb/adapterX/dvrX"; } ]; Declared by: <nixpkgs/nixos/modules/services/video/mirakurun.nix>

## services.mirakurun.unixSocket

Path to unix socket to listen on. If null, it won’t listen on any unix sockets. Type: null or absolute path Default: "/var/run/mirakurun/mirakurun.sock" Declared by: <nixpkgs/nixos/modules/services/video/mirakurun.nix>
