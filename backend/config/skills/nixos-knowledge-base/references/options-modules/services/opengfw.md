---
module: services.opengfw
option_count: 12
source: options.html
---

# services.opengfw

## services.opengfw.enable

Whether to enable OpenGFW, A flexible, easy-to-use, open source implementation of GFW on Linux . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/opengfw.nix>

## services.opengfw.package

The opengfw package to use. Type: package Default: pkgs.opengfw Declared by: <nixpkgs/nixos/modules/services/networking/opengfw.nix>

## services.opengfw.dir

Working directory of the OpenGFW service and home of opengfw.user. Type: (optionally newline-terminated) single-line string Default: "/var/lib/opengfw" Declared by: <nixpkgs/nixos/modules/services/networking/opengfw.nix>

## services.opengfw.logFile

File to write the output to instead of systemd. Type: null or absolute path Default: null Example: "/var/lib/opengfw/opengfw.log" Declared by: <nixpkgs/nixos/modules/services/networking/opengfw.nix>

## services.opengfw.logFormat

Format of the logs. logFormatMap Type: one of “json”, “console” Default: "json" Example: "console" Declared by: <nixpkgs/nixos/modules/services/networking/opengfw.nix>

## services.opengfw.logLevel

Level of the logs. logLevelMap Type: one of “debug”, “info”, “warn”, “error” Default: "info" Example: "warn" Declared by: <nixpkgs/nixos/modules/services/networking/opengfw.nix>

## services.opengfw.pcapReplay

Path to PCAP replay file. In pcap mode, none of the actions in the rules have any effect. This mode is mainly for debugging. Type: null or absolute path Default: null Example: "./opengfw.pcap" Declared by: <nixpkgs/nixos/modules/services/networking/opengfw.nix>

## services.opengfw.rules

Rules passed to OpenGFW. Example rules Type: list of (submodule) Default: [ ] Example: [ { action = "block"; expr = "string(http?.req?.headers?.host) endsWith \"v2ex.com\""; name = "block v2ex http"; } { action = "block"; expr = "string(socks?.req?.addr) endsWith \"google.com\" && socks?.req?.port == 80"; name = "block google socks"; } { action = "modify"; expr = "dns != nil && dns.qr && any(dns.questions, {.name endsWith \"v2ex.com\"})"; modifier = { args = { a = "0.0.0.0"; aaaa = "::"; }; name = "dns"; }; name = "v2ex dns poisoning"; } ] Declared by: <nixpkgs/nixos/modules/services/networking/opengfw.nix>

## services.opengfw.rulesFile

Path to file containing OpenGFW rules. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/opengfw.nix>

## services.opengfw.settings

Settings passed to OpenGFW. Example config Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/opengfw.nix>

## services.opengfw.settingsFile

Path to file containing OpenGFW settings. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/opengfw.nix>

## services.opengfw.user

Username of the OpenGFW user. Type: (optionally newline-terminated) single-line string Default: "opengfw" Declared by: <nixpkgs/nixos/modules/services/networking/opengfw.nix>
