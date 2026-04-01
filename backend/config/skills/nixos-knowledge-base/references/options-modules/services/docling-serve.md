---
module: services.docling-serve
option_count: 8
source: options.html
---

# services.docling-serve

## services.docling-serve.enable

Whether to enable Docling Serve server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/docling-serve.nix>

## services.docling-serve.package

The docling-serve package to use. Type: package Default: pkgs.docling-serve Declared by: <nixpkgs/nixos/modules/services/misc/docling-serve.nix>

## services.docling-serve.environment

Extra environment variables for Docling Serve. For more details see https://github.com/docling-project/docling-serve/blob/main/docs/configuration.md Type: attribute set of string Default: { DOCLING_SERVE_ENABLE_UI = "False"; } Example: '' { DOCLING_SERVE_ENABLE_UI = "True"; } '' Declared by: <nixpkgs/nixos/modules/services/misc/docling-serve.nix>

## services.docling-serve.environmentFile

Environment file to be passed to the systemd service. Useful for passing secrets to the service to prevent them from being world-readable in the Nix store. Type: null or absolute path Default: null Example: "/var/lib/secrets/doclingServeSecrets" Declared by: <nixpkgs/nixos/modules/services/misc/docling-serve.nix>

## services.docling-serve.host

The host address which the Docling Serve server HTTP interface listens to. Type: string Default: "127.0.0.1" Example: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/misc/docling-serve.nix>

## services.docling-serve.openFirewall

Whether to open the firewall for Docling Serve. This adds services.Docling Serve.port to networking.firewall.allowedTCPPorts. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/docling-serve.nix>

## services.docling-serve.port

Which port the Docling Serve server listens to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5001 Example: 11111 Declared by: <nixpkgs/nixos/modules/services/misc/docling-serve.nix>

## services.docling-serve.stateDir

State directory of Docling Serve. Type: absolute path Default: "/var/lib/docling-serve" Example: "/home/foo" Declared by: <nixpkgs/nixos/modules/services/misc/docling-serve.nix>
