---
module: services.code-server
option_count: 22
source: options.html
---

# services.code-server

## services.code-server.enable

Whether to enable code-server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/code-server.nix>

## services.code-server.package

The code-server package to use. Type: package Default: pkgs.code-server Example: pkgs.vscode-with-extensions.override { vscode = pkgs.code-server; vscodeExtensions = with pkgs.vscode-extensions; [ bbenoist.nix dracula-theme.theme-dracula ]; } Declared by: <nixpkgs/nixos/modules/services/web-apps/code-server.nix>

## services.code-server.auth

The type of authentication to use. Type: one of “none”, “password” Default: "password" Declared by: <nixpkgs/nixos/modules/services/web-apps/code-server.nix>

## services.code-server.disableFileDownloads

Disable file downloads from Code. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/code-server.nix>

## services.code-server.disableGettingStartedOverride

Disable the coder/coder override in the Help: Getting Started page. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/code-server.nix>

## services.code-server.disableTelemetry

Disable telemetry. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/code-server.nix>

## services.code-server.disableUpdateCheck

Disable update check. Without this flag, code-server checks every 6 hours against the latest github release and then notifies you once every week that a new release is available. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/code-server.nix>

## services.code-server.disableWorkspaceTrust

Disable Workspace Trust feature. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/code-server.nix>

## services.code-server.extensionsDir

Path to the extensions directory. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/code-server.nix>

## services.code-server.extraArguments

Additional arguments to pass to code-server. Type: list of string Default: [ ] Example: [ "--log=info" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/code-server.nix>

## services.code-server.extraEnvironment

Additional environment variables to pass to code-server. Type: attribute set of string Default: { } Example: { PKG_CONFIG_PATH = "/run/current-system/sw/lib/pkgconfig"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/code-server.nix>

## services.code-server.extraGroups

An array of additional groups for the code-server user. Type: list of string Default: [ ] Example: [ "docker" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/code-server.nix>

## services.code-server.extraPackages

Additional packages to add to the code-server PATH. Type: list of package Default: [ ] Example: [ pkgs.go ] Declared by: <nixpkgs/nixos/modules/services/web-apps/code-server.nix>

## services.code-server.group

The group to run code-server under. By default, a group named code-server will be created. Type: string Default: "code-server" Example: "yourGroup" Declared by: <nixpkgs/nixos/modules/services/web-apps/code-server.nix>

## services.code-server.hashedPassword

Create the password with: echo -n 'thisismypassword' | nix run nixpkgs#libargon2 -- "$(head -c 20 /dev/random | base64)" -e Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/web-apps/code-server.nix>

## services.code-server.host

The host name or IP address the server should listen to. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/code-server.nix>

## services.code-server.port

The port the server should listen to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 4444 Declared by: <nixpkgs/nixos/modules/services/web-apps/code-server.nix>

## services.code-server.proxyDomain

Domain used for proxying ports. Type: null or string Default: null Example: "code-server.lan" Declared by: <nixpkgs/nixos/modules/services/web-apps/code-server.nix>

## services.code-server.socket

Path to a socket (bind-addr will be ignored). Type: null or string Default: null Example: "/run/code-server/socket" Declared by: <nixpkgs/nixos/modules/services/web-apps/code-server.nix>

## services.code-server.socketMode

File mode of the socket. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/code-server.nix>

## services.code-server.user

The user to run code-server as. By default, a user named code-server will be created. Type: string Default: "code-server" Example: "yourUser" Declared by: <nixpkgs/nixos/modules/services/web-apps/code-server.nix>

## services.code-server.userDataDir

Path to the user data directory. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/code-server.nix>
