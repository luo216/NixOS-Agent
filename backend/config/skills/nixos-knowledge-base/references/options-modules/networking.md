---
module: networking
option_count: 35
source: options.html
---

# networking

## networking.enableB43Firmware

Turn on this option if you want firmware for the NICs supported by the b43 module. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/hardware/network/b43.nix>

## networking.enableIPv6

Whether to enable support for IPv6. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.enableIntel2200BGFirmware

Turn on this option if you want firmware for the Intel PRO/Wireless 2200BG to be loaded automatically. This is required if you want to use this device. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/hardware/network/intel-2200bg.nix>

## networking.bonds

This option allows you to define bond devices that aggregate multiple, underlying networking interfaces together. The value of this option is an attribute set. Each attribute specifies a bond, with the attribute name specifying the name of the bond’s network interface Type: attribute set of (submodule) Default: { } Example: { bond0 = { interfaces = [ "eth0" "wlan0" ]; driverOptions = { miimon = "100"; mode = "active-backup"; } ; }; anotherBond.interfaces = [ "enp4s0f0" "enp4s0f1" "enp5s0f0" "enp5s0f1" ]; } Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.bridges

This option allows you to define Ethernet bridge devices that connect physical networks together. The value of this option is an attribute set. Each attribute specifies a bridge, with the attribute name specifying the name of the bridge’s network interface. Type: attribute set of (submodule) Default: { } Example: { br0 = { interfaces = [ "eth0" "eth1" ]; }; br1 = { interfaces = [ "eth2" "wlan0" ]; }; } Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.defaultGateway

The default gateway. It can be left empty if it is auto-detected through DHCP. It can be specified as a string or an option set along with a network interface. Type: null or ((submodule) or string convertible to it) Default: null Example: { address = "131.211.84.1"; interface = "enp3s0"; source = "131.211.84.2"; } Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.defaultGateway6

The default ipv6 gateway. It can be left empty if it is auto-detected through DHCP. It can be specified as a string or an option set along with a network interface. Type: null or ((submodule) or string convertible to it) Default: null Example: { address = "2001:4d0:1e04:895::1"; interface = "enp3s0"; source = "2001:4d0:1e04:895::2"; } Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.defaultGatewayWindowSize

The window size of the default gateway. It limits maximal data bursts that TCP peers are allowed to send to us. Type: null or signed integer Default: null Example: 524288 Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.domain

The system domain name. Used to populate the fqdn value. Warning The domain name is not configured for DNS resolution purposes, see search instead. Type: null or string Default: null Example: "home.arpa" Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.extraHosts

Additional verbatim entries to be appended to /etc/hosts. For adding hosts from derivation results, use networking.hostFiles instead. Type: strings concatenated with “\n” Default: "" Example: "192.168.0.1 lanlocalhost" Declared by: <nixpkgs/nixos/modules/config/networking.nix>

## networking.fooOverUDP

This option allows you to configure Foo Over UDP and Generic UDP Encapsulation endpoints. See ip-fou(8) for details. Type: attribute set of (submodule) Default: { } Example: { backup = { port = 9002; }; primary = { local = { address = "192.0.2.1"; dev = "eth0"; }; port = 9001; }; } Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.fqdn

The fully qualified domain name (FQDN) of this host. By default, it is the result of combining networking.hostName and networking.domain. Using this option will result in an evaluation error if the hostname is empty or no domain is specified. Modules that accept a mere networking.hostName but prefer a fully qualified domain name may use networking.fqdnOrHostName instead. Type: string Default: "${networking.hostName}.${networking.domain}" Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.fqdnOrHostName

Either the fully qualified domain name (FQDN), or just the host name if it does not exist. This is a convenience option for modules to read instead of fqdn when a mere hostName is also an acceptable value; this option does not throw an error when domain or fqdn is unset. Type: string (read only) Default: if config.networking.domain != null || config.networking.fqdn is set then config.networking.fqdn else config.networking.hostName Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.greTunnels

This option allows you to define Generic Routing Encapsulation (GRE) tunnels. Type: attribute set of (submodule) Default: { } Example: { greBridge = { remote = "10.0.0.1"; local = "10.0.0.22"; dev = "enp4s0f0"; type = "tap"; ttl = 255; }; gre6Tunnel = { remote = "fd7a:5634::1"; local = "fd7a:5634::2"; dev = "enp4s0f0"; type = "tun6"; ttl = 255; }; } Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.hostFiles

