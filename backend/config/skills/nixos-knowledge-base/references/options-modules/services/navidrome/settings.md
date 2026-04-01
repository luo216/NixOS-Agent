---
module: services.navidrome.settings
option_count: 3
source: options.html
---

# services.navidrome.settings

## services.navidrome.settings.Address

Address to run Navidrome on. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/audio/navidrome.nix>

## services.navidrome.settings.EnableInsightsCollector

Enable anonymous usage data collection, see https://www.navidrome.org/docs/getting-started/insights/ for details. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/audio/navidrome.nix>

## services.navidrome.settings.Port

Port to run Navidrome on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 4533 Declared by: <nixpkgs/nixos/modules/services/audio/navidrome.nix>
