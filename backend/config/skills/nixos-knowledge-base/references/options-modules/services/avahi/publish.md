---
module: services.avahi.publish
option_count: 6
source: options.html
---

# services.avahi.publish

## services.avahi.publish.enable

Whether to allow publishing in general. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/avahi-daemon.nix>

## services.avahi.publish.addresses

Whether to register mDNS address records for all local IP addresses. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/avahi-daemon.nix>

## services.avahi.publish.domain

Whether to announce the locally used domain name for browsing by other hosts. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/avahi-daemon.nix>

## services.avahi.publish.hinfo

Whether to register a mDNS HINFO record which contains information about the local operating system and CPU. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/avahi-daemon.nix>

## services.avahi.publish.userServices

Whether to publish user services. Will set addresses=true. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/avahi-daemon.nix>

## services.avahi.publish.workstation

Whether to register a service of type “_workstation._tcp” on the local LAN. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/avahi-daemon.nix>
