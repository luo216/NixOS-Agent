---
module: services.errbot.instances.<name>
option_count: 7
source: options.html
---

# services.errbot.instances.<name>

## services.errbot.instances.<name>.admins

List of identifiers of errbot admins. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/misc/errbot.nix>

## services.errbot.instances.<name>.backend

Errbot backend name. Type: string Default: "XMPP" Declared by: <nixpkgs/nixos/modules/services/misc/errbot.nix>

## services.errbot.instances.<name>.dataDir

Data directory for errbot instance. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/misc/errbot.nix>

## services.errbot.instances.<name>.extraConfig

String to be appended to the config verbatim Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/misc/errbot.nix>

## services.errbot.instances.<name>.identity

Errbot identity configuration Type: attribute set Declared by: <nixpkgs/nixos/modules/services/misc/errbot.nix>

## services.errbot.instances.<name>.logLevel

Errbot log level Type: string Default: "INFO" Declared by: <nixpkgs/nixos/modules/services/misc/errbot.nix>

## services.errbot.instances.<name>.plugins

List of errbot plugin derivations. Type: list of package Default: [ ] Declared by: <nixpkgs/nixos/modules/services/misc/errbot.nix>
