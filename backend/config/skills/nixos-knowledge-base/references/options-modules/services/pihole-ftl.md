---
module: services.pihole-ftl
option_count: 15
source: options.html
---

# services.pihole-ftl

## services.pihole-ftl.enable

Whether to enable Pi-hole FTL. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/pihole-ftl.nix>

## services.pihole-ftl.package

The pihole-ftl package to use. Type: package Default: pkgs.pihole-ftl Declared by: <nixpkgs/nixos/modules/services/networking/pihole-ftl.nix>

## services.pihole-ftl.group

Group to run the service as. Type: string Default: "pihole" Declared by: <nixpkgs/nixos/modules/services/networking/pihole-ftl.nix>

## services.pihole-ftl.lists

Deny (or allow) domain lists to use Type: list of (submodule) Default: [ ] Example: [ { url = "https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts"; } ] Declared by: <nixpkgs/nixos/modules/services/networking/pihole-ftl.nix>

## services.pihole-ftl.logDirectory

Path for Pi-hole log files Type: absolute path Default: "/var/log/pihole" Declared by: <nixpkgs/nixos/modules/services/networking/pihole-ftl.nix>

## services.pihole-ftl.macvendorURL

URL from which to download the macvendor.db file. Type: string Default: "https://ftl.pi-hole.net/macvendor.db" Declared by: <nixpkgs/nixos/modules/services/networking/pihole-ftl.nix>

## services.pihole-ftl.openFirewallDHCP

Open ports in the firewall for pihole-FTL’s DHCP server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/pihole-ftl.nix>

## services.pihole-ftl.openFirewallDNS

Open ports in the firewall for pihole-FTL’s DNS server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/pihole-ftl.nix>

## services.pihole-ftl.openFirewallWebserver

Open ports in the firewall for pihole-FTL’s webserver, as configured in settings.webserver.port. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/pihole-ftl.nix>

## services.pihole-ftl.piholePackage

The pihole package to use. Type: package Default: pkgs.pihole Declared by: <nixpkgs/nixos/modules/services/networking/pihole-ftl.nix>

## services.pihole-ftl.privacyLevel

Level of detail in generated statistics. 0 enables full statistics, 3 shows only anonymous statistics. See the documentation. Also see services.dnsmasq.settings.log-queries to completely disable query logging. Type: integer or floating point number between 0 and 3 (both inclusive) Default: 0 Example: 3 Declared by: <nixpkgs/nixos/modules/services/networking/pihole-ftl.nix>

## services.pihole-ftl.settings

Configuration options for pihole.toml. See the upstream documentation. Type: TOML value Declared by: <nixpkgs/nixos/modules/services/networking/pihole-ftl.nix>

## services.pihole-ftl.stateDirectory

Path for pihole state files. Type: absolute path Default: "/var/lib/pihole" Declared by: <nixpkgs/nixos/modules/services/networking/pihole-ftl.nix>

## services.pihole-ftl.useDnsmasqConfig

Import options defined in services.dnsmasq.settings via misc.dnsmasq_lines in Pi-hole’s config. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/pihole-ftl.nix>

## services.pihole-ftl.user

User to run the service as. Type: string Default: "pihole" Declared by: <nixpkgs/nixos/modules/services/networking/pihole-ftl.nix>
