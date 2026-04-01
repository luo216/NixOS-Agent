---
module: services.munin-cron
option_count: 4
source: options.html
---

# services.munin-cron

## services.munin-cron.enable

Enable munin-cron. Takes care of all heavy lifting to collect data from nodes and draws graphs to html. Runs munin-update, munin-limits, munin-graphs and munin-html in that order. HTML output is in /var/www/munin/, configure your favourite webserver to serve static files. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/munin.nix>

## services.munin-cron.extraCSS

Custom styling for the HTML that munin-cron generates. This will be appended to the CSS files used by munin-cron and will thus take precedence over the builtin styles. Type: strings concatenated with “\n” Default: "" Example: '' /* A simple dark theme. */ html, body { background: #222222; } #header, #footer { background: #333333; } img.i, img.iwarn, img.icrit, img.iunkn { filter: invert(100%) hue-rotate(-30deg); } '' Declared by: <nixpkgs/nixos/modules/services/monitoring/munin.nix>

## services.munin-cron.extraGlobalConfig

munin.conf extra global configuration. See https://guide.munin-monitoring.org/en/latest/reference/munin.conf.html. Useful to setup notifications, see https://guide.munin-monitoring.org/en/latest/tutorial/alert.html Type: strings concatenated with “\n” Default: "" Example: '' contact.email.command mail -s "Munin notification for ''${var:host}" someone@example.com '' Declared by: <nixpkgs/nixos/modules/services/monitoring/munin.nix>

## services.munin-cron.hosts

Definitions of hosts of nodes to collect data from. Needs at least one host for cron to succeed. See https://guide.munin-monitoring.org/en/latest/reference/munin.conf.html Type: strings concatenated with “\n” Default: "" Example: '' [${config.networking.hostName}] address localhost '' Declared by: <nixpkgs/nixos/modules/services/monitoring/munin.nix>
