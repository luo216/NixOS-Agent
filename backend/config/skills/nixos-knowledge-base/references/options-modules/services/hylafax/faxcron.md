---
module: services.hylafax.faxcron
option_count: 3
source: options.html
---

# services.hylafax.faxcron

## services.hylafax.faxcron.infoDays

Set the expiration time for data in the remote machine information directory in days. Type: positive integer, meaning >0 Default: 30 Declared by: <nixpkgs/nixos/modules/services/networking/hylafax/options.nix>

## services.hylafax.faxcron.logDays

Set the expiration time for session trace log files in days. Type: positive integer, meaning >0 Default: 30 Declared by: <nixpkgs/nixos/modules/services/networking/hylafax/options.nix>

## services.hylafax.faxcron.rcvDays

Set the expiration time for files in the received facsimile queue in days. Type: positive integer, meaning >0 Default: 7 Declared by: <nixpkgs/nixos/modules/services/networking/hylafax/options.nix>
