---
module: services.filebrowser
option_count: 6
source: options.html
---

# services.filebrowser

## services.filebrowser.enable

Whether to enable FileBrowser. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/filebrowser.nix>

## services.filebrowser.package

The filebrowser package to use. Type: package Default: pkgs.filebrowser Declared by: <nixpkgs/nixos/modules/services/web-apps/filebrowser.nix>

## services.filebrowser.group

Group under which FileBrowser runs. Type: string Default: "filebrowser" Declared by: <nixpkgs/nixos/modules/services/web-apps/filebrowser.nix>

## services.filebrowser.openFirewall

Whether to enable opening firewall ports for FileBrowser. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/filebrowser.nix>

## services.filebrowser.settings

Settings for FileBrowser. Refer to https://filebrowser.org/cli/filebrowser#options for all supported values. Type: open submodule of (JSON value) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/filebrowser.nix>

## services.filebrowser.user

User account under which FileBrowser runs. Type: string Default: "filebrowser" Declared by: <nixpkgs/nixos/modules/services/web-apps/filebrowser.nix>
