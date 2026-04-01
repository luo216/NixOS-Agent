---
module: services.octoprint
option_count: 10
source: options.html
---

# services.octoprint

## services.octoprint.enable

Whether to enable OctoPrint, web interface for 3D printers. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/octoprint.nix>

## services.octoprint.package

The octoprint package to use. Type: package Default: pkgs.octoprint Declared by: <nixpkgs/nixos/modules/services/misc/octoprint.nix>

## services.octoprint.extraConfig

Extra options which are added to OctoPrint’s YAML configuration file. Type: attribute set Default: { } Declared by: <nixpkgs/nixos/modules/services/misc/octoprint.nix>

## services.octoprint.group

Group for the daemon. Type: string Default: "octoprint" Declared by: <nixpkgs/nixos/modules/services/misc/octoprint.nix>

## services.octoprint.host

Host to bind OctoPrint to. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/misc/octoprint.nix>

## services.octoprint.openFirewall

Open ports in the firewall for OctoPrint. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/octoprint.nix>

## services.octoprint.plugins

Additional plugins to be used. Available plugins are passed through the plugins input. Type: function that evaluates to a(n) list of package Default: plugins: [] Example: plugins: with plugins; [ themeify stlviewer ] Declared by: <nixpkgs/nixos/modules/services/misc/octoprint.nix>

## services.octoprint.port

Port to bind OctoPrint to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5000 Declared by: <nixpkgs/nixos/modules/services/misc/octoprint.nix>

## services.octoprint.stateDir

State directory of the daemon. Type: absolute path Default: "/var/lib/octoprint" Declared by: <nixpkgs/nixos/modules/services/misc/octoprint.nix>

## services.octoprint.user

User for the daemon. Type: string Default: "octoprint" Declared by: <nixpkgs/nixos/modules/services/misc/octoprint.nix>
