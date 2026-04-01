---
module: services.ax25.axports.<name>
option_count: 9
source: options.html
---

# services.ax25.axports.<name>

## services.ax25.axports.<name>.enable

Whether to enable Enables the axport interface. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/ax25/axports.nix>

## services.ax25.axports.<name>.package

The ax25-tools package to use. Type: package Default: pkgs.ax25-tools Declared by: <nixpkgs/nixos/modules/services/networking/ax25/axports.nix>

## services.ax25.axports.<name>.baud

The serial port speed of this interface. Type: signed integer Example: 57600 Declared by: <nixpkgs/nixos/modules/services/networking/ax25/axports.nix>

## services.ax25.axports.<name>.callsign

The callsign of the physical interface to bind to. Type: string Example: "WB6WLV-7" Declared by: <nixpkgs/nixos/modules/services/networking/ax25/axports.nix>

## services.ax25.axports.<name>.description

Free format description of this interface. Type: string Default: "NixOS managed tnc" Declared by: <nixpkgs/nixos/modules/services/networking/ax25/axports.nix>

## services.ax25.axports.<name>.kissParams

Kissattach parameters for this interface. Type: null or string Default: null Example: "-t 300 -l 10 -s 12 -r 80 -f n" Declared by: <nixpkgs/nixos/modules/services/networking/ax25/axports.nix>

## services.ax25.axports.<name>.paclen

Default maximum packet size for this interface. Type: signed integer Default: 255 Declared by: <nixpkgs/nixos/modules/services/networking/ax25/axports.nix>

## services.ax25.axports.<name>.tty

Location of hardware kiss tnc for this interface. Type: string Example: "/dev/ttyACM0" Declared by: <nixpkgs/nixos/modules/services/networking/ax25/axports.nix>

## services.ax25.axports.<name>.window

Default window size for this interface. Type: signed integer Default: 7 Declared by: <nixpkgs/nixos/modules/services/networking/ax25/axports.nix>
