---
module: services.gocd-agent
option_count: 13
source: options.html
---

# services.gocd-agent

## services.gocd-agent.enable

Whether to enable gocd-agent. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gocd-agent/default.nix>

## services.gocd-agent.packages

Packages to add to PATH for the Go.CD agent process. Type: list of package Default: [ pkgs.stdenv pkgs.jre pkgs.git config.programs.ssh.package pkgs.nix ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gocd-agent/default.nix>

## services.gocd-agent.agentConfig

Agent registration configuration. Type: string Default: "" Example: '' agent.auto.register.resources=ant,java agent.auto.register.environments=QA,Performance agent.auto.register.hostname=Agent01 '' Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gocd-agent/default.nix>

## services.gocd-agent.environment

Additional environment variables to be passed to the Go.CD agent process. As a base environment, Go.CD agent receives NIX_PATH from environment.sessionVariables, NIX_REMOTE is set to “daemon”. Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gocd-agent/default.nix>

## services.gocd-agent.extraGroups

List of extra groups that the “gocd-agent” user should be a part of. Type: list of string Default: [ ] Example: [ "wheel" "docker" ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gocd-agent/default.nix>

## services.gocd-agent.extraOptions

Specifies additional command line arguments to pass to Go.CD agent java process. Example contains debug and gcLog arguments. Type: list of string Default: [ ] Example: [ "-X debug" "-Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=5006" "-verbose:gc" "-Xloggc:go-agent-gc.log" "-XX:+PrintGCTimeStamps" "-XX:+PrintTenuringDistribution" "-XX:+PrintGCDetails" "-XX:+PrintGC" ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gocd-agent/default.nix>

## services.gocd-agent.goServer

URL of the GoCD Server to attach the Go.CD Agent to. Type: string Default: "https://127.0.0.1:8154/go" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gocd-agent/default.nix>

## services.gocd-agent.group

If the default user “gocd-agent” is configured then this is the primary group of that user. Type: string Default: "gocd-agent" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gocd-agent/default.nix>

## services.gocd-agent.initialJavaHeapSize

Specifies the initial java heap memory size for the Go.CD agent java process. Type: string Default: "128m" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gocd-agent/default.nix>

## services.gocd-agent.maxJavaHeapMemory

Specifies the java maximum heap memory size for the Go.CD agent java process. Type: string Default: "256m" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gocd-agent/default.nix>

## services.gocd-agent.startupOptions

Specifies startup command line arguments to pass to Go.CD agent java process. Type: list of string Default: [ "-Xms${config.services.gocd-agent.initialJavaHeapSize}" "-Xmx${config.services.gocd-agent.maxJavaHeapMemory}" "-Djava.io.tmpdir=/tmp" "-Dcruise.console.publish.interval=10" "-Djava.security.egd=file:/dev/./urandom" ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gocd-agent/default.nix>

## services.gocd-agent.user

User the Go.CD agent should execute under. Type: string Default: "gocd-agent" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gocd-agent/default.nix>

## services.gocd-agent.workDir

Specifies the working directory in which the Go.CD agent java archive resides. Type: string Default: "/var/lib/go-agent" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gocd-agent/default.nix>
