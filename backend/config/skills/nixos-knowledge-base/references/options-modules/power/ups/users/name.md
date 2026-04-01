---
module: power.ups.users.<name>
option_count: 4
source: options.html
---

# power.ups.users.<name>

## power.ups.users.<name>.actions

Allow the user to do certain things with upsd. See man upsd.users for details. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/ups.nix>

## power.ups.users.<name>.instcmds

Let the user initiate specific instant commands. Use “ALL” to grant all commands automatically. For the full list of what your UPS supports, use “upscmd -l”. See man upsd.users for details. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/ups.nix>

## power.ups.users.<name>.passwordFile

The full path to a file that contains the user’s (clear text) password. The password file is read on service start. Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/ups.nix>

## power.ups.users.<name>.upsmon

Add the necessary actions for a upsmon process to work. See man upsd.users for details. Type: null or one of “primary”, “secondary” Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/ups.nix>
