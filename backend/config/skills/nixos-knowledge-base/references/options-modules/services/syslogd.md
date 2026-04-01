---
module: services.syslogd
option_count: 6
source: options.html
---

# services.syslogd

## services.syslogd.enable

Whether to enable syslogd. Note that systemd also logs syslog messages, so you normally don’t need to run syslogd. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/logging/syslogd.nix>

## services.syslogd.enableNetworkInput

Accept logging through UDP. Option -r of syslogd(8). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/logging/syslogd.nix>

## services.syslogd.defaultConfig

The default syslog.conf file configures a fairly standard setup of log files, which can be extended by means of extraConfig. Type: strings concatenated with “\n” Default: '' # Send emergency messages to all users. *.emerg * # "local1" is used for dhcpd messages. local1.* -/var/log/dhcpd mail.* -/var/log/mail *.=warning;*.=err -/var/log/warn *.crit /var/log/warn *.*;mail.none;local1.none -/var/log/messages '' Declared by: <nixpkgs/nixos/modules/services/logging/syslogd.nix>

## services.syslogd.extraConfig

Additional text appended to syslog.conf, i.e. the contents of defaultConfig. Type: strings concatenated with “\n” Default: "" Example: "news.* -/var/log/news" Declared by: <nixpkgs/nixos/modules/services/logging/syslogd.nix>

## services.syslogd.extraParams

Additional parameters passed to syslogd. Type: list of string Default: [ ] Example: [ "-m 0" ] Declared by: <nixpkgs/nixos/modules/services/logging/syslogd.nix>

## services.syslogd.tty

The tty device on which syslogd will print important log messages. Leave this option blank to disable tty logging. Type: string Default: "tty10" Declared by: <nixpkgs/nixos/modules/services/logging/syslogd.nix>
