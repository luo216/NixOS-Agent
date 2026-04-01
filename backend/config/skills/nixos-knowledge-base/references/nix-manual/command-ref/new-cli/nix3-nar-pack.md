---
title: "nix nar pack - Nix 2.28.6 Reference Manual"
source: command-ref/new-cli/nix3-nar-pack.html
---

# nix nar pack - Nix 2.28.6 Reference Manual

Auto Light Rust Coal Navy Ayu

## Nix 2.28.6 Reference Manual

Warning This program is experimental and its interface is subject to change.

## Name

nix nar pack - serialise a path to stdout in NAR format

## Synopsis

nix nar pack [option...] path

## Examples

To serialise directory foo as a Nix Archive (NAR): # nix nar pack ./foo > foo.nar

## Description

This command generates a Nix Archive (NAR) file containing the serialisation of path, which must contain only regular files, directories and symbolic links. The NAR is written to standard output.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags.
