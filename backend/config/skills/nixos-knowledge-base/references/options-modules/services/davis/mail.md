---
module: services.davis.mail
option_count: 3
source: options.html
---

# services.davis.mail

## services.davis.mail.dsn

Mail DSN for sending emails. Mutually exclusive with services.davis.mail.dsnFile. Type: null or string Default: null Example: "smtp://username:password@example.com:25" Declared by: <nixpkgs/nixos/modules/services/web-apps/davis.nix>

## services.davis.mail.dsnFile

A file containing the mail DSN for sending emails. Mutually exclusive with servies.davis.mail.dsn. Type: null or string Default: null Example: "/run/secrets/davis-mail-dsn" Declared by: <nixpkgs/nixos/modules/services/web-apps/davis.nix>

## services.davis.mail.inviteFromAddress

Email address to send invitations from. Type: null or string Default: null Example: "no-reply@dav.example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/davis.nix>
