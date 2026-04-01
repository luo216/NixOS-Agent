---
module: services.jenkinsSlave
option_count: 5
source: options.html
---

# services.jenkinsSlave

## services.jenkinsSlave.enable

If true the system will be configured to work as a jenkins slave. If the system is also configured to work as a jenkins master then this has no effect. In progress: Currently only assures the jenkins user is configured. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/continuous-integration/jenkins/slave.nix>

## services.jenkinsSlave.group

If the default slave agent user “jenkins” is configured then this is the primary group of that user. Type: string Default: "jenkins" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/jenkins/slave.nix>

## services.jenkinsSlave.home

The path to use as JENKINS_HOME. If the default user “jenkins” is configured then this is the home of the “jenkins” user. Type: absolute path Default: "/var/lib/jenkins" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/jenkins/slave.nix>

## services.jenkinsSlave.javaPackage

The jdk package to use. Type: package Default: pkgs.jdk Declared by: <nixpkgs/nixos/modules/services/continuous-integration/jenkins/slave.nix>

## services.jenkinsSlave.user

User the jenkins slave agent should execute under. Type: string Default: "jenkins" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/jenkins/slave.nix>
