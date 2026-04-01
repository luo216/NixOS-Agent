---
module: services.xserver.cmt
option_count: 2
source: options.html
---

# services.xserver.cmt

## services.xserver.cmt.enable

Enable chrome multitouch input (cmt). Touchpad drivers that are configured for chromebooks. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/x11/hardware/cmt.nix>

## services.xserver.cmt.models

Which models to enable cmt for. Enter the Code Name for your Chromebook. Code Name can be found at https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices. Type: one of “atlas”, “banjo”, “candy”, “caroline”, “cave”, “celes”, “clapper”, “cyan”, “daisy”, “elan”, “elm”, “enguarde”, “eve”, “expresso”, “falco”, “gandof”, “glimmer”, “gnawty”, “heli”, “kevin”, “kip”, “leon”, “lulu”, “orco”, “pbody”, “peppy”, “pi”, “pit”, “puppy”, “quawks”, “rambi”, “samus”, “snappy”, “spring”, “squawks”, “swanky”, “winky”, “wolf”, “auron_paine”, “auron_yuna”, “daisy_skate”, “nyan_big”, “nyan_blaze”, “veyron_jaq”, “veyron_jerry”, “veyron_mighty”, “veyron_minnie”, “veyron_speedy” Example: "banjo" Declared by: <nixpkgs/nixos/modules/services/x11/hardware/cmt.nix>
