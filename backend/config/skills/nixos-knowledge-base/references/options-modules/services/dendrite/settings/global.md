---
module: services.dendrite.settings.global
option_count: 3
source: options.html
---

# services.dendrite.settings.global

## services.dendrite.settings.global.private_key

The path to the signing private key file, used to sign requests and events. nix-shell -p dendrite --command "generate-keys --private-key matrix_key.pem" Type: absolute path or string matching the pattern ^\$CREDENTIALS_DIRECTORY/.+ Example: "$CREDENTIALS_DIRECTORY/private_key" Declared by: <nixpkgs/nixos/modules/services/matrix/dendrite.nix>

## services.dendrite.settings.global.server_name

The domain name of the server, with optional explicit port. This is used by remote servers to connect to this server. This is also the last part of your UserID. Type: string Example: "example.com" Declared by: <nixpkgs/nixos/modules/services/matrix/dendrite.nix>

## services.dendrite.settings.global.trusted_third_party_id_servers

Lists of domains that the server will trust as identity servers to verify third party identifiers such as phone numbers and email addresses Type: list of string Default: [ "matrix.org" "vector.im" ] Example: [ "matrix.org" ] Declared by: <nixpkgs/nixos/modules/services/matrix/dendrite.nix>
