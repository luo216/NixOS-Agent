---
module: services.pykms
option_count: 8
source: options.html
---

# services.pykms

## services.pykms.enable

Whether to enable the PyKMS service. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/pykms.nix>

## services.pykms.package

The pykms package to use. Type: package Default: pkgs.pykms Declared by: <nixpkgs/nixos/modules/services/misc/pykms.nix>

## services.pykms.extraArgs

Additional arguments Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/misc/pykms.nix>

## services.pykms.listenAddress

The IP address on which to listen. Type: string Default: "0.0.0.0" Example: "::" Declared by: <nixpkgs/nixos/modules/services/misc/pykms.nix>

## services.pykms.logLevel

How much to log Type: one of “CRITICAL”, “ERROR”, “WARNING”, “INFO”, “DEBUG”, “MININFO” Default: "INFO" Declared by: <nixpkgs/nixos/modules/services/misc/pykms.nix>

## services.pykms.memoryLimit

How much memory to use at most. Type: string Default: "64M" Declared by: <nixpkgs/nixos/modules/services/misc/pykms.nix>

## services.pykms.openFirewallPort

Whether the listening port should be opened automatically. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/pykms.nix>

## services.pykms.port

The port on which to listen. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 1688 Declared by: <nixpkgs/nixos/modules/services/misc/pykms.nix>
