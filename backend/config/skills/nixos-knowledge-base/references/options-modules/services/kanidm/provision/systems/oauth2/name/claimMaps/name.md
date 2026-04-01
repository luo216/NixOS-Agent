---
module: services.kanidm.provision.systems.oauth2.<name>.claimMaps.<name>
option_count: 2
source: options.html
---

# services.kanidm.provision.systems.oauth2.<name>.claimMaps.<name>

## services.kanidm.provision.systems.oauth2.<name>.claimMaps.<name>.joinType

Determines how multiple values are joined to create the claim value. See Claim Maps for more information. Type: one of “array”, “csv”, “ssv” Default: "array" Declared by: <nixpkgs/nixos/modules/services/security/kanidm.nix>

## services.kanidm.provision.systems.oauth2.<name>.claimMaps.<name>.valuesByGroup

Maps kanidm groups to values for the claim. Type: attribute set of list of string Default: { } Declared by: <nixpkgs/nixos/modules/services/security/kanidm.nix>
