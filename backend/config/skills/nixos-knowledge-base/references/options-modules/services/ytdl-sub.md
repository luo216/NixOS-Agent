---
module: services.ytdl-sub
option_count: 4
source: options.html
---

# services.ytdl-sub

## services.ytdl-sub.package

The ytdl-sub package to use. Type: package Default: pkgs.ytdl-sub Declared by: <nixpkgs/nixos/modules/services/misc/ytdl-sub.nix>

## services.ytdl-sub.group

Group under which ytdl-sub runs. Type: string Default: "ytdl-sub" Declared by: <nixpkgs/nixos/modules/services/misc/ytdl-sub.nix>

## services.ytdl-sub.instances

Configuration for ytdl-sub instances. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/misc/ytdl-sub.nix>

## services.ytdl-sub.user

User account under which ytdl-sub runs. Type: string Default: "ytdl-sub" Declared by: <nixpkgs/nixos/modules/services/misc/ytdl-sub.nix>
