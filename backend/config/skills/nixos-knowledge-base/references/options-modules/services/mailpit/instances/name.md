---
module: services.mailpit.instances.<name>
option_count: 4
source: options.html
---

# services.mailpit.instances.<name>

## services.mailpit.instances.<name>.database

Specify the local database filename to store persistent data. If null, a temporary file will be created that will be removed when the application stops. It’s recommended to specify a relative path. The database will be written into the service’s state directory then. Type: null or string Default: null Example: "mailpit.db" Declared by: <nixpkgs/nixos/modules/services/mail/mailpit.nix>

## services.mailpit.instances.<name>.listen

HTTP bind interface and port for UI. Type: string Default: "127.0.0.1:8025" Declared by: <nixpkgs/nixos/modules/services/mail/mailpit.nix>

## services.mailpit.instances.<name>.max

Maximum number of emails to keep. If the number is exceeded, old emails will be deleted. Set to 0 to never prune old emails. Type: unsigned integer, meaning >=0 Default: 500 Declared by: <nixpkgs/nixos/modules/services/mail/mailpit.nix>

## services.mailpit.instances.<name>.smtp

SMTP bind interface and port. Type: string Default: "127.0.0.1:1025" Declared by: <nixpkgs/nixos/modules/services/mail/mailpit.nix>
