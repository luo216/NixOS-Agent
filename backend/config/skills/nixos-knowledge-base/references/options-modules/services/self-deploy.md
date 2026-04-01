---
module: services.self-deploy
option_count: 9
source: options.html
---

# services.self-deploy

## services.self-deploy.enable

Whether to enable self-deploy. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/system/self-deploy.nix>

## services.self-deploy.branch

Branch to track Technically speaking any ref can be specified here, as this is passed directly to a git fetch, but for the use-case of continuous deployment you’re likely to want to specify a branch. Type: string Default: "master" Declared by: <nixpkgs/nixos/modules/services/system/self-deploy.nix>

## services.self-deploy.nixArgs

Arguments to nix-build passed as --argstr or --arg depending on the type. Type: attribute set Default: { } Declared by: <nixpkgs/nixos/modules/services/system/self-deploy.nix>

## services.self-deploy.nixAttribute

Attribute of nixFile that builds the current system. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/system/self-deploy.nix>

## services.self-deploy.nixFile

Path to nix file in repository. Leading ‘/’ refers to root of git repository. Type: absolute path Default: "/default.nix" Declared by: <nixpkgs/nixos/modules/services/system/self-deploy.nix>

## services.self-deploy.repository

The repository to fetch from. Must be properly formatted for git. If this value is set to a path (must begin with /) then it’s assumed that the repository is local and the resulting service won’t wait for the network to be up. If the repository will be fetched over SSH, you must add an entry to programs.ssh.knownHosts for the SSH host for the fetch to be successful. Type: absolute path or string Declared by: <nixpkgs/nixos/modules/services/system/self-deploy.nix>

## services.self-deploy.sshKeyFile

Path to SSH private key used to fetch private repositories over SSH. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/system/self-deploy.nix>

## services.self-deploy.startAt

The schedule on which to run the self-deploy service. Format specified by systemd.time 7. This value can also be a list of systemd.time 7 formatted strings, in which case the service will be started on multiple schedules. Type: string or list of string Default: "hourly" Declared by: <nixpkgs/nixos/modules/services/system/self-deploy.nix>

## services.self-deploy.switchCommand

The switch-to-configuration subcommand used. Type: one of “boot”, “switch”, “dry-activate”, “test” Default: "switch" Declared by: <nixpkgs/nixos/modules/services/system/self-deploy.nix>
