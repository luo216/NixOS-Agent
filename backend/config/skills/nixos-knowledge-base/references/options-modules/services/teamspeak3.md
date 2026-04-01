---
module: services.teamspeak3
option_count: 13
source: options.html
---

# services.teamspeak3

## services.teamspeak3.enable

Whether to run the Teamspeak3 voice communication server daemon. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/teamspeak3.nix>

## services.teamspeak3.dataDir

Directory to store TS3 database and other state/data files. Type: absolute path Default: "/var/lib/teamspeak3-server" Declared by: <nixpkgs/nixos/modules/services/networking/teamspeak3.nix>

## services.teamspeak3.defaultVoicePort

Default UDP port for clients to connect to virtual servers - used for first virtual server, subsequent ones will open on incrementing port numbers by default. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9987 Declared by: <nixpkgs/nixos/modules/services/networking/teamspeak3.nix>

## services.teamspeak3.fileTransferIP

IP on which the server instance will listen for incoming file transfer connections. Defaults to any IP. Type: null or string Default: null Example: "[::]" Declared by: <nixpkgs/nixos/modules/services/networking/teamspeak3.nix>

## services.teamspeak3.fileTransferPort

TCP port opened for file transfers. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 30033 Declared by: <nixpkgs/nixos/modules/services/networking/teamspeak3.nix>

## services.teamspeak3.logPath

Directory to store log files in. Type: absolute path Default: "/var/log/teamspeak3-server/" Declared by: <nixpkgs/nixos/modules/services/networking/teamspeak3.nix>

## services.teamspeak3.openFirewall

Open ports in the firewall for the TeamSpeak3 server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/teamspeak3.nix>

## services.teamspeak3.openFirewallServerQuery

Open ports in the firewall for the TeamSpeak3 serverquery (administration) system. Requires openFirewall. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/teamspeak3.nix>

## services.teamspeak3.queryHttpPort

TCP port opened for ServerQuery connections using the HTTP protocol. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 10080 Declared by: <nixpkgs/nixos/modules/services/networking/teamspeak3.nix>

## services.teamspeak3.queryIP

IP on which the server instance will listen for incoming ServerQuery connections. Defaults to any IP. Type: null or string Default: null Example: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/networking/teamspeak3.nix>

## services.teamspeak3.queryPort

TCP port opened for ServerQuery connections using the raw telnet protocol. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 10011 Declared by: <nixpkgs/nixos/modules/services/networking/teamspeak3.nix>

## services.teamspeak3.querySshPort

TCP port opened for ServerQuery connections using the SSH protocol. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 10022 Declared by: <nixpkgs/nixos/modules/services/networking/teamspeak3.nix>

## services.teamspeak3.voiceIP

IP on which the server instance will listen for incoming voice connections. Defaults to any IP. Type: null or string Default: null Example: "[::]" Declared by: <nixpkgs/nixos/modules/services/networking/teamspeak3.nix>
