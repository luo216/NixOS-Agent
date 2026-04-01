---
module: services.gitea-actions-runner.instances.<name>
option_count: 8
source: options.html
---

# services.gitea-actions-runner.instances.<name>

## services.gitea-actions-runner.instances.<name>.enable

Whether to enable Gitea Actions Runner instance. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitea-actions-runner.nix>

## services.gitea-actions-runner.instances.<name>.hostPackages

List of packages, that are available to actions, when the runner is configured with a host execution label. Type: list of package Default: with pkgs; [ bash coreutils curl gawk gitMinimal gnused nodejs wget ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitea-actions-runner.nix>

## services.gitea-actions-runner.instances.<name>.labels

Labels used to map jobs to their runtime environment. Changing these labels currently requires a new registration token. Many common actions require bash, git and nodejs, as well as a filesystem that follows the filesystem hierarchy standard. Type: list of string Example: [ # provide a debian base with nodejs for actions "debian-latest:docker://node:18-bullseye" # fake the ubuntu name, because node provides no ubuntu builds "ubuntu-latest:docker://node:18-bullseye" # provide native execution on the host #"native:host" ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitea-actions-runner.nix>

## services.gitea-actions-runner.instances.<name>.name

The name identifying the runner instance towards the Gitea/Forgejo instance. Type: string Example: config.networking.hostName Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitea-actions-runner.nix>

## services.gitea-actions-runner.instances.<name>.settings

Configuration for act_runner daemon. See https://gitea.com/gitea/act_runner/src/branch/main/internal/pkg/config/config.example.yaml for an example configuration Type: open submodule of (YAML 1.1 value) Default: { } Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitea-actions-runner.nix>

## services.gitea-actions-runner.instances.<name>.token

Plain token to register at the configured Gitea/Forgejo instance. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitea-actions-runner.nix>

## services.gitea-actions-runner.instances.<name>.tokenFile

Path to an environment file, containing the TOKEN environment variable, that holds a token to register at the configured Gitea/Forgejo instance. Type: null or string or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitea-actions-runner.nix>

## services.gitea-actions-runner.instances.<name>.url

Base URL of your Gitea/Forgejo instance. Type: string Example: "https://forge.example.com" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitea-actions-runner.nix>
