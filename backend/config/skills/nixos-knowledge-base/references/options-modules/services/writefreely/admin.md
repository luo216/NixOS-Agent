---
module: services.writefreely.admin
option_count: 2
source: options.html
---

# services.writefreely.admin

## services.writefreely.admin.initialPasswordFile

Path to a file containing the initial password for the admin user. If not provided, the default password will be set to nixos. Type: absolute path Default: "/nix/store/xxx-default-admin-pass" Declared by: <nixpkgs/nixos/modules/services/web-apps/writefreely.nix>

## services.writefreely.admin.name

The name of the first admin user. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/writefreely.nix>
