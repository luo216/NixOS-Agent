---
title: "Derivation 'ATerm' file format - Nix 2.28.6 Reference Manual"
source: protocols/derivation-aterm.html
---

# Derivation "ATerm" file format - Nix 2.28.6 Reference Manual

Auto Light Rust Coal Navy Ayu

## Derivation "ATerm" file format

For historical reasons, store derivations are stored on-disk in ATerm format.

### The ATerm format used

Derivations are serialised in one of the following formats: Derive(...) For all stable derivations. DrvWithVersion(<version-string>, ...) The only version-strings that are in use today are for experimental features: "xp-dyn-drv" for the dynamic-derivations experimental feature.

### Use for encoding to store object

When derivation is encoded to a store object we make the following choices: The store path name is the derivation name with .drv suffixed at the end Indeed, the ATerm format above does not contain the name of the derivation, on the assumption that a store path will also be provided out-of-band. The derivation is content-addressed using the "Text" method of content-addressing derivations Currently we always encode derivations to store object using the ATerm format (and the previous two choices), but we reserve the option to encode new sorts of derivations differently in the future.
