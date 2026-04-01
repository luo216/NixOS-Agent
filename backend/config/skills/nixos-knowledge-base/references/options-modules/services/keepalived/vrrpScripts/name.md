---
module: services.keepalived.vrrpScripts.<name>
option_count: 9
source: options.html
---

# services.keepalived.vrrpScripts.<name>

## services.keepalived.vrrpScripts.<name>.extraConfig

Extra lines to be added verbatim to the vrrp_script section. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>

## services.keepalived.vrrpScripts.<name>.fall

Required number of failures for KO transition. Type: signed integer Default: 3 Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>

## services.keepalived.vrrpScripts.<name>.group

Name of group to run the script under. Defaults to user group. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>

## services.keepalived.vrrpScripts.<name>.interval

Seconds between script invocations. Type: signed integer Default: 1 Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>

## services.keepalived.vrrpScripts.<name>.rise

Required number of successes for OK transition. Type: signed integer Default: 5 Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>

## services.keepalived.vrrpScripts.<name>.script

(Path of) Script command to execute followed by args, i.e. cmd [args]… Type: string Example: "${pkgs.curl} -f http://localhost:80" Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>

## services.keepalived.vrrpScripts.<name>.timeout

Seconds after which script is considered to have failed. Type: signed integer Default: 5 Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>

## services.keepalived.vrrpScripts.<name>.user

Name of user to run the script under. Type: string Default: "keepalived_script" Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>

## services.keepalived.vrrpScripts.<name>.weight

Following a failure, adjust the priority by this weight. Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>
