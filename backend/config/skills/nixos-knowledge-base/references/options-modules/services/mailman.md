---
module: services.mailman
option_count: 9
source: options.html
---

# services.mailman

## services.mailman.enable

Enable Mailman on this host. Requires an active MTA on the host (e.g. Postfix). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/mail/mailman.nix>

## services.mailman.enablePostfix

Enable Postfix integration. Requires an active Postfix installation. If you want to use another MTA, set this option to false and configure settings in services.mailman.settings.mta. Refer to the Mailman manual for more info. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/mail/mailman.nix>

## services.mailman.packageSet

The mailmanPackages package to use. Type: attribute set Default: pkgs.mailmanPackages Declared by: <nixpkgs/nixos/modules/services/mail/mailman.nix>

## services.mailman.restApiPassFile

Path to the file containing the value for MAILMAN_REST_API_PASS. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/mail/mailman.nix>

## services.mailman.settings

Settings for mailman.cfg Type: attribute set of attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/services/mail/mailman.nix>

## services.mailman.siteOwner

Certain messages that must be delivered to a human, but which can’t be delivered to a list owner (e.g. a bounce from a list owner), will be sent to this address. It should point to a human. Type: string Example: "postmaster@example.org" Declared by: <nixpkgs/nixos/modules/services/mail/mailman.nix>

## services.mailman.webHosts

The list of hostnames and/or IP addresses from which the Mailman Web UI will accept requests. By default, “localhost” and “127.0.0.1” are enabled. All additional names under which your web server accepts requests for the UI must be listed here or incoming requests will be rejected. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/mail/mailman.nix>

## services.mailman.webSettings

Overrides for the default mailman-web Django settings. Type: attribute set Default: { } Declared by: <nixpkgs/nixos/modules/services/mail/mailman.nix>

## services.mailman.webUser

User to run mailman-web as Type: string Default: "mailman-web" Declared by: <nixpkgs/nixos/modules/services/mail/mailman.nix>
