---
module: services.athens.storage.gcp
option_count: 3
source: options.html
---

# services.athens.storage.gcp

## services.athens.storage.gcp.bucket

GCP backend storage bucket. Type: null or string Default: null Example: "my-bucket" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.storage.gcp.jsonKey

Base64 encoded GCP service account key. Warning: this is stored in plain text in the config file. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>

## services.athens.storage.gcp.projectID

GCP project ID. Type: null or string Default: null Example: "my-project" Declared by: <nixpkgs/nixos/modules/services/development/athens.nix>
