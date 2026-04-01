---
module: programs.less
option_count: 9
source: options.html
---

# programs.less

## programs.less.enable

Whether to enable less, a file pager. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/less.nix>

## programs.less.package

The less package to use. Type: package Default: pkgs.less Declared by: <nixpkgs/nixos/modules/programs/less.nix>

## programs.less.clearDefaultCommands

Clear all default commands. You should remember to set the quit key. Otherwise you will not be able to leave less without killing it. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/programs/less.nix>

## programs.less.commands

Defines new command keys. Type: attribute set of string Default: { } Example: { h = "noaction 5\\e("; l = "noaction 5\\e)"; } Declared by: <nixpkgs/nixos/modules/programs/less.nix>

## programs.less.configFile

Path to lesskey configuration file. configFile takes precedence over commands, clearDefaultCommands, lineEditingKeys, and envVariables. Type: null or absolute path Default: null Example: "${pkgs.my-configs}/lesskey" Declared by: <nixpkgs/nixos/modules/programs/less.nix>

## programs.less.envVariables

Defines environment variables. Type: attribute set of string Default: { LESS = "-R"; } Example: { LESS = "--quit-if-one-screen"; } Declared by: <nixpkgs/nixos/modules/programs/less.nix>

## programs.less.lessclose

When less closes a file opened in such a way, it will call another program, called the input postprocessor, which may perform any desired clean-up action (such as deleting the replacement file created by LESSOPEN). Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/programs/less.nix>

## programs.less.lessopen

Before less opens a file, it first gives your input preprocessor a chance to modify the way the contents of the file are displayed. Type: null or string Default: null Example: "|${pkgs.lesspipe}/bin/lesspipe.sh %s" Declared by: <nixpkgs/nixos/modules/programs/less.nix>

## programs.less.lineEditingKeys

Defines new line-editing keys. Type: attribute set of string Default: { } Example: { e = "abort"; } Declared by: <nixpkgs/nixos/modules/programs/less.nix>
