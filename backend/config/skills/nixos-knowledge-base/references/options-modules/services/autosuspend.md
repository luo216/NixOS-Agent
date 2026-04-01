---
module: services.autosuspend
option_count: 5
source: options.html
---

# services.autosuspend

## services.autosuspend.enable

Whether to enable the autosuspend daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/autosuspend.nix>

## services.autosuspend.package

The autosuspend package to use. Type: package Default: pkgs.autosuspend Declared by: <nixpkgs/nixos/modules/services/misc/autosuspend.nix>

## services.autosuspend.checks

Checks for activity. For more information, see: https://autosuspend.readthedocs.io/en/latest/configuration_file.html#activity-check-configuration https://autosuspend.readthedocs.io/en/latest/available_checks.html Type: attribute set of (open submodule of section of an INI file (attrs of INI atom (null, bool, int, float or string))) Default: { } Example: { # Basic activity check configuration. # The check class name is derived from the section header (Ping in this case). # Remember to enable desired checks. They are disabled by default. Ping = { hosts = "192.168.0.7"; }; # This check is disabled. Smb.enabled = false; # Example for a custom check name. # This will use the Users check with the custom name RemoteUsers. # Custom names are necessary in case a check class is used multiple times. # Custom names can also be used for clarification. RemoteUsers = { class = "Users"; name = ".*"; terminal = ".*"; host = "[0-9].*"; }; # Here the Users activity check is used again with different settings and a different name LocalUsers = { class = "Users"; name = ".*"; terminal = ".*"; host = "localhost"; }; } Declared by: <nixpkgs/nixos/modules/services/misc/autosuspend.nix>

## services.autosuspend.settings

Configuration for autosuspend, see https://autosuspend.readthedocs.io/en/latest/configuration_file.html#general-configuration for supported values. Type: open submodule of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Example: { enable = true; interval = 30; idle_time = 120; } Declared by: <nixpkgs/nixos/modules/services/misc/autosuspend.nix>

## services.autosuspend.wakeups

Checks for wake up. For more information, see: https://autosuspend.readthedocs.io/en/latest/configuration_file.html#wake-up-check-configuration https://autosuspend.readthedocs.io/en/latest/available_wakeups.html Type: attribute set of (open submodule of section of an INI file (attrs of INI atom (null, bool, int, float or string))) Default: { } Example: { # Wake up checks reuse the same configuration mechanism as activity checks. Calendar = { url = "http://example.org/test.ics"; }; } Declared by: <nixpkgs/nixos/modules/services/misc/autosuspend.nix>