Files that should be concatenated together to form /etc/hosts. Type: list of absolute path Default: Hosts from networking.hosts and networking.extraHosts Example: [ "${pkgs.my-blocklist-package}/share/my-blocklist/hosts" ] Declared by: <nixpkgs/nixos/modules/config/networking.nix>

## networking.hostId

The 32-bit host ID of the machine, formatted as 8 hexadecimal characters. You should try to make this ID unique among your machines. You can generate a random 32-bit ID using the following commands: head -c 8 /etc/machine-id (this derives it from the machine-id that systemd generates) or head -c4 /dev/urandom | od -A none -t x4 The primary use case is to ensure when using ZFS that a pool isn’t imported accidentally on a wrong machine. Type: null or string Default: null Example: "4e98920d" Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.hostName

The name of the machine. Leave it empty if you want to obtain it from a DHCP server (if using DHCP). The hostname must be a valid DNS label (see RFC 1035 section 2.3.1: “Preferred name syntax”, RFC 1123 section 2.1: “Host Names and Numbers”) and as such must not contain the domain part. This means that the hostname must start with a letter or digit, end with a letter or digit, and have as interior characters only letters, digits, and hyphen. The maximum length is 63 characters. Additionally it is recommended to only use lower-case characters. If (e.g. for legacy reasons) a FQDN is required as the Linux kernel network node hostname (uname --nodename) the option boot.kernel.sysctl.“kernel.hostname” can be used as a workaround (but the 64 character limit still applies). WARNING: Do not use underscores (_) or you may run into unexpected issues. Type: string matching the pattern ^$|^[[:alnum:]]([[:alnum:]_-]{0,61}[[:alnum:]])?$ Default: config.system.nixos.distroId Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.hosts

Locally defined maps of hostnames to IP addresses. Type: attribute set of list of string Example: { "127.0.0.1" = [ "foo.bar.baz" ]; "192.168.0.2" = [ "fileserver.local" "nameserver.local" ]; }; Declared by: <nixpkgs/nixos/modules/config/networking.nix>

## networking.interfaces

The configuration for each network interface. Please note that systemd.network.netdevs has more features and is better maintained. When building new things, it is advised to use that instead. Type: attribute set of (submodule) Default: { } Example: { eth0 = { ipv4 = { addresses = [ { address = "131.211.84.78"; prefixLength = 25; } ]; }; }; } Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.ipips

This option allows you to define interfaces encapsulating IP packets within IP packets; which should be automatically created. For example, this allows you to create 4in6 (RFC 2473) or IP within IP (RFC 2003) tunnels. Type: attribute set of (submodule) Default: { } Example: { wan4in6 = { remote = "2001:db8::1"; local = "2001:db8::3"; dev = "wan6"; encapsulation.type = "4in6"; encapsulation.limit = 0; }; } Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.localCommands

Shell commands to be executed at the end of the network-setup systemd service. Note that if you are using DHCP to obtain the network configuration, interfaces may not be fully configured yet. Type: strings concatenated with “\n” Default: "" Example: "text=anything; echo You can put $text here." Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.macvlans

This option allows you to define macvlan interfaces which should be automatically created. Type: attribute set of (submodule) Default: { } Example: { wan = { interface = "enp2s0"; mode = "vepa"; }; } Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.nameservers

The list of nameservers. It can be left empty if it is auto-detected through DHCP. Type: list of string Default: [ ] Example: [ "130.161.158.4" "130.161.33.17" ] Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.search

The list of domain search paths that are considered for resolving hostnames with fewer dots than configured in the ndots option, which defaults to 1 if unset. Type: list of string Default: [ ] Example: [ "example.com" "home.arpa" ] Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.sits

This option allows you to define interfaces encapsulating IPv6 packets within IPv4 packets; which should be automatically created. Type: attribute set of (submodule) Default: { } Example: { hurricane = { remote = "10.0.0.1"; local = "10.0.0.22"; ttl = 255; }; msipv6 = { remote = "192.168.0.1"; dev = "enp3s0"; ttl = 127; }; } Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.supplicant

