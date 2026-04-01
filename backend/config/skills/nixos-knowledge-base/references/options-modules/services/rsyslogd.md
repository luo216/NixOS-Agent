---
module: services.rsyslogd
option_count: 4
source: options.html
---

# services.rsyslogd

## services.rsyslogd.enable

Whether to enable syslogd. Note that systemd also logs syslog messages, so you normally don’t need to run syslogd. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/logging/rsyslogd.nix>

## services.rsyslogd.defaultConfig

The default syslog.conf file configures a fairly standard setup of log files, which can be extended by means of extraConfig. Type: strings concatenated with “\n” Default: '' # "local1" is used for dhcpd messages. local1.* -/var/log/dhcpd mail.* -/var/log/mail *.=warning;*.=err -/var/log/warn *.crit /var/log/warn *.*;mail.none;local1.none -/var/log/messages '' Declared by: <nixpkgs/nixos/modules/services/logging/rsyslogd.nix>

## services.rsyslogd.extraConfig

Additional text appended to syslog.conf, i.e. the contents of defaultConfig. Type: strings concatenated with “\n” Default: "" Example: "news.* -/var/log/news" Declared by: <nixpkgs/nixos/modules/services/logging/rsyslogd.nix>

## services.rsyslogd.extraParams

Additional parameters passed to rsyslogd. Type: list of string Default: [ ] Example: [ "-m 0" ] Declared by: <nixpkgs/nixos/modules/services/logging/rsyslogd.nix>
