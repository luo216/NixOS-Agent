---
module: services.trilium-server
option_count: 10
source: options.html
---

# services.trilium-server

## services.trilium-server.enable

Whether to enable trilium-server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/trilium.nix>

## services.trilium-server.package

The trilium-server package to use. Type: package Default: pkgs.trilium-server Declared by: <nixpkgs/nixos/modules/services/web-apps/trilium.nix>

## services.trilium-server.dataDir

The directory storing the notes database and the configuration. Type: string Default: "/var/lib/trilium" Declared by: <nixpkgs/nixos/modules/services/web-apps/trilium.nix>

## services.trilium-server.environmentFile

File to load as the environment file. This allows you to pass secrets in without writing to the nix store. Type: null or absolute path Default: null Example: "/secrets/trilium.env" Declared by: <nixpkgs/nixos/modules/services/web-apps/trilium.nix>

## services.trilium-server.host

The host address to bind to (defaults to localhost). Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/web-apps/trilium.nix>

## services.trilium-server.instanceName

Instance name used to distinguish between different instances Type: string Default: "Trilium" Declared by: <nixpkgs/nixos/modules/services/web-apps/trilium.nix>

## services.trilium-server.nginx

Configuration for nginx reverse proxy. Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/trilium.nix>

## services.trilium-server.noAuthentication

If set to true, no password is required to access the web frontend. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/trilium.nix>

## services.trilium-server.noBackup

Disable periodic database backups. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/trilium.nix>

## services.trilium-server.port

The port number to bind to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Declared by: <nixpkgs/nixos/modules/services/web-apps/trilium.nix>
