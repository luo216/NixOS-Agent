---
module: services.authelia.instances.<name>
option_count: 9
source: options.html
---

# services.authelia.instances.<name>

## services.authelia.instances.<name>.enable

Whether to enable Authelia instance. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/authelia.nix>

## services.authelia.instances.<name>.package

The authelia package to use. Type: package Default: pkgs.authelia Declared by: <nixpkgs/nixos/modules/services/security/authelia.nix>

## services.authelia.instances.<name>.environmentVariables

Additional environment variables to provide to authelia. If you are providing secrets please consider the options under services.authelia.<instance>.secrets or make sure you use the _FILE suffix. If you provide the raw secret rather than the location of a secret file that secret will be preserved in the nix store. For more details: https://www.authelia.com/configuration/methods/secrets/ Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/services/security/authelia.nix>

## services.authelia.instances.<name>.group

The name of the group for this authelia instance. Type: string Default: "authelia-‹name›" Declared by: <nixpkgs/nixos/modules/services/security/authelia.nix>

## services.authelia.instances.<name>.name

Name is used as a suffix for the service name, user, and group. By default it takes the value you use for <instance> in: services.authelia.<instance> Type: string Default: "‹name›" Declared by: <nixpkgs/nixos/modules/services/security/authelia.nix>

## services.authelia.instances.<name>.secrets

It is recommended you keep your secrets separate from the configuration. It’s especially important to keep the raw secrets out of your nix configuration, as the values will be preserved in your nix store. This attribute allows you to configure the location of secret files to be loaded at runtime. https://www.authelia.com/configuration/methods/secrets/ Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/security/authelia.nix>

## services.authelia.instances.<name>.settings

Your Authelia config.yml as a Nix attribute set. There are several values that are defined and documented in nix such as default_2fa_method, but additional items can also be included. https://github.com/authelia/authelia/blob/master/config.template.yml Type: open submodule of (YAML 1.1 value) Default: { } Example: '' { theme = "light"; default_2fa_method = "totp"; log.level = "debug"; server.disable_healthcheck = true; } '' Declared by: <nixpkgs/nixos/modules/services/security/authelia.nix>

## services.authelia.instances.<name>.settingsFiles

Here you can provide authelia with configuration files or directories. It is possible to give authelia multiple files and use the nix generated configuration file set via services.authelia.<instance>.settings. Type: list of absolute path Default: [ ] Example: [ "/etc/authelia/config.yml" "/etc/authelia/access-control.yml" "/etc/authelia/config/" ] Declared by: <nixpkgs/nixos/modules/services/security/authelia.nix>

## services.authelia.instances.<name>.user

The name of the user for this authelia instance. Type: string Default: "authelia-‹name›" Declared by: <nixpkgs/nixos/modules/services/security/authelia.nix>
