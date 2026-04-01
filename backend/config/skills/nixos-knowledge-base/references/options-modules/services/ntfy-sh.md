---
module: services.ntfy-sh
option_count: 6
source: options.html
---

# services.ntfy-sh

## services.ntfy-sh.enable

Whether to enable ntfy-sh, a push notification service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/ntfy-sh.nix>

## services.ntfy-sh.package

The ntfy-sh package to use. Type: package Default: pkgs.ntfy-sh Declared by: <nixpkgs/nixos/modules/services/misc/ntfy-sh.nix>

## services.ntfy-sh.environmentFile

Path to a file containing extra ntfy environment variables in the systemd EnvironmentFile format. Refer to the documentation for config options. This can be used to pass secrets such as creating declarative users or token without putting them in the Nix store. Type: null or absolute path Default: null Example: "/run/secrets/ntfy" Declared by: <nixpkgs/nixos/modules/services/misc/ntfy-sh.nix>

## services.ntfy-sh.group

Primary group of ntfy-sh user. Type: string Default: "ntfy-sh" Declared by: <nixpkgs/nixos/modules/services/misc/ntfy-sh.nix>

## services.ntfy-sh.settings

Configuration for ntfy.sh, supported values are here. Type: open submodule of (YAML 1.1 value) Default: { } Example: { listen-http = ":8080"; } Declared by: <nixpkgs/nixos/modules/services/misc/ntfy-sh.nix>

## services.ntfy-sh.user

User the ntfy-sh server runs under. Type: string Default: "ntfy-sh" Declared by: <nixpkgs/nixos/modules/services/misc/ntfy-sh.nix>
