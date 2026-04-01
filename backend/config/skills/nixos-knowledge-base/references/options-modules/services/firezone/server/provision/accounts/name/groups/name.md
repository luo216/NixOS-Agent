---
module: services.firezone.server.provision.accounts.<name>.groups.<name>
option_count: 3
source: options.html
---

# services.firezone.server.provision.accounts.<name>.groups.<name>

## services.firezone.server.provision.accounts.<name>.groups.<name>.forceMembers

Ensure that only the given members are part of this group at every server start. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.provision.accounts.<name>.groups.<name>.members

The members of this group Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.provision.accounts.<name>.groups.<name>.name

The name of this group Type: string Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>
