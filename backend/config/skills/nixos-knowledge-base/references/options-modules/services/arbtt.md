---
module: services.arbtt
option_count: 4
source: options.html
---

# services.arbtt

## services.arbtt.enable

Whether to enable Arbtt statistics capture service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/arbtt.nix>

## services.arbtt.package

The arbtt package to use. Type: package Default: pkgs.haskellPackages.arbtt Declared by: <nixpkgs/nixos/modules/services/monitoring/arbtt.nix>

## services.arbtt.logFile

The log file for captured samples. Type: string Default: "%h/.arbtt/capture.log" Example: "/home/username/.arbtt-capture.log" Declared by: <nixpkgs/nixos/modules/services/monitoring/arbtt.nix>

## services.arbtt.sampleRate

The sampling interval in seconds. Type: signed integer Default: 60 Example: 120 Declared by: <nixpkgs/nixos/modules/services/monitoring/arbtt.nix>
