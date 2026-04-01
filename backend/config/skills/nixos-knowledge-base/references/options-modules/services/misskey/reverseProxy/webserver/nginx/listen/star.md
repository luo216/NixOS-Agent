---
module: services.misskey.reverseProxy.webserver.nginx.listen.*
option_count: 5
source: options.html
---

# services.misskey.reverseProxy.webserver.nginx.listen.*

## services.misskey.reverseProxy.webserver.nginx.listen.*.addr

Listen address. Type: string

## services.misskey.reverseProxy.webserver.nginx.listen.*.extraParameters

Extra parameters of this listen directive. Type: list of string Default: [ ] Example: [ "backlog=1024" "deferred" ]

## services.misskey.reverseProxy.webserver.nginx.listen.*.port

Port number to listen on. If unset and the listen address is not a socket then nginx defaults to 80. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null

## services.misskey.reverseProxy.webserver.nginx.listen.*.proxyProtocol

Enable PROXY protocol. Type: boolean Default: false

## services.misskey.reverseProxy.webserver.nginx.listen.*.ssl

Enable SSL. Type: boolean Default: false
