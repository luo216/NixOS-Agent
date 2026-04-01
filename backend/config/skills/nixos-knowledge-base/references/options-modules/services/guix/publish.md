---
module: services.guix.publish
option_count: 5
source: options.html
---

# services.guix.publish

## services.guix.publish.enable

Whether to enable substitute server for your Guix store directory. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/guix>

## services.guix.publish.extraArgs

Extra flags to pass to the substitute server. Type: list of string Default: [ ] Example: [ "--compression=zstd:6" "--discover=no" ] Declared by: <nixpkgs/nixos/modules/services/misc/guix>

## services.guix.publish.generateKeyPair

Whether to generate signing keys in /etc/guix which are required to initialize a substitute server. Otherwise, --public-key=$FILE and --private-key=$FILE can be passed in services.guix.publish.extraArgs. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/misc/guix>

## services.guix.publish.port

Port of the substitute server to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8181 Example: 8200 Declared by: <nixpkgs/nixos/modules/services/misc/guix>

## services.guix.publish.user

Name of the user to change once the server is up. Type: string Default: "guix-publish" Declared by: <nixpkgs/nixos/modules/services/misc/guix>
