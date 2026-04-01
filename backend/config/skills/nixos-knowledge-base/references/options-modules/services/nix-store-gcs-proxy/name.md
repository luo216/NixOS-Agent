---
module: services.nix-store-gcs-proxy.<name>
option_count: 3
source: options.html
---

# services.nix-store-gcs-proxy.<name>

## services.nix-store-gcs-proxy.<name>.enable

Whether to enable proxy for this bucket Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/networking/nix-store-gcs-proxy.nix>

## services.nix-store-gcs-proxy.<name>.address

The address of the proxy. Type: string Example: "localhost:3000" Declared by: <nixpkgs/nixos/modules/services/networking/nix-store-gcs-proxy.nix>

## services.nix-store-gcs-proxy.<name>.bucketName

Name of Google storage bucket Type: string Default: "‹name›" Example: "my-bucket-name" Declared by: <nixpkgs/nixos/modules/services/networking/nix-store-gcs-proxy.nix>
