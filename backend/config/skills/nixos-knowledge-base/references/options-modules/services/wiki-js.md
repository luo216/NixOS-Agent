---
module: services.wiki-js
option_count: 4
source: options.html
---

# services.wiki-js

## services.wiki-js.enable

Whether to enable wiki-js. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/wiki-js.nix>

## services.wiki-js.environmentFile

Environment file to inject e.g. secrets into the configuration. Type: null or absolute path Default: null Example: "/root/wiki-js.env" Declared by: <nixpkgs/nixos/modules/services/web-apps/wiki-js.nix>

## services.wiki-js.settings

Settings to configure wiki-js. This directly corresponds to the upstream configuration options. Secrets can be injected via the environment by specifying services.wiki-js.environmentFile to contain secrets and setting sensitive values to $(ENVIRONMENT_VAR) with this value defined in the environment-file. Type: open submodule of (JSON value) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/wiki-js.nix>

## services.wiki-js.stateDirectoryName

Name of the directory in /var/lib. Type: string Default: "wiki-js" Declared by: <nixpkgs/nixos/modules/services/web-apps/wiki-js.nix>
