---
module: virtualisation.oci-containers.containers.<name>.login
option_count: 3
source: options.html
---

# virtualisation.oci-containers.containers.<name>.login

## virtualisation.oci-containers.containers.<name>.login.passwordFile

Path to file containing password. Type: null or string Default: null Example: "/etc/nixos/dockerhub-password.txt" Declared by: <nixpkgs/nixos/modules/virtualisation/oci-containers.nix>

## virtualisation.oci-containers.containers.<name>.login.registry

Registry where to login to. Type: null or string Default: null Example: "https://docker.pkg.github.com" Declared by: <nixpkgs/nixos/modules/virtualisation/oci-containers.nix>

## virtualisation.oci-containers.containers.<name>.login.username

Username for login. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/virtualisation/oci-containers.nix>
