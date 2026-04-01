---
module: virtualisation.containers
option_count: 2
source: options.html
---

# virtualisation.containers

## virtualisation.containers.enable

This option enables the common /etc/containers configuration module. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/containers.nix>

## virtualisation.containers.policy

Signature verification policy file. If this option is empty the default policy file from skopeo will be used. Type: attribute set Default: { } Example: { default = [ { type = "insecureAcceptAnything"; } ]; transports = { docker-daemon = { "" = [ { type = "insecureAcceptAnything"; } ]; }; }; } Declared by: <nixpkgs/nixos/modules/virtualisation/containers.nix>
