---
module: services.tlsrpt.reportd.settings
option_count: 8
source: options.html
---

# services.tlsrpt.reportd.settings

## services.tlsrpt.reportd.settings.contact_info

Contact information embedded into the reports. Type: string Example: "smtp-tls-reporting@example.com" Declared by: <nixpkgs/nixos/modules/services/mail/tlsrpt.nix>

## services.tlsrpt.reportd.settings.dbname

Path to the sqlite database. Type: string Default: "/var/lib/tlsrpt/reportd.sqlite" Declared by: <nixpkgs/nixos/modules/services/mail/tlsrpt.nix>

## services.tlsrpt.reportd.settings.fetchers

Comma-separated list of fetcher programs that retrieve collectd data. Type: string Default: lib.getExe' cfg.package "tlsrpt-fetcher" Declared by: <nixpkgs/nixos/modules/services/mail/tlsrpt.nix>

## services.tlsrpt.reportd.settings.http_script

Call to an HTTPS client, that accepts the URL on the commandline and the request body from stdin. Type: null or string Default: ${lib.getExe pkgs.curl} --silent --header 'Content-Type: application/tlsrpt+gzip' --data-binary @- Declared by: <nixpkgs/nixos/modules/services/mail/tlsrpt.nix>

## services.tlsrpt.reportd.settings.log_level

Level of log messages to emit. Type: one of “debug”, “info”, “warning”, “error”, “critical” Default: "info" Declared by: <nixpkgs/nixos/modules/services/mail/tlsrpt.nix>

## services.tlsrpt.reportd.settings.organization_name

Name of the organization sending out the reports. Type: string Example: "ACME Corp." Declared by: <nixpkgs/nixos/modules/services/mail/tlsrpt.nix>

## services.tlsrpt.reportd.settings.sender_address

Sender address used for reports. Type: string Example: "noreply@example.com" Declared by: <nixpkgs/nixos/modules/services/mail/tlsrpt.nix>

## services.tlsrpt.reportd.settings.sendmail_script

Path to a sendmail-compatible executable for delivery reports. Type: null or string Default: if config.services.postfix.enable && config.services.postfix.setSendmail then "/run/wrappers/bin/sendmail -i -t" else null Declared by: <nixpkgs/nixos/modules/services/mail/tlsrpt.nix>
