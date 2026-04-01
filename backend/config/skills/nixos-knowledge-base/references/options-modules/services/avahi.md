---
module: services.avahi
option_count: 19
source: options.html
---

# services.avahi

## services.avahi.enable

Whether to run the Avahi daemon, which allows Avahi clients to use Avahi’s service discovery facilities and also allows the local machine to advertise its presence and services (through the mDNS responder implemented by avahi-daemon). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/avahi-daemon.nix>

## services.avahi.package

The avahi package to use. Type: package Default: pkgs.avahi Declared by: <nixpkgs/nixos/modules/services/networking/avahi-daemon.nix>

## services.avahi.allowInterfaces

List of network interfaces that should be used by the avahi-daemon. Other interfaces will be ignored. If null, all local interfaces except loopback and point-to-point will be used. Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/avahi-daemon.nix>

## services.avahi.allowPointToPoint

Whether to use POINTTOPOINT interfaces. Might make mDNS unreliable due to usually large latencies with such links and opens a potential security hole by allowing mDNS access from Internet connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/avahi-daemon.nix>

## services.avahi.browseDomains

List of non-local DNS domains to be browsed. Type: list of string Default: [ ] Example: [ "0pointer.de" "zeroconf.org" ] Declared by: <nixpkgs/nixos/modules/services/networking/avahi-daemon.nix>

## services.avahi.cacheEntriesMax

Number of resource records to be cached per interface. Use 0 to disable caching. Avahi daemon defaults to 4096 if not set. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/networking/avahi-daemon.nix>

## services.avahi.debug

Whether to enable debug logging. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/avahi-daemon.nix>

## services.avahi.denyInterfaces

List of network interfaces that should be ignored by the avahi-daemon. Other unspecified interfaces will be used, unless allowInterfaces is set. This option takes precedence over allowInterfaces. Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/avahi-daemon.nix>

## services.avahi.domainName

Domain name for all advertisements. Type: string Default: "local" Declared by: <nixpkgs/nixos/modules/services/networking/avahi-daemon.nix>

## services.avahi.extraConfig

Extra config to append to avahi-daemon.conf. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/avahi-daemon.nix>

## services.avahi.extraServiceFiles

Specify custom service definitions which are placed in the avahi service directory. See the avahi.service(5) manpage for detailed information. Type: attribute set of (string or absolute path) Default: { } Example: { ssh = "${pkgs.avahi}/etc/avahi/services/ssh.service"; smb = '' <?xml version="1.0" standalone='no'?><!--*-nxml-*--> <!DOCTYPE service-group SYSTEM "avahi-service.dtd"> <service-group> <name replace-wildcards="yes">%h</name> <service> <type>_smb._tcp</type> <port>445</port> </service> </service-group> ''; } Declared by: <nixpkgs/nixos/modules/services/networking/avahi-daemon.nix>

## services.avahi.hostName

Host name advertised on the LAN. If not set, avahi will use the value of config.networking.hostName. Type: string Default: config.networking.hostName Declared by: <nixpkgs/nixos/modules/services/networking/avahi-daemon.nix>

## services.avahi.ipv4

Whether to use IPv4. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/avahi-daemon.nix>

## services.avahi.ipv6

Whether to use IPv6. Type: boolean Default: config.networking.enableIPv6 Declared by: <nixpkgs/nixos/modules/services/networking/avahi-daemon.nix>

## services.avahi.nssmdns4

Whether to enable the mDNS NSS (Name Service Switch) plug-in for IPv4. Enabling it allows applications to resolve names in the .local domain by transparently querying the Avahi daemon. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/avahi-daemon.nix>

## services.avahi.nssmdns6

Whether to enable the mDNS NSS (Name Service Switch) plug-in for IPv6. Enabling it allows applications to resolve names in the .local domain by transparently querying the Avahi daemon. Note Due to the fact that most mDNS responders only register local IPv4 addresses, most user want to leave this option disabled to avoid long timeouts when applications first resolve the none existing IPv6 address. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/avahi-daemon.nix>

## services.avahi.openFirewall

Whether to open the firewall for UDP port 5353. Disabling this setting also disables discovering of network devices. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/avahi-daemon.nix>

## services.avahi.reflector

Reflect incoming mDNS requests to all allowed network interfaces. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/avahi-daemon.nix>

## services.avahi.wideArea

Whether to enable wide-area service discovery. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/avahi-daemon.nix>