Interfaces for which to start wpa_supplicant. The supplicant is used to scan for and associate with wireless networks, or to authenticate with 802.1x capable network switches. The value of this option is an attribute set. Each attribute configures a wpa_supplicant service, where the attribute name specifies the name of the interface that wpa_supplicant operates on. The attribute name can be a space separated list of interfaces. The attribute names WLAN, LAN and DBUS have a special meaning. WLAN and LAN are configurations for universal wpa_supplicant service that is started for each WLAN interface or for each LAN interface, respectively. DBUS defines a device-unrelated wpa_supplicant service that can be accessed through D-Bus. Type: attribute set of (submodule) Default: { } Example: { "wlan0 wlan1" = { configFile.path = "/etc/wpa_supplicant.conf"; userControlled.group = "network"; extraConf = '' ap_scan=1 p2p_disabled=1 ''; extraCmdArgs = "-u -W"; bridge = "br0"; }; } Declared by: <nixpkgs/nixos/modules/services/networking/supplicant.nix>

## networking.tempAddresses

Whether to enable IPv6 Privacy Extensions for interfaces not configured explicitly in networking.interfaces.<name>.tempAddress. This sets the ipv6.conf.*.use_tempaddr sysctl for all interfaces. Possible values are: "default" to generate IPv6 temporary addresses and use these as source addresses in routing; "disabled" to completely disable IPv6 temporary addresses; "enabled" to generate IPv6 temporary addresses but still use EUI-64 addresses as source addresses; Type: one of “default”, “disabled”, “enabled” Default: if ${config.networking.enableIPv6} then "default" else "disabled" Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.timeServers

The set of NTP servers from which to synchronise. Type: list of string Default: [ "0.nixos.pool.ntp.org" "1.nixos.pool.ntp.org" "2.nixos.pool.ntp.org" "3.nixos.pool.ntp.org" ] Declared by: <nixpkgs/nixos/modules/config/networking.nix>

## networking.useDHCP

Whether to use DHCP to obtain an IP address and other configuration for all network interfaces that do not have any manually configured IPv4 addresses. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.useHostResolvConf

In containers, whether to use the resolv.conf supplied by the host. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.useNetworkd

Whether we should use networkd as the network configuration backend or the legacy script based system. Note that this option is experimental, enable at your own risk. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.usePredictableInterfaceNames

Whether to assign predictable names to network interfaces. If enabled, interfaces are assigned names that contain topology information (e.g. wlp3s0) and thus should be stable across reboots. If disabled, names depend on the order in which interfaces are discovered by the kernel, which may change randomly across reboots; for instance, you may find eth0 and eth1 flipping unpredictably. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/hardware/udev.nix>

## networking.vlans

This option allows you to define vlan devices that tag packets on top of a physical interface. The value of this option is an attribute set. Each attribute specifies a vlan, with the name specifying the name of the vlan interface. Type: attribute set of (submodule) Default: { } Example: { vlan0 = { id = 3; interface = "enp3s0"; }; vlan1 = { id = 1; interface = "wlan0"; }; } Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.vswitches

This option allows you to define Open vSwitches that connect physical networks together. The value of this option is an attribute set. Each attribute specifies a vswitch, with the attribute name specifying the name of the vswitch’s network interface. Type: attribute set of (submodule) Default: { } Example: { vs0 = { interfaces = { eth0 = { }; lo1 = { type = "internal"; }; }; }; vs1 = { interfaces = [ { name = "eth2"; } { name = "lo2"; type = "internal"; } ]; }; } Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.wlanInterfaces

Creating multiple WLAN interfaces on top of one physical WLAN device (NIC). The name of the WLAN interface corresponds to the name of the attribute. A NIC is referenced by the persistent device name of the WLAN interface that udev assigns to a NIC by default. If a NIC supports multiple WLAN interfaces, then the one NIC can be used as device for multiple WLAN interfaces. If a NIC is used for creating WLAN interfaces, then the default WLAN interface with a persistent device name form udev is not created. A WLAN interface with the persistent name assigned from udev would have to be created explicitly. Type: attribute set of (submodule) Default: { } Example: { wlan-station0 = { device = "wlp6s0"; }; wlan-adhoc0 = { type = "ibss"; device = "wlp6s0"; mac = "02:00:00:00:00:01"; }; wlan-p2p0 = { device = "wlp6s0"; mac = "02:00:00:00:00:02"; }; wlan-ap0 = { device = "wlp6s0"; mac = "02:00:00:00:00:03"; }; } Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>
