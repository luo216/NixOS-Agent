---
module: services.jenkins
option_count: 16
source: options.html
---

# services.jenkins

## services.jenkins.enable

Whether to enable Jenkins, a continuous integration server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/continuous-integration/jenkins/default.nix>

## services.jenkins.package

The jenkins package to use. Type: package Default: pkgs.jenkins Declared by: <nixpkgs/nixos/modules/services/continuous-integration/jenkins/default.nix>

## services.jenkins.packages

Packages to add to PATH for the jenkins process. Type: list of package Default: [ pkgs.stdenv pkgs.git pkgs.jdk17 config.programs.ssh.package pkgs.nix ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/jenkins/default.nix>

## services.jenkins.environment

Additional environment variables to be passed to the jenkins process. As a base environment, jenkins receives NIX_PATH from environment.sessionVariables, NIX_REMOTE is set to “daemon” and JENKINS_HOME is set to the value of services.jenkins.home. This option has precedence and can be used to override those mentioned variables. Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/services/continuous-integration/jenkins/default.nix>

## services.jenkins.extraGroups

List of extra groups that the “jenkins” user should be a part of. Type: list of string Default: [ ] Example: [ "wheel" "dialout" ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/jenkins/default.nix>

## services.jenkins.extraJavaOptions

Additional command line arguments to pass to the Java run time (as opposed to Jenkins). Type: list of string Default: [ ] Example: [ "-Xmx80m" ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/jenkins/default.nix>

## services.jenkins.extraOptions

Additional command line arguments to pass to Jenkins. Type: list of string Default: [ ] Example: [ "--debug=9" ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/jenkins/default.nix>

## services.jenkins.group

If the default user “jenkins” is configured then this is the primary group of that user. Type: string Default: "jenkins" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/jenkins/default.nix>

## services.jenkins.home

The path to use as JENKINS_HOME. If the default user “jenkins” is configured then this is the home of the “jenkins” user. Type: absolute path Default: "/var/lib/jenkins" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/jenkins/default.nix>

## services.jenkins.javaPackage

The jdk21 package to use. Type: package Default: pkgs.jdk21 Declared by: <nixpkgs/nixos/modules/services/continuous-integration/jenkins/default.nix>

## services.jenkins.listenAddress

Specifies the bind address on which the jenkins HTTP interface listens. The default is the wildcard address. Type: string Default: "0.0.0.0" Example: "localhost" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/jenkins/default.nix>

## services.jenkins.plugins

A set of plugins to activate. Note that this will completely remove and replace any previously installed plugins. If you have manually-installed plugins that you want to keep while using this module, set this option to null. You can generate this set with a tool such as jenkinsPlugins2nix. Type: null or (attribute set of package) Default: null Example: import path/to/jenkinsPlugins2nix-generated-plugins.nix { inherit (pkgs) fetchurl stdenv; } Declared by: <nixpkgs/nixos/modules/services/continuous-integration/jenkins/default.nix>

## services.jenkins.port

Specifies port number on which the jenkins HTTP interface listens. The default is 8080. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Declared by: <nixpkgs/nixos/modules/services/continuous-integration/jenkins/default.nix>

## services.jenkins.prefix

Specifies a urlPrefix to use with jenkins. If the example /jenkins is given, the jenkins server will be accessible using localhost:8080/jenkins. Type: string Default: "" Example: "/jenkins" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/jenkins/default.nix>

## services.jenkins.user

User the jenkins server should execute under. Type: string Default: "jenkins" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/jenkins/default.nix>

## services.jenkins.withCLI

Whether to make the CLI available. More info about the CLI available at https://www.jenkins.io/doc/book/managing/cli . Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/continuous-integration/jenkins/default.nix>
