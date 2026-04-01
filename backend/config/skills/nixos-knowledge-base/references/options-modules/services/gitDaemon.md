---
module: services.gitDaemon
option_count: 10
source: options.html
---

# services.gitDaemon

## services.gitDaemon.enable

Enable Git daemon, which allows public hosting of git repositories without any access controls. This is mostly intended for read-only access. You can allow write access by setting daemon.receivepack configuration item of the repository to true. This is solely meant for a closed LAN setting where everybody is friendly. If you need any access controls, use something else. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/git-daemon.nix>

## services.gitDaemon.package

The git package to use. Type: package Default: pkgs.git Declared by: <nixpkgs/nixos/modules/services/networking/git-daemon.nix>

## services.gitDaemon.basePath

Remap all the path requests as relative to the given path. For example, if you set base-path to /srv/git, then if you later try to pull git://example.com/hello.git, Git daemon will interpret the path as /srv/git/hello.git. Type: string Default: "" Example: "/srv/git/" Declared by: <nixpkgs/nixos/modules/services/networking/git-daemon.nix>

## services.gitDaemon.exportAll

Publish all directories that look like Git repositories (have the objects and refs subdirectories), even if they do not have the git-daemon-export-ok file. If disabled, you need to touch .git/git-daemon-export-ok in each repository you want the daemon to publish. Warning: enabling this without a repository whitelist or basePath publishes every git repository you have. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/git-daemon.nix>

## services.gitDaemon.group

Group under which Git daemon would be running. Type: string Default: "git" Declared by: <nixpkgs/nixos/modules/services/networking/git-daemon.nix>

## services.gitDaemon.listenAddress

Listen on a specific IP address or hostname. Type: string Default: "" Example: "example.com" Declared by: <nixpkgs/nixos/modules/services/networking/git-daemon.nix>

## services.gitDaemon.options

Extra configuration options to be passed to Git daemon. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/git-daemon.nix>

## services.gitDaemon.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9418 Declared by: <nixpkgs/nixos/modules/services/networking/git-daemon.nix>

## services.gitDaemon.repositories

A whitelist of paths of git repositories, or directories containing repositories all of which would be published. Paths must not end in “/”. Warning: leaving this empty and enabling exportAll publishes all repositories in your filesystem or basePath if specified. Type: list of string Default: [ ] Example: [ "/srv/git" "/home/user/git/repo2" ] Declared by: <nixpkgs/nixos/modules/services/networking/git-daemon.nix>

## services.gitDaemon.user

User under which Git daemon would be running. Type: string Default: "git" Declared by: <nixpkgs/nixos/modules/services/networking/git-daemon.nix>
