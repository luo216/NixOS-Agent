---
module: services.logcheck.ignore.<name>
option_count: 2
source: options.html
---

# services.logcheck.ignore.<name>

## services.logcheck.ignore.<name>.level

Set the logcheck level. Type: one of “workstation”, “server”, “paranoid” Default: "server" Declared by: <nixpkgs/nixos/modules/services/logging/logcheck.nix>

## services.logcheck.ignore.<name>.regex

Regex specifying which log lines to ignore. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/logging/logcheck.nix>
