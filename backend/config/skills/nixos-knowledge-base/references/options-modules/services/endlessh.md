---
module: services.endlessh
option_count: 4
source: options.html
---

# services.endlessh

## services.endlessh.enable

Whether to enable endlessh service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/endlessh.nix>

## services.endlessh.extraOptions

Additional command line options to pass to the endlessh daemon. Type: list of string Default: [ ] Example: [ "-6" "-d 9000" "-v" ] Declared by: <nixpkgs/nixos/modules/services/security/endlessh.nix>

## services.endlessh.openFirewall

Whether to open a firewall port for the SSH listener. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/endlessh.nix>

## services.endlessh.port

Specifies on which port the endlessh daemon listens for SSH connections. Setting this to 22 may conflict with services.openssh. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 2222 Example: 22 Declared by: <nixpkgs/nixos/modules/services/security/endlessh.nix>
