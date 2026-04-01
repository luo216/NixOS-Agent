---
module: services.omnom
option_count: 9
source: options.html
---

# services.omnom

## services.omnom.enable

Whether to enable Omnom, a webpage bookmarking and snapshotting service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/omnom.nix>

## services.omnom.package

The omnom package to use. Type: package Default: pkgs.omnom Declared by: <nixpkgs/nixos/modules/services/misc/omnom.nix>

## services.omnom.dataDir

The directory where Omnom stores its data files. Type: absolute path Default: "/var/lib/omnom" Declared by: <nixpkgs/nixos/modules/services/misc/omnom.nix>

## services.omnom.group

The Omnom service group. Type: non-empty string Default: "omnom" Declared by: <nixpkgs/nixos/modules/services/misc/omnom.nix>

## services.omnom.openFirewall

Whether to open ports in the firewall. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/omnom.nix>

## services.omnom.passwordFile

File containing the password for the SMTP user. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/misc/omnom.nix>

## services.omnom.port

The Omnom service port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 7331 Declared by: <nixpkgs/nixos/modules/services/misc/omnom.nix>

## services.omnom.settings

Configuration options for the /etc/omnom/config.yml file. Type: open submodule of (YAML 1.1 value) Default: { } Declared by: <nixpkgs/nixos/modules/services/misc/omnom.nix>

## services.omnom.user

The Omnom service user. Type: non-empty string Default: "omnom" Declared by: <nixpkgs/nixos/modules/services/misc/omnom.nix>
