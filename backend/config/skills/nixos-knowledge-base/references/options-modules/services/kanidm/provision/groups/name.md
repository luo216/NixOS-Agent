---
module: services.kanidm.provision.groups.<name>
option_count: 3
source: options.html
---

# services.kanidm.provision.groups.<name>

## services.kanidm.provision.groups.<name>.members

List of kanidm entities (persons, groups, …) which are part of this group. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/security/kanidm.nix>

## services.kanidm.provision.groups.<name>.overwriteMembers

Whether the member list should be overwritten each time (true) or appended (false). Append mode allows interactive group management in addition to the declared members. Also, future member removals cannot be reflected automatically in append mode. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/security/kanidm.nix>

## services.kanidm.provision.groups.<name>.present

Whether to ensure that this group is present or absent. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/security/kanidm.nix>
