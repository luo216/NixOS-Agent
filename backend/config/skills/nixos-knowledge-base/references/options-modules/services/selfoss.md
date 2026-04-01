---
module: services.selfoss
option_count: 4
source: options.html
---

# services.selfoss

## services.selfoss.enable

Whether to enable selfoss. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/selfoss.nix>

## services.selfoss.extraConfig

Extra configuration added to config.ini Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/web-apps/selfoss.nix>

## services.selfoss.pool

Name of existing phpfpm pool that is used to run web-application. If not specified a pool will be created automatically with default values. Type: string Default: "selfoss_pool" Declared by: <nixpkgs/nixos/modules/services/web-apps/selfoss.nix>

## services.selfoss.user

User account under which both the service and the web-application run. Type: string Default: "nginx" Declared by: <nixpkgs/nixos/modules/services/web-apps/selfoss.nix>
