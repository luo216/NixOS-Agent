---
module: power.ups
option_count: 10
source: options.html
---

# power.ups

## power.ups.enable

Whether to enable support for Power Devices, such as Uninterruptible Power Supplies, Power Distribution Units and Solar Controllers . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/ups.nix>

## power.ups.package

The nut package to use. Type: package Default: pkgs.nut Declared by: <nixpkgs/nixos/modules/services/monitoring/ups.nix>

## power.ups.maxStartDelay

This can be set as a global variable above your first UPS definition and it can also be set in a UPS section. This value controls how long upsdrvctl will wait for the driver to finish starting. This keeps your system from getting stuck due to a broken driver or UPS. Type: signed integer Default: 45 Declared by: <nixpkgs/nixos/modules/services/monitoring/ups.nix>

## power.ups.mode

The MODE determines which part of the NUT is to be started, and which configuration files must be modified. The values of MODE can be: none: NUT is not configured, or use the Integrated Power Management, or use some external system to startup NUT components. So nothing is to be started. standalone: This mode address a local only configuration, with 1 UPS protecting the local system. This implies to start the 3 NUT layers (driver, upsd and upsmon) and the matching configuration files. This mode can also address UPS redundancy. netserver: same as for the standalone configuration, but also need some more ACLs and possibly a specific LISTEN directive in upsd.conf. Since this MODE is opened to the network, a special care should be applied to security concerns. netclient: this mode only requires upsmon. Type: one of “none”, “standalone”, “netserver”, “netclient” Default: "standalone" Declared by: <nixpkgs/nixos/modules/services/monitoring/ups.nix>

## power.ups.openFirewall

Open ports in the firewall for upsd. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/ups.nix>

## power.ups.schedulerRules

File which contains the rules to handle UPS events. Type: string Example: "/etc/nixos/upssched.conf" Declared by: <nixpkgs/nixos/modules/services/monitoring/ups.nix>

## power.ups.ups

This is where you configure all the UPSes that this system will be monitoring directly. These are usually attached to serial ports, but USB devices are also supported. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/monitoring/ups.nix>

## power.ups.upsd

Options for the upsd.conf configuration file. Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/monitoring/ups.nix>

## power.ups.upsmon

Options for the upsmon.conf configuration file. Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/monitoring/ups.nix>

## power.ups.users

Users that can access upsd. See man upsd.users. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/monitoring/ups.nix>
