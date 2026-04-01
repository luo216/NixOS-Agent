---
module: services.autosuspend.checks.<name>
option_count: 2
source: options.html
---

# services.autosuspend.checks.<name>

## services.autosuspend.checks.<name>.enabled

Whether to enable this activity check. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/misc/autosuspend.nix>

## services.autosuspend.checks.<name>.class

Name of the class implementing the check. If this option is not specified, the check’s name must represent a valid internal check class. Type: null or one of “ActiveCalendarEvent”, “ActiveConnection”, “ExternalCommand”, “JsonPath”, “Kodi”, “KodiIdleTime”, “LastLogActivity”, “Load”, “LogindSessionsIdle”, “Mpd”, “NetworkBandwidth”, “Ping”, “Processes”, “Smb”, “Users”, “XIdleTime”, “XPath” Default: null Declared by: <nixpkgs/nixos/modules/services/misc/autosuspend.nix>
