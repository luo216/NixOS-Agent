---
module: services.plausible.server
option_count: 5
source: options.html
---

# services.plausible.server

## services.plausible.server.baseUrl

Public URL where plausible is available. Note that /path components are currently ignored: https://github.com/plausible/analytics/issues/1182. Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/plausible.nix>

## services.plausible.server.disableRegistration

Whether to prohibit creating an account in plausible’s UI or allow on invite_only. Type: one of true, false, “invite_only” Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/plausible.nix>

## services.plausible.server.listenAddress

The IP address on which the server is listening. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/web-apps/plausible.nix>

## services.plausible.server.port

Port where the service should be available. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8000 Declared by: <nixpkgs/nixos/modules/services/web-apps/plausible.nix>

## services.plausible.server.secretKeybaseFile

Path to the secret used by the phoenix-framework. Instructions how to generate one are documented in the framework docs. Type: absolute path or string Declared by: <nixpkgs/nixos/modules/services/web-apps/plausible.nix>
