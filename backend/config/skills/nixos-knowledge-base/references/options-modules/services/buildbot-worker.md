---
module: services.buildbot-worker
option_count: 15
source: options.html
---

# services.buildbot-worker

## services.buildbot-worker.enable

Whether to enable the Buildbot Worker. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/worker.nix>

## services.buildbot-worker.package

The buildbot-worker package to use. Type: package Default: pkgs.buildbot-worker Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/worker.nix>

## services.buildbot-worker.packages

Packages to add to PATH for the buildbot process. Type: list of package Default: [ pkgs.git ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/worker.nix>

## services.buildbot-worker.adminMessage

Name of the administrator of this worker Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/worker.nix>

## services.buildbot-worker.buildbotDir

Specifies the Buildbot directory. Type: absolute path Default: "${config.services.buildbot-worker.home}/worker" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/worker.nix>

## services.buildbot-worker.extraGroups

List of extra groups that the Buildbot Worker user should be a part of. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/worker.nix>

## services.buildbot-worker.group

Primary group of buildbot Worker user. Type: string Default: "bbworker" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/worker.nix>

## services.buildbot-worker.home

Buildbot home directory. Type: absolute path Default: "/home/bbworker" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/worker.nix>

## services.buildbot-worker.hostMessage

Description of this worker Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/worker.nix>

## services.buildbot-worker.keepalive

This is a number that indicates how frequently keepalive messages should be sent from the worker to the buildmaster, expressed in seconds. Type: signed integer Default: 600 Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/worker.nix>

## services.buildbot-worker.masterUrl

Specifies the Buildbot Worker connection string. Type: string Default: "localhost:9989" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/worker.nix>

## services.buildbot-worker.user

User the buildbot Worker should execute under. Type: string Default: "bbworker" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/worker.nix>

## services.buildbot-worker.workerPass

Specifies the Buildbot Worker password. Type: string Default: "pass" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/worker.nix>

## services.buildbot-worker.workerPassFile

File used to store the Buildbot Worker password Type: absolute path Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/worker.nix>

## services.buildbot-worker.workerUser

Specifies the Buildbot Worker user. Type: string Default: "example-worker" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/buildbot/worker.nix>
