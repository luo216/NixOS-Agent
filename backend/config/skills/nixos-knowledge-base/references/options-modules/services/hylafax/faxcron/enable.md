---
module: services.hylafax.faxcron.enable
option_count: 2
source: options.html
---

# services.hylafax.faxcron.enable

## services.hylafax.faxcron.enable.frequency

purging old files from the spooling area with faxcron with the given frequency (see systemd.time(7)) Type: null or non-empty string Default: null Example: "daily" Declared by: <nixpkgs/nixos/modules/services/networking/hylafax/options.nix>

## services.hylafax.faxcron.enable.spoolInit

Whether to enable purging old files from the spooling area with faxcron each time the spooling area is initialized . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/hylafax/options.nix>
