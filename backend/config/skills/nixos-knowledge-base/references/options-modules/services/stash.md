---
module: services.stash
option_count: 16
source: options.html
---

# services.stash

## services.stash.enable

Whether to enable stash. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.package

The stash package to use. Type: package Default: pkgs.stash Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.dataDir

The directory where Stash stores its files. Type: absolute path Default: "/var/lib/stash" Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.group

Group under which Stash runs. Type: string Default: "stash" Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.jwtSecretKeyFile

Path to file containing a secret used to sign JWT tokens. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.mutablePlugins

Whether to enable Whether plugins/themes can be installed, updated, uninstalled manually… Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.mutableScrapers

Whether to enable Whether scrapers can be installed, updated, uninstalled manually… Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.mutableSettings

Whether the Stash config.yml is writeable by Stash. If false, Any config changes done from within Stash UI will be temporary and reset to those defined in services.stash.settings upon Stash.service restart. If true, the services.stash.settings will only be used to initialize the Stash configuration if it does not exist, and are subsequently ignored. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.openFirewall

Open ports in the firewall for the Stash web interface. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.passwordFile

Path to file containing password for login. Warning This option takes precedence over services.stash.settings.password :: Type: null or absolute path Default: null Example: "/path/to/password/file" Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.plugins

The plugins Stash should be started with. Type: list of package Default: [ ] Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.scrapers

The scrapers Stash should be started with. Type: list of package Default: [ ] Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.sessionStoreKeyFile

Path to file containing a secret for session store. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.settings

Stash configuration Type: open submodule of (YAML 1.1 value) Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.user

User under which Stash runs. Type: string Default: "stash" Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>

## services.stash.username

Username for login. Warning This option takes precedence over services.stash.settings.username :: Type: null or non-empty string Default: null Example: "admin" Declared by: <nixpkgs/nixos/modules/services/web-apps/stash.nix>
