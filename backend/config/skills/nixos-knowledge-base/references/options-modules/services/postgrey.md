---
module: services.postgrey
option_count: 15
source: options.html
---

# services.postgrey

## services.postgrey.enable

Whether to run the Postgrey daemon Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/mail/postgrey.nix>

## services.postgrey.IPv4CIDR

Strip N bits from IPv4 addresses if lookupBySubnet is true Type: unsigned integer, meaning >=0 Default: 24 Declared by: <nixpkgs/nixos/modules/services/mail/postgrey.nix>

## services.postgrey.IPv6CIDR

Strip N bits from IPv6 addresses if lookupBySubnet is true Type: unsigned integer, meaning >=0 Default: 64 Declared by: <nixpkgs/nixos/modules/services/mail/postgrey.nix>

## services.postgrey.autoWhitelist

Whitelist clients after successful delivery of N messages Type: null or (positive integer, meaning >0) Default: 5 Declared by: <nixpkgs/nixos/modules/services/mail/postgrey.nix>

## services.postgrey.delay

Greylist for N seconds Type: unsigned integer, meaning >=0 Default: 300 Declared by: <nixpkgs/nixos/modules/services/mail/postgrey.nix>

## services.postgrey.greylistAction

Response status for greylisted messages (see access(5)) Type: string Default: "DEFER_IF_PERMIT" Declared by: <nixpkgs/nixos/modules/services/mail/postgrey.nix>

## services.postgrey.greylistHeader

Prepend header to greylisted mails; use %%t for seconds delayed due to greylisting, %%v for the version of postgrey, %%d for the date, and %%h for the host Type: string Default: "X-Greylist: delayed %%t seconds by postgrey-%%v at %%h; %%d" Declared by: <nixpkgs/nixos/modules/services/mail/postgrey.nix>

## services.postgrey.greylistText

Response status text for greylisted messages; use %%s for seconds left until greylisting is over and %%r for mail domain of recipient Type: string Default: "Greylisted for %%s seconds" Declared by: <nixpkgs/nixos/modules/services/mail/postgrey.nix>

## services.postgrey.lookupBySubnet

Strip the last N bits from IP addresses, determined by IPv4CIDR and IPv6CIDR Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/mail/postgrey.nix>

## services.postgrey.maxAge

Delete entries from whitelist if they haven’t been seen for N days Type: unsigned integer, meaning >=0 Default: 35 Declared by: <nixpkgs/nixos/modules/services/mail/postgrey.nix>

## services.postgrey.privacy

Store data using one-way hash functions (SHA1) Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/mail/postgrey.nix>

## services.postgrey.retryWindow

Allow N days for the first retry. Use string with appended ‘h’ to specify time in hours Type: string or (unsigned integer, meaning >=0) Default: 2 Example: "12h" Declared by: <nixpkgs/nixos/modules/services/mail/postgrey.nix>

## services.postgrey.socket

Socket to bind to Type: (submodule) or (submodule) Default: { mode = "0777"; path = "/run/postgrey.sock"; } Example: { addr = "127.0.0.1"; port = 10030; } Declared by: <nixpkgs/nixos/modules/services/mail/postgrey.nix>

## services.postgrey.whitelistClients

Client address whitelist files (see postgrey(8)) Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/mail/postgrey.nix>

## services.postgrey.whitelistRecipients

Recipient address whitelist files (see postgrey(8)) Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/mail/postgrey.nix>
