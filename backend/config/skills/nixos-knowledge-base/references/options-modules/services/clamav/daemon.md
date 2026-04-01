---
module: services.clamav.daemon
option_count: 2
source: options.html
---

# services.clamav.daemon

## services.clamav.daemon.enable

Whether to enable ClamAV clamd daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/clamav.nix>

## services.clamav.daemon.settings

ClamAV configuration. Refer to https://linux.die.net/man/5/clamd.conf, for details on supported values. Type: attribute set of (boolean or signed integer or string or list of string) Default: { } Declared by: <nixpkgs/nixos/modules/services/security/clamav.nix>
