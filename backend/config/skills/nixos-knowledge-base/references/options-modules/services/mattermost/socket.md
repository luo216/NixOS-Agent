---
module: services.mattermost.socket
option_count: 3
source: options.html
---

# services.mattermost.socket

## services.mattermost.socket.enable

Whether to enable Mattermost control socket. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/mattermost.nix>

## services.mattermost.socket.export

Whether to enable Export socket control to system environment variables. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/mattermost.nix>

## services.mattermost.socket.path

Default location for the Mattermost control socket used by mmctl. Type: absolute path Default: "\${config.mattermost.dataDir}/mattermost.sock" Declared by: <nixpkgs/nixos/modules/services/web-apps/mattermost.nix>
