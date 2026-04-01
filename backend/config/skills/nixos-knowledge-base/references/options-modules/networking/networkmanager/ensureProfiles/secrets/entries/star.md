---
module: networking.networkmanager.ensureProfiles.secrets.entries.*
option_count: 8
source: options.html
---

# networking.networkmanager.ensureProfiles.secrets.entries.*

## networking.networkmanager.ensureProfiles.secrets.entries.*.file

file from which the secret value is read Type: string Declared by: <nixpkgs/nixos/modules/services/networking/nm-file-secret-agent.nix>

## networking.networkmanager.ensureProfiles.secrets.entries.*.key

key in the setting section for which this entry provides a value Type: string Declared by: <nixpkgs/nixos/modules/services/networking/nm-file-secret-agent.nix>

## networking.networkmanager.ensureProfiles.secrets.entries.*.matchId

connection id used by NetworkManager. Often displayed as name in GUIs. NetworkManager describes this as a human readable unique identifier for the connection, like “Work Wi-Fi” or “T-Mobile 3G”. Type: null or string Default: null Example: "wifi1" Declared by: <nixpkgs/nixos/modules/services/networking/nm-file-secret-agent.nix>

## networking.networkmanager.ensureProfiles.secrets.entries.*.matchIface

interface name of the NetworkManager connection Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/nm-file-secret-agent.nix>

## networking.networkmanager.ensureProfiles.secrets.entries.*.matchSetting

name of the setting section for which secrets are requested Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/nm-file-secret-agent.nix>

## networking.networkmanager.ensureProfiles.secrets.entries.*.matchType

NetworkManager connection type The NetworkManager configuration settings reference roughly corresponds to connection types. More might be available on your system depending on the installed plugins. https://networkmanager.dev/docs/api/latest/ch01.html Type: null or string Default: null Example: "wireguard" Declared by: <nixpkgs/nixos/modules/services/networking/nm-file-secret-agent.nix>

## networking.networkmanager.ensureProfiles.secrets.entries.*.matchUuid

UUID of the connection profile UUIDs are assigned once on connection creation and should never change as long as the connection still applies to the same network. Type: null or string Default: null Example: "669ea4c9-4cb3-4901-ab52-f9606590976e" Declared by: <nixpkgs/nixos/modules/services/networking/nm-file-secret-agent.nix>

## networking.networkmanager.ensureProfiles.secrets.entries.*.trim

whether leading and trailing whitespace should be stripped from the files content before being passed to NetworkManager Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/networking/nm-file-secret-agent.nix>
