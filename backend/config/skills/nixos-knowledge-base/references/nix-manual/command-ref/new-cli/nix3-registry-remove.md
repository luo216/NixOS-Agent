---
title: "nix registry remove - Nix 2.28.6 Reference Manual"
source: command-ref/new-cli/nix3-registry-remove.html
---

# nix registry remove - Nix 2.28.6 Reference Manual

Auto Light Rust Coal Navy Ayu

## Nix 2.28.6 Reference Manual

Warning This program is experimental and its interface is subject to change.

## Name

nix registry remove - remove flake from user flake registry

## Synopsis

nix registry remove [option...] url

## Examples

Remove the entry nixpkgs from the user registry: # nix registry remove nixpkgs Remove the entry nixpkgs from a custom registry: # nix registry remove --registry ./custom-flake-registry.json nixpkgs

## Description

This command removes from the user registry any entry for flake reference url.

## Options

--registry registry The registry to operate on.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags.
