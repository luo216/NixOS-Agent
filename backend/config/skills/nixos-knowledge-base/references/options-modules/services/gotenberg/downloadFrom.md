---
module: services.gotenberg.downloadFrom
option_count: 4
source: options.html
---

# services.gotenberg.downloadFrom

## services.gotenberg.downloadFrom.allowList

Allow these URLs to be used in the downloadFrom API field. Accepts a regular expression. Type: null or string Default: ".*" Declared by: <nixpkgs/nixos/modules/services/misc/gotenberg.nix>

## services.gotenberg.downloadFrom.denyList

Deny accepting URLs from these domains in the downloadFrom API field. Accepts a regular expression. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/misc/gotenberg.nix>

## services.gotenberg.downloadFrom.disable

Whether to disable the ability to download files for conversion from outside sources. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/gotenberg.nix>

## services.gotenberg.downloadFrom.maxRetries

The maximum amount of times to retry downloading a file specified with downloadFrom. Type: unsigned integer, meaning >=0 Default: 4 Declared by: <nixpkgs/nixos/modules/services/misc/gotenberg.nix>
