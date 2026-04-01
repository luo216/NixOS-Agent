---
module: services.mailman.hyperkitty
option_count: 2
source: options.html
---

# services.mailman.hyperkitty

## services.mailman.hyperkitty.enable

Whether to enable the Hyperkitty archiver for Mailman. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/mail/mailman.nix>

## services.mailman.hyperkitty.baseUrl

Where can Mailman connect to Hyperkitty’s internal API, preferably on localhost? Type: string Default: "http://localhost:18507/archives/" Declared by: <nixpkgs/nixos/modules/services/mail/mailman.nix>
