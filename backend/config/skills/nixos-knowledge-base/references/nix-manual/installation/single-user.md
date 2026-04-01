---
title: "Single-User Mode - Nix 2.28.6 Reference Manual"
source: installation/single-user.html
---

# Single-User Mode - Nix 2.28.6 Reference Manual

Auto Light Rust Coal Navy Ayu

## Single-User Mode

In single-user mode, all Nix operations that access the database in prefix/var/nix/db or modify the Nix store in prefix/store must be performed under the user ID that owns those directories. This is typically root. (If you install from RPM packages, that’s in fact the default ownership.) However, on single-user machines, it is often convenient to chown those directories to your normal user account so that you don’t have to su to root all the time.
