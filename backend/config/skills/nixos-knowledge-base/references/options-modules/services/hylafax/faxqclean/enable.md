---
module: services.hylafax.faxqclean.enable
option_count: 2
source: options.html
---

# services.hylafax.faxqclean.enable

## services.hylafax.faxqclean.enable.frequency

Purge old files from the spooling area with faxcron with the given frequency (see systemd.time(7)). Type: null or non-empty string Default: null Example: "daily" Declared by: <nixpkgs/nixos/modules/services/networking/hylafax/options.nix>

## services.hylafax.faxqclean.enable.spoolInit

Whether to enable purging old files from the spooling area with faxqclean each time the spooling area is initialized . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/hylafax/options.nix>
