---
module: services.bitlbee
option_count: 12
source: options.html
---

# services.bitlbee

## services.bitlbee.enable

Whether to run the BitlBee IRC to other chat network gateway. Running it allows you to access the MSN, Jabber, Yahoo! and ICQ chat networks via an IRC client. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/bitlbee.nix>

## services.bitlbee.authBackend

How users are authenticated storage – save passwords internally pam – Linux PAM authentication Type: one of “storage”, “pam” Default: "storage" Declared by: <nixpkgs/nixos/modules/services/networking/bitlbee.nix>

## services.bitlbee.authMode

The following authentication modes are available: Open – Accept connections from anyone, use NickServ for user authentication. Closed – Require authorization (using the PASS command during login) before allowing the user to connect at all. Registered – Only allow registered users to use this server; this disables the register- and the account command until the user identifies himself. Type: one of “Open”, “Closed”, “Registered” Default: "Open" Declared by: <nixpkgs/nixos/modules/services/networking/bitlbee.nix>

## services.bitlbee.configDir

Specify an alternative directory to store all the per-user configuration files. Type: absolute path Default: "/var/lib/bitlbee" Declared by: <nixpkgs/nixos/modules/services/networking/bitlbee.nix>

## services.bitlbee.extraDefaults

Will be inserted in the Default section of the config file. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/bitlbee.nix>

## services.bitlbee.extraSettings

Will be inserted in the Settings section of the config file. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/bitlbee.nix>

## services.bitlbee.hostName

Normally, BitlBee gets a hostname using getsockname(). If you have a nicer alias for your BitlBee daemon, you can set it here and BitlBee will identify itself with that name instead. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/bitlbee.nix>

## services.bitlbee.interface

The interface the BitlBee daemon will be listening to. If 127.0.0.1, only clients on the local host can connect to it; if 0.0.0.0, clients can access it from any network interface. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/networking/bitlbee.nix>

## services.bitlbee.libpurple_plugins

The list of libpurple plugins to install. Type: list of package Default: [ ] Example: [ pkgs.purple-discord ] Declared by: <nixpkgs/nixos/modules/services/networking/bitlbee.nix>

## services.bitlbee.plugins

The list of bitlbee plugins to install. Type: list of package Default: [ ] Example: [ pkgs.bitlbee-facebook ] Declared by: <nixpkgs/nixos/modules/services/networking/bitlbee.nix>

## services.bitlbee.portNumber

Number of the port BitlBee will be listening to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 6667 Declared by: <nixpkgs/nixos/modules/services/networking/bitlbee.nix>

## services.bitlbee.protocols

This option allows to remove the support of protocol, even if compiled in. If nothing is given, there are no restrictions. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/bitlbee.nix>
