---
module: services.rss2email.feeds.<name>
option_count: 2
source: options.html
---

# services.rss2email.feeds.<name>

## services.rss2email.feeds.<name>.to

Email address to which to send feed items. If null, this will not be set in the configuration file, and rss2email will make it default to rss2email.to. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/mail/rss2email.nix>

## services.rss2email.feeds.<name>.url

The URL at which to fetch the feed. Type: string Declared by: <nixpkgs/nixos/modules/services/mail/rss2email.nix>
