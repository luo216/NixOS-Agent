---
module: services.nextcloud.autoUpdateApps
option_count: 2
source: options.html
---

# services.nextcloud.autoUpdateApps

## services.nextcloud.autoUpdateApps.enable

Run a regular auto-update of all apps installed from the Nextcloud app store. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud.nix>

## services.nextcloud.autoUpdateApps.startAt

When to run the update. See systemd.services.<name>.startAt. Type: string or list of string Default: "05:00:00" Example: "Sun 14:00:00" Declared by: <nixpkgs/nixos/modules/services/web-apps/nextcloud.nix>
