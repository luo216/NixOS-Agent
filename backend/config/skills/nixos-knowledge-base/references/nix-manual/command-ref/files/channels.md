---
title: "Channels - Nix 2.28.6 Reference Manual"
source: command-ref/files/channels.html
---

# Channels - Nix 2.28.6 Reference Manual

Auto Light Rust Coal Navy Ayu

### Channels

A directory containing symlinks to Nix channels, managed by nix-channel: $XDG_STATE_HOME/nix/profiles/channels for regular users $NIX_STATE_DIR/profiles/per-user/root/channels for root nix-channel uses a profile to store channels. This profile contains symlinks to the contents of those channels.

### Subscribed channels

The list of subscribed channels is stored in ~/.nix-channels $XDG_STATE_HOME/nix/channels if use-xdg-base-directories is set to true in the following format: <url> <name> ...
