---
module: services.tlsrpt.collectd
option_count: 2
source: options.html
---

# services.tlsrpt.collectd

## services.tlsrpt.collectd.extraFlags

List of extra flags to pass to the tlsrpt-reportd executable. See tlsrpt-collectd(1) for possible flags. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/mail/tlsrpt.nix>

## services.tlsrpt.collectd.settings

Flags from tlsrpt-collectd(1) as key-value pairs. Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Declared by: <nixpkgs/nixos/modules/services/mail/tlsrpt.nix>
