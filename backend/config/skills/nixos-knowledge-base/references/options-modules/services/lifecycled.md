---
module: services.lifecycled
option_count: 10
source: options.html
---

# services.lifecycled

## services.lifecycled.enable

Whether to enable lifecycled, a daemon for responding to AWS AutoScaling Lifecycle Hooks. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/lifecycled.nix>

## services.lifecycled.awsRegion

The region used for accessing AWS services. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/misc/lifecycled.nix>

## services.lifecycled.cloudwatchGroup

Write logs to a specific Cloudwatch Logs group. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/misc/lifecycled.nix>

## services.lifecycled.cloudwatchStream

Write logs to a specific Cloudwatch Logs stream. Defaults to the instance ID. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/misc/lifecycled.nix>

## services.lifecycled.debug

Enable debugging information. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/lifecycled.nix>

## services.lifecycled.handler

The script to invoke to handle events. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/misc/lifecycled.nix>

## services.lifecycled.instanceId

The instance ID to listen for events for. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/misc/lifecycled.nix>

## services.lifecycled.json

Enable JSON logging. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/lifecycled.nix>

## services.lifecycled.noSpot

Disable the spot termination listener. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/lifecycled.nix>

## services.lifecycled.snsTopic

The SNS topic that receives events. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/misc/lifecycled.nix>
