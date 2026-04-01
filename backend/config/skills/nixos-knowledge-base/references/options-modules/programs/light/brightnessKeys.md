---
module: programs.light.brightnessKeys
option_count: 3
source: options.html
---

# programs.light.brightnessKeys

## programs.light.brightnessKeys.enable

Whether to enable brightness control with keyboard keys. This is mainly useful for minimalistic (desktop) environments. You may want to leave this disabled if you run a feature-rich desktop environment such as KDE, GNOME or Xfce as those handle the brightness keys themselves. However, enabling brightness control with this setting makes the control independent of X, so the keys work in non-graphical ttys, so you might want to consider using this instead of the default offered by the desktop environment. Enabling this will turn on services.actkbd. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/programs/light.nix>

## programs.light.brightnessKeys.minBrightness

The minimum authorized brightness value, e.g. to avoid the display going dark. Type: integer or floating point number between 0 and 100 (both inclusive) Default: 0.1 Declared by: <nixpkgs/nixos/modules/programs/light.nix>

## programs.light.brightnessKeys.step

The percentage value by which to increase/decrease brightness. Type: signed integer Default: 10 Declared by: <nixpkgs/nixos/modules/programs/light.nix>
