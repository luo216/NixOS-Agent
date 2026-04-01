---
module: services.opensnitch.settings.Server
option_count: 2
source: options.html
---

# services.opensnitch.settings.Server

## services.opensnitch.settings.Server.Address

Unix socket path (unix:///tmp/osui.sock, the “unix:///” part is mandatory) or TCP socket (192.168.1.100:50051). Type: string Declared by: <nixpkgs/nixos/modules/services/security/opensnitch.nix>

## services.opensnitch.settings.Server.LogFile

File to write logs to (use /dev/stdout to write logs to standard output). Type: absolute path Declared by: <nixpkgs/nixos/modules/services/security/opensnitch.nix>
