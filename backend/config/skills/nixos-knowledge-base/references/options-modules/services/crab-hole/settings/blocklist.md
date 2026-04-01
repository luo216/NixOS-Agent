---
module: services.crab-hole.settings.blocklist
option_count: 3
source: options.html
---

# services.crab-hole.settings.blocklist

## services.crab-hole.settings.blocklist.allow_list

List of allowlists. If files are added via url, make sure the service has access to them! Type: list of (string or absolute path) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/crab-hole.nix>

## services.crab-hole.settings.blocklist.include_subdomains

Whether to enable Include subdomains. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/crab-hole.nix>

## services.crab-hole.settings.blocklist.lists

List of blocklists. If files are added via url, make sure the service has access to them! Type: list of (string or absolute path) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/crab-hole.nix>
