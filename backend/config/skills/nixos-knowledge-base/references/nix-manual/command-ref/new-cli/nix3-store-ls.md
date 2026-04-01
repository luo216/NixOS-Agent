---
title: "nix store ls - Nix 2.28.6 Reference Manual"
source: command-ref/new-cli/nix3-store-ls.html
---

# nix store ls - Nix 2.28.6 Reference Manual

Auto Light Rust Coal Navy Ayu

## Nix 2.28.6 Reference Manual

Warning This program is experimental and its interface is subject to change.

## Name

nix store ls - show information about a path in the Nix store

## Synopsis

nix store ls [option...] path

## Examples

To list the contents of a store path in a binary cache: # nix store ls --store https://cache.nixos.org/ --long --recursive /nix/store/0i2jd68mp5g6h2sa5k9c85rb80sn8hi9-hello-2.10 dr-xr-xr-x 0 ./bin -r-xr-xr-x 38184 ./bin/hello dr-xr-xr-x 0 ./share … To show information about a specific file in a binary cache: # nix store ls --store https://cache.nixos.org/ --long /nix/store/0i2jd68mp5g6h2sa5k9c85rb80sn8hi9-hello-2.10/bin/hello -r-xr-xr-x 38184 hello

## Description

This command shows information about path in a Nix store. path can be a top-level store path or any file inside a store path.

## Options

--directory / -d Show directories rather than their contents. --json Produce output in JSON format, suitable for consumption by another program. --long / -l Show detailed file information. --recursive / -R List subdirectories recursively.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags.
