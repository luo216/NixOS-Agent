---
title: "nix derivation add - Nix 2.28.6 Reference Manual"
source: command-ref/new-cli/nix3-derivation-add.html
---

# nix derivation add - Nix 2.28.6 Reference Manual

Auto Light Rust Coal Navy Ayu

## Nix 2.28.6 Reference Manual

Warning This program is experimental and its interface is subject to change.

## Name

nix derivation add - Add a store derivation

## Synopsis

nix derivation add [option...]

## Description

This command reads from standard input a JSON representation of a store derivation. Store derivations are used internally by Nix. They are store paths with extension .drv that represent the build-time dependency graph to which a Nix expression evaluates. nix derivation add takes a single derivation in the following format:

## Derivation JSON Format

Warning This JSON format is currently experimental and subject to change. The JSON serialization of a derivations is a JSON object with the following fields: name: The name of the derivation. This is used when calculating the store paths of the derivation's outputs. outputs: Information about the output paths of the derivation. This is a JSON object with one member per output, where the key is the output name and the value is a JSON object with these fields: path: The output path, if it is known in advanced. Otherwise, null. method: For an output which will be [content addressed], a string representing the method of content addressing that is chosen. Valid method strings are: flat nar text git Otherwise, null. hashAlgo: For an output which will be [content addressed], the name of the hash algorithm used. Valid algorithm strings are: blake3 md5 sha1 sha256 sha512 hash: For fixed-output derivations, the expected content hash in base-16. Example "outputs": { "out": { "path": "/nix/store/2543j7c6jn75blc3drf4g5vhb1rhdq29-source", "method": "nar", "hashAlgo": "sha256", "hash": "6fc80dcc62179dbc12fc0b5881275898f93444833d21b89dfe5f7fbcbb1d0d62" } } inputSrcs: A list of store paths on which this derivation depends. inputDrvs: A JSON object specifying the derivations on which this derivation depends, and what outputs of those derivations. Example "inputDrvs": { "/nix/store/6lkh5yi7nlb7l6dr8fljlli5zfd9hq58-curl-7.73.0.drv": ["dev"], "/nix/store/fn3kgnfzl5dzym26j8g907gq3kbm8bfh-unzip-6.0.drv": ["out"] } specifies that this derivation depends on the dev output of curl, and the out output of unzip. system: The system type on which this derivation is to be built (e.g. x86_64-linux). builder: The absolute path of the program to be executed to run the build. Typically this is the bash shell (e.g. /nix/store/r3j288vpmczbl500w6zz89gyfa4nr0b1-bash-4.4-p23/bin/bash). args: The command-line arguments passed to the builder. env: The environment passed to the builder.

## Options

--dry-run Show what this command would do without doing it.

### Logging-related options

--debug Set the logging verbosity level to 'debug'. --log-format format Set the format of log output; one of raw, internal-json, bar or bar-with-logs. --print-build-logs / -L Print full build logs on standard error. --quiet Decrease the logging verbosity level. --verbose / -v Increase the logging verbosity level.

### Miscellaneous global options

--help Show usage information. --offline Disable substituters and consider all previously downloaded files up-to-date. --option name value Set the Nix configuration setting name to value (overriding nix.conf). --refresh Consider all previously downloaded files out-of-date. --version Show version information. Note See man nix.conf for overriding configuration settings with command line flags.
