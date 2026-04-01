---
module: services.matter-server
option_count: 6
source: options.html
---

# services.matter-server

## services.matter-server.enable

Whether to enable Matter-server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/home-automation/matter-server.nix>

## services.matter-server.package

The python-matter-server package to use. Type: package Default: pkgs.python-matter-server Declared by: <nixpkgs/nixos/modules/services/home-automation/matter-server.nix>

## services.matter-server.extraArgs

Extra arguments to pass to the matter-server executable. See https://github.com/home-assistant-libs/python-matter-server?tab=readme-ov-file#running-the-development-server for options. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/home-automation/matter-server.nix>

## services.matter-server.logLevel

Verbosity of logs from the matter-server Type: one of “critical”, “error”, “warning”, “info”, “debug” Default: "info" Declared by: <nixpkgs/nixos/modules/services/home-automation/matter-server.nix>

## services.matter-server.openFirewall

Whether to open the port in the firewall. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/home-automation/matter-server.nix>

## services.matter-server.port

Port to expose the matter-server service on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5580 Declared by: <nixpkgs/nixos/modules/services/home-automation/matter-server.nix>
