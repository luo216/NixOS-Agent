---
module: services.discourse.admin
option_count: 5
source: options.html
---

# services.discourse.admin

## services.discourse.admin.email

The admin user email address. Type: string Example: "admin@example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>

## services.discourse.admin.fullName

The admin user’s full name. Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>

## services.discourse.admin.passwordFile

A path to a file containing the admin user’s password. This should be a string, not a nix path, since nix paths are copied into the world-readable nix store. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>

## services.discourse.admin.skipCreate

Do not create the admin account, instead rely on other existing admin accounts. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>

## services.discourse.admin.username

The admin user username. Type: string Example: "admin" Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>
