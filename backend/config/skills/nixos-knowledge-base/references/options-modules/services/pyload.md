---
module: services.pyload
option_count: 8
source: options.html
---

# services.pyload

## services.pyload.enable

Whether to enable pyLoad download manager. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/pyload.nix>

## services.pyload.package

The pyLoad package to use. Type: package Default: pkgs.pyload-ng Declared by: <nixpkgs/nixos/modules/services/networking/pyload.nix>

## services.pyload.credentialsFile

File containing PYLOAD_DEFAULT_USERNAME and PYLOAD_DEFAULT_PASSWORD in the format of an EnvironmentFile=, as described by systemd.exec(5). If not given, they default to the username/password combo of pyload/pyload. Type: null or absolute path Default: null Example: "/run/secrets/pyload-credentials.env" Declared by: <nixpkgs/nixos/modules/services/networking/pyload.nix>

## services.pyload.downloadDirectory

Directory to store downloads. Type: absolute path Default: "/var/lib/pyload/downloads" Example: "/mnt/downloads" Declared by: <nixpkgs/nixos/modules/services/networking/pyload.nix>

## services.pyload.group

Group under which pyLoad runs, and which owns the download directory. Type: string Default: "pyload" Declared by: <nixpkgs/nixos/modules/services/networking/pyload.nix>

## services.pyload.listenAddress

Address to listen on for the web UI. Type: string Default: "localhost" Example: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/networking/pyload.nix>

## services.pyload.port

Port to listen on for the web UI. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8000 Example: 9876 Declared by: <nixpkgs/nixos/modules/services/networking/pyload.nix>

## services.pyload.user

User under which pyLoad runs, and which owns the download directory. Type: string Default: "pyload" Declared by: <nixpkgs/nixos/modules/services/networking/pyload.nix>
