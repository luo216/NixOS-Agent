---
module: services.homepage-dashboard
option_count: 15
source: options.html
---

# services.homepage-dashboard

## services.homepage-dashboard.enable

Whether to enable Homepage Dashboard, a highly customizable application dashboard. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/homepage-dashboard.nix>

## services.homepage-dashboard.package

The homepage-dashboard package to use. Type: package Default: pkgs.homepage-dashboard Declared by: <nixpkgs/nixos/modules/services/misc/homepage-dashboard.nix>

## services.homepage-dashboard.allowedHosts

Hosts that homepage-dashboard will be running under. You will want to change this in order to acess homepage from anything other than localhost. see the upsream documentation: https://gethomepage.dev/installation/#homepage_allowed_hosts Type: string Default: "localhost:8082,127.0.0.1:8082" Example: "example.com" Declared by: <nixpkgs/nixos/modules/services/misc/homepage-dashboard.nix>

## services.homepage-dashboard.bookmarks

Homepage bookmarks configuration. See https://gethomepage.dev/configs/bookmarks/. Type: YAML 1.1 value Default: [ ] Example: [ { Developer = [ { Github = [ { abbr = "GH"; href = "https://github.com/"; } ]; } ]; } { Entertainment = [ { YouTube = [ { abbr = "YT"; href = "https://youtube.com/"; } ]; } ]; } ] Declared by: <nixpkgs/nixos/modules/services/misc/homepage-dashboard.nix>

## services.homepage-dashboard.customCSS

Custom CSS for styling Homepage. See https://gethomepage.dev/configs/custom-css-js/. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/misc/homepage-dashboard.nix>

## services.homepage-dashboard.customJS

Custom Javascript for Homepage. See https://gethomepage.dev/configs/custom-css-js/. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/misc/homepage-dashboard.nix>

## services.homepage-dashboard.docker

Homepage docker configuration. See https://gethomepage.dev/configs/docker/. Type: YAML 1.1 value Default: { } Declared by: <nixpkgs/nixos/modules/services/misc/homepage-dashboard.nix>

## services.homepage-dashboard.environmentFile

The path to an environment file that contains environment variables to pass to the homepage-dashboard service, for the purpose of passing secrets to the service. See the upstream documentation: https://gethomepage.dev/installation/docker/#using-environment-secrets Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/misc/homepage-dashboard.nix>

## services.homepage-dashboard.kubernetes

Homepage kubernetes configuration. See https://gethomepage.dev/configs/kubernetes/. Type: YAML 1.1 value Default: { } Declared by: <nixpkgs/nixos/modules/services/misc/homepage-dashboard.nix>

## services.homepage-dashboard.listenPort

Port for Homepage to bind to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8082 Declared by: <nixpkgs/nixos/modules/services/misc/homepage-dashboard.nix>

## services.homepage-dashboard.openFirewall

Open ports in the firewall for Homepage. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/homepage-dashboard.nix>

## services.homepage-dashboard.proxmox

Homepage proxmox configuration. See https://gethomepage.dev/configs/proxmox/. Type: YAML 1.1 value Default: { } Declared by: <nixpkgs/nixos/modules/services/misc/homepage-dashboard.nix>

## services.homepage-dashboard.services

Homepage services configuration. See https://gethomepage.dev/configs/services/. Type: YAML 1.1 value Default: [ ] Example: [ { "My First Group" = [ { "My First Service" = { description = "Homepage is awesome"; href = "http://localhost/"; }; } ]; } { "My Second Group" = [ { "My Second Service" = { description = "Homepage is the best"; href = "http://localhost/"; }; } ]; } ] Declared by: <nixpkgs/nixos/modules/services/misc/homepage-dashboard.nix>

## services.homepage-dashboard.settings

Homepage settings. See https://gethomepage.dev/configs/settings/. Type: YAML 1.1 value Default: { } Declared by: <nixpkgs/nixos/modules/services/misc/homepage-dashboard.nix>

## services.homepage-dashboard.widgets

Homepage widgets configuration. See https://gethomepage.dev/widgets/. Type: YAML 1.1 value Default: [ ] Example: [ { resources = { cpu = true; disk = "/"; memory = true; }; } { search = { provider = "duckduckgo"; target = "_blank"; }; } ] Declared by: <nixpkgs/nixos/modules/services/misc/homepage-dashboard.nix>
