---
module: services.prometheus.exporters.mail.configuration
option_count: 4
source: options.html
---

# services.prometheus.exporters.mail.configuration

## services.prometheus.exporters.mail.configuration.disableFileDeletion

Disables the exporter’s function to delete probing mails. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mail.configuration.mailCheckTimeout

Timeout until mails are considered “didn’t make it”. Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mail.configuration.monitoringInterval

Time interval between two probe attempts. Type: string Example: "10s" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mail.configuration.servers

List of servers that should be probed. Note: if your mailserver has rspamd(8) configured, it can happen that emails from this exporter are marked as spam. It’s possible to work around the issue with a config like this: { services.rspamd.locals."multimap.conf".text = '' ALLOWLIST_PROMETHEUS { filter = "email:domain:tld"; type = "from"; map = "${pkgs.writeText "allowmap" "domain.tld"}"; score = -100.0; } ''; } Type: list of (submodule) Default: [ ] Example: [ { name = "testserver"; server = "smtp.domain.tld"; port = 587; from = "exporteruser@domain.tld"; to = "exporteruser@domain.tld"; detectionDir = "/path/to/Maildir/new"; } ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
