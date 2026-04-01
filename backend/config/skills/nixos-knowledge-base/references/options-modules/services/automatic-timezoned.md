---
module: services.automatic-timezoned
option_count: 2
source: options.html
---

# services.automatic-timezoned

## services.automatic-timezoned.enable

Enable automatic-timezoned, simple daemon for keeping the system timezone up-to-date based on the current location. It uses geoclue2 to determine the current location and systemd-timedated to actually set the timezone. To avoid silent overriding by the service, if you have explicitly set a timezone, either remove it or ensure that it is set with a lower priority than the default value using lib.mkDefault or lib.mkOverride. This is to make the choice deliberate. An error will be presented otherwise. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/system/automatic-timezoned.nix>

## services.automatic-timezoned.package

The automatic-timezoned package to use. Type: package Default: pkgs.automatic-timezoned Declared by: <nixpkgs/nixos/modules/services/system/automatic-timezoned.nix>
