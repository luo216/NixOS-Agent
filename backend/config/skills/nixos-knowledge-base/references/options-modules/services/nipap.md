---
module: services.nipap
option_count: 4
source: options.html
---

# services.nipap

## services.nipap.enable

Whether to enable global Neat IP Address Planner (NIPAP) configuration. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/nipap.nix>

## services.nipap.authBackendSettings

auth.backends options to set in /etc/nipap/nipap.conf. Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { local = { db_path = "/var/lib/nipap/local_auth.db"; type = "SqliteAuth"; }; } Declared by: <nixpkgs/nixos/modules/services/web-apps/nipap.nix>

## services.nipap.settings

Configuration options to set in /etc/nipap/nipap.conf. Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/nipap.nix>

## services.nipap.user

User to use for running NIPAP services. Type: string Default: "nipap" Declared by: <nixpkgs/nixos/modules/services/web-apps/nipap.nix>
