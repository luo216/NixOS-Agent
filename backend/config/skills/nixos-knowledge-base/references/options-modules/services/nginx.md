---
module: services.nginx
option_count: 49
source: options.html
---

# services.nginx

## services.nginx.enable

Whether to enable Nginx Web Server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.enableQuicBPF

Enables routing of QUIC packets using eBPF. When enabled, this allows to support QUIC connection migration. The directive is only supported on Linux 5.7+. Note that enabling this option will make nginx run with extended capabilities that are usually limited to processes running as root namely CAP_SYS_ADMIN and CAP_NET_ADMIN. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.enableReload

Reload nginx when configuration file changes (instead of restart). The configuration file is exposed at /etc/nginx/nginx.conf. See also systemd.services.*.restartIfChanged. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.package

Nginx package to use. This defaults to the stable version. Note that the nginx team recommends to use the mainline version which available in nixpkgs as nginxMainline. Supported Nginx forks include angie, openresty and tengine. Type: package Default: pkgs.nginxStable Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.additionalModules

Additional third-party nginx modules to install. Packaged modules are available in pkgs.nginxModules. Type: list of attribute set of anything Default: [ ] Example: [ pkgs.nginxModules.echo ] Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.appendConfig

Configuration lines appended to the generated Nginx configuration file. Commonly used by different modules providing http snippets. appendConfig can be specified more than once and its value will be concatenated (contrary to config which can be set only once). Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.appendHttpConfig

Configuration lines to be appended to the generated http block. This is mutually exclusive with using config and httpConfig for specifying the whole http block verbatim. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.clientMaxBodySize

Set nginx global client_max_body_size. Type: string Default: "10m" Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.commonHttpConfig

With nginx you must provide common http context definitions before they are used, e.g. log_format, resolver, etc. inside of server or location contexts. Use this attribute to set these definitions at the appropriate location. Type: strings concatenated with “\n” Default: "" Example: '' resolver 127.0.0.1 valid=5s; log_format myformat '$remote_addr - $remote_user [$time_local] ' '"$request" $status $body_bytes_sent ' '"$http_referer" "$http_user_agent"'; '' Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.config

Verbatim nginx.conf configuration. This is mutually exclusive to any other config option for nginx.conf except for services.nginx.appendConfig services.nginx.httpConfig services.nginx.logError If additional verbatim config in addition to other options is needed, services.nginx.appendConfig should be used instead. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.defaultHTTPListenPort

If vhosts do not specify listen.port, use these ports for HTTP by default. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 80 Example: 8080 Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.defaultListen

If vhosts do not specify listen, use these addresses by default. This option takes precedence over defaultListenAddresses and other listen-related defaults options. Type: list of (submodule) Default: [ ] Example: [ { addr = "10.0.0.12"; proxyProtocol = true; ssl = true; } { addr = "0.0.0.0"; } { addr = "[::0]"; } ] Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.defaultListenAddresses

If vhosts do not specify listenAddresses, use these addresses by default. This is akin to writing defaultListen = [ { addr = "0.0.0.0" } ]. Type: list of string Default: [ "0.0.0.0" ] ++ lib.optional config.networking.enableIPv6 "[::0]" Example: [ "10.0.0.12" "[2002:a00:1::]" ] Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.defaultMimeTypes

Default MIME types for NGINX, as MIME types definitions from NGINX are very incomplete, we use by default the ones bundled in the mailcap package, used by most of the other Linux distributions. Type: absolute path Default: $''{pkgs.mailcap}/etc/nginx/mime.types Example: $''{pkgs.nginx}/conf/mime.types Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.defaultSSLListenPort

If vhosts do not specify listen.port, use these ports for SSL by default. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 443 Example: 8443 Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.eventsConfig

Configuration lines to be set inside the events block. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.experimentalZstdSettings

Enable alpha quality zstd module with recommended settings. Learn more about compression in Zstd format here. This adds pkgs.nginxModules.zstd to services.nginx.additionalModules. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.group

Group account under which nginx runs. Type: string Default: "nginx" Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.httpConfig

Configuration lines to be set inside the http block. This is mutually exclusive with the structured configuration via virtualHosts and the recommendedXyzSettings configuration options. See appendHttpConfig for appending to the generated http block. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.logError

Configures logging. The first parameter defines a file that will store the log. The special value stderr selects the standard error file. Logging to syslog can be configured by specifying the “syslog:” prefix. The second parameter determines the level of logging, and can be one of the following: debug, info, notice, warn, error, crit, alert, or emerg. Log levels above are listed in the order of increasing severity. Setting a certain log level will cause all messages of the specified and more severe log levels to be logged. If this parameter is omitted then error is used. Type: string Default: "stderr" Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.mapHashBucketSize

