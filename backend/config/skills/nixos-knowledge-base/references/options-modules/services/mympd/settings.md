---
module: services.mympd.settings
option_count: 2
source: options.html
---

# services.mympd.settings

## services.mympd.settings.http_port

The HTTP port where mympd’s web interface will be available. The HTTPS/SSL port can be configured via config. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Example: "8080" Declared by: <nixpkgs/nixos/modules/services/audio/mympd.nix>

## services.mympd.settings.ssl

Whether to enable listening on the SSL port. Refer to https://jcorporation.github.io/myMPD/020-configuration/configuration-files#ssl-options for more information. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/audio/mympd.nix>
