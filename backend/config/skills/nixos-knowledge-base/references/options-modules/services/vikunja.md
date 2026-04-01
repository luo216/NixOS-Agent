---
module: services.vikunja
option_count: 7
source: options.html
---

# services.vikunja

## services.vikunja.enable

Whether to enable vikunja service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/vikunja.nix>

## services.vikunja.package

The vikunja package to use. Type: package Default: pkgs.vikunja Declared by: <nixpkgs/nixos/modules/services/web-apps/vikunja.nix>

## services.vikunja.environmentFiles

List of environment files set in the vikunja systemd service. For example passwords should be set in one of these files. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/web-apps/vikunja.nix>

## services.vikunja.frontendHostname

The Hostname under which the frontend is running. Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/vikunja.nix>

## services.vikunja.frontendScheme

Whether the site is available via http or https. Type: one of “http”, “https” Declared by: <nixpkgs/nixos/modules/services/web-apps/vikunja.nix>

## services.vikunja.port

The TCP port exposed by the API. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3456 Declared by: <nixpkgs/nixos/modules/services/web-apps/vikunja.nix>

## services.vikunja.settings

Vikunja configuration. Refer to https://vikunja.io/docs/config-options/ for details on supported values. Type: YAML 1.1 value Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/vikunja.nix>
