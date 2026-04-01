---
module: services.ncdns
option_count: 4
source: options.html
---

# services.ncdns

## services.ncdns.enable

Whether to enable ncdns, a Go daemon to bridge Namecoin to DNS. To resolve .bit domains set services.namecoind.enable = true; and an RPC username/password . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/ncdns.nix>

## services.ncdns.address

The IP address the ncdns resolver will bind to. Leave this unchanged if you do not wish to directly expose the resolver. Type: string Default: "[::1]" Declared by: <nixpkgs/nixos/modules/services/networking/ncdns.nix>

## services.ncdns.port

The port the ncdns resolver will bind to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5333 Declared by: <nixpkgs/nixos/modules/services/networking/ncdns.nix>

## services.ncdns.settings

ncdns settings. Use this option to configure ncds settings not exposed in a NixOS option or to bypass one. See the example ncdns.conf file at https://github.com/namecoin/ncdns/blob/master/_doc/ncdns.conf.example for the available options. Type: TOML value Default: { } Example: { # enable webserver ncdns.httplistenaddr = ":8202"; # synchronize TLS certs certstore.nss = true; # note: all paths are relative to the config file certstore.nsscertdir = "../../var/lib/ncdns"; certstore.nssdbdir = "../../home/alice/.pki/nssdb"; } Declared by: <nixpkgs/nixos/modules/services/networking/ncdns.nix>
