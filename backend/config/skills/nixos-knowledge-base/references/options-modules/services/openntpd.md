---
module: services.openntpd
option_count: 4
source: options.html
---

# services.openntpd

## services.openntpd.enable

Whether to enable OpenNTP time synchronization server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/ntp/openntpd.nix>

## services.openntpd.extraConfig

Additional text appended to openntpd.conf. Type: strings concatenated with “\n” Default: "" Example: '' listen on 127.0.0.1 listen on ::1 '' Declared by: <nixpkgs/nixos/modules/services/networking/ntp/openntpd.nix>

## services.openntpd.extraOptions

Extra options used when launching openntpd. Type: strings concatenated with " " Default: "" Example: "-s" Declared by: <nixpkgs/nixos/modules/services/networking/ntp/openntpd.nix>

## services.openntpd.servers

The set of NTP servers from which to synchronise. Type: list of string Default: config.services.ntp.servers Declared by: <nixpkgs/nixos/modules/services/networking/ntp/openntpd.nix>
