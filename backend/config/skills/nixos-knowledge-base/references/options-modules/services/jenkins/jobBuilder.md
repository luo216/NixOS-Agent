---
module: services.jenkins.jobBuilder
option_count: 7
source: options.html
---

# services.jenkins.jobBuilder

## services.jenkins.jobBuilder.enable

Whether to enable the Jenkins Job Builder (JJB) service. It allows defining jobs for Jenkins in a declarative manner. Jobs managed through the Jenkins WebUI (or by other means) are left unchanged. Note that it really is declarative configuration; if you remove a previously defined job, the corresponding job directory will be deleted. Please see the Jenkins Job Builder documentation for more info: https://jenkins-job-builder.readthedocs.io/ . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/continuous-integration/jenkins/job-builder.nix>

## services.jenkins.jobBuilder.accessToken

User token in Jenkins used to reload config. WARNING: This token will be world readable in the Nix store. To keep it secret, use the accessTokenFile option instead. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/jenkins/job-builder.nix>

## services.jenkins.jobBuilder.accessTokenFile

File containing the API token for the accessUser user. Type: string Default: "${config.services.jenkins.home}/secrets/initialAdminPassword" Example: "/run/keys/jenkins-job-builder-access-token" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/jenkins/job-builder.nix>

## services.jenkins.jobBuilder.accessUser

User id in Jenkins used to reload config. Type: string Default: "admin" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/jenkins/job-builder.nix>

## services.jenkins.jobBuilder.jsonJobs

Job descriptions for Jenkins Job Builder in JSON format. Type: list of string Default: [ ] Example: [ '' [ { "job": { "name": "jenkins-job-test-2", "builders": [ "shell": "echo 'Hello world!'" ] } } ] '' ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/jenkins/job-builder.nix>

## services.jenkins.jobBuilder.nixJobs

Job descriptions for Jenkins Job Builder in Nix format. This is a trivial wrapper around jsonJobs, using builtins.toJSON behind the scene. Type: list of (attribute set) Default: [ ] Example: [ { job = { name = "jenkins-job-test-3"; builders = [ { shell = "echo 'Hello world!'"; } ]; }; } ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/jenkins/job-builder.nix>

## services.jenkins.jobBuilder.yamlJobs

Job descriptions for Jenkins Job Builder in YAML format. Type: strings concatenated with “\n” Default: "" Example: '' - job: name: jenkins-job-test-1 builders: - shell: echo 'Hello world!' '' Declared by: <nixpkgs/nixos/modules/services/continuous-integration/jenkins/job-builder.nix>
