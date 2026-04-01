---
module: services.calibre-web
option_count: 6
source: options.html
---

# services.calibre-web

## services.calibre-web.enable

Whether to enable Calibre-Web. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/calibre-web.nix>

## services.calibre-web.package

The calibre-web package to use. Type: package Default: pkgs.calibre-web Declared by: <nixpkgs/nixos/modules/services/web-apps/calibre-web.nix>

## services.calibre-web.dataDir

Where Calibre-Web stores its data. Either an absolute path, or the directory name below /var/lib. Type: string Default: "calibre-web" Declared by: <nixpkgs/nixos/modules/services/web-apps/calibre-web.nix>

## services.calibre-web.group

Group account under which Calibre-Web runs. Type: string Default: "calibre-web" Declared by: <nixpkgs/nixos/modules/services/web-apps/calibre-web.nix>

## services.calibre-web.openFirewall

Open ports in the firewall for the server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/calibre-web.nix>

## services.calibre-web.user

User account under which Calibre-Web runs. Type: string Default: "calibre-web" Declared by: <nixpkgs/nixos/modules/services/web-apps/calibre-web.nix>
