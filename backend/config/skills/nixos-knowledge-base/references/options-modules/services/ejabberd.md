---
module: services.ejabberd
option_count: 10
source: options.html
---

# services.ejabberd

## services.ejabberd.enable

Whether to enable ejabberd server Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/ejabberd.nix>

## services.ejabberd.package

The ejabberd package to use. Type: package Default: pkgs.ejabberd Declared by: <nixpkgs/nixos/modules/services/networking/ejabberd.nix>

## services.ejabberd.configFile

Configuration file for ejabberd in YAML format Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/ejabberd.nix>

## services.ejabberd.ctlConfig

Configuration of ejabberdctl Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/ejabberd.nix>

## services.ejabberd.group

Group under which ejabberd is ran Type: string Default: "ejabberd" Declared by: <nixpkgs/nixos/modules/services/networking/ejabberd.nix>

## services.ejabberd.imagemagick

Add ImageMagick to server’s path; allows for image thumbnailing Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/ejabberd.nix>

## services.ejabberd.loadDumps

Configuration dumps that should be loaded on the first startup Type: list of absolute path Default: [ ] Example: [ ./myejabberd.dump ] Declared by: <nixpkgs/nixos/modules/services/networking/ejabberd.nix>

## services.ejabberd.logsDir

Location of the logfile directory of ejabberd Type: absolute path Default: "/var/log/ejabberd" Declared by: <nixpkgs/nixos/modules/services/networking/ejabberd.nix>

## services.ejabberd.spoolDir

Location of the spooldir of ejabberd Type: absolute path Default: "/var/lib/ejabberd" Declared by: <nixpkgs/nixos/modules/services/networking/ejabberd.nix>

## services.ejabberd.user

User under which ejabberd is ran Type: string Default: "ejabberd" Declared by: <nixpkgs/nixos/modules/services/networking/ejabberd.nix>
