---
module: services.cross-seed.settings
option_count: 5
source: options.html
---

# services.cross-seed.settings

## services.cross-seed.settings.dataDirs

Paths to be searched for matching data. If you use Injection, cross-seed will use the specified linkType to create a link to the original file in the linkDirs. If linkType is hardlink, these must be on the same volume as the data. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/torrent/cross-seed.nix>

## services.cross-seed.settings.linkDirs

List of directories where cross-seed will create links. If linkType is hardlink, these must be on the same volume as the data. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/torrent/cross-seed.nix>

## services.cross-seed.settings.outputDir

Directory where cross-seed will place torrent files it finds. Type: absolute path Default: "\${cfg.configDir}/output" Declared by: <nixpkgs/nixos/modules/services/torrent/cross-seed.nix>

## services.cross-seed.settings.port

Port the cross-seed daemon listens on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 2468 Example: 3000 Declared by: <nixpkgs/nixos/modules/services/torrent/cross-seed.nix>

## services.cross-seed.settings.torrentDir

Directory containing torrent files, or if you’re using a torrent client integration and injection - your torrent client’s .torrent file store/cache. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/torrent/cross-seed.nix>
