---
module: services.meshcentral
option_count: 3
source: options.html
---

# services.meshcentral

## services.meshcentral.enable

Whether to enable MeshCentral computer management server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/admin/meshcentral.nix>

## services.meshcentral.package

The meshcentral package to use. Type: package Default: pkgs.meshcentral Declared by: <nixpkgs/nixos/modules/services/admin/meshcentral.nix>

## services.meshcentral.settings

Settings for MeshCentral. Refer to upstream documentation for details: JSON Schema definition simple sample configuration complex sample configuration Old homepage with documentation link Type: open submodule of attribute set of (JSON value) Example: { domains = { "" = { certUrl = "https://meshcentral.example.com/"; }; }; settings = { Cert = "meshcentral.example.com"; Port = 4430; TlsOffload = "10.0.0.2,fd42::2"; WANonly = true; }; } Declared by: <nixpkgs/nixos/modules/services/admin/meshcentral.nix>
