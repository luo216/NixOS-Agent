---
module: services.gocd-server
option_count: 14
source: options.html
---

# services.gocd-server

## services.gocd-server.enable

Whether to enable gocd-server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gocd-server/default.nix>

## services.gocd-server.packages

Packages to add to PATH for the Go.CD server’s process. Type: list of package Default: [ pkgs.stdenv pkgs.jre pkgs.git config.programs.ssh.package pkgs.nix ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gocd-server/default.nix>

## services.gocd-server.environment

Additional environment variables to be passed to the gocd-server process. As a base environment, gocd-server receives NIX_PATH from environment.sessionVariables, NIX_REMOTE is set to “daemon”. Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gocd-server/default.nix>

## services.gocd-server.extraGroups

List of extra groups that the “gocd-server” user should be a part of. Type: list of string Default: [ ] Example: [ "wheel" "docker" ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gocd-server/default.nix>

## services.gocd-server.extraOptions

Specifies additional command line arguments to pass to Go.CD server’s java process. Example contains debug and gcLog arguments. Type: list of string Default: [ ] Example: [ "-X debug" "-Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=5005" "-verbose:gc" "-Xloggc:go-server-gc.log" "-XX:+PrintGCTimeStamps" "-XX:+PrintTenuringDistribution" "-XX:+PrintGCDetails" "-XX:+PrintGC" ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gocd-server/default.nix>

## services.gocd-server.group

If the default user “gocd-server” is configured then this is the primary group of that user. Type: string Default: "gocd-server" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gocd-server/default.nix>

## services.gocd-server.initialJavaHeapSize

Specifies the initial java heap memory size for the Go.CD server’s java process. Type: string Default: "512m" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gocd-server/default.nix>

## services.gocd-server.listenAddress

Specifies the bind address on which the Go.CD server HTTP interface listens. Type: string Default: "0.0.0.0" Example: "localhost" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gocd-server/default.nix>

## services.gocd-server.maxJavaHeapMemory

Specifies the java maximum heap memory size for the Go.CD server’s java process. Type: string Default: "1024m" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gocd-server/default.nix>

## services.gocd-server.port

Specifies port number on which the Go.CD server HTTP interface listens. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8153 Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gocd-server/default.nix>

## services.gocd-server.sslPort

Specifies port number on which the Go.CD server HTTPS interface listens. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8154 Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gocd-server/default.nix>

## services.gocd-server.startupOptions

Specifies startup command line arguments to pass to Go.CD server java process. Type: list of string Default: [ "-Xms${config.services.gocd-server.initialJavaHeapSize}" "-Xmx${config.services.gocd-server.maxJavaHeapMemory}" "-Dcruise.listen.host=${config.services.gocd-server.listenAddress}" "-Duser.language=en" "-Djruby.rack.request.size.threshold.bytes=30000000" "-Duser.country=US" "-Dcruise.config.dir=${config.services.gocd-server.workDir}/conf" "-Dcruise.config.file=${config.services.gocd-server.workDir}/conf/cruise-config.xml" "-Dcruise.server.port=${toString config.services.gocd-server.port}" "-Dcruise.server.ssl.port=${toString config.services.gocd-server.sslPort}" "--add-opens=java.base/java.lang=ALL-UNNAMED" "--add-opens=java.base/java.util=ALL-UNNAMED" ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gocd-server/default.nix>

## services.gocd-server.user

User the Go.CD server should execute under. Type: string Default: "gocd-server" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gocd-server/default.nix>

## services.gocd-server.workDir

Specifies the working directory in which the Go.CD server java archive resides. Type: string Default: "/var/lib/go-server" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gocd-server/default.nix>
