---
module: services.easytier.instances.<name>
option_count: 7
source: options.html
---

# services.easytier.instances.<name>

## services.easytier.instances.<name>.enable

Enable the instance. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/easytier.nix>

## services.easytier.instances.<name>.configFile

Path to easytier config file. Setting this option will override settings and extraSettings of this instance. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/easytier.nix>

## services.easytier.instances.<name>.configServer

Configure the instance from config server. When this option set, any other settings for configuring the instance manually except hostname will be ignored. Valid formats are: full uri for custom server: udp://example.com:22020/<token> username only for official server: <token> Type: null or string Default: null Example: "udp://example.com:22020/myusername" Declared by: <nixpkgs/nixos/modules/services/networking/easytier.nix>

## services.easytier.instances.<name>.environmentFiles

Environment files for this instance. All command-line args have corresponding environment variables. Type: list of absolute path Default: [ ] Example: [ /path/to/.env /path/to/.env.secret ] Declared by: <nixpkgs/nixos/modules/services/networking/easytier.nix>

## services.easytier.instances.<name>.extraArgs

Extra args append to the easytier command-line. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/easytier.nix>

## services.easytier.instances.<name>.extraSettings

Extra settings to add to easytier-‹name›.toml. Type: TOML value Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/easytier.nix>

## services.easytier.instances.<name>.settings

Settings to generate easytier-‹name›.toml Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/easytier.nix>
