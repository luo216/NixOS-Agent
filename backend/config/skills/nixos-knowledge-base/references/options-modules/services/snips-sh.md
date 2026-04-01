---
module: services.snips-sh
option_count: 5
source: options.html
---

# services.snips-sh

## services.snips-sh.enable

Whether to enable snips.sh. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/snips-sh.nix>

## services.snips-sh.package

The snips-sh package to use. Type: package Default: pkgs.snips-sh Example: pkgs.snips-sh.override {withTensorflow = true;} Declared by: <nixpkgs/nixos/modules/services/web-apps/snips-sh.nix>

## services.snips-sh.environmentFile

Additional environment file as defined in systemd.exec(5). Sensitive secrets such as SNIPS_SSH_HOSTKEYPATH and SNIPS_METRICS_STATSD may be passed to the service while avoiding potentially making them world-readable in the nix store or to convert an existing non-nix installation with minimum hassle. Note that this file needs to be available on the host on which snips-sh is running. Type: null or absolute path Default: null Example: "/etc/snips-sh.env" Declared by: <nixpkgs/nixos/modules/services/web-apps/snips-sh.nix>

## services.snips-sh.settings

The configuration of snips-sh is done through environment variables, therefore you must use upper snake case (e.g. SNIPS_HTTP_INTERNAL). Based on the attributes passed to this config option an environment file will be generated that is passed to snips-sh’s systemd service. The available configuration options can be found in self-hosting guide to find about the environment variables you can use. Type: open submodule of attribute set of (null or string or signed integer or boolean) Default: { } Example: { SNIPS_HTTP_INTERNAL = "http://0.0.0.0:8080"; SNIPS_SSH_INTERNAL = "ssh://0.0.0.0:2222"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/snips-sh.nix>

## services.snips-sh.stateDir

The state directory of the service. Type: absolute path Default: "/var/lib/snips-sh" Declared by: <nixpkgs/nixos/modules/services/web-apps/snips-sh.nix>
