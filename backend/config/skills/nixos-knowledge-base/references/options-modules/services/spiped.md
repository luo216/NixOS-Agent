---
module: services.spiped
option_count: 2
source: options.html
---

# services.spiped

## services.spiped.enable

Enable the spiped service module. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/spiped.nix>

## services.spiped.config

Configuration for a secure pipe daemon. The daemon can be started, stopped, or examined using systemctl, under the name spiped@foo. Type: attribute set of (submodule) Default: { } Example: { pipe1 = { keyfile = "/var/lib/spiped/pipe1.key"; encrypt = true; source = "localhost:6000"; target = "endpoint.example.com:7000"; }; pipe2 = { keyfile = "/var/lib/spiped/pipe2.key"; decrypt = true; source = "0.0.0.0:7000"; target = "localhost:3000"; }; } Declared by: <nixpkgs/nixos/modules/services/networking/spiped.nix>
