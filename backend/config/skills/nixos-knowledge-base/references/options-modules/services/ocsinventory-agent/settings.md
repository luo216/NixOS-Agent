---
module: services.ocsinventory-agent.settings
option_count: 5
source: options.html
---

# services.ocsinventory-agent.settings

## services.ocsinventory-agent.settings.ca

Path to CA certificates file in PEM format, for server SSL certificate validation. Type: absolute path Default: config.security.pki.caBundle Declared by: <nixpkgs/nixos/modules/services/monitoring/ocsinventory-agent.nix>

## services.ocsinventory-agent.settings.debug

Whether to enable debug mode. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/ocsinventory-agent.nix>

## services.ocsinventory-agent.settings.local

If specified, the OCS Inventory Agent will run in offline mode and the resulting inventory file will be stored in the specified path. Type: null or absolute path Default: null Example: "/var/lib/ocsinventory-agent/reports" Declared by: <nixpkgs/nixos/modules/services/monitoring/ocsinventory-agent.nix>

## services.ocsinventory-agent.settings.server

The URI of the OCS Inventory server where to send the inventory file. This option is ignored if services.ocsinventory-agent.settings.local is set. Type: null or string Default: null Example: "https://ocsinventory.localhost:8080/ocsinventory" Declared by: <nixpkgs/nixos/modules/services/monitoring/ocsinventory-agent.nix>

## services.ocsinventory-agent.settings.tag

Tag for the generated inventory. Type: null or string Default: null Example: "01234567890123" Declared by: <nixpkgs/nixos/modules/services/monitoring/ocsinventory-agent.nix>
