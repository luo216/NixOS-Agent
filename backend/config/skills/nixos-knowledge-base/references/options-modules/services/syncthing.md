---
module: services.syncthing
option_count: 18
source: options.html
---

# services.syncthing

## services.syncthing.enable

Whether to enable Syncthing, a self-hosted open-source alternative to Dropbox and Bittorrent Sync. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/syncthing.nix>

## services.syncthing.package

The syncthing package to use. Type: package Default: pkgs.syncthing Declared by: <nixpkgs/nixos/modules/services/networking/syncthing.nix>

## services.syncthing.all_proxy

Overwrites the all_proxy environment variable for the Syncthing process to the given value. This is normally used to let Syncthing connect through a SOCKS5 proxy server. See https://docs.syncthing.net/users/proxying.html. Type: null or string Default: null Example: "socks5://address.com:1234" Declared by: <nixpkgs/nixos/modules/services/networking/syncthing.nix>

## services.syncthing.cert

Path to the cert.pem file, which will be copied into Syncthing’s configDir. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/syncthing.nix>

## services.syncthing.configDir

The path where the settings and keys will exist. Type: absolute path Default: if stateVersion >= 19.03: config.services.syncthing.dataDir + "/.config/syncthing" otherwise: config.services.syncthing.dataDir Declared by: <nixpkgs/nixos/modules/services/networking/syncthing.nix>

## services.syncthing.dataDir

The path where synchronised directories will exist. Type: absolute path Default: "/var/lib/syncthing" Example: "/home/yourUser" Declared by: <nixpkgs/nixos/modules/services/networking/syncthing.nix>

## services.syncthing.databaseDir

The directory containing the database and logs. Type: absolute path Default: config.services.syncthing.configDir Declared by: <nixpkgs/nixos/modules/services/networking/syncthing.nix>

## services.syncthing.extraFlags

Extra flags passed to the syncthing command in the service definition. Type: list of string Default: [ ] Example: [ "--reset-deltas" ] Declared by: <nixpkgs/nixos/modules/services/networking/syncthing.nix>

## services.syncthing.group

The group to run Syncthing under. By default, a group named syncthing will be created. Type: string Default: "syncthing" Example: "yourGroup" Declared by: <nixpkgs/nixos/modules/services/networking/syncthing.nix>

## services.syncthing.guiAddress

The address to serve the web interface at. Type: string Default: "127.0.0.1:8384" Declared by: <nixpkgs/nixos/modules/services/networking/syncthing.nix>

## services.syncthing.guiPasswordFile

Path to file containing the plaintext password for Syncthing’s GUI. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/syncthing.nix>

## services.syncthing.key

Path to the key.pem file, which will be copied into Syncthing’s configDir. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/syncthing.nix>

## services.syncthing.openDefaultPorts

Whether to open the default ports in the firewall: TCP/UDP 22000 for transfers and UDP 21027 for discovery. If multiple users are running Syncthing on this machine, you will need to manually open a set of ports for each instance and leave this disabled. Alternatively, if you are running only a single instance on this machine using the default ports, enable this. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/syncthing.nix>

## services.syncthing.overrideDevices

Whether to delete the devices which are not configured via the devices option. If set to false, devices added via the web interface will persist and will have to be deleted manually. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/syncthing.nix>

## services.syncthing.overrideFolders

Whether to delete the folders which are not configured via the folders option. If set to false, folders added via the web interface will persist and will have to be deleted manually. Type: boolean Default: true unless any device has the autoAcceptFolders option set to true. Declared by: <nixpkgs/nixos/modules/services/networking/syncthing.nix>

## services.syncthing.settings

Extra configuration options for Syncthing. See https://docs.syncthing.net/users/config.html. Note that this attribute set does not exactly match the documented xml format. Instead, this is the format of the json rest api. There are slight differences. For example, this xml: <options> <listenAddress>default</listenAddress> <minHomeDiskFree unit="%">1</minHomeDiskFree> </options> corresponds to the json: { options: { listenAddresses = [ "default" ]; minHomeDiskFree = { unit = "%"; value = 1; }; }; } Type: open submodule of (JSON value) Default: { } Example: { gui = { theme = "black"; }; options = { localAnnounceEnabled = false; }; } Declared by: <nixpkgs/nixos/modules/services/networking/syncthing.nix>

## services.syncthing.systemService

Whether to auto-launch Syncthing as a system service. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/syncthing.nix>

## services.syncthing.user

The user to run Syncthing as. By default, a user named syncthing will be created whose home directory is dataDir. Type: string Default: "syncthing" Example: "yourUser" Declared by: <nixpkgs/nixos/modules/services/networking/syncthing.nix>
