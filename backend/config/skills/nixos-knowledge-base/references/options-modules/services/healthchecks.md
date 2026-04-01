---
module: services.healthchecks
option_count: 9
source: options.html
---

# services.healthchecks

## services.healthchecks.enable

Enable healthchecks. It is expected to be run behind a HTTP reverse proxy. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/healthchecks.nix>

## services.healthchecks.package

The healthchecks package to use. Type: package Default: pkgs.healthchecks Declared by: <nixpkgs/nixos/modules/services/web-apps/healthchecks.nix>

## services.healthchecks.dataDir

The directory used to store all data for healthchecks. Note If left as the default value this directory will automatically be created before the healthchecks server starts, otherwise you are responsible for ensuring the directory exists with appropriate ownership and permissions. Type: string Default: "/var/lib/healthchecks" Declared by: <nixpkgs/nixos/modules/services/web-apps/healthchecks.nix>

## services.healthchecks.group

Group account under which healthchecks runs. Note If left as the default value this group will automatically be created on system activation, otherwise you are responsible for ensuring the group exists before the healthchecks service starts. Type: string Default: "healthchecks" Declared by: <nixpkgs/nixos/modules/services/web-apps/healthchecks.nix>

## services.healthchecks.listenAddress

Address the server will listen on. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/healthchecks.nix>

## services.healthchecks.port

Port the server will listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8000 Declared by: <nixpkgs/nixos/modules/services/web-apps/healthchecks.nix>

## services.healthchecks.settings

Environment variables which are read by healthchecks (local)_settings.py. Settings which are explicitly covered in options below, are type-checked and/or transformed before added to the environment, everything else is passed as a string. See https://healthchecks.io/docs/self_hosted_configuration/ for a full documentation of settings. We add additional variables to this list inside the packages local_settings.py. STATIC_ROOT to set a state directory for dynamically generated static files. SECRET_KEY_FILE to read SECRET_KEY from a file at runtime and keep it out of /nix/store. _FILE variants for several values that hold sensitive information in Healthchecks configuration so that they also can be read from a file and kept out of /nix/store. To see which values have support for a _FILE variant, run: nix-instantiate --eval --expr '(import <nixpkgs> {}).healthchecks.secrets' or nix eval 'nixpkgs#healthchecks.secrets' if the flake support has been enabled. If the same variable is set in both settings and settingsFile the value from settingsFile has priority. Type: open submodule of attribute set of string Declared by: <nixpkgs/nixos/modules/services/web-apps/healthchecks.nix>

## services.healthchecks.settingsFile

Environment variables which are read by healthchecks (local)_settings.py. Settings which are explicitly covered in options below, are type-checked and/or transformed before added to the environment, everything else is passed as a string. See https://healthchecks.io/docs/self_hosted_configuration/ for a full documentation of settings. We add additional variables to this list inside the packages local_settings.py. STATIC_ROOT to set a state directory for dynamically generated static files. SECRET_KEY_FILE to read SECRET_KEY from a file at runtime and keep it out of /nix/store. _FILE variants for several values that hold sensitive information in Healthchecks configuration so that they also can be read from a file and kept out of /nix/store. To see which values have support for a _FILE variant, run: nix-instantiate --eval --expr '(import <nixpkgs> {}).healthchecks.secrets' or nix eval 'nixpkgs#healthchecks.secrets' if the flake support has been enabled. If the same variable is set in both settings and settingsFile the value from settingsFile has priority. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/healthchecks.nix>

## services.healthchecks.user

User account under which healthchecks runs. Note If left as the default value this user will automatically be created on system activation, otherwise you are responsible for ensuring the user exists before the healthchecks service starts. Type: string Default: "healthchecks" Declared by: <nixpkgs/nixos/modules/services/web-apps/healthchecks.nix>
