---
module: services.sslh.settings
option_count: 5
source: options.html
---

# services.sslh.settings

## services.sslh.settings.numeric

Whether to disable reverse DNS lookups, thus keeping IP address literals in the log. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/sslh.nix>

## services.sslh.settings.protocols

List of protocols sslh will probe for and redirect. Each protocol entry consists of: name: name of the probe. service: libwrap service name (see hosts_access(5)), host, port: where to connect when this probe succeeds, log_level: to log incoming connections, transparent: proxy this protocol transparently, etc. See the documentation for all options, including probe-specific ones. Type: list of attribute set of (libconfig value) Default: [ { host = "localhost"; name = "ssh"; port = "22"; service = "ssh"; } { host = "localhost"; name = "openvpn"; port = "1194"; } { host = "localhost"; name = "xmpp"; port = "5222"; } { host = "localhost"; name = "http"; port = "80"; } { host = "localhost"; name = "tls"; port = "443"; } { host = "localhost"; name = "anyprot"; port = "443"; } ] Declared by: <nixpkgs/nixos/modules/services/networking/sslh.nix>

## services.sslh.settings.timeout

Timeout in seconds. Type: unsigned integer, meaning >=0 Default: 2 Declared by: <nixpkgs/nixos/modules/services/networking/sslh.nix>

## services.sslh.settings.transparent

Whether the services behind sslh (Apache, sshd and so on) will see the external IP and ports as if the external world connected directly to them. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/sslh.nix>

## services.sslh.settings.verbose-connections

Where to log connections information. Possible values are: don’t log anything write log to stdout write log to syslog write log to both stdout and syslog write to a log file (sslh.settings.logfile) Type: integer between 0 and 4 (both inclusive) Default: 0 Declared by: <nixpkgs/nixos/modules/services/networking/sslh.nix>
