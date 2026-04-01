---
module: services.quicktun.<name>
option_count: 12
source: options.html
---

# services.quicktun.<name>

## services.quicktun.<name>.localAddress

IP address or hostname of the local end. Type: null or string Default: null Example: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/networking/quicktun.nix>

## services.quicktun.<name>.localPort

Local UDP port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 2998 Declared by: <nixpkgs/nixos/modules/services/networking/quicktun.nix>

## services.quicktun.<name>.privateKey

Local secret key in hexadecimal form. Warning This option is deprecated. Please use services.quicktun.<name>.privateKeyFile instead. Note Not needed when services.quicktun.<name>.protocol is set to raw. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/quicktun.nix>

## services.quicktun.<name>.privateKeyFile

Path to file containing local secret key in binary or hexadecimal form. Note Not needed when services.quicktun.<name>.protocol is set to raw. Type: null or absolute path Default: "null" Declared by: <nixpkgs/nixos/modules/services/networking/quicktun.nix>

## services.quicktun.<name>.protocol

Which protocol to use. Type: one of “raw”, “nacl0”, “nacltai”, “salty” Default: "nacltai" Declared by: <nixpkgs/nixos/modules/services/networking/quicktun.nix>

## services.quicktun.<name>.publicKey

Remote public key in hexadecimal form. Note Not needed when services.quicktun.<name>.protocol is set to raw. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/quicktun.nix>

## services.quicktun.<name>.remoteAddress

IP address or hostname of the remote end (use 0.0.0.0 for a floating/dynamic remote endpoint). Type: string Default: "0.0.0.0" Example: "tunnel.example.com" Declared by: <nixpkgs/nixos/modules/services/networking/quicktun.nix>

## services.quicktun.<name>.remoteFloat

Whether to allow the remote address and port to change when properly encrypted packets are received. Type: integer between 0 and 1 (both inclusive) or boolean convertible to it Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/quicktun.nix>

## services.quicktun.<name>.remotePort

Remote UDP port Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: config.services.quicktun.<name>.localPort Declared by: <nixpkgs/nixos/modules/services/networking/quicktun.nix>

## services.quicktun.<name>.timeWindow

Allowed time window for first received packet in seconds (positive number allows packets from history) Type: unsigned integer, meaning >=0 Default: 5 Declared by: <nixpkgs/nixos/modules/services/networking/quicktun.nix>

## services.quicktun.<name>.tunMode

Whether to operate in tun (IP) or tap (Ethernet) mode. Type: integer between 0 and 1 (both inclusive) or boolean convertible to it Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/quicktun.nix>

## services.quicktun.<name>.upScript

Run specified command or script after the tunnel device has been opened. Type: null or strings concatenated with “\n” Default: null Declared by: <nixpkgs/nixos/modules/services/networking/quicktun.nix>
