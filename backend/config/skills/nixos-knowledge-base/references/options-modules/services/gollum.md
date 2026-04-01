---
module: services.gollum
option_count: 15
source: options.html
---

# services.gollum

## services.gollum.enable

Whether to enable Gollum, a git-powered wiki service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/gollum.nix>

## services.gollum.package

The gollum package to use. Type: package Default: pkgs.gollum Declared by: <nixpkgs/nixos/modules/services/misc/gollum.nix>

## services.gollum.address

IP address on which the web server will listen. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/misc/gollum.nix>

## services.gollum.allowUploads

Enable uploads of external files Type: null or one of “dir”, “page” Default: null Declared by: <nixpkgs/nixos/modules/services/misc/gollum.nix>

## services.gollum.branch

Git branch to serve Type: string Default: "master" Example: "develop" Declared by: <nixpkgs/nixos/modules/services/misc/gollum.nix>

## services.gollum.emoji

Parse and interpret emoji tags Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/gollum.nix>

## services.gollum.extraConfig

Content of the configuration file Type: strings concatenated with “\n” Default: "" Example: '' wiki_options = { show_local_time: true } Precious::App.set(:wiki_options, wiki_options) '' Declared by: <nixpkgs/nixos/modules/services/misc/gollum.nix>

## services.gollum.group

Specifies the owner group of the wiki directory Type: string Default: "gollum" Declared by: <nixpkgs/nixos/modules/services/misc/gollum.nix>

## services.gollum.h1-title

Use the first h1 as page title Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/gollum.nix>

## services.gollum.math

Enable support for math rendering using KaTeX Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/gollum.nix>

## services.gollum.no-edit

Disable editing pages Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/gollum.nix>

## services.gollum.port

Port on which the web server will run. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 4567 Declared by: <nixpkgs/nixos/modules/services/misc/gollum.nix>

## services.gollum.stateDir

Specifies the path of the repository directory. If it does not exist, Gollum will create it on startup. Type: absolute path Default: "/var/lib/gollum" Declared by: <nixpkgs/nixos/modules/services/misc/gollum.nix>

## services.gollum.user

Specifies the owner of the wiki directory Type: string Default: "gollum" Declared by: <nixpkgs/nixos/modules/services/misc/gollum.nix>

## services.gollum.user-icons

Enable specific user icons for history view Type: null or one of “gravatar”, “identicon” Default: null Declared by: <nixpkgs/nixos/modules/services/misc/gollum.nix>
