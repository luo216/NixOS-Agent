---
module: services.gitwatch.<name>
option_count: 6
source: options.html
---

# services.gitwatch.<name>

## services.gitwatch.<name>.enable

Whether to enable watching for repo. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/gitwatch.nix>

## services.gitwatch.<name>.branch

Optional branch in remote repository Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/gitwatch.nix>

## services.gitwatch.<name>.message

Optional text to use in as commit message; all occurrences of %d will be replaced by formatted date/time Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/gitwatch.nix>

## services.gitwatch.<name>.path

The path to repo in local machine Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/gitwatch.nix>

## services.gitwatch.<name>.remote

Optional url of remote repository Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/gitwatch.nix>

## services.gitwatch.<name>.user

The name of services’s user Type: string Default: "root" Declared by: <nixpkgs/nixos/modules/services/monitoring/gitwatch.nix>
