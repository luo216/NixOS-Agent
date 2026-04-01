---
module: services.sabnzbd
option_count: 6
source: options.html
---

# services.sabnzbd

## services.sabnzbd.enable

Whether to enable the sabnzbd server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/sabnzbd.nix>

## services.sabnzbd.package

The sabnzbd package to use. Type: package Default: pkgs.sabnzbd Declared by: <nixpkgs/nixos/modules/services/networking/sabnzbd.nix>

## services.sabnzbd.configFile

Path to config file. Type: absolute path Default: "/var/lib/sabnzbd/sabnzbd.ini" Declared by: <nixpkgs/nixos/modules/services/networking/sabnzbd.nix>

## services.sabnzbd.group

Group to run the service as Type: string Default: "sabnzbd" Declared by: <nixpkgs/nixos/modules/services/networking/sabnzbd.nix>

## services.sabnzbd.openFirewall

Open ports in the firewall for the sabnzbd web interface Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/sabnzbd.nix>

## services.sabnzbd.user

User to run the service as Type: string Default: "sabnzbd" Declared by: <nixpkgs/nixos/modules/services/networking/sabnzbd.nix>
