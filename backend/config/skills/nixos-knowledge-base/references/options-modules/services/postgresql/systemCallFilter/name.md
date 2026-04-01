---
module: services.postgresql.systemCallFilter.<name>
option_count: 2
source: options.html
---

# services.postgresql.systemCallFilter.<name>

## services.postgresql.systemCallFilter.<name>.enable

Whether to enable ‹name› in postgresql’s syscall filter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/databases/postgresql.nix>

## services.postgresql.systemCallFilter.<name>.priority

Set the priority of the system call filter setting. Later declarations override earlier ones, e.g. [Service] SystemCallFilter=~read write SystemCallFilter=write results in a service where only read is not allowed. The ordering in the unit file is controlled by this option: the higher the number, the later it will be added to the filterset. By default, depending on the prefix a priority is assigned: usually, call-groups (starting with @) are used to allow/deny a larger set of syscalls and later on single syscalls are configured for exceptions. Hence, syscall groups and negative groups are placed before individual syscalls by default. Type: signed integer Default: if hasPrefix "@" name then 500 else if hasPrefix "~@" name then 1000 else 1500 Declared by: <nixpkgs/nixos/modules/services/databases/postgresql.nix>
