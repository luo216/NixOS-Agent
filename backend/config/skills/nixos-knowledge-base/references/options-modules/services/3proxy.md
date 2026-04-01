---
module: services._3proxy
option_count: 8
source: options.html
---

# services._3proxy

## services._3proxy.enable

Whether to enable 3proxy. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/3proxy.nix>

## services._3proxy.confFile

Ignore all other 3proxy options and load configuration from this file. Type: absolute path Example: "/var/lib/3proxy/3proxy.conf" Declared by: <nixpkgs/nixos/modules/services/networking/3proxy.nix>

## services._3proxy.denyPrivate

Whether to deny access to private IP ranges including loopback. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/3proxy.nix>

## services._3proxy.extraConfig

Extra configuration, appended to the 3proxy configuration file. Consult documentation for available options. Type: null or strings concatenated with “\n” Default: null Declared by: <nixpkgs/nixos/modules/services/networking/3proxy.nix>

## services._3proxy.privateRanges

What IP ranges to deny access when denyPrivate is set tu true. Type: list of string Default: [ "0.0.0.0/8" "127.0.0.0/8" "10.0.0.0/8" "100.64.0.0/10" "172.16.0.0/12" "192.168.0.0/16" "::" "::1" "fc00::/7" ] Declared by: <nixpkgs/nixos/modules/services/networking/3proxy.nix>

## services._3proxy.resolution

Use this option to configure name resolution and DNS caching. Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/3proxy.nix>

## services._3proxy.services

Use this option to define 3proxy services. Type: list of (submodule) Default: [ ] Example: [ { type = "proxy"; bindAddress = "192.168.1.24"; bindPort = 3128; auth = [ "none" ]; } { type = "proxy"; bindAddress = "10.10.1.20"; bindPort = 3128; auth = [ "iponly" ]; } { type = "socks"; bindAddress = "172.17.0.1"; bindPort = 1080; auth = [ "strong" ]; } ] Declared by: <nixpkgs/nixos/modules/services/networking/3proxy.nix>

## services._3proxy.usersFile

Load users and passwords from this file. Example users file with plain-text passwords: test1:CL:password1 test2:CL:password2 Example users file with md5-crypted passwords: test1:CR:$1$tFkisVd2$1GA8JXkRmTXdLDytM/i3a1 test2:CR:$1$rkpibm5J$Aq1.9VtYAn0JrqZ8M.1ME. You can generate md5-crypted passwords via https://unix4lyfe.org/crypt/ Note that htpasswd tool generates incompatible md5-crypted passwords. Consult documentation for more information. Type: null or absolute path Default: null Example: "/var/lib/3proxy/3proxy.passwd" Declared by: <nixpkgs/nixos/modules/services/networking/3proxy.nix>
