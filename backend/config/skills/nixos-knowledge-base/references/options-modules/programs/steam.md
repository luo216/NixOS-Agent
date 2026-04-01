---
module: programs.steam
option_count: 6
source: options.html
---

# programs.steam

## programs.steam.enable

Whether to enable steam. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/steam.nix>

## programs.steam.package

The Steam package to use. Additional libraries are added from the system configuration to ensure graphics work properly. Use this option to customise the Steam package rather than adding your custom Steam to environment.systemPackages yourself. Type: package Default: pkgs.steam Example: pkgs.steam.override { extraEnv = { MANGOHUD = true; OBS_VKCAPTURE = true; RADV_TEX_ANISO = 16; }; extraLibraries = p: with p; [ atk ]; } Declared by: <nixpkgs/nixos/modules/programs/steam.nix>

## programs.steam.extraCompatPackages

Extra packages to be used as compatibility tools for Steam on Linux. Packages will be included in the STEAM_EXTRA_COMPAT_TOOLS_PATHS environmental variable. For more information see https://github.com/ValveSoftware/steam-for-linux/issues/6310. These packages must be Steam compatibility tools that have a steamcompattool output. Type: list of package Default: [ ] Example: with pkgs; [ proton-ge-bin ] Declared by: <nixpkgs/nixos/modules/programs/steam.nix>

## programs.steam.extraPackages

Additional packages to add to the Steam environment. Type: list of package Default: [ ] Example: with pkgs; [ gamescope ] Declared by: <nixpkgs/nixos/modules/programs/steam.nix>

## programs.steam.fontPackages

Font packages to use in Steam. Defaults to system fonts, but could be overridden to use other fonts — useful for users who would like to customize CJK fonts used in Steam. According to the upstream issue, Steam only follows the per-user fontconfig configuration. Type: list of package Default: builtins.filter lib.types.package.check config.fonts.packages Example: with pkgs; [ source-han-sans ] Declared by: <nixpkgs/nixos/modules/programs/steam.nix>

## programs.steam.gamescopeSession

Run a GameScope driven Steam session from your display-manager Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/programs/steam.nix>
