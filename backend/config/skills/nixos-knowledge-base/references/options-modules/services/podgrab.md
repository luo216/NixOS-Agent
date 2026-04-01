---
module: services.podgrab
option_count: 6
source: options.html
---

# services.podgrab

## services.podgrab.enable

Whether to enable Podgrab, a self-hosted podcast manager. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/podgrab.nix>

## services.podgrab.dataDirectory

Directory to store downloads. Type: absolute path Default: "/var/lib/podgrab/data" Example: "/mnt/podcasts" Declared by: <nixpkgs/nixos/modules/services/misc/podgrab.nix>

## services.podgrab.group

Group under which Podgrab runs, and which owns the download directory. Type: string Default: "podgrab" Declared by: <nixpkgs/nixos/modules/services/misc/podgrab.nix>

## services.podgrab.passwordFile

The path to a file containing the PASSWORD environment variable definition for Podgrab’s authentication. Type: null or string Default: null Example: "/run/secrets/password.env" Declared by: <nixpkgs/nixos/modules/services/misc/podgrab.nix>

## services.podgrab.port

The port on which Podgrab will listen for incoming HTTP traffic. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Example: 4242 Declared by: <nixpkgs/nixos/modules/services/misc/podgrab.nix>

## services.podgrab.user

User under which Podgrab runs, and which owns the download directory. Type: string Default: "podgrab" Declared by: <nixpkgs/nixos/modules/services/misc/podgrab.nix>
