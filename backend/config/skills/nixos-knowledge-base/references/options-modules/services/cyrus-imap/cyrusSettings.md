---
module: services.cyrus-imap.cyrusSettings
option_count: 4
source: options.html
---

# services.cyrus-imap.cyrusSettings

## services.cyrus-imap.cyrusSettings.DAEMON

This section lists long running daemons to start before any SERVICES are spawned. master(8) will ensure that these processes are running, restarting any process which dies or forks. All listed processes will be shutdown when master(8) is exiting. Type: unspecified value Default: { } Declared by: <nixpkgs/nixos/modules/services/mail/cyrus-imap.nix>

## services.cyrus-imap.cyrusSettings.EVENTS

This section lists processes that should be run at specific intervals, similar to cron jobs. This section is typically used to perform scheduled cleanup/maintenance. Type: unspecified value Default: { checkpoint = { cmd = [ "ctl_cyrusdb" "-c" ]; period = 30; }; deleteprune = { at = 430; cmd = [ "cyr_expire" "-E" "4" "-D" "28" ]; }; delprune = { at = 400; cmd = [ "cyr_expire" "-E" "3" ]; }; expungeprune = { at = 445; cmd = [ "cyr_expire" "-E" "4" "-X" "28" ]; }; tlsprune = { at = 400; cmd = [ "tls_prune" ]; }; } Declared by: <nixpkgs/nixos/modules/services/mail/cyrus-imap.nix>

## services.cyrus-imap.cyrusSettings.SERVICES

This section is the heart of the cyrus.conf file. It lists the processes that should be spawned to handle client connections made on certain Internet/UNIX sockets. Type: unspecified value Default: { imap = { cmd = [ "imapd" ]; listen = "imap"; prefork = 0; }; lmtpunix = { cmd = [ "lmtpd" ]; listen = "/run/cyrus/lmtp"; prefork = 0; }; notify = { cmd = [ "notifyd" ]; listen = "/run/cyrus/notify"; prefork = 0; proto = "udp"; }; pop3 = { cmd = [ "pop3d" ]; listen = "pop3"; prefork = 0; }; } Declared by: <nixpkgs/nixos/modules/services/mail/cyrus-imap.nix>

## services.cyrus-imap.cyrusSettings.START

This section lists the processes to run before any SERVICES are spawned. This section is typically used to initialize databases. Master itself will not startup until all tasks in START have completed, so put no blocking commands here. Type: unspecified value Default: { recover = { cmd = [ "ctl_cyrusdb" "-r" ]; }; } Declared by: <nixpkgs/nixos/modules/services/mail/cyrus-imap.nix>
