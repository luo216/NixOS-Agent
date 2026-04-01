---
module: services
option_count: 12
source: options.html
---

# services

## services.bitcoind

Specification of one or more bitcoind instances. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/bitcoind.nix>

## services.blockbook-frontend

Specification of one or more blockbook-frontend instances. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/blockbook-frontend.nix>

## services.buildkite-agents

Attribute set of buildkite agents. The attribute key is combined with the hostname and a unique integer to create the final agent name. This can be overridden by setting the name attribute. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildkite-agents.nix>

## services.cgit

Configure cgit instances. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/cgit.nix>

## services.compton

Alias of services.picom. Type: submodule Declared by: <nixpkgs/nixos/modules/services/x11/picom.nix>

## services.fedimintd

Specification of one or more fedimintd instances. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/fedimintd.nix>

## services.geth

Specification of one or more geth instances. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/geth.nix>

## services.github-runners

Multiple GitHub Runners. Type: attribute set of (submodule) Default: { } Example: { runner1 = { enable = true; name = "runner1"; tokenFile = "/secrets/token1"; url = "https://github.com/owner/repo"; }; runner2 = { enable = true; name = "runner2"; tokenFile = "/secrets/token2"; url = "https://github.com/owner/repo"; }; } Declared by: <nixpkgs/nixos/modules/services/continuous-integration/github-runner/options.nix>

## services.gitwatch

A set of git repositories to watch for. See gitwatch for more. Type: attribute set of (submodule) Default: { } Example: { disabled-repo = { branch = "autobranch"; enable = false; path = "/home/user/disabled-project"; remote = "git@github.com:me/my-old-project.git"; user = "user"; }; my-repo = { enable = true; message = "Auto-commit by gitwatch on %d"; path = "/home/user/watched-project"; remote = "git@github.com:me/my-project.git"; user = "user"; }; } Declared by: <nixpkgs/nixos/modules/services/monitoring/gitwatch.nix>

## services.nix-store-gcs-proxy

An attribute set describing an HTTP to GCS proxy that allows us to use GCS bucket via HTTP protocol. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/nix-store-gcs-proxy.nix>

## services.quicktun

QuickTun tunnels. See http://wiki.ucis.nl/QuickTun for more information about available options. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/quicktun.nix>

## services.uhub

Uhub ADC hub instances Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/misc/uhub.nix>
