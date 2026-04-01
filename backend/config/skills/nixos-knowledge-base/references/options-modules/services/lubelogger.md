---
module: services.lubelogger
option_count: 9
source: options.html
---

# services.lubelogger

## services.lubelogger.enable

Whether to enable LubeLogger, a self-hosted, open-source, web-based vehicle maintenance and fuel milage tracker. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/lubelogger.nix>

## services.lubelogger.package

The lubelogger package to use. Type: package Default: pkgs.lubelogger Declared by: <nixpkgs/nixos/modules/services/web-apps/lubelogger.nix>

## services.lubelogger.dataDir

Path to LubeLogger config and metadata inside of /var/lib/. Type: string Default: "lubelogger" Declared by: <nixpkgs/nixos/modules/services/web-apps/lubelogger.nix>

## services.lubelogger.environmentFile

Path to a file containing extra LubeLogger config options in the systemd EnvironmentFile format. Refer to the documentation for supported options. This can be used to pass secrets to LubeLogger without putting them in the Nix store. For example, to set an SMTP password, point environmentFile at a file containing: MailConfig__Password=<pass> Type: null or absolute path Default: null Example: "/run/secrets/lubelogger" Declared by: <nixpkgs/nixos/modules/services/web-apps/lubelogger.nix>

## services.lubelogger.group

Group under which LubeLogger runs. Type: string Default: "lubelogger" Declared by: <nixpkgs/nixos/modules/services/web-apps/lubelogger.nix>

## services.lubelogger.openFirewall

Open ports in the firewall for the LubeLogger web interface. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/lubelogger.nix>

## services.lubelogger.port

The TCP port LubeLogger will listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5000 Declared by: <nixpkgs/nixos/modules/services/web-apps/lubelogger.nix>

## services.lubelogger.settings

Additional configuration for LubeLogger, see https://docs.lubelogger.com/Environment Variables for supported values. Type: attribute set of string Default: { } Example: { LUBELOGGER_ALLOWED_FILE_EXTENSIONS = ""; LUBELOGGER_LOGO_URL = ""; } Declared by: <nixpkgs/nixos/modules/services/web-apps/lubelogger.nix>

## services.lubelogger.user

User account under which LubeLogger runs. Type: string Default: "lubelogger" Declared by: <nixpkgs/nixos/modules/services/web-apps/lubelogger.nix>
