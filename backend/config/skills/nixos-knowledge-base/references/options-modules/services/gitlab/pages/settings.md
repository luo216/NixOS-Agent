---
module: services.gitlab.pages.settings
option_count: 8
source: options.html
---

# services.gitlab.pages.settings

## services.gitlab.pages.settings.artifacts-server

API URL to proxy artifact requests to. Type: null or string Default: "http(s)://<services.gitlab.host>/api/v4" Example: "https://gitlab.example.com/api/v4" Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.pages.settings.gitlab-server

Public GitLab server URL. Type: null or string Default: "http(s)://<services.gitlab.host>" Example: "https://gitlab.example.com" Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.pages.settings.internal-gitlab-server

Internal GitLab server used for API requests, useful if you want to send that traffic over an internal load balancer. By default, the value of services.gitlab.pages.settings.gitlab-server is used. Type: null or string Default: "http(s)://<services.gitlab.host>" Example: "https://gitlab.example.internal" Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.pages.settings.listen-http

The address(es) to listen on for HTTP requests. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.pages.settings.listen-https

The address(es) to listen on for HTTPS requests. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.pages.settings.listen-proxy

The address(es) to listen on for proxy requests. Type: list of string Default: [ "127.0.0.1:8090" ] Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.pages.settings.pages-domain

The domain to serve static pages on. Type: null or string Example: "example.com" Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.pages.settings.pages-root

The directory where pages are stored. Type: string Default: config.services.gitlab.extraConfig.production.shared.path + "/pages" Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>
