---
module: services.rstudio-server
option_count: 6
source: options.html
---

# services.rstudio-server

## services.rstudio-server.enable

Whether to enable RStudio server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/development/rstudio-server/default.nix>

## services.rstudio-server.package

The rstudio-server package to use. Type: package Default: pkgs.rstudio-server Example: rstudioServerWrapper.override { packages = [ pkgs.rPackages.ggplot2 ]; } Declared by: <nixpkgs/nixos/modules/services/development/rstudio-server/default.nix>

## services.rstudio-server.listenAddr

Address to listen on (www-address in rserver.conf). Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/development/rstudio-server/default.nix>

## services.rstudio-server.rserverExtraConfig

Extra contents for rserver.conf. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/development/rstudio-server/default.nix>

## services.rstudio-server.rsessionExtraConfig

Extra contents for resssion.conf. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/development/rstudio-server/default.nix>

## services.rstudio-server.serverWorkingDir

Default working directory for server (server-working-dir in rserver.conf). Type: string Default: "/var/lib/rstudio-server" Declared by: <nixpkgs/nixos/modules/services/development/rstudio-server/default.nix>
