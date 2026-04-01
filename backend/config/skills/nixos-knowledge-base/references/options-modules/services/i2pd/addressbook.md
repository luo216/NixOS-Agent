---
module: services.i2pd.addressbook
option_count: 2
source: options.html
---

# services.i2pd.addressbook

## services.i2pd.addressbook.defaulturl

AddressBook subscription URL for initial setup Type: string Default: "http://joajgazyztfssty4w2on5oaqksz6tqoxbduy553y34mf4byv6gpq.b32.i2p/export/alive-hosts.txt" Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.addressbook.subscriptions

AddressBook subscription URLs Type: list of string Default: [ "http://inr.i2p/export/alive-hosts.txt" "http://i2p-projekt.i2p/hosts.txt" "http://stats.i2p/cgi-bin/newhosts.txt" ] Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>
