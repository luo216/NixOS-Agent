---
module: services.openvpn
option_count: 3
source: options.html
---

# services.openvpn

## services.openvpn.package

The openvpn package to use. Type: package Default: pkgs.openvpn Declared by: <nixpkgs/nixos/modules/services/networking/openvpn.nix>

## services.openvpn.restartAfterSleep

Whether OpenVPN client should be restarted after sleep. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/openvpn.nix>

## services.openvpn.servers

Each attribute of this option defines a systemd service that runs an OpenVPN instance. These can be OpenVPN servers or clients. The name of each systemd service is openvpn-«name».service, where «name» is the corresponding attribute name. Type: attribute set of (submodule) Default: { } Example: { server = { config = '' # Simplest server configuration: https://community.openvpn.net/openvpn/wiki/StaticKeyMiniHowto # server : dev tun ifconfig 10.8.0.1 10.8.0.2 secret /root/static.key ''; up = "ip route add ..."; down = "ip route del ..."; }; client = { config = '' client remote vpn.example.org dev tun proto tcp-client port 8080 ca /root/.vpn/ca.crt cert /root/.vpn/alice.crt key /root/.vpn/alice.key ''; up = "echo nameserver $nameserver | ${pkgs.openresolv}/sbin/resolvconf -m 0 -a $dev"; down = "${pkgs.openresolv}/sbin/resolvconf -d $dev"; }; } Declared by: <nixpkgs/nixos/modules/services/networking/openvpn.nix>
