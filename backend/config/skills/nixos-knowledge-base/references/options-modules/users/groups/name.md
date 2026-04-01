---
module: users.groups.<name>
option_count: 3
source: options.html
---

# users.groups.<name>

## users.groups.<name>.gid

The group GID. If the GID is null, a free GID is picked on activation. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>

## users.groups.<name>.members

The user names of the group members, added to the /etc/group file. Type: list of (string, not containing newlines or colons) Default: [ ] Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>

## users.groups.<name>.name

The name of the group. If undefined, the name of the attribute set will be used. Type: string, not containing newlines or colons Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>
