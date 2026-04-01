---
module: services.umurmur.settings
option_count: 13
source: options.html
---

# services.umurmur.settings

## services.umurmur.settings.bindaddr

IPv4 address to bind to. Defaults binding on all addresses. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/networking/umurmur.nix>

## services.umurmur.settings.bindaddr6

IPv6 address to bind to. Defaults binding on all addresses. Type: string Default: "::" Declared by: <nixpkgs/nixos/modules/services/networking/umurmur.nix>

## services.umurmur.settings.bindport

Port to bind to (UDP and TCP). Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 64739 Declared by: <nixpkgs/nixos/modules/services/networking/umurmur.nix>

## services.umurmur.settings.ca_path

Path to your SSL CA certificate. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/umurmur.nix>

## services.umurmur.settings.certificate

Path to your SSL certificate. Generates self-signed automatically if not exists. Type: string Default: "/var/lib/private/umurmur/cert.crt" Declared by: <nixpkgs/nixos/modules/services/networking/umurmur.nix>

## services.umurmur.settings.channel_links

Channel tree definitions. Type: list of (attribute set) Default: [ ] Example: [ { destination = "Red team"; source = "Lobby"; } ] Declared by: <nixpkgs/nixos/modules/services/networking/umurmur.nix>

## services.umurmur.settings.channels

Channel tree definitions. Type: list of (attribute set) Default: [ { description = "Root channel."; name = "root"; noenter = false; parent = ""; } ] Declared by: <nixpkgs/nixos/modules/services/networking/umurmur.nix>

## services.umurmur.settings.default_channel

The channel in which users will appear in when connecting. Type: string Default: "root" Declared by: <nixpkgs/nixos/modules/services/networking/umurmur.nix>

## services.umurmur.settings.max_bandwidth

Maximum bandwidth (in bits per second) that clients may send speech at. Type: signed integer Default: 48000 Declared by: <nixpkgs/nixos/modules/services/networking/umurmur.nix>

## services.umurmur.settings.max_users

Maximum number of concurrent clients allowed. Type: signed integer Default: 10 Declared by: <nixpkgs/nixos/modules/services/networking/umurmur.nix>

## services.umurmur.settings.password

Required password to join server, if specified. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/umurmur.nix>

## services.umurmur.settings.private_key

Path to your SSL key. Generates self-signed automatically if not exists. Type: string Default: "/var/lib/private/umurmur/key.key" Declared by: <nixpkgs/nixos/modules/services/networking/umurmur.nix>

## services.umurmur.settings.welcometext

Welcome message for connected clients. Type: null or string Default: "Welcome to uMurmur!" Declared by: <nixpkgs/nixos/modules/services/networking/umurmur.nix>
