---
module: services.resilio
option_count: 18
source: options.html
---

# services.resilio

## services.resilio.enable

If enabled, start the Resilio Sync daemon. Once enabled, you can interact with the service through the Web UI, or configure it in your NixOS configuration. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/resilio.nix>

## services.resilio.enableWebUI

Enable Web UI for administration. Bound to the specified httpListenAddress and httpListenPort. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/resilio.nix>

## services.resilio.package

The resilio-sync package to use. Type: package Default: pkgs.resilio-sync Declared by: <nixpkgs/nixos/modules/services/networking/resilio.nix>

## services.resilio.apiKey

API key, which enables the developer API. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/resilio.nix>

## services.resilio.checkForUpdates

Determines whether to check for updates and alert the user about them in the UI. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/resilio.nix>

## services.resilio.deviceName

Name of the Resilio Sync device. Type: string Default: config.networking.hostName Example: "Voltron" Declared by: <nixpkgs/nixos/modules/services/networking/resilio.nix>

## services.resilio.directoryRoot

Default directory to add folders in the web UI. Type: string Default: "" Example: "/media" Declared by: <nixpkgs/nixos/modules/services/networking/resilio.nix>

## services.resilio.downloadLimit

Download speed limit. 0 is unlimited (default). Type: unsigned integer, meaning >=0 Default: 0 Example: 1024 Declared by: <nixpkgs/nixos/modules/services/networking/resilio.nix>

## services.resilio.encryptLAN

Encrypt LAN data. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/resilio.nix>

## services.resilio.httpListenAddr

HTTP address to bind to. Type: string Default: "[::1]" Example: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/networking/resilio.nix>

## services.resilio.httpListenPort

HTTP port to bind on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9000 Declared by: <nixpkgs/nixos/modules/services/networking/resilio.nix>

## services.resilio.httpLogin

HTTP web login username. Type: string Default: "" Example: "allyourbase" Declared by: <nixpkgs/nixos/modules/services/networking/resilio.nix>

## services.resilio.httpPass

HTTP web login password. Type: string Default: "" Example: "arebelongtous" Declared by: <nixpkgs/nixos/modules/services/networking/resilio.nix>

## services.resilio.listeningPort

Listening port. Defaults to 0 which randomizes the port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 0 Example: 44444 Declared by: <nixpkgs/nixos/modules/services/networking/resilio.nix>

## services.resilio.sharedFolders

Shared folder list. If enabled, web UI must be disabled. Secrets can be generated using rslsync --generate-secret. If you would like to be able to modify the contents of this directories, it is recommended that you make your user a member of the rslsync group. Directories in this list should be in the rslsync group, and that group must have write access to the directory. It is also recommended that chmod g+s is applied to the directory so that any sub directories created will also belong to the rslsync group. Also, setfacl -d -m group:rslsync:rwx and setfacl -m group:rslsync:rwx should also be applied so that the sub directories are writable by the group. Type: list of attribute set of anything Default: [ ] Example: [ { directory = "/home/user/sync_test"; knownHosts = [ "192.168.1.2:4444" "192.168.1.3:4444" ]; searchLAN = true; secretFile = "/run/resilio-secret"; useDHT = false; useRelayServer = true; useSyncTrash = true; useTracker = true; } ] Declared by: <nixpkgs/nixos/modules/services/networking/resilio.nix>

## services.resilio.storagePath

Where BitTorrent Sync will store it’s database files (containing things like username info and licenses). Generally, you should not need to ever change this. Type: absolute path Default: "/var/lib/resilio-sync/" Declared by: <nixpkgs/nixos/modules/services/networking/resilio.nix>

## services.resilio.uploadLimit

Upload speed limit. 0 is unlimited (default). Type: unsigned integer, meaning >=0 Default: 0 Example: 1024 Declared by: <nixpkgs/nixos/modules/services/networking/resilio.nix>

## services.resilio.useUpnp

Use Universal Plug-n-Play (UPnP) Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/resilio.nix>
