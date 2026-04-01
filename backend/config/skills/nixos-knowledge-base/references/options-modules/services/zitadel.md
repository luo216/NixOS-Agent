---
module: services.zitadel
option_count: 11
source: options.html
---

# services.zitadel

## services.zitadel.enable

Whether to enable ZITADEL, a user and identity access management platform. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/zitadel.nix>

## services.zitadel.package

The ZITADEL package to use. Type: package Default: pkgs.zitadel Declared by: <nixpkgs/nixos/modules/services/web-apps/zitadel.nix>

## services.zitadel.extraSettingsPaths

A list of paths to extra settings files. These will override the values set in settings. Useful if you want to keep sensitive secrets out of the Nix store. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/web-apps/zitadel.nix>

## services.zitadel.extraStepsPaths

A list of paths to extra steps files. These will override the values set in steps. Useful if you want to keep sensitive secrets out of the Nix store. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/web-apps/zitadel.nix>

## services.zitadel.group

The group to run ZITADEL under. Type: string Default: "zitadel" Declared by: <nixpkgs/nixos/modules/services/web-apps/zitadel.nix>

## services.zitadel.masterKeyFile

Path to a file containing a master encryption key for ZITADEL. The key must be 32 bytes. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/web-apps/zitadel.nix>

## services.zitadel.openFirewall

Whether to open the port specified in listenPort in the firewall. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/zitadel.nix>

## services.zitadel.settings

Contents of the runtime configuration file. See https://zitadel.com/docs/self-hosting/manage/configure for more details. Type: open submodule of (YAML 1.1 value) Default: { } Example: { Port = 8123; ExternalDomain = "example.com"; TLS = { CertPath = "/path/to/cert.pem"; KeyPath = "/path/to/cert.key"; }; Database.cockroach.Host = "db.example.com"; }; Declared by: <nixpkgs/nixos/modules/services/web-apps/zitadel.nix>

## services.zitadel.steps

Contents of the database initialization config file. See https://zitadel.com/docs/self-hosting/manage/configure for more details. Type: YAML 1.1 value Default: { } Example: { FirstInstance = { InstanceName = "Example"; Org.Human = { UserName = "foobar"; FirstName = "Foo"; LastName = "Bar"; }; }; } Declared by: <nixpkgs/nixos/modules/services/web-apps/zitadel.nix>

## services.zitadel.tlsMode

The TLS mode to use. Options are: enabled: ZITADEL accepts HTTPS connections directly. You must configure TLS if this option is selected. external: ZITADEL forces HTTPS connections, with TLS terminated at a reverse proxy. disabled: ZITADEL accepts HTTP connections only. Should only be used for testing. Type: one of “external”, “enabled”, “disabled” Default: "external" Example: "enabled" Declared by: <nixpkgs/nixos/modules/services/web-apps/zitadel.nix>

## services.zitadel.user

The user to run ZITADEL under. Type: string Default: "zitadel" Declared by: <nixpkgs/nixos/modules/services/web-apps/zitadel.nix>
