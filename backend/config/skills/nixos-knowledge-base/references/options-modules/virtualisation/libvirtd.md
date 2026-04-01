---
module: virtualisation.libvirtd
option_count: 15
source: options.html
---

# virtualisation.libvirtd

## virtualisation.libvirtd.enable

This option enables libvirtd, a daemon that manages virtual machines. Users in the “libvirtd” group can interact with the daemon (e.g. to start or stop VMs) using the virsh command line tool, among others. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/libvirtd.nix>

## virtualisation.libvirtd.package

The libvirt package to use. Type: package Default: pkgs.libvirt Declared by: <nixpkgs/nixos/modules/virtualisation/libvirtd.nix>

## virtualisation.libvirtd.allowedBridges

List of bridge devices that can be used by qemu:///session Type: list of string Default: [ "virbr0" ] Declared by: <nixpkgs/nixos/modules/virtualisation/libvirtd.nix>

## virtualisation.libvirtd.extraConfig

Extra contents appended to the libvirtd configuration file, libvirtd.conf. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/virtualisation/libvirtd.nix>

## virtualisation.libvirtd.extraOptions

Extra command line arguments passed to libvirtd on startup. Type: list of string Default: [ ] Example: [ "--verbose" ] Declared by: <nixpkgs/nixos/modules/virtualisation/libvirtd.nix>

## virtualisation.libvirtd.firewallBackend

The backend used to setup virtual network firewall rules. Type: one of “iptables”, “nftables” Default: if config.networking.nftables.enable then "nftables" else "iptables" Declared by: <nixpkgs/nixos/modules/virtualisation/libvirtd.nix>

## virtualisation.libvirtd.hooks

Hooks related options. Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/virtualisation/libvirtd.nix>

## virtualisation.libvirtd.nss

libvirt NSS module options. Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/virtualisation/libvirtd.nix>

## virtualisation.libvirtd.onBoot

Specifies the action to be done to / on the guests when the host boots. The “start” option starts all guests that were running prior to shutdown regardless of their autostart settings. The “ignore” option will not start the formerly running guest on boot. However, any guest marked as autostart will still be automatically started by libvirtd. Type: one of “start”, “ignore” Default: "start" Declared by: <nixpkgs/nixos/modules/virtualisation/libvirtd.nix>

## virtualisation.libvirtd.onShutdown

When shutting down / restarting the host what method should be used to gracefully halt the guests. Setting to “shutdown” will cause an ACPI shutdown of each guest. “suspend” will attempt to save the state of the guests ready to restore on boot. Type: one of “shutdown”, “suspend” Default: "suspend" Declared by: <nixpkgs/nixos/modules/virtualisation/libvirtd.nix>

## virtualisation.libvirtd.parallelShutdown

Number of guests that will be shutdown concurrently, taking effect when onShutdown is set to “shutdown”. If set to 0, guests will be shutdown one after another. Number of guests on shutdown at any time will not exceed number set in this variable. Type: unsigned integer, meaning >=0 Default: 0 Declared by: <nixpkgs/nixos/modules/virtualisation/libvirtd.nix>

## virtualisation.libvirtd.qemu

QEMU related options. Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/virtualisation/libvirtd.nix>

## virtualisation.libvirtd.shutdownTimeout

Number of seconds we’re willing to wait for a guest to shut down. If parallel shutdown is enabled, this timeout applies as a timeout for shutting down all guests on a single URI defined in the variable URIS. If this is 0, then there is no time out (use with caution, as guests might not respond to a shutdown request). Type: unsigned integer, meaning >=0 Default: 300 Declared by: <nixpkgs/nixos/modules/virtualisation/libvirtd.nix>

## virtualisation.libvirtd.sshProxy

Whether to configure OpenSSH to use the SSH Proxy. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/virtualisation/libvirtd.nix>

## virtualisation.libvirtd.startDelay

Number of seconds to wait between each guest start. If set to 0, all guests will start up in parallel. Type: unsigned integer, meaning >=0 Default: 0 Declared by: <nixpkgs/nixos/modules/virtualisation/libvirtd.nix>
