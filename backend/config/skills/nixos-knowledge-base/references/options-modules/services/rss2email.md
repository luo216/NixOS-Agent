---
module: services.rss2email
option_count: 5
source: options.html
---

# services.rss2email

## services.rss2email.enable

Whether to enable rss2email. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/mail/rss2email.nix>

## services.rss2email.config

The configuration to give rss2email. Default will use system-wide sendmail to send the email. This is rss2email’s default when running r2e new. This set contains key-value associations that will be set in the [DEFAULT] block along with the to parameter. See man r2e for more information on which parameters are accepted. Type: attribute set of (string or signed integer or boolean) Default: { } Declared by: <nixpkgs/nixos/modules/services/mail/rss2email.nix>

## services.rss2email.feeds

The feeds to watch. Type: attribute set of (submodule) Declared by: <nixpkgs/nixos/modules/services/mail/rss2email.nix>

## services.rss2email.interval

How often to check the feeds, in systemd interval format Type: string Default: "12h" Declared by: <nixpkgs/nixos/modules/services/mail/rss2email.nix>

## services.rss2email.to

Mail address to which to send emails Type: string Declared by: <nixpkgs/nixos/modules/services/mail/rss2email.nix>
