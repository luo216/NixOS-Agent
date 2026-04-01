---
module: services.jmusicbot
option_count: 3
source: options.html
---

# services.jmusicbot

## services.jmusicbot.enable

Whether to enable jmusicbot, a Discord music bot that’s easy to set up and run yourself. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/audio/jmusicbot.nix>

## services.jmusicbot.package

The jmusicbot package to use. Type: package Default: pkgs.jmusicbot Declared by: <nixpkgs/nixos/modules/services/audio/jmusicbot.nix>

## services.jmusicbot.stateDir

The directory where config.txt and serversettings.json is saved. If left as the default value this directory will automatically be created before JMusicBot starts, otherwise the sysadmin is responsible for ensuring the directory exists with appropriate ownership and permissions. Untouched by the value of this option config.txt needs to be placed manually into this directory. Type: absolute path Default: "/var/lib/jmusicbot/" Declared by: <nixpkgs/nixos/modules/services/audio/jmusicbot.nix>
