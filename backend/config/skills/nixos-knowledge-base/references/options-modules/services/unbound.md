---
module: services.unbound
option_count: 10
source: options.html
---

# services.unbound

## services.unbound.enable

Whether to enable Unbound domain name server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/unbound.nix>

## services.unbound.enableRootTrustAnchor

Use and update root trust anchor for DNSSEC validation. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/unbound.nix>

## services.unbound.package

The unbound-with-systemd package to use. Type: package Default: pkgs.unbound-with-systemd Declared by: <nixpkgs/nixos/modules/services/networking/unbound.nix>

## services.unbound.checkconf

Whether to check the resulting config file with unbound checkconf for syntax errors. If settings.include is used, this options is disabled, as the import can likely not be accessed at build time. If settings.remote-control is used, this option is disabled, too as the control-key-file, server-cert-file and server-key-file cannot be accessed at build time. Type: boolean Default: "!services.unbound.settings ? include && !services.unbound.settings ? remote-control" Declared by: <nixpkgs/nixos/modules/services/networking/unbound.nix>

## services.unbound.group

Group under which unbound runs. Type: string Default: "unbound" Declared by: <nixpkgs/nixos/modules/services/networking/unbound.nix>

## services.unbound.localControlSocketPath

When not set to null this option defines the path at which the unbound remote control socket should be created at. The socket will be owned by the unbound user (unbound) and group will be nogroup. Users that should be permitted to access the socket must be in the config.services.unbound.group group. If this option is null remote control will not be enabled. Unbounds default values apply. Type: null or string Default: null Example: "/run/unbound/unbound.ctl" Declared by: <nixpkgs/nixos/modules/services/networking/unbound.nix>

## services.unbound.resolveLocalQueries

Whether unbound should resolve local queries (i.e. add 127.0.0.1 to /etc/resolv.conf). Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/unbound.nix>

## services.unbound.settings

Declarative Unbound configuration See the unbound.conf(5) manpage for a list of available options. Type: open submodule of unbound.conf configuration type. The format consist of an attribute set of settings. Each settings can be either one value, a list of values or an attribute set. The allowed values are integers, strings, booleans or floats. Default: { } Example: { server = { interface = [ "127.0.0.1" ]; }; forward-zone = [ { name = "."; forward-addr = "1.1.1.1@853#cloudflare-dns.com"; } { name = "example.org."; forward-addr = [ "1.1.1.1@853#cloudflare-dns.com" "1.0.0.1@853#cloudflare-dns.com" ]; } ]; remote-control.control-enable = true; }; Declared by: <nixpkgs/nixos/modules/services/networking/unbound.nix>

## services.unbound.stateDir

Directory holding all state for unbound to run. Type: absolute path Default: "/var/lib/unbound" Declared by: <nixpkgs/nixos/modules/services/networking/unbound.nix>

## services.unbound.user

User account under which unbound runs. Type: string Default: "unbound" Declared by: <nixpkgs/nixos/modules/services/networking/unbound.nix>
