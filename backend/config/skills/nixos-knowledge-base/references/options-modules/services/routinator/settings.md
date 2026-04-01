---
module: services.routinator.settings
option_count: 9
source: options.html
---

# services.routinator.settings

## services.routinator.settings.expire

An integer value specifying the number of seconds an RTR client is requested to use a data set if it cannot get an update before throwing it away and continuing with no data at all. Type: null or signed integer Default: 7200 Declared by: <nixpkgs/nixos/modules/services/networking/routinator.nix>

## services.routinator.settings.http-listen

An array of string values each providing an address and port on which the HTTP server should listen. Address and port should be separated by a colon. IPv6 address should be enclosed in square brackets. Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/routinator.nix>

## services.routinator.settings.log

A string specifying where to send log messages to. See, https://routinator.docs.nlnetlabs.nl/en/stable/manual-page.html#term-log Type: null or one of “default”, “stderr”, “syslog”, “file” Default: "default" Declared by: <nixpkgs/nixos/modules/services/networking/routinator.nix>

## services.routinator.settings.log-file

A string value containing the path to a file to which log messages will be appended if the log configuration value is set to file. In this case, the value is mandatory. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/routinator.nix>

## services.routinator.settings.log-level

A string value specifying the maximum log level for which log messages should be emitted. See, https://routinator.docs.nlnetlabs.nl/en/stable/manual-page.html#logging Type: null or one of “error”, “warn”, “info”, “debug” Default: "warn" Declared by: <nixpkgs/nixos/modules/services/networking/routinator.nix>

## services.routinator.settings.refresh

An integer value specifying the number of seconds Routinator should wait between consecutive validation runs in server mode. The next validation run will happen earlier, if objects expire earlier. Type: null or signed integer Default: 600 Declared by: <nixpkgs/nixos/modules/services/networking/routinator.nix>

## services.routinator.settings.repository-dir

The path where the collected RPKI data is stored. Type: absolute path Default: "/var/lib/routinator/rpki-cache" Declared by: <nixpkgs/nixos/modules/services/networking/routinator.nix>

## services.routinator.settings.retry

An integer value specifying the number of seconds an RTR client is requested to wait after it failed to receive a data set. Type: null or signed integer Default: 600 Declared by: <nixpkgs/nixos/modules/services/networking/routinator.nix>

## services.routinator.settings.rtr-listen

An array of string values each providing an address and port on which the RTR server should listen in TCP mode. Address and port should be separated by a colon. IPv6 address should be enclosed in square brackets. Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/routinator.nix>
