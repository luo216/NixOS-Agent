---
module: services.send
option_count: 8
source: options.html
---

# services.send

## services.send.enable

Whether to enable Send, a file sharing web sevice for ffsend… Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-servers/send.nix>

## services.send.package

The send package to use. Type: package Default: pkgs.send Declared by: <nixpkgs/nixos/modules/services/web-servers/send.nix>

## services.send.baseUrl

Base URL for the Send service. Leave it blank to automatically detect the base url. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-servers/send.nix>

## services.send.dataDir

Directory for uploaded files. Due to limitations in systemd.services.send.serviceConfig.DynamicUser, this item is read only. Type: absolute path (read only) Default: "/var/lib/send" Declared by: <nixpkgs/nixos/modules/services/web-servers/send.nix>

## services.send.environment

All the available config options and their defaults can be found here: https://github.com/timvisee/send/blob/master/server/config.js, some descriptions can found here: https://github.com/timvisee/send/blob/master/docs/docker.md#environment-variables Values under services.send.environment will override the predefined values in the Send service. Time/duration should be in seconds Filesize values should be in bytes Type: attribute set of (null or boolean or signed integer or string or list of signed integer) Example: { DEFAULT_DOWNLOADS = 1; DETECT_BASE_URL = true; EXPIRE_TIMES_SECONDS = [ 300 3600 86400 604800 ]; } Declared by: <nixpkgs/nixos/modules/services/web-servers/send.nix>

## services.send.host

The hostname or IP address for Send to bind to. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/web-servers/send.nix>

## services.send.openFirewall

Whether to open firewall ports for send Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-servers/send.nix>

## services.send.port

Port the Send service listens on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 1443 Declared by: <nixpkgs/nixos/modules/services/web-servers/send.nix>
