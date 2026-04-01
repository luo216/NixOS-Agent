---
module: services.htpdate
option_count: 4
source: options.html
---

# services.htpdate

## services.htpdate.enable

Enable htpdate daemon. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/htpdate.nix>

## services.htpdate.extraOptions

Additional command line arguments to pass to htpdate. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/htpdate.nix>

## services.htpdate.proxy

HTTP proxy used for requests. Type: string Default: "" Example: "127.0.0.1:8118" Declared by: <nixpkgs/nixos/modules/services/networking/htpdate.nix>

## services.htpdate.servers

HTTP servers to use for time synchronization. Type: list of string Default: [ "www.google.com" ] Declared by: <nixpkgs/nixos/modules/services/networking/htpdate.nix>
