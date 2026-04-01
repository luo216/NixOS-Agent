---
module: services.ghostunnel.servers.<name>
option_count: 14
source: options.html
---

# services.ghostunnel.servers.<name>

## services.ghostunnel.servers.<name>.allowAll

If true, allow all clients, do not check client cert subject. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/ghostunnel.nix>

## services.ghostunnel.servers.<name>.allowCN

Allow client if common name appears in the list. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/ghostunnel.nix>

## services.ghostunnel.servers.<name>.allowDNS

Allow client if DNS subject alternative name appears in the list. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/ghostunnel.nix>

## services.ghostunnel.servers.<name>.allowOU

Allow client if organizational unit name appears in the list. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/ghostunnel.nix>

## services.ghostunnel.servers.<name>.allowURI

Allow client if URI subject alternative name appears in the list. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/ghostunnel.nix>

## services.ghostunnel.servers.<name>.cacert

Path to CA bundle file (PEM/X509). Uses system trust store if null. Type: null or string Declared by: <nixpkgs/nixos/modules/services/networking/ghostunnel.nix>

## services.ghostunnel.servers.<name>.cert

Path to certificate (PEM with certificate chain). Not required if keystore is set. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/ghostunnel.nix>

## services.ghostunnel.servers.<name>.disableAuthentication

Disable client authentication, no client certificate will be required. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/ghostunnel.nix>

## services.ghostunnel.servers.<name>.extraArguments

Extra arguments to pass to ghostunnel server Type: strings concatenated with " " Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/ghostunnel.nix>

## services.ghostunnel.servers.<name>.key

Path to certificate private key (PEM with private key). Not required if keystore is set. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/ghostunnel.nix>

## services.ghostunnel.servers.<name>.keystore

Path to keystore (combined PEM with cert/key, or PKCS12 keystore). NB: storepass is not supported because it would expose credentials via /proc/*/cmdline. Specify this or cert and key. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/ghostunnel.nix>

## services.ghostunnel.servers.<name>.listen

Address and port to listen on (can be HOST:PORT, unix:PATH). Type: string Declared by: <nixpkgs/nixos/modules/services/networking/ghostunnel.nix>

## services.ghostunnel.servers.<name>.target

Address to forward connections to (can be HOST:PORT or unix:PATH). Type: string Declared by: <nixpkgs/nixos/modules/services/networking/ghostunnel.nix>

## services.ghostunnel.servers.<name>.unsafeTarget

If set, does not limit target to localhost, 127.0.0.1, [::1], or UNIX sockets. This is meant to protect against accidental unencrypted traffic on untrusted networks. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/ghostunnel.nix>
