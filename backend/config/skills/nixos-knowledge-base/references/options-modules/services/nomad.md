---
module: services.nomad
option_count: 9
source: options.html
---

# services.nomad

## services.nomad.enable

Whether to enable Nomad, a distributed, highly available, datacenter-aware scheduler. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/nomad.nix>

## services.nomad.enableDocker

Enable Docker support. Needed for Nomad’s docker driver. Note that the docker group membership is effectively equivalent to being root, see https://github.com/moby/moby/issues/9976. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/nomad.nix>

## services.nomad.package

The nomad package to use. Type: package Default: pkgs.nomad Declared by: <nixpkgs/nixos/modules/services/networking/nomad.nix>

## services.nomad.credentials

Credentials envs used to configure nomad secrets. Type: attribute set of string Default: { } Example: { logs_remote_write_password = "/run/keys/nomad_write_password"; } Declared by: <nixpkgs/nixos/modules/services/networking/nomad.nix>

## services.nomad.dropPrivileges

Whether the nomad agent should be run as a non-root nomad user. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/nomad.nix>

## services.nomad.extraPackages

Extra packages to add to PATH for the Nomad agent process. Type: list of package Default: [ ] Example: with pkgs; [ cni-plugins ] Declared by: <nixpkgs/nixos/modules/services/networking/nomad.nix>

## services.nomad.extraSettingsPaths

Additional settings paths used to configure nomad. These can be files or directories. Type: list of absolute path Default: [ ] Example: [ "/etc/nomad-mutable.json" "/run/keys/nomad-with-secrets.json" "/etc/nomad/config.d" ] Declared by: <nixpkgs/nixos/modules/services/networking/nomad.nix>

## services.nomad.extraSettingsPlugins

Additional plugins dir used to configure nomad. Type: list of (package or absolute path) Default: [ ] Example: [ "<pluginDir>" pkgs.nomad-driver-nix pkgs.nomad-driver-podman ] Declared by: <nixpkgs/nixos/modules/services/networking/nomad.nix>

## services.nomad.settings

Configuration for Nomad. See the documentation for supported values. Notes about data_dir: If data_dir is set to a value other than the default value of "/var/lib/nomad" it is the Nomad cluster manager’s responsibility to make sure that this directory exists and has the appropriate permissions. Additionally, if dropPrivileges is true then data_dir cannot be customized. Setting dropPrivileges to true enables the DynamicUser feature of systemd which directly manages and operates on StateDirectory. Type: JSON value Default: { } Example: { # A minimal config example: server = { enabled = true; bootstrap_expect = 1; # for demo; no fault tolerance }; client = { enabled = true; }; } Declared by: <nixpkgs/nixos/modules/services/networking/nomad.nix>
