---
module: services.dovecot2
option_count: 25
source: options.html
---

# services.dovecot2

## services.dovecot2.enable

Whether to enable the dovecot 2.x POP3/IMAP server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>

## services.dovecot2.enableDHE

Whether to enable ssl_dh and generation of primes for the key exchange. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>

## services.dovecot2.enableImap

Whether to enable starting the IMAP listener (when Dovecot is enabled). Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>

## services.dovecot2.enableLmtp

Whether to enable starting the LMTP listener (when Dovecot is enabled). Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>

## services.dovecot2.enablePAM

Whether to enable creating a own Dovecot PAM service and configure PAM user logins. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>

## services.dovecot2.enablePop3

Whether to enable starting the POP3 listener (when Dovecot is enabled). Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>

## services.dovecot2.enableQuota

Whether to enable the dovecot quota service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>

## services.dovecot2.configFile

Config file used for the whole dovecot configuration. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>

## services.dovecot2.createMailUser

Whether to enable automatically creating the user given in services.dovecot.user and the group given in services.dovecot.group. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>

## services.dovecot2.extraConfig

Additional entries to put verbatim into Dovecot’s config file. Type: strings concatenated with “\n” Default: "" Example: "mail_debug = yes" Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>

## services.dovecot2.group

Dovecot group name. Type: string Default: "dovecot2" Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>

## services.dovecot2.mailGroup

Default group to store mail for virtual users. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>

## services.dovecot2.mailLocation

Location that dovecot will use for mail folders. Dovecot mail_location option. Type: string Default: "maildir:/var/spool/mail/%u" Example: "maildir:~/mail:INBOX=/var/spool/mail/%u" Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>

## services.dovecot2.mailPlugins

Additional entries to add to the mail_plugins variable, globally and per protocol Type: submodule Default: { globally = { enable = [ ]; }; perProtocol = { }; } Example: { globally = { enable = [ "acl" ]; }; perProtocol = { imap = { enable = [ "imap_acl" ]; }; }; } Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>

## services.dovecot2.mailUser

Default user to store mail for virtual users. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>

## services.dovecot2.mailboxes

Configure mailboxes and auto create or subscribe them. Type: (attribute set of (submodule)) or (list of unspecified value) convertible to it Default: { } Example: { Spam = { specialUse = "Junk"; auto = "create"; }; } Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>

## services.dovecot2.pluginSettings

Plugin settings for dovecot in general, e.g. sieve, sieve_default, etc. Some of the other knobs of this module will influence by default the plugin settings, but you can still override any plugin settings. If you override a plugin setting, its value is cleared and you have to copy over the defaults. Type: attribute set of (string or package) Default: { } Example: { sieve = "file:~/sieve;active=~/.dovecot.sieve"; } Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>

## services.dovecot2.protocols

Additional listeners to start when Dovecot is enabled. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>

## services.dovecot2.quotaGlobalPerUser

Quota limit for the user in bytes. Supports suffixes b, k, M, G, T and %. Type: string Default: "100G" Example: "10G" Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>

## services.dovecot2.quotaPort

The Port the dovecot quota service binds to. If using postfix, add check_policy_service inet:localhost:12340 to your smtpd_recipient_restrictions in your postfix config. Type: string Default: "12340" Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>

## services.dovecot2.showPAMFailure

Whether to enable showing the PAM failure message on authentication error (useful for OTPW). Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>

## services.dovecot2.sslCACert

Path to the server’s CA certificate key. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>

## services.dovecot2.sslServerCert

Path to the server’s public key. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>

## services.dovecot2.sslServerKey

Path to the server’s private key. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>

## services.dovecot2.user

Dovecot user name. Type: string Default: "dovecot2" Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>
