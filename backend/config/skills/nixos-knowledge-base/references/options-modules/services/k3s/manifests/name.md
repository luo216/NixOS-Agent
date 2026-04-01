---
module: services.k3s.manifests.<name>
option_count: 4
source: options.html
---

# services.k3s.manifests.<name>

## services.k3s.manifests.<name>.enable

Whether this manifest file should be generated. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.k3s.manifests.<name>.content

Content of the manifest file. A single attribute set will generate a single document YAML file. A list of attribute sets will generate multiple documents separated by --- in a single YAML file. Type: null or (attribute set) or list of (attribute set) Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.k3s.manifests.<name>.source

Path of the source .yaml file. Type: absolute path Example: ./manifests/app.yaml Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>

## services.k3s.manifests.<name>.target

Name of the symlink (relative to /var/lib/rancher/k3s/server/manifests). Defaults to the attribute name. Type: non-empty string Example: "manifest.yaml" Declared by: <nixpkgs/nixos/modules/services/cluster/rancher/default.nix>
