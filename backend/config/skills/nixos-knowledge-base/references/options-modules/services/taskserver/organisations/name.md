---
module: services.taskserver.organisations.<name>
option_count: 2
source: options.html
---

# services.taskserver.organisations.<name>

## services.taskserver.organisations.<name>.groups

A list of group names that belong to the organization. Type: list of string Default: [ ] Example: [ "workers" "slackers" ] Declared by: <nixpkgs/nixos/modules/services/misc/taskserver>

## services.taskserver.organisations.<name>.users

A list of user names that belong to the organization. Type: list of string Default: [ ] Example: [ "alice" "bob" ] Declared by: <nixpkgs/nixos/modules/services/misc/taskserver>
