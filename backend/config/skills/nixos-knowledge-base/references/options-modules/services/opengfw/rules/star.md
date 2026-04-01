---
module: services.opengfw.rules.*
option_count: 5
source: options.html
---

# services.opengfw.rules.*

## services.opengfw.rules.*.action

Action of the rule. Supported actions Type: one of “allow”, “block”, “drop”, “modify” Default: "allow" Example: "block" Declared by: <nixpkgs/nixos/modules/services/networking/opengfw.nix>

## services.opengfw.rules.*.expr

Expr Language expression using analyzers and functions. Type: string Example: "dns != nil && dns.qr && any(dns.questions, {.name endsWith \"google.com\"})" Declared by: <nixpkgs/nixos/modules/services/networking/opengfw.nix>

## services.opengfw.rules.*.log

Whether to enable logging for the rule. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/networking/opengfw.nix>

## services.opengfw.rules.*.modifier

Modification of specified packets when using the modify action. Available modifiers Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/opengfw.nix>

## services.opengfw.rules.*.name

Name of the rule. Type: (optionally newline-terminated) single-line string Example: "block google dns" Declared by: <nixpkgs/nixos/modules/services/networking/opengfw.nix>
