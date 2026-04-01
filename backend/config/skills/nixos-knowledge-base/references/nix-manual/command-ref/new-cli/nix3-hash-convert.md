---
title: "nix hash convert - Nix 2.28.6 Reference Manual"
source: command-ref/new-cli/nix3-hash-convert.html
---

# nix hash convert - Nix 2.28.6 Reference Manual

Auto Light Rust Coal Navy Ayu

## Nix 2.28.6 Reference Manual

Warning This program is experimental and its interface is subject to change.

## Name

nix hash convert - convert between hash formats

## Synopsis

nix hash convert [option...] hashes...

## Examples

Convert a hash to nix32 (a base-32 encoding with a Nix-specific character set). $ nix hash convert --hash-algo sha1 --to nix32 800d59cfcd3c05e900cb4e214be48f6b886a08df vw46m23bizj4n8afrc0fj19wrp7mj3c0 Convert a hash to the sri format that includes an algorithm specification: # nix hash convert --hash-algo sha1 800d59cfcd3c05e900cb4e214be48f6b886a08df sha1-gA1Zz808BekAy04hS+SPa4hqCN8= or with an explicit --to format: # nix hash convert --hash-algo sha1 --to sri 800d59cfcd3c05e900cb4e214be48f6b886a08df sha1-gA1Zz808BekAy04hS+SPa4hqCN8= Assert the input format of the hash: # nix hash convert --hash-algo sha256 --from nix32 ungWv48Bz+pBQUDeXa4iI7ADYaOWF3qctBD/YfIAFa0= error: input hash 'ungWv48Bz+pBQUDeXa4iI7ADYaOWF3qctBD/YfIAFa0=' does not have the expected format '--from nix32' # nix hash convert --hash-algo sha256 --from nix32 1b8m03r63zqhnjf7l5wnldhh7c134ap5vpj0850ymkq1iyzicy5s sha256-ungWv48Bz+pBQUDeXa4iI7ADYaOWF3qctBD/YfIAFa0=

## Description

nix hash convert converts hashes from one encoding to another.

## Options

--from hash-format Hash format (base16, nix32, base64, sri). --hash-algo hash-algo Hash algorithm (blake3, md5, sha1, sha256, or sha512). Can be omitted for SRI hashes. --to hash-format Hash format (base16, nix32, base64, sri). Default: sri.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags.
