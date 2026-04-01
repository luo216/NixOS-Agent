---
module: services.pretix.settings.pretix
option_count: 7
source: options.html
---

# services.pretix.settings.pretix

## services.pretix.settings.pretix.cachedir

Directory for storing temporary files. Type: absolute path Default: "/var/cache/pretix" Declared by: <nixpkgs/nixos/modules/services/web-apps/pretix.nix>

## services.pretix.settings.pretix.currency

Default currency for events in its ISO 4217 three-letter code. Type: string Default: "EUR" Example: "USD" Declared by: <nixpkgs/nixos/modules/services/web-apps/pretix.nix>

## services.pretix.settings.pretix.datadir

Directory for storing user uploads and similar data. Type: absolute path Default: "/var/lib/pretix" Declared by: <nixpkgs/nixos/modules/services/web-apps/pretix.nix>

## services.pretix.settings.pretix.instance_name

The name of this installation. Type: string Example: "tickets.example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/pretix.nix>

## services.pretix.settings.pretix.logdir

Directory for storing log files. Type: absolute path Default: "/var/log/pretix" Declared by: <nixpkgs/nixos/modules/services/web-apps/pretix.nix>

## services.pretix.settings.pretix.registration

Whether to allow registration of new admin users. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/pretix.nix>

## services.pretix.settings.pretix.url

The installation’s full URL, without a trailing slash. Type: string Example: "https://tickets.example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/pretix.nix>
