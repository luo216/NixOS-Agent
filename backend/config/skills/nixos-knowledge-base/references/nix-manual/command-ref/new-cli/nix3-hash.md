---
title: "nix hash - Nix 2.28.6 Reference Manual"
source: command-ref/new-cli/nix3-hash.html
---

# nix hash - Nix 2.28.6 Reference Manual

Auto Light Rust Coal Navy Ayu

## Nix 2.28.6 Reference Manual

Warning This program is experimental and its interface is subject to change.

## Name

nix hash - compute and convert cryptographic hashes

## Synopsis

nix hash [option...] subcommand where subcommand is one of the following: Available commands: nix hash file - print cryptographic hash of a regular file nix hash path - print cryptographic hash of the NAR serialisation of a path nix hash to-base16 - convert a hash to base-16 representation (deprecated, use nix hash convert instead) nix hash to-base32 - convert a hash to base-32 representation (deprecated, use nix hash convert instead) nix hash to-base64 - convert a hash to base-64 representation (deprecated, use nix hash convert instead) nix hash to-sri - convert a hash to SRI representation (deprecated, use nix hash convert instead) : nix hash convert - convert between hash formats

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags.
