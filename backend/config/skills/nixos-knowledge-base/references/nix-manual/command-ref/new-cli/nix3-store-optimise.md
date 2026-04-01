---
title: "nix store optimise - Nix 2.28.6 Reference Manual"
source: command-ref/new-cli/nix3-store-optimise.html
---

# nix store optimise - Nix 2.28.6 Reference Manual

Auto Light Rust Coal Navy Ayu

## Nix 2.28.6 Reference Manual

Warning This program is experimental and its interface is subject to change.

## Name

nix store optimise - replace identical files in the store by hard links

## Synopsis

nix store optimise [option...]

## Examples

Optimise the Nix store: nix store optimise

## Description

This command deduplicates the Nix store: it scans the store for regular files with identical contents, and replaces them with hard links to a single instance. Note that you can also set auto-optimise-store to true in nix.conf to perform this optimisation incrementally whenever a new path is added to the Nix store. To make this efficient, Nix maintains a content-addressed index of all the files in the Nix store in the directory /nix/store/.links/.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags.
