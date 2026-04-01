---
module: services.woodpecker-server
option_count: 4
source: options.html
---

# services.woodpecker-server

## services.woodpecker-server.enable

Whether to enable the Woodpecker-Server, a CI/CD application for automatic builds, deployments and tests. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/continuous-integration/woodpecker/server.nix>

## services.woodpecker-server.package

The woodpecker-server package to use. Type: package Default: pkgs.woodpecker-server Declared by: <nixpkgs/nixos/modules/services/continuous-integration/woodpecker/server.nix>

## services.woodpecker-server.environment

woodpecker-server config environment variables, for other options read the documentation Type: attribute set of string Default: { } Example: { WOODPECKER_HOST = "https://woodpecker.example.com"; WOODPECKER_OPEN = "true"; WOODPECKER_GITEA = "true"; WOODPECKER_GITEA_CLIENT = "ffffffff-ffff-ffff-ffff-ffffffffffff"; WOODPECKER_GITEA_URL = "https://git.example.com"; } Declared by: <nixpkgs/nixos/modules/services/continuous-integration/woodpecker/server.nix>

## services.woodpecker-server.environmentFile

File to load environment variables from. This is helpful for specifying secrets. Example content of environmentFile: WOODPECKER_AGENT_SECRET=your-shared-secret-goes-here WOODPECKER_GITEA_SECRET=gto_************************************** Type: (list of absolute path) or absolute path convertible to it Default: [ ] Example: [ "/root/woodpecker-server.env" ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/woodpecker/server.nix>
