---
module: services.qdrant
option_count: 4
source: options.html
---

# services.qdrant

## services.qdrant.enable

Whether to enable Vector Search Engine for the next generation of AI applications. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/search/qdrant.nix>

## services.qdrant.package

The qdrant package to use. Type: package Default: pkgs.qdrant Declared by: <nixpkgs/nixos/modules/services/search/qdrant.nix>

## services.qdrant.settings

Configuration for Qdrant Refer to https://github.com/qdrant/qdrant/blob/master/config/config.yaml for details on supported values. Type: YAML 1.1 value Default: { storage = { storage_path = "/var/lib/qdrant/storage"; snapshots_path = "/var/lib/qdrant/snapshots"; }; hsnw_index = { on_disk = true; }; service = { host = "127.0.0.1"; http_port = 6333; grpc_port = 6334; }; telemetry_disabled = true; } Example: { hsnw_index = { on_disk = true; }; service = { grpc_port = 6334; host = "127.0.0.1"; http_port = 6333; }; storage = { snapshots_path = "/var/lib/qdrant/snapshots"; storage_path = "/var/lib/qdrant/storage"; }; telemetry_disabled = true; } Declared by: <nixpkgs/nixos/modules/services/search/qdrant.nix>

## services.qdrant.webUIPackage

The qdrant-web-ui package to use. Type: package Default: pkgs.qdrant-web-ui Declared by: <nixpkgs/nixos/modules/services/search/qdrant.nix>
