---
module: services.cyrus-imap
option_count: 10
source: options.html
---

# services.cyrus-imap

## services.cyrus-imap.enable

Whether to enable Cyrus IMAP, an email, contacts and calendar server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/mail/cyrus-imap.nix>

## services.cyrus-imap.cyrusConfigFile

Path to the configuration file used for Cyrus. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/mail/cyrus-imap.nix>

## services.cyrus-imap.cyrusSettings

Cyrus configuration settings. See cyrus.conf(5) Type: open submodule of attribute set of attribute set of (boolean or signed integer or list of string) Declared by: <nixpkgs/nixos/modules/services/mail/cyrus-imap.nix>

## services.cyrus-imap.debug

Whether to enable debugging messages for the Cyrus master process. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/mail/cyrus-imap.nix>

## services.cyrus-imap.group

Cyrus IMAP group name. If this is not set, a group named cyrus will be created. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/mail/cyrus-imap.nix>

## services.cyrus-imap.imapdConfigFile

Path to the configuration file used for cyrus-imap. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/mail/cyrus-imap.nix>

## services.cyrus-imap.imapdSettings

IMAP configuration settings. See imapd.conf(5) Type: open submodule of attribute set of (string or signed integer or boolean or list of string) Default: { admins = [ "cyrus" ]; allowplaintext = true; defaultdomain = "localhost"; defaultpartition = "default"; duplicate_db_path = "/run/cyrus/db/deliver.db"; hashimapspool = true; httpmodules = [ "carddav" "caldav" ]; mboxname_lockpath = "/run/cyrus/lock"; partition-default = "/var/lib/cyrus/storage"; popminpoll = 1; proc_path = "/run/cyrus/proc"; ptscache_db_path = "/run/cyrus/db/ptscache.db"; sasl_auto_transition = true; sasl_pwcheck_method = [ "saslauthd" ]; sievedir = "/var/lib/cyrus/sieve"; statuscache_db_path = "/run/cyrus/db/statuscache.db"; syslog_prefix = "cyrus"; tls_client_ca_dir = "/etc/ssl/certs"; tls_session_timeout = 1440; tls_sessions_db_path = "/run/cyrus/db/tls_sessions.db"; virtdomains = "on"; } Declared by: <nixpkgs/nixos/modules/services/mail/cyrus-imap.nix>

## services.cyrus-imap.listenQueue

Socket listen queue backlog size. See listen(2) for more information about a backlog. Default is 32, which may be increased if you have a very high connection rate. Type: signed integer Default: 32 Declared by: <nixpkgs/nixos/modules/services/mail/cyrus-imap.nix>

## services.cyrus-imap.tmpDBDir

Location where DB files are stored. Databases in this directory are recreated upon startup, so ideally they should live in ephemeral storage for best performance. Type: absolute path Default: "/run/cyrus/db" Declared by: <nixpkgs/nixos/modules/services/mail/cyrus-imap.nix>

## services.cyrus-imap.user

Cyrus IMAP user name. If this is not set, a user named cyrus will be created. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/mail/cyrus-imap.nix>
