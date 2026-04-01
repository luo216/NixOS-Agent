---
module: services.gitlab.registry
option_count: 11
source: options.html
---

# services.gitlab.registry

## services.gitlab.registry.enable

Enable GitLab container registry. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.registry.package

Container registry package to use. External container registries such as pkgs.distribution are not supported anymore since GitLab 16.0.0. Type: package Default: pkgs.distribution Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.registry.certFile

Path to GitLab container registry certificate. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.registry.defaultForProjects

If GitLab container registry should be enabled by default for projects. Type: boolean Default: config.services.gitlab.registry.enable Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.registry.externalAddress

External address used to access registry from the internet Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.registry.externalPort

External port used to access registry from the internet Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.registry.host

GitLab container registry host name. Type: string Default: config.services.gitlab.host Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.registry.issuer

GitLab container registry issuer. Type: string Default: "gitlab-issuer" Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.registry.keyFile

Path to GitLab container registry certificate-key. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.registry.port

GitLab container registry port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 4567 Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.registry.serviceName

GitLab container registry service name. Type: string Default: "container_registry" Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>
