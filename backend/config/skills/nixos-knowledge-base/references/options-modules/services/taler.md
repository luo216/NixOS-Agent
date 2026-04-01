---
module: services.taler
option_count: 3
source: options.html
---

# services.taler

## services.taler.includes

Files to include into the config file using Taler’s @inline@ directive. This allows including arbitrary INI files, including imperatively managed ones. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/finance/taler/module.nix>

## services.taler.runtimeDir

Runtime directory shared between the taler services. Crypto helpers put their sockets here for instance and the httpd connects to them. Type: string Default: "/run/taler-system-runtime/" Declared by: <nixpkgs/nixos/modules/services/finance/taler/module.nix>

## services.taler.settings

Global configuration options for the taler config file. For a list of all possible options, please see the man page taler.conf(5) Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Declared by: <nixpkgs/nixos/modules/services/finance/taler/module.nix>
