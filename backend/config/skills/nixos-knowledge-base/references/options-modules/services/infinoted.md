---
module: services.infinoted
option_count: 13
source: options.html
---

# services.infinoted

## services.infinoted.enable

Whether to enable infinoted. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/editors/infinoted.nix>

## services.infinoted.package

The libinfinity package to use. Type: package Default: pkgs.libinfinity Declared by: <nixpkgs/nixos/modules/services/editors/infinoted.nix>

## services.infinoted.certificateChain

Chain of CA-certificates to which our certificateFile is relative. Optional for TLS. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/editors/infinoted.nix>

## services.infinoted.certificateFile

Server certificate to use for TLS Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/editors/infinoted.nix>

## services.infinoted.extraConfig

Additional configuration to append to infinoted.conf Type: strings concatenated with “\n” Default: '' [autosave] interval=10 '' Declared by: <nixpkgs/nixos/modules/services/editors/infinoted.nix>

## services.infinoted.group

What to call the primary group of the dedicated user under which infinoted is run Type: string Default: "infinoted" Declared by: <nixpkgs/nixos/modules/services/editors/infinoted.nix>

## services.infinoted.keyFile

Private key to use for TLS Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/editors/infinoted.nix>

## services.infinoted.passwordFile

File to read server-wide password from Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/editors/infinoted.nix>

## services.infinoted.plugins

Plugins to enable Type: list of string Default: [ "note-text" "note-chat" "logging" "autosave" ] Declared by: <nixpkgs/nixos/modules/services/editors/infinoted.nix>

## services.infinoted.port

Port to listen on Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 6523 Declared by: <nixpkgs/nixos/modules/services/editors/infinoted.nix>

## services.infinoted.rootDirectory

Root of the directory structure to serve Type: absolute path Default: "/var/lib/infinoted/documents/" Declared by: <nixpkgs/nixos/modules/services/editors/infinoted.nix>

## services.infinoted.securityPolicy

How strictly to enforce clients connection with TLS. Type: one of “no-tls”, “allow-tls”, “require-tls” Default: "require-tls" Declared by: <nixpkgs/nixos/modules/services/editors/infinoted.nix>

## services.infinoted.user

What to call the dedicated user under which infinoted is run Type: string Default: "infinoted" Declared by: <nixpkgs/nixos/modules/services/editors/infinoted.nix>
