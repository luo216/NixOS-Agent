---
module: services.grafana.settings.server
option_count: 17
source: options.html
---

# services.grafana.settings.server

## services.grafana.settings.server.enable_gzip

Set this option to true to enable HTTP compression, this can improve transfer speed and bandwidth utilization. It is recommended that most users set it to true. By default it is set to false for compatibility reasons. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.server.cdn_url

Specify a full HTTP URL address to the root of your Grafana CDN assets. Grafana will add edition and version paths. For example, given a cdn url like https://cdn.myserver.com grafana will try to load a javascript file from http://cdn.myserver.com/grafana-oss/7.4.0/public/build/app.<hash>.js. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.server.cert_file

Path to the certificate file (if protocol is set to https or h2). Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.server.cert_key

Path to the certificate key file (if protocol is set to https or h2). Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.server.domain

The public facing domain name used to access grafana from a browser. This setting is only used in the default value of the root_url setting. If you set the latter manually, this option does not have to be specified. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.server.enforce_domain

Redirect to correct domain if the host header does not match the domain. Prevents DNS rebinding attacks. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.server.http_addr

Listening address. Note This setting intentionally varies from upstream’s default to be a bit more secure by default. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.server.http_port

Listening port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3000 Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.server.protocol

Which protocol to listen. Type: one of “http”, “https”, “h2”, “socket” Default: "http" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.server.read_timeout

Sets the maximum time using a duration format (5s/5m/5ms) before timing out read of an incoming request and closing idle connections. 0 means there is no timeout for reading the request. Type: string Default: "0" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.server.root_url

This is the full URL used to access Grafana from a web browser. This is important if you use Google or GitHub OAuth authentication (for the callback URL to be correct). This setting is also important if you have a reverse proxy in front of Grafana that exposes it through a subpath. In that case add the subpath to the end of this URL setting. Type: string Default: "%(protocol)s://%(domain)s:%(http_port)s/" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.server.router_logging

Set to true for Grafana to log all HTTP requests (not just errors). These are logged as Info level events to the Grafana log. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.server.serve_from_sub_path

Serve Grafana from subpath specified in the root_url setting. By default it is set to false for compatibility reasons. By enabling this setting and using a subpath in root_url above, e.g. root_url = "http://localhost:3000/grafana", Grafana is accessible on http://localhost:3000/grafana. If accessed without subpath, Grafana will redirect to an URL with the subpath. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.server.socket

Path where the socket should be created when protocol=socket. Make sure that Grafana has appropriate permissions before you change this setting. Type: string Default: "/run/grafana/grafana.sock" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.server.socket_gid

GID where the socket should be set when protocol=socket. Make sure that the target group is in the group of Grafana process and that Grafana process is the file owner before you change this setting. It is recommended to set the gid as http server user gid. Not set when the value is -1. Type: signed integer Default: -1 Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.server.socket_mode

Mode where the socket should be set when protocol=socket. Make sure that Grafana process is the file owner before you change this setting. Type: string Default: "0660" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.server.static_root_path

Root path for static assets. Type: string Default: "${package}/share/grafana/public" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>
