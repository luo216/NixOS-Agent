---
module: environment.wvdial
option_count: 2
source: options.html
---

# environment.wvdial

## environment.wvdial.dialerDefaults

Contents of the “Dialer Defaults” section of <filename>/etc/wvdial.conf</filename>. Type: string Default: "" Example: "Init1 = AT+CGDCONT=1,\"IP\",\"internet.t-mobile\"" Declared by: <nixpkgs/nixos/modules/services/networking/wvdial.nix>

## environment.wvdial.pppDefaults

Default ppp settings for wvdial. Type: string Default: '' noipdefault usepeerdns defaultroute persist noauth '' Declared by: <nixpkgs/nixos/modules/services/networking/wvdial.nix>
