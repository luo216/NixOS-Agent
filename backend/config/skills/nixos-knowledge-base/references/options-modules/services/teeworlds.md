---
module: services.teeworlds
option_count: 11
source: options.html
---

# services.teeworlds

## services.teeworlds.enable

Whether to enable Teeworlds Server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/games/teeworlds.nix>

## services.teeworlds.package

The teeworlds-server package to use. Type: package Default: pkgs.teeworlds-server Declared by: <nixpkgs/nixos/modules/services/games/teeworlds.nix>

## services.teeworlds.environmentFile

Environment file as defined in systemd.exec(5). Secrets may be passed to the service without adding them to the world-readable Nix store, by specifying placeholder variables as the option value in Nix and setting these variables accordingly in the environment file. # snippet of teeworlds-related config services.teeworlds.password = "$TEEWORLDS_PASSWORD"; # content of the environment file TEEWORLDS_PASSWORD=verysecretpassword Note that this file needs to be available on the host on which teeworlds is running. Type: null or absolute path Default: null Example: "/var/lib/teeworlds/teeworlds.env" Declared by: <nixpkgs/nixos/modules/services/games/teeworlds.nix>

## services.teeworlds.extraOptions

Extra configuration lines for the teeworlds.cfg. See Teeworlds Documentation. Type: list of string Default: [ ] Example: [ "sv_map dm1" "sv_gametype dm" ] Declared by: <nixpkgs/nixos/modules/services/games/teeworlds.nix>

## services.teeworlds.motd

The server’s message of the day text. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/games/teeworlds.nix>

## services.teeworlds.name

Name of the server. Type: string Default: "unnamed server" Declared by: <nixpkgs/nixos/modules/services/games/teeworlds.nix>

## services.teeworlds.openPorts

Whether to open firewall ports for Teeworlds. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/games/teeworlds.nix>

## services.teeworlds.password

Password to connect to the server. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/games/teeworlds.nix>

## services.teeworlds.port

Port the server will listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8303 Declared by: <nixpkgs/nixos/modules/services/games/teeworlds.nix>

## services.teeworlds.rconPassword

Password to access the remote console. If not set, a randomly generated one is displayed in the server log. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/games/teeworlds.nix>

## services.teeworlds.register

Whether the server registers as a public server in the global server list. This is disabled by default for privacy reasons. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/games/teeworlds.nix>
