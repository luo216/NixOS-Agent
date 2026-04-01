---
module: services.gitlab-runner.services.<name>
option_count: 27
source: options.html
---

# services.gitlab-runner.services.<name>

## services.gitlab-runner.services.<name>.authenticationTokenConfigFile

Absolute path to a file containing environment variables used for gitlab-runner registrations with runner authentication tokens. They replace the deprecated runner registration tokens, as outlined in the GitLab documentation. A list of all supported environment variables can be found with gitlab-runner register --help. The ones you probably want to set are: CI_SERVER_URL=<CI server URL> CI_SERVER_TOKEN=<runner authentication token secret> Warning Make sure to use a quoted absolute path, or it is going to be copied to Nix Store. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitlab-runner.nix>

## services.gitlab-runner.services.<name>.buildsDir

Absolute path to a directory where builds will be stored in context of selected executor (Locally, Docker, SSH). Type: null or absolute path Default: null Example: "/var/lib/gitlab-runner/builds" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitlab-runner.nix>

## services.gitlab-runner.services.<name>.cloneUrl

Overwrite the URL for the GitLab instance. Used if the Runner can’t connect to GitLab on the URL GitLab exposes itself. Type: null or string Default: null Example: "http://gitlab.example.local" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitlab-runner.nix>

## services.gitlab-runner.services.<name>.debugTraceDisabled

When set to true Runner will disable the possibility of using the CI_DEBUG_TRACE feature. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitlab-runner.nix>

## services.gitlab-runner.services.<name>.description

Name/description of the runner. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitlab-runner.nix>

## services.gitlab-runner.services.<name>.dockerAllowedImages

Whitelist allowed images. Type: list of string Default: [ ] Example: [ "ruby:*" "python:*" "php:*" "my.registry.tld:5000/*:*" ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitlab-runner.nix>

## services.gitlab-runner.services.<name>.dockerAllowedServices

Whitelist allowed services. Type: list of string Default: [ ] Example: [ "postgres:9" "redis:*" "mysql:*" ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitlab-runner.nix>

## services.gitlab-runner.services.<name>.dockerDisableCache

Disable all container caching. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitlab-runner.nix>

## services.gitlab-runner.services.<name>.dockerExtraHosts

Add a custom host-to-IP mapping. Type: list of string Default: [ ] Example: [ "other-host:127.0.0.1" ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitlab-runner.nix>

## services.gitlab-runner.services.<name>.dockerImage

Docker image to be used. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitlab-runner.nix>

## services.gitlab-runner.services.<name>.dockerPrivileged

Give extended privileges to container. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitlab-runner.nix>

## services.gitlab-runner.services.<name>.dockerPullPolicy

Default pull-policy for Docker images Type: null or one of “always”, “never”, “if-not-present” Default: null Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitlab-runner.nix>

## services.gitlab-runner.services.<name>.dockerVolumes

Bind-mount a volume and create it if it doesn’t exist prior to mounting. Type: list of string Default: [ ] Example: [ "/var/run/docker.sock:/var/run/docker.sock" ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitlab-runner.nix>

## services.gitlab-runner.services.<name>.environmentVariables

Custom environment variables injected to build environment. For secrets you can use registrationConfigFile with RUNNER_ENV variable set. Type: attribute set of string Default: { } Example: { NAME = "value"; } Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitlab-runner.nix>

## services.gitlab-runner.services.<name>.executor

Select executor, eg. shell, docker, etc. See runner executor documentation for more information. Type: string Default: "docker" Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitlab-runner.nix>

## services.gitlab-runner.services.<name>.limit

Limit how many jobs can be handled concurrently by this service. 0 (default) simply means don’t limit. Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitlab-runner.nix>

## services.gitlab-runner.services.<name>.maximumTimeout

What is the maximum timeout (in seconds) that will be set for job when using this Runner. 0 (default) simply means don’t limit. This option has no effect for runners registered with an runner authentication tokens and will be ignored. Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitlab-runner.nix>

## services.gitlab-runner.services.<name>.postBuildScript

Runner-specific command script executed after code is pulled and just after build executes. Type: null or string or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitlab-runner.nix>

## services.gitlab-runner.services.<name>.postGetSourcesScript

Runner-specific command script executed after code is pulled. Type: null or string or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitlab-runner.nix>

## services.gitlab-runner.services.<name>.preBuildScript

Runner-specific command script executed after code is pulled, just before build executes. Type: null or string or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitlab-runner.nix>

## services.gitlab-runner.services.<name>.preGetSourcesScript

Runner-specific command script executed before code is pulled. Type: null or string or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitlab-runner.nix>

## services.gitlab-runner.services.<name>.protected

When set to true Runner will only run on pipelines triggered on protected branches. This option has no effect for runners registered with an runner authentication tokens and will be ignored. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitlab-runner.nix>

## services.gitlab-runner.services.<name>.registrationConfigFile

Absolute path to a file with environment variables used for gitlab-runner registration with runner registration tokens. A list of all supported environment variables can be found in gitlab-runner register --help. The ones you probably want to set are: CI_SERVER_URL=<CI server URL> REGISTRATION_TOKEN=<registration secret> Support for runner registration tokens is deprecated since GitLab 16.0, has been disabled by default in GitLab 17.0 and will be removed in GitLab 18.0, as outlined in the GitLab documentation. Please consider migrating to runner authentication tokens and check the documentation on services.gitlab-runner.services.<name>.authenticationTokenConfigFile. Warning Make sure to use a quoted absolute path, or it is going to be copied to Nix Store. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitlab-runner.nix>

## services.gitlab-runner.services.<name>.registrationFlags

Extra command-line flags passed to gitlab-runner register. Execute gitlab-runner register --help for a list of supported flags. Type: list of string Default: [ ] Example: [ "--docker-helper-image my/gitlab-runner-helper" ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitlab-runner.nix>

## services.gitlab-runner.services.<name>.requestConcurrency

Limit number of concurrent requests for new jobs from GitLab. Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitlab-runner.nix>

## services.gitlab-runner.services.<name>.runUntagged

Register to run untagged builds; defaults to true when tagList is empty. This option has no effect for runners registered with an runner authentication tokens and will be ignored. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitlab-runner.nix>

## services.gitlab-runner.services.<name>.tagList

Tag list. This option has no effect for runners registered with an runner authentication tokens and will be ignored. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/continuous-integration/gitlab-runner.nix>
