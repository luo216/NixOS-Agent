---
module: services.netbird.tunnels.<name>
option_count: 11
source: options.html
---

# services.netbird.tunnels.<name>

## services.netbird.tunnels.<name>.autoStart

Start the service with the system. As of 2024-02-13 it is not possible to start a NetBird client daemon without immediately connecting to the network, but it is planned for a near future. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/netbird.nix>

## services.netbird.tunnels.<name>.config

Additional configuration that exists before the first start and later overrides the existing values in config.json. It is mostly helpful to manage configuration ignored/not yet implemented outside of netbird up invocation. WARNING: this is not an upstream feature, it could break in the future (by having lower priority) after upstream implements an equivalent. It is implemented as a preStart script which overrides config.json with content of /etc/netbird-‹name›/config.d/*.json files. This option manages specifically 50-nixos.json file. Consult the source code or inspect existing file for a complete list of available configurations. Type: JSON value Default: { DisableAutoConnect = !client.autoStart; WgIface = client.interface; WgPort = client.port; } // optionalAttrs (client.dns-resolver.address != null) { CustomDNSAddress = "${client.dns-resolver.address}:${toString client.dns-resolver.port}"; } Declared by: <nixpkgs/nixos/modules/services/networking/netbird.nix>

## services.netbird.tunnels.<name>.environment

Environment for the netbird service, used to pass configuration options. Type: attribute set of string Default: { NB_STATE_DIR = client.dir.state; NB_CONFIG = "${client.dir.state}/config.json"; NB_DAEMON_ADDR = "unix://${client.dir.runtime}/sock"; NB_INTERFACE_NAME = client.interface; NB_LOG_FILE = mkOptionDefault "console"; NB_LOG_LEVEL = client.logLevel; NB_SERVICE = client.service.name; NB_WIREGUARD_PORT = toString client.port; } // optionalAttrs (client.dns-resolver.address != null) { NB_DNS_RESOLVER_ADDRESS = "${client.dns-resolver.address}:${toString client.dns-resolver.port}"; } Declared by: <nixpkgs/nixos/modules/services/networking/netbird.nix>

## services.netbird.tunnels.<name>.hardened

Hardened service: runs as a dedicated user with minimal set of permissions (see caveats), restricts daemon configuration socket access to dedicated user group (you can grant access to it with users.users."<user>".extraGroups = [ netbird-‹name› ]), Even though the local system resources access is restricted: CAP_NET_RAW, CAP_NET_ADMIN and CAP_BPF still give unlimited network manipulation possibilites, older kernels don’t have CAP_BPF and use CAP_SYS_ADMIN instead, Known security features that are not (yet) integrated into the module: 2024-02-14: rosenpass is an experimental feature configurable solely through --enable-rosenpass flag on the netbird up command, see the docs Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/netbird.nix>

## services.netbird.tunnels.<name>.interface

Name of the network interface managed by this client. Type: string Default: "nb-‹name›" Declared by: <nixpkgs/nixos/modules/services/networking/netbird.nix>

## services.netbird.tunnels.<name>.logLevel

Log level of the NetBird daemon. Type: one of “panic”, “fatal”, “error”, “warn”, “warning”, “info”, “debug”, “trace” Default: "info" Declared by: <nixpkgs/nixos/modules/services/networking/netbird.nix>

## services.netbird.tunnels.<name>.name

Primary name for use (as a suffix) in: systemd service name, hardened user name and group, systemd *Directory= names, desktop application identification, Type: string Default: "‹name›" Declared by: <nixpkgs/nixos/modules/services/networking/netbird.nix>

## services.netbird.tunnels.<name>.openFirewall

Opens up firewall port for communication between NetBird peers directly over LAN or public IP, without using (internet-hosted) TURN servers as intermediaries. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/netbird.nix>

## services.netbird.tunnels.<name>.openInternalFirewall

Opens up internal firewall ports for the NetBird’s network interface. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/netbird.nix>

## services.netbird.tunnels.<name>.port

Port the NetBird client listens on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Example: 51820 Declared by: <nixpkgs/nixos/modules/services/networking/netbird.nix>

## services.netbird.tunnels.<name>.suffixedName

A systemd service name to use (without .service suffix). Type: string Default: "netbird-‹name›" Declared by: <nixpkgs/nixos/modules/services/networking/netbird.nix>
