---
module: services.reposilite
option_count: 12
source: options.html
---

# services.reposilite

## services.reposilite.enable

Whether to enable Reposilite. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/reposilite.nix>

## services.reposilite.package

The reposilite package to use. Type: package Default: pkgs.reposilite Declared by: <nixpkgs/nixos/modules/services/web-apps/reposilite.nix>

## services.reposilite.database

Database options. Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/reposilite.nix>

## services.reposilite.extraArgs

Extra arguments/parameters passed to the Reposilite. Can be used for first token generation. Type: list of string Default: [ ] Example: [ "--token" "name:tempsecrettoken" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/reposilite.nix>

## services.reposilite.group

The group to run Reposilite under. Type: string Default: "reposilite" Declared by: <nixpkgs/nixos/modules/services/web-apps/reposilite.nix>

## services.reposilite.keyPasswordFile

Path the the file containing the password used to unlock the Java KeyStore file specified in services.reposilite.settings.keyPath. This file must be readable my services.reposilite.user. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/reposilite.nix>

## services.reposilite.openFirewall

Whether to open the firewall ports for Reposilite. If SSL is enabled, its port will be opened too. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/reposilite.nix>

## services.reposilite.plugins

List of plugins to add to Reposilite. Type: list of package Default: [ ] Example: "with reposilitePlugins; [ checksum groovy ]" Declared by: <nixpkgs/nixos/modules/services/web-apps/reposilite.nix>

## services.reposilite.settings

Configuration written to the reposilite.cdn file Type: open submodule of (CDN value) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/reposilite.nix>

## services.reposilite.useACMEHost

Host of an existing Let’s Encrypt certificate to use for SSL. Make sure that the certificate directory is readable by the reposilite user or group, for example via security.acme.certs.<cert>.group. Note that this option does not create any certificates, nor it does add subdomains to existing ones – you will need to create them manually using security.acme.certs Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/reposilite.nix>

## services.reposilite.user

The user to run Reposilite under. Type: string Default: "reposilite" Declared by: <nixpkgs/nixos/modules/services/web-apps/reposilite.nix>

## services.reposilite.workingDirectory

Working directory for Reposilite. Type: absolute path Default: "/var/lib/reposilite" Declared by: <nixpkgs/nixos/modules/services/web-apps/reposilite.nix>
