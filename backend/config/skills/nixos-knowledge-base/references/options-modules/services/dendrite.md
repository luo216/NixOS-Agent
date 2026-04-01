---
module: services.dendrite
option_count: 9
source: options.html
---

# services.dendrite

## services.dendrite.enable

Whether to enable matrix.org dendrite. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/matrix/dendrite.nix>

## services.dendrite.environmentFile

Environment file as defined in systemd.exec(5). Secrets may be passed to the service without adding them to the world-readable Nix store, by specifying placeholder variables as the option value in Nix and setting these variables accordingly in the environment file. Currently only used for the registration secret to allow secure registration when client_api.registration_disabled is true. # snippet of dendrite-related config services.dendrite.settings.client_api.registration_shared_secret = "$REGISTRATION_SHARED_SECRET"; # content of the environment file REGISTRATION_SHARED_SECRET=verysecretpassword Note that this file needs to be available on the host on which dendrite is running. Type: null or absolute path Default: null Example: "/var/lib/dendrite/registration_secret" Declared by: <nixpkgs/nixos/modules/services/matrix/dendrite.nix>

## services.dendrite.httpPort

The port to listen for HTTP requests on. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8008 Declared by: <nixpkgs/nixos/modules/services/matrix/dendrite.nix>

## services.dendrite.httpsPort

The port to listen for HTTPS requests on. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/matrix/dendrite.nix>

## services.dendrite.loadCredential

This can be used to pass secrets to the systemd service without adding them to the nix store. To use the example setting, see the example of services.dendrite.settings.global.private_key. See the LoadCredential section of systemd.exec manual for more information. Type: list of string Default: [ ] Example: [ "private_key:/path/to/my_private_key" ] Declared by: <nixpkgs/nixos/modules/services/matrix/dendrite.nix>

## services.dendrite.openRegistration

Allow open registration without secondary verification (reCAPTCHA). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/matrix/dendrite.nix>

## services.dendrite.settings

Configuration for dendrite, see: https://github.com/matrix-org/dendrite/blob/main/dendrite-sample.yaml for available options with which to populate settings. Type: open submodule of (YAML 1.1 value) Default: { } Declared by: <nixpkgs/nixos/modules/services/matrix/dendrite.nix>

## services.dendrite.tlsCert

The path to the TLS certificate. nix-shell -p dendrite --command "generate-keys --tls-cert server.crt --tls-key server.key" Type: null or absolute path Default: null Example: "/var/lib/dendrite/server.cert" Declared by: <nixpkgs/nixos/modules/services/matrix/dendrite.nix>

## services.dendrite.tlsKey

The path to the TLS key. nix-shell -p dendrite --command "generate-keys --tls-cert server.crt --tls-key server.key" Type: null or absolute path Default: null Example: "/var/lib/dendrite/server.key" Declared by: <nixpkgs/nixos/modules/services/matrix/dendrite.nix>
