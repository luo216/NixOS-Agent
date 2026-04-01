---
module: networking.resolvconf
option_count: 7
source: options.html
---

# networking.resolvconf

## networking.resolvconf.enable

Whether DNS configuration is managed by resolvconf. Type: boolean Default: !(config.environment.etc ? "resolv.conf") Declared by: <nixpkgs/nixos/modules/config/resolvconf.nix>

## networking.resolvconf.package

The package that provides the system-wide resolvconf command. Defaults to openresolv if this module is enabled. Otherwise, can be used by other modules (for example services.resolved) to provide a compatibility layer. This option generally shouldn’t be set by the user. Type: package Default: pkgs.openresolv Declared by: <nixpkgs/nixos/modules/config/resolvconf.nix>

## networking.resolvconf.dnsExtensionMechanism

Enable the edns0 option in resolv.conf. With that option set, glibc supports use of the extension mechanisms for DNS (EDNS) specified in RFC 2671. The most popular user of that feature is DNSSEC, which does not work without it. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/config/resolvconf.nix>

## networking.resolvconf.dnsSingleRequest

Recent versions of glibc will issue both ipv4 (A) and ipv6 (AAAA) address queries at the same time, from the same port. Sometimes upstream routers will systemically drop the ipv4 queries. The symptom of this problem is that ‘getent hosts example.com’ only returns ipv6 (or perhaps only ipv4) addresses. The workaround for this is to specify the option ‘single-request’ in /etc/resolv.conf. This option enables that. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/config/resolvconf.nix>

## networking.resolvconf.extraConfig

Extra configuration to append to resolvconf.conf. Type: strings concatenated with “\n” Default: "" Example: "libc=NO" Declared by: <nixpkgs/nixos/modules/config/resolvconf.nix>

## networking.resolvconf.extraOptions

Set the options in /etc/resolv.conf. Type: list of string Default: [ ] Example: [ "ndots:1" "rotate" ] Declared by: <nixpkgs/nixos/modules/config/resolvconf.nix>

## networking.resolvconf.useLocalResolver

Use local DNS server for resolving. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/config/resolvconf.nix>
