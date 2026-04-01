---
module: services.aria2
option_count: 6
source: options.html
---

# services.aria2

## services.aria2.enable

Whether or not to enable the headless Aria2 daemon service. Aria2 daemon can be controlled via the RPC interface using one of many WebUIs (http://localhost:6800/ by default). Targets are downloaded to /var/lib/aria2/Downloads by default and are accessible to users in the aria2 group. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/aria2.nix>

## services.aria2.downloadDirPermission

The permission for settings.dir. The default is 0770, which denies access for users not in the aria2 group. You may want to adjust serviceUMask as well, which further restricts the file permission for newly created files (i.e. the downloads). Type: string Default: "0770" Declared by: <nixpkgs/nixos/modules/services/networking/aria2.nix>

## services.aria2.openPorts

Open listen and RPC ports found in settings.listen-port and settings.rpc-listen-port options in the firewall. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/aria2.nix>

## services.aria2.rpcSecretFile

A file containing the RPC secret authorization token. Read https://aria2.github.io/manual/en/html/aria2c.html#rpc-auth to know how this option value is used. Type: absolute path Example: "/run/secrets/aria2-rpc-token.txt" Declared by: <nixpkgs/nixos/modules/services/networking/aria2.nix>

## services.aria2.serviceUMask

The file mode creation mask for Aria2 service. The default is 0022 for compatibility reason, as this is the default used by systemd. However, this results in file permission 0644 for new files, and denies aria2 group member from modifying the file. You may want to set this value to 0002 so you can manage the file more easily. Type: string Default: "0022" Example: "0002" Declared by: <nixpkgs/nixos/modules/services/networking/aria2.nix>

## services.aria2.settings

Generates the aria2.conf file. Refer to the documentation for all possible settings. Type: open submodule of attribute set of (boolean or signed integer or floating point number or (optionally newline-terminated) single-line string) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/aria2.nix>
