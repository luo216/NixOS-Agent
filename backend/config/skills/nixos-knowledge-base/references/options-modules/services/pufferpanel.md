---
module: services.pufferpanel
option_count: 6
source: options.html
---

# services.pufferpanel

## services.pufferpanel.enable

Whether to enable PufferPanel game management server. Note that PufferPanel templates and binaries downloaded by PufferPanel expect FHS environment. It is possible to set package option to use PufferPanel wrapper with FHS environment. For example, to use Download Game from Steam and Download Java template operations: { lib, pkgs, ... }: { services.pufferpanel = { enable = true; extraPackages = with pkgs; [ bash curl gawk gnutar gzip ]; package = pkgs.buildFHSEnv { name = "pufferpanel-fhs"; runScript = lib.getExe pkgs.pufferpanel; targetPkgs = pkgs': with pkgs'; [ icu openssl zlib ]; }; }; } Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/pufferpanel.nix>

## services.pufferpanel.package

The pufferpanel package to use. Type: package Default: pkgs.pufferpanel Declared by: <nixpkgs/nixos/modules/services/misc/pufferpanel.nix>

## services.pufferpanel.environment

Environment variables to set for the service. Secrets should be specified using environmentFile. Refer to the PufferPanel source code for the list of available configuration options. Variable name is an upper-cased configuration entry name with underscores instead of dots, prefixed with PUFFER_. For example, panel.settings.companyName entry can be set using PUFFER_PANEL_SETTINGS_COMPANYNAME. When running with panel enabled (configured with PUFFER_PANEL_ENABLE environment variable), it is recommended disable registration using PUFFER_PANEL_REGISTRATIONENABLED environment variable (registration is enabled by default). To create the initial administrator user, run pufferpanel --workDir /var/lib/pufferpanel user add --admin. Some options override corresponding settings set via web interface (e.g. PUFFER_PANEL_REGISTRATIONENABLED). Those options can be temporarily toggled or set in settings but do not persist between restarts. Type: attribute set of string Default: { } Example: { PUFFER_WEB_HOST = ":8080"; PUFFER_DAEMON_SFTP_HOST = ":5657"; PUFFER_DAEMON_CONSOLE_BUFFER = "1000"; PUFFER_DAEMON_CONSOLE_FORWARD = "true"; PUFFER_PANEL_REGISTRATIONENABLED = "false"; } Declared by: <nixpkgs/nixos/modules/services/misc/pufferpanel.nix>

## services.pufferpanel.environmentFile

File to load environment variables from. Loaded variables override values set in environment. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/misc/pufferpanel.nix>

## services.pufferpanel.extraGroups

Additional groups for the systemd service. Type: list of string Default: [ ] Example: [ "podman" ] Declared by: <nixpkgs/nixos/modules/services/misc/pufferpanel.nix>

## services.pufferpanel.extraPackages

Packages to add to the PATH environment variable. Both the bin and sbin subdirectories of each package are added. Type: list of package Default: [ ] Example: [ pkgs.jre ] Declared by: <nixpkgs/nixos/modules/services/misc/pufferpanel.nix>
