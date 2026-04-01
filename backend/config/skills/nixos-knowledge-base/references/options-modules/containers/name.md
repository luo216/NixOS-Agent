---
module: containers.<name>
option_count: 27
source: options.html
---

# containers.<name>

## containers.<name>.enableTun

Allows the container to create and setup tunnel interfaces by granting the NET_ADMIN capability and enabling access to /dev/net/tun. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>

## containers.<name>.additionalCapabilities

Grant additional capabilities to the container. See the capabilities(7) and systemd-nspawn(1) man pages for more information. Type: list of string Default: [ ] Example: [ "CAP_NET_ADMIN" "CAP_MKNOD" ] Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>

## containers.<name>.allowedDevices

A list of device nodes to which the containers has access to. Type: list of (submodule) Default: [ ] Example: [ { modifier = "rwm"; node = "/dev/net/tun"; } ] Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>

## containers.<name>.autoStart

Whether the container is automatically started at boot-time. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>

## containers.<name>.bindMounts

An extra list of directories that is bound to the container. Type: attribute set of (submodule) Default: { } Example: { "/home" = { hostPath = "/home/alice"; isReadOnly = false; }; } Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>

## containers.<name>.config

A specification of the desired configuration of this container, as a NixOS module. Type: Toplevel NixOS config Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>

## containers.<name>.ephemeral

Runs container in ephemeral mode with the empty root filesystem at boot. This way container will be bootstrapped from scratch on each boot and will be cleaned up on shutdown leaving no traces behind. Useful for completely stateless, reproducible containers. Note that this option might require to do some adjustments to the container configuration, e.g. you might want to set systemd.network.networks.$interface.dhcpV4Config.ClientIdentifier to “mac” if you use macvlans option. This way dhcp client identifier will be stable between the container restarts. Note that the container journal will not be linked to the host if this option is enabled. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>

## containers.<name>.extraFlags

Extra flags passed to the systemd-nspawn command. See systemd-nspawn(1) for details. Type: list of string Default: [ ] Example: [ "--drop-capability=CAP_SYS_CHROOT" ] Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>

## containers.<name>.extraVeths

Extra veth-pairs to be created for the container. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>

## containers.<name>.flake

The Flake URI of the NixOS configuration to use for the container. Replaces the option containers.<name>.path. Type: null or string Default: null Example: "github:NixOS/nixpkgs/master" Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>

## containers.<name>.forwardPorts

List of forwarded ports from host to container. Each forwarded port is specified by protocol, hostPort and containerPort. By default, protocol is tcp and hostPort and containerPort are assumed to be the same if containerPort is not explicitly given. Type: list of (submodule) Default: [ ] Example: [ { containerPort = 80; hostPort = 8080; protocol = "tcp"; } ] Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>

## containers.<name>.hostAddress

The IPv4 address assigned to the host interface. (Not used when hostBridge is set.) Type: null or string Default: null Example: "10.231.136.1" Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>

## containers.<name>.hostAddress6

The IPv6 address assigned to the host interface. (Not used when hostBridge is set.) Type: null or string Default: null Example: "fc00::1" Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>

## containers.<name>.hostBridge

Put the host-side of the veth-pair into the named bridge. Only one of hostAddress* or hostBridge can be given. Type: null or string Default: null Example: "br0" Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>

## containers.<name>.interfaces

The list of interfaces to be moved into the container. Type: list of string Default: [ ] Example: [ "eth1" "eth2" ] Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>

## containers.<name>.localAddress

The IPv4 address assigned to the interface in the container. If a hostBridge is used, this should be given with netmask to access the whole network. Otherwise the default netmask is /32 and routing is set up from localAddress to hostAddress and back. Type: null or string Default: null Example: "10.231.136.2" Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>

## containers.<name>.localAddress6

The IPv6 address assigned to the interface in the container. If a hostBridge is used, this should be given with netmask to access the whole network. Otherwise the default netmask is /128 and routing is set up from localAddress6 to hostAddress6 and back. Type: null or string Default: null Example: "fc00::2" Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>

## containers.<name>.macvlans

The list of host interfaces from which macvlans will be created. For each interface specified, a macvlan interface will be created and moved to the container. Type: list of string Default: [ ] Example: [ "eth1" "eth2" ] Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>

## containers.<name>.networkNamespace

Takes the path to a file representing a kernel network namespace that the container shall run in. The specified path should refer to a (possibly bind-mounted) network namespace file, as exposed by the kernel below /proc/<PID>/ns/net. This makes the container enter the given network namespace. One of the typical use cases is to give a network namespace under /run/netns created by ip-netns(8). Note that this option cannot be used together with other network-related options, such as --private-network or --network-interface=. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>

## containers.<name>.nixpkgs

A path to the nixpkgs that provide the modules, pkgs and lib for evaluating the container. To only change the pkgs argument used inside the container modules, set the nixpkgs.* options in the container config. Setting config.nixpkgs.pkgs = pkgs speeds up the container evaluation by reusing the system pkgs, but the nixpkgs.config option in the container config is ignored in this case. Type: absolute path Default: pkgs.path Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>

## containers.<name>.path

As an alternative to specifying config, you can specify the path to the evaluated NixOS system configuration, typically a symlink to a system profile. Type: absolute path Example: "/nix/var/nix/profiles/per-container/webserver" Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>

## containers.<name>.privateNetwork

Whether to give the container its own private virtual Ethernet interface. The interface is called eth0, and is hooked up to the interface ve-«container-name» on the host. If this option is not set, then the container shares the network interfaces of the host, and can bind to any port on any interface. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>

## containers.<name>.privateUsers

Whether to give the container its own private UIDs/GIDs space (user namespacing). Disabled by default (no). If set to a number (usually above host’s UID/GID range: 65536), user namespacing is enabled and the container UID/GIDs will start at that number. If set to identity, mostly equivalent to 0, this will only provide process capability isolation (no UID/GID isolation, as they are the same as host). If set to pick, user namespacing is enabled and the UID/GID range is automatically chosen, so that no overlapping UID/GID ranges are assigned to multiple containers. This is the recommanded option as it enhances container security massively and operates fully automatically in most cases. See https://www.freedesktop.org/software/systemd/man/latest/systemd-nspawn.html#--private-users= for details. Type: 32 bit unsigned integer; between 0 and 4294967295 (both inclusive) or one of “no”, “identity”, “pick” Default: "no" Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>

## containers.<name>.restartIfChanged

Whether the container should be restarted during a NixOS configuration switch if its definition has changed. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>

## containers.<name>.specialArgs

A set of special arguments to be passed to NixOS modules. This will be merged into the specialArgs used to evaluate the NixOS configurations. Type: attribute set of unspecified value Default: { } Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>

## containers.<name>.timeoutStartSec

Time for the container to start. In case of a timeout, the container processes get killed. See systemd.time(7) for more information about the format. Type: string Default: "1min" Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>

## containers.<name>.tmpfs

Mounts a set of tmpfs file systems into the container. Multiple paths can be specified. Valid items must conform to the --tmpfs argument of systemd-nspawn. See systemd-nspawn(1) for details. Type: list of string Default: [ ] Example: [ "/var" ] Declared by: <nixpkgs/nixos/modules/virtualisation/nixos-containers.nix>
