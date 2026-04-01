---
module: services.sunshine
option_count: 7
source: options.html
---

# services.sunshine

## services.sunshine.enable

Whether to enable Sunshine, a self-hosted game stream host for Moonlight. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/sunshine.nix>

## services.sunshine.package

The sunshine package to use. Type: package Default: pkgs.sunshine Declared by: <nixpkgs/nixos/modules/services/networking/sunshine.nix>

## services.sunshine.applications

Configuration for applications to be exposed to Moonlight. If this is set, no configuration is possible from the web UI, and must be by the settings option. Type: submodule Default: { } Example: { env = { PATH = "$(PATH):$(HOME)/.local/bin"; }; apps = [ { name = "1440p Desktop"; prep-cmd = [ { do = "${pkgs.kdePackages.libkscreen}/bin/kscreen-doctor output.DP-4.mode.2560x1440@144"; undo = "${pkgs.kdePackages.libkscreen}/bin/kscreen-doctor output.DP-4.mode.3440x1440@144"; } ]; exclude-global-prep-cmd = "false"; auto-detach = "true"; } ]; } Declared by: <nixpkgs/nixos/modules/services/networking/sunshine.nix>

## services.sunshine.autoStart

Whether sunshine should be started automatically. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/sunshine.nix>

## services.sunshine.capSysAdmin

Whether to give the Sunshine binary CAP_SYS_ADMIN, required for DRM/KMS screen capture. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/sunshine.nix>

## services.sunshine.openFirewall

Whether to automatically open ports in the firewall. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/sunshine.nix>

## services.sunshine.settings

Settings to be rendered into the configuration file. If this is set, no configuration is possible from the web UI. See <https://docs.lizardbyte.dev/projects/sunshine/en/latest/about/advanced_usage.html#configuration for syntax>. Type: open submodule of attribute set of (atom (null, bool, int, float or string)) Default: { } Example: { sunshine_name = "nixos"; } Declared by: <nixpkgs/nixos/modules/services/networking/sunshine.nix>
