---
module: services.localtimed
option_count: 3
source: options.html
---

# services.localtimed

## services.localtimed.enable

Enable localtimed, a simple daemon for keeping the system timezone up-to-date based on the current location. It uses geoclue2 to determine the current location. To avoid silent overriding by the service, if you have explicitly set a timezone, either remove it or ensure that it is set with a lower priority than the default value using lib.mkDefault or lib.mkOverride. This is to make the choice deliberate. An error will be presented otherwise. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/system/localtimed.nix>

## services.localtimed.package

The localtime package to use. Type: package Default: pkgs.localtime Declared by: <nixpkgs/nixos/modules/services/system/localtimed.nix>

## services.localtimed.geoclue2Package

The Geoclue2 package to use. Type: package Default: pkgs.geoclue2-with-demo-agent Declared by: <nixpkgs/nixos/modules/services/system/localtimed.nix>
