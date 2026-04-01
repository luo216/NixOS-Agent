---
module: services.geoclue2.appConfig.<name>
option_count: 4
source: options.html
---

# services.geoclue2.appConfig.<name>

## services.geoclue2.appConfig.<name>.desktopID

Desktop ID of the application. Type: string Declared by: <nixpkgs/nixos/modules/services/desktops/geoclue2.nix>

## services.geoclue2.appConfig.<name>.isAllowed

Whether the application will be allowed access to location information. Type: boolean Declared by: <nixpkgs/nixos/modules/services/desktops/geoclue2.nix>

## services.geoclue2.appConfig.<name>.isSystem

Whether the application is a system component or not. Type: boolean Declared by: <nixpkgs/nixos/modules/services/desktops/geoclue2.nix>

## services.geoclue2.appConfig.<name>.users

List of UIDs of all users for which this application is allowed location info access, Defaults to an empty string to allow it for all users. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/desktops/geoclue2.nix>
