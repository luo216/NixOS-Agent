---
module: services.wiki-js.settings
option_count: 4
source: options.html
---

# services.wiki-js.settings

## services.wiki-js.settings.bindIP

IPs the service should listen to. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/web-apps/wiki-js.nix>

## services.wiki-js.settings.logLevel

Define how much detail is supposed to be logged at runtime. Type: one of “error”, “warn”, “info”, “verbose”, “debug”, “silly” Default: "info" Declared by: <nixpkgs/nixos/modules/services/web-apps/wiki-js.nix>

## services.wiki-js.settings.offline

Disable latest file updates and enable sideloading. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/wiki-js.nix>

## services.wiki-js.settings.port

TCP port the process should listen to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3000 Declared by: <nixpkgs/nixos/modules/services/web-apps/wiki-js.nix>
