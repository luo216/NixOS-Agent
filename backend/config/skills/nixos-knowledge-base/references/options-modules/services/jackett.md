---
module: services.jackett
option_count: 7
source: options.html
---

# services.jackett

## services.jackett.enable

Whether to enable Jackett, API support for your favorite torrent trackers. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/jackett.nix>

## services.jackett.package

The jackett package to use. Type: package Default: pkgs.jackett Declared by: <nixpkgs/nixos/modules/services/misc/jackett.nix>

## services.jackett.dataDir

The directory where Jackett stores its data files. Type: string Default: "/var/lib/jackett/.config/Jackett" Declared by: <nixpkgs/nixos/modules/services/misc/jackett.nix>

## services.jackett.group

Group under which Jackett runs. Type: string Default: "jackett" Declared by: <nixpkgs/nixos/modules/services/misc/jackett.nix>

## services.jackett.openFirewall

Open ports in the firewall for the Jackett web interface. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/jackett.nix>

## services.jackett.port

Port serving the web interface Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9117 Declared by: <nixpkgs/nixos/modules/services/misc/jackett.nix>

## services.jackett.user

User account under which Jackett runs. Type: string Default: "jackett" Declared by: <nixpkgs/nixos/modules/services/misc/jackett.nix>
