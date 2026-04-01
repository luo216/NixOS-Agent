---
module: services.silverbullet
option_count: 10
source: options.html
---

# services.silverbullet

## services.silverbullet.enable

Whether to enable Silverbullet, an open-source, self-hosted, offline-capable Personal Knowledge Management (PKM) web application. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/silverbullet.nix>

## services.silverbullet.package

The silverbullet package to use. Type: package Default: pkgs.silverbullet Declared by: <nixpkgs/nixos/modules/services/web-apps/silverbullet.nix>

## services.silverbullet.envFile

File containing extra environment variables. For example: SB_USER=user:password SB_AUTH_TOKEN=abcdefg12345 Type: null or absolute path Default: null Example: "/etc/silverbullet.env" Declared by: <nixpkgs/nixos/modules/services/web-apps/silverbullet.nix>

## services.silverbullet.extraArgs

Extra arguments passed to silverbullet. Type: list of string Default: [ ] Example: [ "--db /path/to/silverbullet.db" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/silverbullet.nix>

## services.silverbullet.group

The group to run Silverbullet under. By default, a group named silverbullet will be created. Type: string Default: "silverbullet" Example: "yourGroup" Declared by: <nixpkgs/nixos/modules/services/web-apps/silverbullet.nix>

## services.silverbullet.listenAddress

Address or hostname to listen on. Defaults to 127.0.0.1. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/web-apps/silverbullet.nix>

## services.silverbullet.listenPort

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3000 Declared by: <nixpkgs/nixos/modules/services/web-apps/silverbullet.nix>

## services.silverbullet.openFirewall

Open port in the firewall. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/silverbullet.nix>

## services.silverbullet.spaceDir

Folder to store Silverbullet’s space/workspace. By default it is located at /var/lib/silverbullet. Type: absolute path Default: "/var/lib/silverbullet" Example: "/home/yourUser/silverbullet" Declared by: <nixpkgs/nixos/modules/services/web-apps/silverbullet.nix>

## services.silverbullet.user

The user to run Silverbullet as. By default, a user named silverbullet will be created whose space directory is spaceDir. Type: string Default: "silverbullet" Example: "yourUser" Declared by: <nixpkgs/nixos/modules/services/web-apps/silverbullet.nix>
