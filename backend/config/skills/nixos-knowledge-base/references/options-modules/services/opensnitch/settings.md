---
module: services.opensnitch.settings
option_count: 5
source: options.html
---

# services.opensnitch.settings

## services.opensnitch.settings.DefaultAction

Default action whether to block or allow application internet access. Type: one of “allow”, “deny” Declared by: <nixpkgs/nixos/modules/services/security/opensnitch.nix>

## services.opensnitch.settings.Firewall

Which firewall backend to use. Type: one of “iptables”, “nftables” Declared by: <nixpkgs/nixos/modules/services/security/opensnitch.nix>

## services.opensnitch.settings.InterceptUnknown

Whether to intercept spare connections. Type: boolean Declared by: <nixpkgs/nixos/modules/services/security/opensnitch.nix>

## services.opensnitch.settings.LogLevel

Default log level from 0 to 4 (debug, info, important, warning, error). Type: integer between 0 and 4 (both inclusive) Declared by: <nixpkgs/nixos/modules/services/security/opensnitch.nix>

## services.opensnitch.settings.ProcMonitorMethod

Which process monitoring method to use. Type: one of “ebpf”, “proc”, “ftrace”, “audit” Declared by: <nixpkgs/nixos/modules/services/security/opensnitch.nix>
