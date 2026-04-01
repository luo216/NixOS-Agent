---
title: "nix-store - Nix 2.28.6 Reference Manual"
source: command-ref/nix-store.html
---

# nix-store - Nix 2.28.6 Reference Manual

Auto Light Rust Coal Navy Ayu

## Name

nix-store - manipulate or query the Nix store

## Synopsis

nix-store operation [options…] [arguments…] [--option name value] [--add-root path]

## Description

The command nix-store performs primitive operations on the Nix store. You generally do not need to run this command manually. nix-store takes exactly one operation flag which indicates the subcommand to be performed. The following operations are available: --realise --serve --gc --delete --query --add --add-fixed --verify --verify-path --repair-path --dump --restore --export --import --optimise --read-log --dump-db --load-db --print-env --generate-binary-cache-key These pages can be viewed offline: man nix-store-<operation>. Example: man nix-store-realise nix-store --help --<operation> Example: nix-store --help --realise
