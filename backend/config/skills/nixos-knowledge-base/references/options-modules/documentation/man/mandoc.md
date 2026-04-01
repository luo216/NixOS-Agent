---
module: documentation.man.mandoc
option_count: 6
source: options.html
---

# documentation.man.mandoc

## documentation.man.mandoc.enable

Whether to enable mandoc as the default man page viewer. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/misc/mandoc.nix>

## documentation.man.mandoc.package

The mandoc derivation to use. Useful to override configuration options used for the package. Type: package Default: pkgs.mandoc Declared by: <nixpkgs/nixos/modules/misc/mandoc.nix>

## documentation.man.mandoc.cachePath

Change the paths where mandoc makewhatis(8)generates the manual page index caches. documentation.man.generateCaches should be enabled to allow cache generation. This list should only include the paths to manpages installed in the system configuration, i. e. /run/current-system/sw/share/man. makewhatis(8) creates a database in each directory using the files mansection/[arch/]title.section and catsection/[arch/]title.0 in it. If a directory contains no manual pages, no database is created in that directory. This option only needs to be set manually if extra paths should be indexed or documentation.man.manPath contains paths that can’t be indexed. Type: list of string Default: config.documentation.man.mandoc.manPath Example: [ "share/man" "share/man/fr" ] Declared by: <nixpkgs/nixos/modules/misc/mandoc.nix>

## documentation.man.mandoc.extraConfig

Extra configuration to write to man.conf(5). Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/misc/mandoc.nix>

## documentation.man.mandoc.manPath

Change the paths included in the MANPATH environment variable, i. e. the directories where man(1) looks for section-specific directories of man pages. You only need to change this setting if you want extra man pages (e. g. in non-english languages). All values must be strings that are a valid path from the target prefix (without including it). The first value given takes priority. Note that this will not add manpath directives to man.conf(5). Type: list of string Default: [ "share/man" ] Example: [ "share/man" "share/man/fr" ] Declared by: <nixpkgs/nixos/modules/misc/mandoc.nix>

## documentation.man.mandoc.settings

Configuration for man.conf(5) Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/misc/mandoc.nix>
