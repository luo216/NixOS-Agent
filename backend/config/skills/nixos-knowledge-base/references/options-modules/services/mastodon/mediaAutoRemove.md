---
module: services.mastodon.mediaAutoRemove
option_count: 3
source: options.html
---

# services.mastodon.mediaAutoRemove

## services.mastodon.mediaAutoRemove.enable

Automatically remove remote media attachments and preview cards older than the configured amount of days. Recommended in https://docs.joinmastodon.org/admin/setup/. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/web-apps/mastodon.nix>

## services.mastodon.mediaAutoRemove.olderThanDays

How old remote media needs to be in order to be removed. Type: signed integer Default: 30 Example: 14 Declared by: <nixpkgs/nixos/modules/services/web-apps/mastodon.nix>

## services.mastodon.mediaAutoRemove.startAt

How often to remove remote media. The format is described in systemd.time(7). Type: string Default: "daily" Example: "hourly" Declared by: <nixpkgs/nixos/modules/services/web-apps/mastodon.nix>
