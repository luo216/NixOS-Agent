---
module: services.endlessh-go
option_count: 6
source: options.html
---

# services.endlessh-go

## services.endlessh-go.enable

Whether to enable endlessh-go service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/endlessh-go.nix>

## services.endlessh-go.package

The endlessh-go package to use. Type: package Default: pkgs.endlessh-go Declared by: <nixpkgs/nixos/modules/services/security/endlessh-go.nix>

## services.endlessh-go.extraOptions

Additional command line options to pass to the endlessh-go daemon. Type: list of string Default: [ ] Example: [ "-conn_type=tcp4" "-max_clients=8192" ] Declared by: <nixpkgs/nixos/modules/services/security/endlessh-go.nix>

## services.endlessh-go.listenAddress

Interface address to bind the endlessh-go daemon to SSH connections. Type: string Default: "0.0.0.0" Example: "[::]" Declared by: <nixpkgs/nixos/modules/services/security/endlessh-go.nix>

## services.endlessh-go.openFirewall

Whether to open a firewall port for the SSH listener. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/endlessh-go.nix>

## services.endlessh-go.port

Specifies on which port the endlessh-go daemon listens for SSH connections. Setting this to 22 may conflict with services.openssh. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 2222 Example: 22 Declared by: <nixpkgs/nixos/modules/services/security/endlessh-go.nix>
