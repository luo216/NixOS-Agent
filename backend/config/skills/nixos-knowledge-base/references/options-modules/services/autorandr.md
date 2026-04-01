---
module: services.autorandr
option_count: 6
source: options.html
---

# services.autorandr

## services.autorandr.enable

Whether to enable handling of hotplug and sleep events by autorandr. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/autorandr.nix>

## services.autorandr.defaultTarget

Fallback if no monitor layout can be detected. See the docs (https://github.com/phillipberndt/autorandr/blob/v1.0/README.md#how-to-use) for further reference. Type: string Default: "default" Declared by: <nixpkgs/nixos/modules/services/misc/autorandr.nix>

## services.autorandr.hooks

Global hook scripts Type: submodule Default: { } Example: { postswitch = { "notify-i3" = "${pkgs.i3}/bin/i3-msg restart"; "change-background" = readFile ./change-background.sh; "change-dpi" = '' case "$AUTORANDR_CURRENT_PROFILE" in default) DPI=120 ;; home) DPI=192 ;; work) DPI=144 ;; *) echo "Unknown profle: $AUTORANDR_CURRENT_PROFILE" exit 1 esac echo "Xft.dpi: $DPI" | ${pkgs.xorg.xrdb}/bin/xrdb -merge ''; }; } Declared by: <nixpkgs/nixos/modules/services/misc/autorandr.nix>

## services.autorandr.ignoreLid

Treat outputs as connected even if their lids are closed Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/autorandr.nix>

## services.autorandr.matchEdid

Match displays based on edid instead of name Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/autorandr.nix>

## services.autorandr.profiles

Autorandr profiles specification. Type: attribute set of (submodule) Default: { } Example: { "work" = { fingerprint = { eDP1 = "<EDID>"; DP1 = "<EDID>"; }; config = { eDP1.enable = false; DP1 = { enable = true; crtc = 0; primary = true; position = "0x0"; mode = "3840x2160"; gamma = "1.0:0.909:0.833"; rate = "60.00"; rotate = "left"; }; }; hooks.postswitch = readFile ./work-postswitch.sh; }; } Declared by: <nixpkgs/nixos/modules/services/misc/autorandr.nix>
