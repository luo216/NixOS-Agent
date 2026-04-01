---
module: services.lasuite-docs.collaborationServer
option_count: 3
source: options.html
---

# services.lasuite-docs.collaborationServer

## services.lasuite-docs.collaborationServer.package

The lasuite-docs-collaboration-server package to use. Type: package Default: pkgs.lasuite-docs-collaboration-server Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-docs.nix>

## services.lasuite-docs.collaborationServer.port

Port used by the collaboration server to listen. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 4444 Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-docs.nix>

## services.lasuite-docs.collaborationServer.settings

Configuration options of collaboration server. See https://github.com/suitenumerique/docs/blob/v4.4.0/docs/env.md Type: open submodule of attribute set of (string or boolean) Default: { } Example: '' { COLLABORATION_LOGGING = true; } '' Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-docs.nix>
