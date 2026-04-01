---
module: hardware.display.edid
option_count: 4
source: options.html
---

# hardware.display.edid

## hardware.display.edid.enable

Enables handling of EDID files Type: boolean Default: config.hardware.display.edid.packages != null Declared by: <nixpkgs/nixos/modules/services/hardware/display.nix>

## hardware.display.edid.packages

List of packages containing EDID binary files at $out/lib/firmware/edid. Such files will be available for use in drm.edid_firmware kernel parameter as edid/<filename>. You can craft one directly here or use sibling options linuxhw and modelines. Type: list of package Default: [ ] Example: [ (pkgs.runCommand "edid-custom" {} '' mkdir -p "$out/lib/firmware/edid" base64 -d > "$out/lib/firmware/edid/custom1.bin" <<'EOF' <insert your base64 encoded EDID file here `base64 < /sys/class/drm/card0-.../edid`> EOF '') ] Declared by: <nixpkgs/nixos/modules/services/hardware/display.nix>

## hardware.display.edid.linuxhw

Exposes EDID files from users-sourced database at https://github.com/linuxhw/EDID Attribute names will be mapped to EDID filenames <NAME>.bin. Attribute values are lists of awk regexp patterns that (together) must match exactly one line in either of: AnalogDisplay.md DigitalDisplay.md There is no universal way of locating your device config, but here are some practical tips: locate your device: find your model number (second column) locate manufacturer (first column) and go through the list manually narrow down results using other columns until there is only one left: Name column production date (Made column) resolution Res screen diagonal (Inch column) as a last resort use ID from the last column Type: attribute set of list of string Default: { } Example: { PG278Q_2014 = [ "PG278Q" "2014" ]; } Declared by: <nixpkgs/nixos/modules/services/hardware/display.nix>

## hardware.display.edid.modelines

Attribute set of XFree86 Modelines automatically converted and exposed as edid/<name>.bin files in initrd. See for more information: https://en.wikipedia.org/wiki/XFree86_Modeline Type: attribute set of string Default: { } Example: { "PG278Q_60" = " 241.50 2560 2608 2640 2720 1440 1443 1448 1481 -hsync +vsync"; "PG278Q_120" = " 497.75 2560 2608 2640 2720 1440 1443 1448 1525 +hsync -vsync"; "U2711_60" = " 241.50 2560 2600 2632 2720 1440 1443 1448 1481 -hsync +vsync"; } Declared by: <nixpkgs/nixos/modules/services/hardware/display.nix>
