---
title: "nix profile wipe-history - Nix 2.28.6 Reference Manual"
source: command-ref/new-cli/nix3-profile-wipe-history.html
---

# nix profile wipe-history - Nix 2.28.6 Reference Manual

Auto Light Rust Coal Navy Ayu

## Nix 2.28.6 Reference Manual

Warning This program is experimental and its interface is subject to change.

## Name

nix profile wipe-history - delete non-current versions of a profile

## Synopsis

nix profile wipe-history [option...]

## Examples

Delete all versions of the default profile older than 100 days: # nix profile wipe-history --profile /tmp/profile --older-than 100d removing profile version 515 removing profile version 514

## Description

This command deletes non-current versions of a profile, making it impossible to roll back to these versions. By default, all non-current versions are deleted. With --older-than Nd, all non-current versions older than N days are deleted.

## Options

--dry-run Show what this command would do without doing it. --older-than age Delete versions older than the specified age. age must be in the format Nd, where N denotes a number of days. --profile path The profile to operate on.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags.
