---
module: services.kanidm.provision.persons.<name>
option_count: 5
source: options.html
---

# services.kanidm.provision.persons.<name>

## services.kanidm.provision.persons.<name>.displayName

Display name Type: string Example: "My User" Declared by: <nixpkgs/nixos/modules/services/security/kanidm.nix>

## services.kanidm.provision.persons.<name>.groups

List of groups this person should belong to. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/security/kanidm.nix>

## services.kanidm.provision.persons.<name>.legalName

Full legal name Type: null or string Default: null Example: "Jane Doe" Declared by: <nixpkgs/nixos/modules/services/security/kanidm.nix>

## services.kanidm.provision.persons.<name>.mailAddresses

Mail addresses. First given address is considered the primary address. Type: list of string Default: [ ] Example: [ "jane.doe@example.com" ] Declared by: <nixpkgs/nixos/modules/services/security/kanidm.nix>

## services.kanidm.provision.persons.<name>.present

Whether to ensure that this person is present or absent. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/security/kanidm.nix>
