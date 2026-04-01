---
title: "Debugging - Nix 2.28.6 Reference Manual"
source: development/debugging.html
---

# Debugging - Nix 2.28.6 Reference Manual

Auto Light Rust Coal Navy Ayu

## Debugging Nix

This section shows how to build and debug Nix with debug symbols enabled. Additionally, see Testing Nix for further instructions on how to debug Nix in the context of a unit test or functional test.

### Building Nix with Debug Symbols

In the development shell, set the mesonBuildType environment variable to debug before configuring the build: [nix-shell]$ export mesonBuildType=debugoptimized Then, proceed to build Nix as described in Building Nix. This will build Nix with debug symbols, which are essential for effective debugging. It is also possible to build without debugging for faster build: [nix-shell]$ NIX_HARDENING_ENABLE=$(printLines $NIX_HARDENING_ENABLE | grep -v fortify) [nix-shell]$ export mesonBuildType=debug (The first line is needed because fortify hardening requires at least some optimization.)

### Debugging the Nix Binary

Obtain your preferred debugger within the development shell: [nix-shell]$ nix-shell -p gdb On macOS, use lldb: [nix-shell]$ nix-shell -p lldb

#### Launching the Debugger

To debug the Nix binary, run: [nix-shell]$ gdb --args ../outputs/out/bin/nix On macOS, use lldb: [nix-shell]$ lldb -- ../outputs/out/bin/nix

#### Using the Debugger

Inside the debugger, you can set breakpoints, run the program, and inspect variables. (gdb) break main (gdb) run <arguments> Refer to the GDB Documentation for comprehensive usage instructions. On macOS, use lldb: (lldb) breakpoint set --name main (lldb) process launch -- <arguments> Refer to the LLDB Tutorial for comprehensive usage instructions.
