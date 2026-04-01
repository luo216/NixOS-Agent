---
module: services.lasuite-docs.collaborationServer.settings
option_count: 3
source: options.html
---

# services.lasuite-docs.collaborationServer.settings

## services.lasuite-docs.collaborationServer.settings.COLLABORATION_BACKEND_BASE_URL

URL to the backend server base Type: string Default: https://${cfg.domain} Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-docs.nix>

## services.lasuite-docs.collaborationServer.settings.COLLABORATION_SERVER_ORIGIN

Origins allowed to connect to the collaboration server Type: string Default: https://${cfg.domain} Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-docs.nix>

## services.lasuite-docs.collaborationServer.settings.PORT

Port used by collaboration server to listen to Type: string (read only) Default: "4444" Declared by: <nixpkgs/nixos/modules/services/web-apps/lasuite-docs.nix>
