---
module: services.epgstation.settings
option_count: 7
source: options.html
---

# services.epgstation.settings

## services.epgstation.settings.clientSocketioPort

Socket.io port that the web client is going to connect to. This may be different from services.epgstation.settings.socketioPort if EPGStation is hidden behind a reverse proxy. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: config.services.epgstation.settings.socketioPort Declared by: <nixpkgs/nixos/modules/services/video/epgstation/default.nix>

## services.epgstation.settings.concurrentEncodeNum

The maximum number of encoding jobs that EPGStation would run at the same time. Type: positive integer, meaning >0 Default: 1 Declared by: <nixpkgs/nixos/modules/services/video/epgstation/default.nix>

## services.epgstation.settings.encode

Encoding presets for recorded videos. Type: list of (attribute set) Default: [ { name = "H.264"; cmd = "%NODE% config.services.epgstation.package/libexec/enc.js"; suffix = ".mp4"; } ] Declared by: <nixpkgs/nixos/modules/services/video/epgstation/default.nix>

## services.epgstation.settings.encodeProcessNum

The maximum number of processes that EPGStation would allow to run at the same time for encoding or streaming videos. Type: positive integer, meaning >0 Default: 4 Declared by: <nixpkgs/nixos/modules/services/video/epgstation/default.nix>

## services.epgstation.settings.mirakurunPath

URL to connect to Mirakurun. Type: string Default: "http+unix://${lib.replaceStrings ["/"] ["%2F"] config.services.mirakurun.unixSocket}" Example: "http://localhost:40772" Declared by: <nixpkgs/nixos/modules/services/video/epgstation/default.nix>

## services.epgstation.settings.port

HTTP port for EPGStation to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 20772 Declared by: <nixpkgs/nixos/modules/services/video/epgstation/default.nix>

## services.epgstation.settings.socketioPort

Socket.io port for EPGStation to listen on. It is valid to share ports with services.epgstation.settings.port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: config.services.epgstation.settings.port + 1 Declared by: <nixpkgs/nixos/modules/services/video/epgstation/default.nix>
