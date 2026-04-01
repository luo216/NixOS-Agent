---
module: services.gitlab-runner
option_count: 8
source: options.html
---

# services.gitlab-runner

## services.gitlab-runner.enable

Whether to enable Gitlab Runner. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitlab-runner.nix>

## services.gitlab-runner.package

The gitlab-runner package to use. Type: package Default: pkgs.gitlab-runner Example: gitlab-runner_1_11 Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitlab-runner.nix>

## services.gitlab-runner.configFile

Configuration file for gitlab-runner. configFile takes precedence over services. checkInterval and concurrent will be ignored too. This option is deprecated, please use services instead. You can use registrationConfigFile and registrationFlags for settings not covered by this module. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitlab-runner.nix>

## services.gitlab-runner.extraPackages

Extra packages to add to PATH for the gitlab-runner process. These packages won’t be added to the system, use environment.systemPackages for that. Type: list of package Default: [ ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitlab-runner.nix>

## services.gitlab-runner.gracefulTermination

Finish all remaining jobs before stopping. If not set gitlab-runner will stop immediately without waiting for jobs to finish, which will lead to failed builds. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitlab-runner.nix>

## services.gitlab-runner.gracefulTimeout

Time to wait until a graceful shutdown is turned into a forceful one. Type: string Default: "infinity" Example: "5min 20s" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitlab-runner.nix>

## services.gitlab-runner.services

GitLab Runner services. Type: attribute set of (submodule) Default: { } Example: { # runner for building in docker via host's nix-daemon # nix store will be readable in runner, might be insecure nix = { # File should contain at least these two variables: # - `CI_SERVER_URL` # - `REGISTRATION_TOKEN` # # NOTE: Support for runner registration tokens will be removed in GitLab 18.0. # Please migrate to runner authentication tokens soon. For reference, the example # runners below this one are configured with authentication tokens instead. registrationConfigFile = "/run/secrets/gitlab-runner-registration"; dockerImage = "alpine"; dockerVolumes = [ "/nix/store:/nix/store:ro" "/nix/var/nix/db:/nix/var/nix/db:ro" "/nix/var/nix/daemon-socket:/nix/var/nix/daemon-socket:ro" ]; dockerDisableCache = true; preBuildScript = pkgs.writeScript "setup-container" '' mkdir -p -m 0755 /nix/var/log/nix/drvs mkdir -p -m 0755 /nix/var/nix/gcroots mkdir -p -m 0755 /nix/var/nix/profiles mkdir -p -m 0755 /nix/var/nix/temproots mkdir -p -m 0755 /nix/var/nix/userpool mkdir -p -m 1777 /nix/var/nix/gcroots/per-user mkdir -p -m 1777 /nix/var/nix/profiles/per-user mkdir -p -m 0755 /nix/var/nix/profiles/per-user/root mkdir -p -m 0700 "$HOME/.nix-defexpr" . ${pkgs.nix}/etc/profile.d/nix.sh ${pkgs.nix}/bin/nix-env -i ${concatStringsSep " " (with pkgs; [ nix cacert git openssh ])} ${pkgs.nix}/bin/nix-channel --add https://channels.nixos.org/nixpkgs-unstable ${pkgs.nix}/bin/nix-channel --update nixpkgs ''; environmentVariables = { ENV = "/etc/profile"; USER = "root"; NIX_REMOTE = "daemon"; PATH = "/nix/var/nix/profiles/default/bin:/nix/var/nix/profiles/default/sbin:/bin:/sbin:/usr/bin:/usr/sbin"; NIX_SSL_CERT_FILE = "/nix/var/nix/profiles/default/etc/ssl/certs/ca-bundle.crt"; }; tagList = [ "nix" ]; }; # runner for building docker images docker-images = { # File should contain at least these two variables: # `CI_SERVER_URL` # `CI_SERVER_TOKEN` authenticationTokenConfigFile = "/run/secrets/gitlab-runner-docker-images-token-env"; dockerImage = "docker:stable"; dockerVolumes = [ "/var/run/docker.sock:/var/run/docker.sock" ]; tagList = [ "docker-images" ]; }; # runner for executing stuff on host system (very insecure!) # make sure to add required packages (including git!) # to `environment.systemPackages` shell = { # File should contain at least these two variables: # `CI_SERVER_URL` # `CI_SERVER_TOKEN` authenticationTokenConfigFile = "/run/secrets/gitlab-runner-shell-token-env"; executor = "shell"; tagList = [ "shell" ]; }; # runner for everything else default = { # File should contain at least these two variables: # `CI_SERVER_URL` # `CI_SERVER_TOKEN` authenticationTokenConfigFile = "/run/secrets/gitlab-runner-default-token-env"; dockerImage = "debian:stable"; }; } Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitlab-runner.nix>

## services.gitlab-runner.settings

Global gitlab-runner configuration. See https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-global-section for supported values. Type: open submodule of (JSON value) Default: { } Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitlab-runner.nix>
