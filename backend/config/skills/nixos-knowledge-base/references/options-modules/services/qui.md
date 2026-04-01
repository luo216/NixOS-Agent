---
module: services.qui
option_count: 7
source: options.html
---

# services.qui

## services.qui.enable

Whether to enable qui. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/torrent/qui.nix>

## services.qui.package

The qui package to use. Type: package Default: pkgs.qui Declared by: <nixpkgs/nixos/modules/services/torrent/qui.nix>

## services.qui.group

Group to run qui as. Type: string Default: "qui" Example: "torrents" Declared by: <nixpkgs/nixos/modules/services/torrent/qui.nix>

## services.qui.openFirewall

Whether or not to open ports in the firewall for qui. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/torrent/qui.nix>

## services.qui.secretFile

Path to a file that contains the session secret. The session secret can be generated with openssl rand -hex 32. Type: absolute path Example: "/run/secrets/qui-session.txt" Declared by: <nixpkgs/nixos/modules/services/torrent/qui.nix>

## services.qui.settings

qui configuration options. Refer to the template config in the source code for the available options. The documentation contains the available environment variables, this can be used to get an overview. Type: open submodule of (TOML value) Default: { } Example: { logLevel = "DEBUG"; metricsEnabled = true; port = 7777; } Declared by: <nixpkgs/nixos/modules/services/torrent/qui.nix>

## services.qui.user

User to run qui as. Type: string Default: "qui" Declared by: <nixpkgs/nixos/modules/services/torrent/qui.nix>