Sets the bucket size for the map variables hash tables. Default value depends on the processor’s cache line size. Refer to the nginx docs on hashes for more information. Type: null or (positive integer, meaning >0) Default: null Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.mapHashMaxSize

Sets the maximum size of the map variables hash tables. Type: null or (positive integer, meaning >0) Default: null Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.preStart

Shell commands executed before the service’s nginx is started. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.prependConfig

Configuration lines prepended to the generated Nginx configuration file. Can for example be used to load modules. prependConfig can be specified more than once and its value will be concatenated (contrary to config which can be set only once). Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.proxyCachePath

Configure a proxy cache path entry. See https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_path for documentation. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.proxyResolveWhileRunning

Resolves domains of proxyPass targets at runtime and not only at startup. This can be used as a workaround if nginx fails to start because of not-yet-working DNS. :::{.warn} services.nginx.resolver must be set for this option to work. ::: Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.proxyTimeout

Change the proxy related timeouts in recommendedProxySettings. Type: string Default: "60s" Example: "20s" Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.recommendedBrotliSettings

Enable recommended brotli settings. Learn more about compression in Brotli format here. This adds pkgs.nginxModules.brotli to services.nginx.additionalModules. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.recommendedGzipSettings

Enable recommended gzip settings. Learn more about compression in Gzip format here. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.recommendedOptimisation

Enable recommended optimisation settings. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.recommendedProxySettings

Whether to enable recommended proxy settings if a vhost does not specify the option manually. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.recommendedTlsSettings

Enable recommended TLS settings. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.recommendedUwsgiSettings

Whether to enable recommended uwsgi settings if a vhost does not specify the option manually. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.resolver

Configures name servers used to resolve names of upstream servers into addresses Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.serverNamesHashBucketSize

Sets the bucket size for the server names hash tables. Default value depends on the processor’s cache line size. Type: null or (positive integer, meaning >0) Default: null Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.serverNamesHashMaxSize

Sets the maximum size of the server names hash tables. Type: null or (positive integer, meaning >0) Default: null Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.serverTokens

Show nginx version in headers and error pages. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.sslCiphers

Ciphers to choose from when negotiating TLS handshakes. Type: null or string Default: "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384:DHE-RSA-CHACHA20-POLY1305" Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.sslDhparam

Path to DH parameters file. Type: null or absolute path Default: null Example: "/path/to/dhparams.pem" Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.sslProtocols

Allowed TLS protocol versions. Type: string Default: "TLSv1.2 TLSv1.3" Example: "TLSv1 TLSv1.1 TLSv1.2 TLSv1.3" Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.statusPage

Enable status page reachable from localhost on http://127.0.0.1/nginx_status. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.streamConfig

Configuration lines to be set inside the stream block. Type: strings concatenated with “\n” Default: "" Example: '' server { listen 127.0.0.1:53 udp reuseport; proxy_timeout 20s; proxy_pass 192.168.0.1:53535; } '' Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.typesHashMaxSize

Sets the maximum size of the types hash tables (types_hash_max_size). It is recommended that the minimum size possible size is used. If recommendedOptimisation is disabled, nginx would otherwise fail to start since the mailmap mime.types database has more entries than the nginx default value 1024. Type: positive integer, meaning >0 Default: if config.services.nginx.defaultMimeTypes == "${pkgs.mailcap}/etc/nginx/mime.types" then 2688 else 1024 Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.upstreams

Defines a group of servers to use as proxy target. Type: attribute set of (submodule) Default: { } Example: { backend = { extraConfig = '' keepalive 16; ''; servers = { "backend1.example.com:8080" = { weight = 5; }; "backend2.example.com" = { fail_timeout = "30s"; max_fails = 3; }; "backend3.example.com" = { }; "backup1.example.com" = { backup = true; }; "backup2.example.com" = { backup = true; }; }; }; memcached = { servers = { "unix:/run/memcached/memcached.sock" = { }; }; }; } Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.user

User account under which nginx runs. Type: string Default: "nginx" Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.uwsgiResolveWhileRunning

Resolves domains of uwsgi targets at runtime and not only at start, you have to set services.nginx.resolver, too. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.uwsgiTimeout

Change the uwsgi related timeouts in recommendedUwsgiSettings. Type: string Default: "60s" Example: "20s" Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.validateConfigFile

Whether to enable validating configuration with pkgs.writeNginxConfig. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.virtualHosts

Declarative vhost config Type: attribute set of (submodule) Default: { localhost = { }; } Example: { "hydra.example.com" = { forceSSL = true; enableACME = true; locations."/" = { proxyPass = "http://localhost:3000"; }; }; }; Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>
