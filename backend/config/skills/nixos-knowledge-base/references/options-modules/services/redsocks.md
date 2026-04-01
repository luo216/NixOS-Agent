---
module: services.redsocks
option_count: 6
source: options.html
---

# services.redsocks

## services.redsocks.enable

Whether to enable redsocks. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/redsocks.nix>

## services.redsocks.chroot

Chroot under which to run redsocks. Log file is opened before chroot, but if logging to syslog /etc/localtime may be required. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/redsocks.nix>

## services.redsocks.log

Where to send logs. Possible values are: stderr file:/path/to/file syslog:FACILITY where FACILITY is any of “daemon”, “local0”, etc. Type: string Default: "stderr" Declared by: <nixpkgs/nixos/modules/services/networking/redsocks.nix>

## services.redsocks.log_debug

Log connection progress. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/redsocks.nix>

## services.redsocks.log_info

Log start and end of client sessions. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/redsocks.nix>

## services.redsocks.redsocks

Local port to proxy associations to be performed. The example shows how to configure a proxy to handle port 80 as HTTP relay, and all other ports as HTTP connect. Type: list of (submodule) Example: [ { doNotRedirect = [ "-d 1.2.0.0/16" ]; port = 23456; proxy = "1.2.3.4:8080"; redirectCondition = "--dport 80"; type = "http-relay"; } { doNotRedirect = [ "-d 1.2.0.0/16" ]; port = 23457; proxy = "1.2.3.4:8080"; redirectCondition = true; type = "http-connect"; } ] Declared by: <nixpkgs/nixos/modules/services/networking/redsocks.nix>
