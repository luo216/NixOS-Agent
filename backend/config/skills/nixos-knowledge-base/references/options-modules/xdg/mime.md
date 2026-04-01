---
module: xdg.mime
option_count: 4
source: options.html
---

# xdg.mime

## xdg.mime.enable

Whether to install files to support the XDG Shared MIME-info specification and the XDG MIME Applications specification. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/config/xdg/mime.nix>

## xdg.mime.addedAssociations

Adds associations between mimetypes and applications. See the specifications for more information. Type: attribute set of (string or ((list of string) or string) convertible to it) Default: { } Example: { "application/pdf" = "firefox.desktop"; "text/xml" = [ "nvim.desktop" "codium.desktop" ]; } Declared by: <nixpkgs/nixos/modules/config/xdg/mime.nix>

## xdg.mime.defaultApplications

Sets the default applications for given mimetypes. See the specifications for more information. Type: attribute set of (string or ((list of string) or string) convertible to it) Default: { } Example: { "application/pdf" = "firefox.desktop"; "image/png" = [ "sxiv.desktop" "gimp.desktop" ]; } Declared by: <nixpkgs/nixos/modules/config/xdg/mime.nix>

## xdg.mime.removedAssociations

Removes associations between mimetypes and applications. See the specifications for more information. Type: attribute set of (string or ((list of string) or string) convertible to it) Default: { } Example: { "audio/mp3" = [ "mpv.desktop" "umpv.desktop" ]; "inode/directory" = "codium.desktop"; } Declared by: <nixpkgs/nixos/modules/config/xdg/mime.nix>
