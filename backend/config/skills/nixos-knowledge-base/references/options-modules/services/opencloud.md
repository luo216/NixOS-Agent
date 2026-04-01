---
module: services.opencloud
option_count: 13
source: options.html
---

# services.opencloud

## services.opencloud.enable

Whether to enable OpenCloud. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/opencloud.nix>

## services.opencloud.package

The opencloud package to use. Type: package Default: pkgs.opencloud Declared by: <nixpkgs/nixos/modules/services/web-apps/opencloud.nix>

## services.opencloud.address

Web server bind address. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/web-apps/opencloud.nix>

## services.opencloud.environment

Extra environment variables to set for the service. Use this to set configuration that may affect multiple microservices. Set OC_INSECURE = "false" if you want OpenCloud to terminate TLS. Configuration provided here will override settings. Type: attribute set of string Default: { OC_INSECURE = "true"; } Example: { OC_INSECURE = "false"; OC_LOG_LEVEL = "error"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/opencloud.nix>

## services.opencloud.environmentFile

An environment file as defined in systemd.exec(5). Use this to inject secrets, e.g. database or auth credentials out of band. Configuration provided here will override settings and environment. Type: null or absolute path Default: null Example: "/run/keys/opencloud.env" Declared by: <nixpkgs/nixos/modules/services/web-apps/opencloud.nix>

## services.opencloud.group

The group to run OpenCloud under. By default, a group named opencloud will be created. Type: string Default: "opencloud" Example: "mycloud" Declared by: <nixpkgs/nixos/modules/services/web-apps/opencloud.nix>

## services.opencloud.idpWebPackage

The idp-web package to use. Type: package Default: pkgs.opencloud.idp-web Declared by: <nixpkgs/nixos/modules/services/web-apps/opencloud.nix>

## services.opencloud.port

Web server port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9200 Declared by: <nixpkgs/nixos/modules/services/web-apps/opencloud.nix>

## services.opencloud.settings

Additional YAML configuration for OpenCloud services. Every item in this attrset will be mapped to a .yaml file in /etc/opencloud. The possible config options are currently not well documented, see source code: https://github.com/opencloud-eu/opencloud/blob/main/pkg/config/config.go Type: attribute set of (YAML 1.1 value) Default: { } Example: { proxy = { auto_provision_accounts = true; oidc = { rewrite_well_known = true; }; role_assignment = { driver = "oidc"; oidc_role_mapper = { role_claim = "opencloud_roles"; }; }; }; web = { web = { config = { oidc = { scope = "openid profile email opencloud_roles"; }; }; }; }; } Declared by: <nixpkgs/nixos/modules/services/web-apps/opencloud.nix>

## services.opencloud.stateDir

OpenCloud data directory. Type: string Default: "/var/lib/opencloud" Declared by: <nixpkgs/nixos/modules/services/web-apps/opencloud.nix>

## services.opencloud.url

Web interface root public URL, including scheme and port (if non-default). Type: string Default: "https://localhost:9200" Example: "https://cloud.example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/opencloud.nix>

## services.opencloud.user

The user to run OpenCloud as. By default, a user named opencloud will be created whose home directory is services.opencloud.stateDir. Type: string Default: "opencloud" Example: "mycloud" Declared by: <nixpkgs/nixos/modules/services/web-apps/opencloud.nix>

## services.opencloud.webPackage

The web package to use. Type: package Default: pkgs.opencloud.web Declared by: <nixpkgs/nixos/modules/services/web-apps/opencloud.nix>
