---
module: services.discourse.mail
option_count: 2
source: options.html
---

# services.discourse.mail

## services.discourse.mail.contactEmailAddress

Email address of key contact responsible for this site. Used for critical notifications, as well as on the /about contact form for urgent matters. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>

## services.discourse.mail.notificationEmailAddress

The from: email address used when sending all essential system emails. The domain specified here must have SPF, DKIM and reverse PTR records set correctly for email to arrive. Type: string Default: "${if config.services.discourse.mail.incoming.enable then "notifications" else "noreply"}@${config.services.discourse.hostname}" Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>
