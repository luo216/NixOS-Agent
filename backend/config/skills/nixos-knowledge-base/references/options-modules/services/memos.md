---
module: services.memos
option_count: 8
source: options.html
---

# services.memos

## services.memos.enable

Whether to enable Memos note-taking. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/memos.nix>

## services.memos.package

The Memos package to use. Type: package Default: pkgs.memos Declared by: <nixpkgs/nixos/modules/services/misc/memos.nix>

## services.memos.dataDir

Specifies the directory where Memos will store its data. Note It will be automatically created with the permissions of services.memos.user and services.memos.group. Type: absolute path Default: "/var/lib/memos/" Declared by: <nixpkgs/nixos/modules/services/misc/memos.nix>

## services.memos.environmentFile

The environment file to use when starting Memos. Note By default, generated from . Type: absolute path Default: generated from services.memos.settings Example: "/var/lib/memos/memos.env" Declared by: <nixpkgs/nixos/modules/services/misc/memos.nix>

## services.memos.group

The group to run Memos as. Note If changing the default value, you are responsible of creating the corresponding group with users.groups. Type: string Default: "memos" Declared by: <nixpkgs/nixos/modules/services/misc/memos.nix>

## services.memos.openFirewall

Whether to enable opening the ports in the firewall. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/memos.nix>

## services.memos.settings

The environment variables to configure Memos. Note At time of writing, there is no clear documentation about possible values. It’s possible to convert CLI flags into these variables. Example : CLI flag “–unix-sock” converts to MEMOS_UNIX_SOCK. Type: attribute set of (atom (null, bool, int, float or string)) Default: { MEMOS_MODE = "prod"; MEMOS_ADDR = "127.0.0.1"; MEMOS_PORT = "5230"; MEMOS_DATA = config.services.memos.dataDir; MEMOS_DRIVER = "sqlite"; MEMOS_INSTANCE_URL = "http://localhost:5230"; } Declared by: <nixpkgs/nixos/modules/services/misc/memos.nix>

## services.memos.user

The user to run Memos as. Note If changing the default value, you are responsible of creating the corresponding user with users.users. Type: string Default: "memos" Declared by: <nixpkgs/nixos/modules/services/misc/memos.nix>
