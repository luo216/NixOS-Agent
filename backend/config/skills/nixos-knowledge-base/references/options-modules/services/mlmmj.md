---
module: services.mlmmj
option_count: 6
source: options.html
---

# services.mlmmj

## services.mlmmj.enable

Enable mlmmj Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/mail/mlmmj.nix>

## services.mlmmj.group

mailinglist local group Type: string Default: "mlmmj" Declared by: <nixpkgs/nixos/modules/services/mail/mlmmj.nix>

## services.mlmmj.listDomain

Set the mailing list domain Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/mail/mlmmj.nix>

## services.mlmmj.mailLists

The collection of hosted maillists Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/mail/mlmmj.nix>

## services.mlmmj.maintInterval

Time interval between mlmmj-maintd runs, see systemd.time(7) for format information. Type: string Default: "20min" Declared by: <nixpkgs/nixos/modules/services/mail/mlmmj.nix>

## services.mlmmj.user

mailinglist local user Type: string Default: "mlmmj" Declared by: <nixpkgs/nixos/modules/services/mail/mlmmj.nix>
