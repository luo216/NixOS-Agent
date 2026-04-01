---
module: services.haven
option_count: 6
source: options.html
---

# services.haven

## services.haven.enable

Whether to enable haven. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/haven.nix>

## services.haven.package

The haven package to use. Type: package Default: pkgs.haven Declared by: <nixpkgs/nixos/modules/services/web-apps/haven.nix>

## services.haven.blastrRelays

List of relay configurations for blastr Type: list of string Default: [ ] Example: [ "relay.example.com" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/haven.nix>

## services.haven.environmentFile

Path to a file containing sensitive environment variables. See https://github.com/bitvora/haven for documentation. The file should contain environment-variable assignments like: S3_SECRET_KEY=mysecretkey S3_ACCESS_KEY_ID=myaccesskey Type: null or absolute path Default: null Example: "/var/lib/haven/secrets.env" Declared by: <nixpkgs/nixos/modules/services/web-apps/haven.nix>

## services.haven.importRelays

List of relay configurations for importing historical events Type: list of string Default: [ ] Example: [ "relay.example.com" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/haven.nix>

## services.haven.settings

See https://github.com/bitvora/haven for documentation. Type: unspecified value Default: "See <https://github.com/bitvora/haven/blob/master/.env.example>" Example: { RELAY_URL = "relay.example.com"; OWNER_NPUB = "npub1..."; } Declared by: <nixpkgs/nixos/modules/services/web-apps/haven.nix>
