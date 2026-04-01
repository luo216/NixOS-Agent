---
title: "nix nar ls - Nix 2.28.6 Reference Manual"
source: command-ref/new-cli/nix3-nar-ls.html
---

# nix nar ls - Nix 2.28.6 Reference Manual

Auto Light Rust Coal Navy Ayu

## Nix 2.28.6 Reference Manual

Warning This program is experimental and its interface is subject to change.

## Name

nix nar ls - show information about a path inside a NAR file

## Synopsis

nix nar ls [option...] nar path

## Examples

To list a specific file in a NAR: # nix nar ls --long ./hello.nar /bin/hello -r-xr-xr-x 38184 hello To recursively list the contents of a directory inside a NAR, in JSON format: # nix nar ls --json --recursive ./hello.nar /bin {"type":"directory","entries":{"hello":{"type":"regular","size":38184,"executable":true,"narOffset":400}}}

## Description

This command shows information about a path inside Nix Archive (NAR) file nar.

## Options

--directory / -d Show directories rather than their contents. --json Produce output in JSON format, suitable for consumption by another program. --long / -l Show detailed file information. --recursive / -R List subdirectories recursively.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags.
