---
title: "nix store ping - Nix 2.28.6 Reference Manual"
source: command-ref/new-cli/nix3-store-ping.html
---

# nix store ping - Nix 2.28.6 Reference Manual

Auto Light Rust Coal Navy Ayu

## Nix 2.28.6 Reference Manual

Warning This program is experimental and its interface is subject to change.

## Name

nix store ping - test whether a store can be accessed

## Synopsis

nix store ping [option...]

## Examples

Test whether connecting to a remote Nix store via SSH works: # nix store info --store ssh://mac1 Test whether a URL is a valid binary cache: # nix store info --store https://cache.nixos.org Test whether the Nix daemon is up and running: # nix store info --store daemon

## Description

This command tests whether a particular Nix store (specified by the argument --store url) can be accessed. What this means is dependent on the type of the store. For instance, for an SSH store it means that Nix can connect to the specified machine. If the command succeeds, Nix returns a exit code of 0 and does not print any output.

## Options

--json Produce output in JSON format, suitable for consumption by another program.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags.
