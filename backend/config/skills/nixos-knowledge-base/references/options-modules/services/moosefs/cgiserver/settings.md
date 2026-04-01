---
module: services.moosefs.cgiserver.settings
option_count: 3
source: options.html
---

# services.moosefs.cgiserver.settings

## services.moosefs.cgiserver.settings.DATA_PATH

Directory for lock files. Type: string Default: "/var/lib/mfs" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/moosefs.nix>

## services.moosefs.cgiserver.settings.GUISERV_LISTEN_HOST

IP address to bind GUI server to (* means any). Type: string Default: "*" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/moosefs.nix>

## services.moosefs.cgiserver.settings.GUISERV_LISTEN_PORT

Port for GUI server to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9425 Declared by: <nixpkgs/nixos/modules/services/network-filesystems/moosefs.nix>
