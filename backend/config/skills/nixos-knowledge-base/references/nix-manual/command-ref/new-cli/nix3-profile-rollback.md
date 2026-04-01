---
title: "nix profile rollback - Nix 2.28.6 Reference Manual"
source: command-ref/new-cli/nix3-profile-rollback.html
---

# nix profile rollback - Nix 2.28.6 Reference Manual

Auto Light Rust Coal Navy Ayu

## Nix 2.28.6 Reference Manual

Warning This program is experimental and its interface is subject to change.

## Name

nix profile rollback - roll back to the previous version or a specified version of a profile

## Synopsis

nix profile rollback [option...]

## Examples

Roll back your default profile to the previous version: # nix profile rollback switching profile from version 519 to 518 Switch your default profile to version 510: # nix profile rollback --to 510 switching profile from version 518 to 510

## Description

This command switches a profile to the most recent version older than the currently active version, or if --to N is given, to version N of the profile. To see the available versions of a profile, use nix profile history.

## Options

--dry-run Show what this command would do without doing it. --profile path The profile to operate on. --to version The profile version to roll back to.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags.
