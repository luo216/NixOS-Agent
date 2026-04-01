---
module: services.technitium-dns-server
option_count: 5
source: options.html
---

# services.technitium-dns-server

## services.technitium-dns-server.enable

Whether to enable Technitium DNS Server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/technitium-dns-server.nix>

## services.technitium-dns-server.package

The technitium-dns-server package to use. Type: package Default: pkgs.technitium-dns-server Declared by: <nixpkgs/nixos/modules/services/networking/technitium-dns-server.nix>

## services.technitium-dns-server.firewallTCPPorts

List of TCP ports to open in firewall. You might want to open ports 443 and 853 if you intend to use DNS over HTTPS or DNS over TLS. Type: list of signed integer Default: [ 53 5380 53443 ] Declared by: <nixpkgs/nixos/modules/services/networking/technitium-dns-server.nix>

## services.technitium-dns-server.firewallUDPPorts

List of UDP ports to open in firewall. Type: list of signed integer Default: [ 53 ] Declared by: <nixpkgs/nixos/modules/services/networking/technitium-dns-server.nix>

## services.technitium-dns-server.openFirewall

Whether to open ports in the firewall. Standard ports are 53 (UDP and TCP, for DNS), 5380 and 53443 (TCP, HTTP and HTTPS for web interface). Specify different or additional ports in options firewallUDPPorts and firewallTCPPorts if necessary. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/technitium-dns-server.nix>
