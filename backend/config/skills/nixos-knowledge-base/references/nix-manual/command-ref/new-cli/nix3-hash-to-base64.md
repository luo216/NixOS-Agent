---
title: "nix hash to-base64 - Nix 2.28.6 Reference Manual"
source: command-ref/new-cli/nix3-hash-to-base64.html
---

# nix hash to-base64 - Nix 2.28.6 Reference Manual

Auto Light Rust Coal Navy Ayu

## Nix 2.28.6 Reference Manual

Warning This program is experimental and its interface is subject to change.

## Name

nix hash to-base64 - convert a hash to base-64 representation (deprecated, use nix hash convert instead)

## Synopsis

nix hash to-base64 [option...] strings...

## Options

--type hash-algo Hash algorithm (blake3, md5, sha1, sha256, or sha512). Can be omitted for SRI hashes.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags.
