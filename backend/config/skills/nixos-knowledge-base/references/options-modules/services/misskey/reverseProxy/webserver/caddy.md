---
module: services.misskey.reverseProxy.webserver.caddy
option_count: 6
source: options.html
---

# services.misskey.reverseProxy.webserver.caddy

## services.misskey.reverseProxy.webserver.caddy.extraConfig

Additional lines of configuration appended to this virtual host in the automatically generated Caddyfile. Type: strings concatenated with “\n” Default: ""

## services.misskey.reverseProxy.webserver.caddy.hostName

Canonical hostname for the server. Type: string Default: "‹name›"

## services.misskey.reverseProxy.webserver.caddy.listenAddresses

A list of host interfaces to bind to for this virtual host. Type: list of string Default: [ ] Example: [ "127.0.0.1" "::1" ]

## services.misskey.reverseProxy.webserver.caddy.logFormat

Configuration for HTTP request logging (also known as access logs). See https://caddyserver.com/docs/caddyfile/directives/log#log for details. Type: null or strings concatenated with “\n” Default: '' output file ''${config.services.caddy.logDir}/access-''${hostName}.log '' Example: mkForce '' output discard '';

## services.misskey.reverseProxy.webserver.caddy.serverAliases

Additional names of virtual hosts served by this virtual host configuration. Type: list of string Default: [ ] Example: [ "www.example.org" "example.org" ]

## services.misskey.reverseProxy.webserver.caddy.useACMEHost

A host of an existing Let’s Encrypt certificate to use. This is mostly useful if you use DNS challenges but Caddy does not currently support your provider. Note that this option does not create any certificates, nor does it add subdomains to existing ones – you will need to create them manually using security.acme.certs. Type: null or string Default: null
