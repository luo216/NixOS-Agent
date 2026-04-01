---
module: services.rathole
option_count: 5
source: options.html
---

# services.rathole

## services.rathole.enable

Whether to enable Rathole. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/rathole.nix>

## services.rathole.package

The rathole package to use. Type: package Default: pkgs.rathole Declared by: <nixpkgs/nixos/modules/services/networking/rathole.nix>

## services.rathole.credentialsFile

Path to a TOML file to be merged with the settings. Useful to set secret config parameters like tokens, which should not appear in the Nix Store. Type: absolute path Default: "/dev/null" Example: "/var/lib/secrets/rathole/config.toml" Declared by: <nixpkgs/nixos/modules/services/networking/rathole.nix>

## services.rathole.role

Select whether rathole needs to be run as a client or a server. Server is a machine with a public IP and client is a device behind NAT, but running some services that need to be exposed to the Internet. Type: one of “server”, “client” Declared by: <nixpkgs/nixos/modules/services/networking/rathole.nix>

## services.rathole.settings

Rathole configuration, for options reference see the example on GitHub. Both server and client configurations can be specified at the same time, regardless of the selected role. Type: TOML value Default: { } Example: { server = { bind_addr = "0.0.0.0:2333"; services = { my_nas_ssh = { bind_addr = "0.0.0.0:5202"; token = "use_a_secret_that_only_you_know"; }; }; }; } Declared by: <nixpkgs/nixos/modules/services/networking/rathole.nix>
