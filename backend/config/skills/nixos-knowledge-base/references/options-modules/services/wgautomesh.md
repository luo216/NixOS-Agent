---
module: services.wgautomesh
option_count: 7
source: options.html
---

# services.wgautomesh

## services.wgautomesh.enable

Whether to enable the wgautomesh daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/wgautomesh.nix>

## services.wgautomesh.enableGossipEncryption

Enable encryption of gossip traffic. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/wgautomesh.nix>

## services.wgautomesh.enablePersistence

Enable persistence of Wireguard peer info between restarts. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/wgautomesh.nix>

## services.wgautomesh.gossipSecretFile

File containing the gossip secret, a shared secret key to use for gossip encryption. Required if enableGossipEncryption is set. This file may contain any arbitrary-length utf8 string. To generate a new gossip secret, use a command such as openssl rand -base64 32. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/networking/wgautomesh.nix>

## services.wgautomesh.logLevel

wgautomesh log level. Type: one of “trace”, “debug”, “info”, “warn”, “error” Default: "info" Declared by: <nixpkgs/nixos/modules/services/networking/wgautomesh.nix>

## services.wgautomesh.openFirewall

Automatically open gossip port in firewall (recommended). Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/wgautomesh.nix>

## services.wgautomesh.settings

Configuration for wgautomesh. Type: open submodule of (TOML value) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/wgautomesh.nix>
