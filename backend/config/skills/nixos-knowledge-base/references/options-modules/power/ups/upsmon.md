---
module: power.ups.upsmon
option_count: 5
source: options.html
---

# power.ups.upsmon

## power.ups.upsmon.enable

Whether to enable upsmon. Type: boolean Default: true if mode is one of standalone, netserver, netclient Declared by: <nixpkgs/nixos/modules/services/monitoring/ups.nix>

## power.ups.upsmon.group

Group for the default nutmon user. If the default user is created and this is not specified, a default group will be created. Type: string Default: "nutmon" Declared by: <nixpkgs/nixos/modules/services/monitoring/ups.nix>

## power.ups.upsmon.monitor

Set of UPS to monitor. See man upsmon.conf for details. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/monitoring/ups.nix>

## power.ups.upsmon.settings

Additional settings to add to upsmon.conf. Type: attribute set of (atom (null, bool, int, float or string) or list of non-empty (list of (atom (null, bool, int, float or string)))) Default: { MINSUPPLIES = 1; MONITOR = <generated from config.power.ups.upsmon.monitor> NOTIFYCMD = “${cfg.package}/bin/upssched”; POWERDOWNFLAG = “/run/killpower”; SHUTDOWNCMD = “${pkgs.systemd}/bin/shutdown now”; } Example: { MINSUPPLIES = 2; NOTIFYFLAG = [ [ “ONLINE” “SYSLOG+EXEC” ] [ “ONBATT” “SYSLOG+EXEC” ] ]; } Declared by: <nixpkgs/nixos/modules/services/monitoring/ups.nix>

## power.ups.upsmon.user

User to run upsmon as. upsmon.conf will have its owner set to this user. If not specified, a default user will be created. Type: string Default: "nutmon" Declared by: <nixpkgs/nixos/modules/services/monitoring/ups.nix>
