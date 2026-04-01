---
module: services.journald.gateway
option_count: 8
source: options.html
---

# services.journald.gateway

## services.journald.gateway.enable

Whether to enable the HTTP gateway to the journal. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/system/boot/systemd/journald-gateway.nix>

## services.journald.gateway.cert

The path to a file or AF_UNIX stream socket to read the server certificate from. The certificate must be in PEM format. This option switches systemd-journal-gatewayd into HTTPS mode and must be used together with services.journald.gateway.key. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/system/boot/systemd/journald-gateway.nix>

## services.journald.gateway.key

Specify the path to a file or AF_UNIX stream socket to read the secret server key corresponding to the certificate specified with services.journald.gateway.cert from. The key must be in PEM format. This key should not be world-readable, and must be readably by the systemd-journal-gateway user. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/system/boot/systemd/journald-gateway.nix>

## services.journald.gateway.merge

Serve entries interleaved from all available journals, including other machines. This has the same meaning as --merge option for journalctl(1). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/systemd/journald-gateway.nix>

## services.journald.gateway.port

The port to listen to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 19531 Declared by: <nixpkgs/nixos/modules/system/boot/systemd/journald-gateway.nix>

## services.journald.gateway.system

Serve entries from system services and the kernel. This has the same meaning as --system for journalctl(1). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/systemd/journald-gateway.nix>

## services.journald.gateway.trust

Specify the path to a file or AF_UNIX stream socket to read a CA certificate from. The certificate must be in PEM format. Setting this option enforces client certificate checking. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/system/boot/systemd/journald-gateway.nix>

## services.journald.gateway.user

Serve entries from services for the current user. This has the same meaning as --user for journalctl(1). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/systemd/journald-gateway.nix>
