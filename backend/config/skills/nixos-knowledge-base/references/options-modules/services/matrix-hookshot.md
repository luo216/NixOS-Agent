---
module: services.matrix-hookshot
option_count: 5
source: options.html
---

# services.matrix-hookshot

## services.matrix-hookshot.enable

Whether to enable matrix-hookshot, a bridge between Matrix and project management services. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/matrix/hookshot.nix>

## services.matrix-hookshot.package

The matrix-hookshot package to use. Type: package Default: pkgs.matrix-hookshot Declared by: <nixpkgs/nixos/modules/services/matrix/hookshot.nix>

## services.matrix-hookshot.registrationFile

Appservice registration file. As it contains secret tokens, you may not want to add this to the publicly readable Nix store. Type: absolute path Example: pkgs.writeText "matrix-hookshot-registration" \'\' id: matrix-hookshot as_token: aaaaaaaaaa hs_token: aaaaaaaaaa namespaces: rooms: [] users: - regex: "@_webhooks_.*:foobar" exclusive: true sender_localpart: hookshot url: "http://localhost:9993" rate_limited: false \'\' Declared by: <nixpkgs/nixos/modules/services/matrix/hookshot.nix>

## services.matrix-hookshot.serviceDependencies

List of Systemd services to require and wait for when starting the application service, such as the Matrix homeserver if it’s running on the same host. Type: list of string Default: lib.optional config.services.matrix-synapse.enable config.services.matrix-synapse.serviceUnit Declared by: <nixpkgs/nixos/modules/services/matrix/hookshot.nix>

## services.matrix-hookshot.settings

config.yml configuration as a Nix attribute set. For details please see the documentation. Type: open submodule of (YAML 1.1 value) Default: { } Example: { bridge = { bindAddress = "127.0.0.1"; domain = "example.com"; mediaUrl = "https://example.com"; port = 9993; url = "http://localhost:8008"; }; listeners = [ { bindAddress = "0.0.0.0"; port = 9000; resources = [ "webhooks" ]; } { bindAddress = "localhost"; port = 9001; resources = [ "metrics" "provisioning" ]; } ]; } Declared by: <nixpkgs/nixos/modules/services/matrix/hookshot.nix>
