---
module: services.nullmailer.config
option_count: 12
source: options.html
---

# services.nullmailer.config

## services.nullmailer.config.adminaddr

If set, all recipients to users at either “localhost” (the literal string) or the canonical host name (from the me control attribute) are remapped to this address. This is provided to allow local daemons to be able to send email to “somebody@localhost” and have it go somewhere sensible instead of being bounced by your relay host. To send to multiple addresses, put them all on one line separated by a comma. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/mail/nullmailer.nix>

## services.nullmailer.config.allmailfrom

If set, content will override the envelope sender on all messages. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/mail/nullmailer.nix>

## services.nullmailer.config.defaultdomain

The content of this attribute is appended to any host name that does not contain a period (except localhost), including defaulthost and idhost. Defaults to the value of the me attribute, if it exists, otherwise the literal name defauldomain. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/mail/nullmailer.nix>

## services.nullmailer.config.defaulthost

The content of this attribute is appended to any address that is missing a host name. Defaults to the value of the me control attribute, if it exists, otherwise the literal name defaulthost. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/mail/nullmailer.nix>

## services.nullmailer.config.doublebounceto

If the original sender was empty (the original message was a delivery status or disposition notification), the double bounce is sent to the address in this attribute. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/mail/nullmailer.nix>

## services.nullmailer.config.helohost

Sets the environment variable $HELOHOST which is used by the SMTP protocol module to set the parameter given to the HELO command. Defaults to the value of the me configuration attribute. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/mail/nullmailer.nix>

## services.nullmailer.config.idhost

The content of this attribute is used when building the message-id string for the message. Defaults to the canonicalized value of defaulthost. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/mail/nullmailer.nix>

## services.nullmailer.config.maxpause

The maximum time to pause between successive queue runs, in seconds. Defaults to 24 hours (86400). Type: null or string or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/mail/nullmailer.nix>

## services.nullmailer.config.me

The fully-qualifiled host name of the computer running nullmailer. Defaults to the literal name me. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/mail/nullmailer.nix>

## services.nullmailer.config.pausetime

The minimum time to pause between successive queue runs when there are messages in the queue, in seconds. Defaults to 1 minute (60). Each time this timeout is reached, the timeout is doubled to a maximum of maxpause. After new messages are injected, the timeout is reset. If this is set to 0, nullmailer-send will exit immediately after going through the queue once (one-shot mode). Type: null or string or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/mail/nullmailer.nix>

## services.nullmailer.config.remotes

A list of remote servers to which to send each message. Each line contains a remote host name or address followed by an optional protocol string, separated by white space. See man 8 nullmailer-send for syntax and available options. WARNING: This is stored world-readable in the nix store. If you need to specify any secret credentials here, consider using the remotesFile option instead. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/mail/nullmailer.nix>

## services.nullmailer.config.sendtimeout

The time to wait for a remote module listed above to complete sending a message before killing it and trying again, in seconds. Defaults to 1 hour (3600). If this is set to 0, nullmailer-send will wait forever for messages to complete sending. Type: null or string or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/mail/nullmailer.nix>
