---
module: networking.proxy
option_count: 7
source: options.html
---

# networking.proxy

## networking.proxy.allProxy

This option specifies the all_proxy environment variable. Type: null or string Default: config.networking.proxy.default Example: "http://127.0.0.1:3128" Declared by: <nixpkgs/nixos/modules/config/networking.nix>

## networking.proxy.default

This option specifies the default value for httpProxy, httpsProxy, ftpProxy and rsyncProxy. Type: null or string Default: null Example: "http://127.0.0.1:3128" Declared by: <nixpkgs/nixos/modules/config/networking.nix>

## networking.proxy.ftpProxy

This option specifies the ftp_proxy environment variable. Type: null or string Default: config.networking.proxy.default Example: "http://127.0.0.1:3128" Declared by: <nixpkgs/nixos/modules/config/networking.nix>

## networking.proxy.httpProxy

This option specifies the http_proxy environment variable. Type: null or string Default: config.networking.proxy.default Example: "http://127.0.0.1:3128" Declared by: <nixpkgs/nixos/modules/config/networking.nix>

## networking.proxy.httpsProxy

This option specifies the https_proxy environment variable. Type: null or string Default: config.networking.proxy.default Example: "http://127.0.0.1:3128" Declared by: <nixpkgs/nixos/modules/config/networking.nix>

## networking.proxy.noProxy

This option specifies the no_proxy environment variable. If a default proxy is used and noProxy is null, then noProxy will be set to 127.0.0.1,localhost. Type: null or string Default: null Example: "127.0.0.1,localhost,.localdomain" Declared by: <nixpkgs/nixos/modules/config/networking.nix>

## networking.proxy.rsyncProxy

This option specifies the rsync_proxy environment variable. Type: null or string Default: config.networking.proxy.default Example: "http://127.0.0.1:3128" Declared by: <nixpkgs/nixos/modules/config/networking.nix>
