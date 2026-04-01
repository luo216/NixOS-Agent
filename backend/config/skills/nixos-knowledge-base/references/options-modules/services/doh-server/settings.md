---
module: services.doh-server.settings
option_count: 9
source: options.html
---

# services.doh-server.settings

## services.doh-server.settings.ecs_allow_non_global_ip

By default, non global IP addresses are never forwarded to upstream servers. This is to prevent two things from happening: the upstream server knowing your private LAN addresses; the upstream server unable to provide geographically near results, or even fail to provide any result. However, if you are deploying a split tunnel corporation network environment, or for any other reason you want to inhibit this behavior and allow local (eg RFC1918) address to be forwarded, change the following option to “true”. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/doh-server.nix>

## services.doh-server.settings.ecs_use_precise_ip

If ECS is added to the request, let the full IP address or cap it to 24 or 128 mask. This option is to be used only on private networks where knowledge of the terminal endpoint may be required for security purposes (eg. DNS Firewalling). Not a good option on the internet where IP address may be used to identify the user and not only the approximate location. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/doh-server.nix>

## services.doh-server.settings.listen

HTTP listen address and port Type: list of string Default: [ "127.0.0.1:8053" "[::1]:8053" ] Example: [ ":443" ] Declared by: <nixpkgs/nixos/modules/services/networking/doh-server.nix>

## services.doh-server.settings.log_guessed_client_ip

Enable log IP from HTTPS-reverse proxy header: X-Forwarded-For or X-Real-IP Note: http uri/useragent log cannot be controlled by this config Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/doh-server.nix>

## services.doh-server.settings.path

HTTP path for resolve application Type: string Default: "/dns-query" Example: "/dns-query" Declared by: <nixpkgs/nixos/modules/services/networking/doh-server.nix>

## services.doh-server.settings.timeout

Upstream timeout Type: signed integer Default: 10 Example: 15 Declared by: <nixpkgs/nixos/modules/services/networking/doh-server.nix>

## services.doh-server.settings.tries

Number of tries if upstream DNS fails Type: signed integer Default: 3 Example: 5 Declared by: <nixpkgs/nixos/modules/services/networking/doh-server.nix>

## services.doh-server.settings.upstream

Upstream DNS resolver. If multiple servers are specified, a random one will be chosen each time. You can use “udp”, “tcp” or “tcp-tls” for the type prefix. For “udp”, UDP will first be used, and switch to TCP when the server asks to or the response is too large. For “tcp”, only TCP will be used. For “tcp-tls”, DNS-over-TLS (RFC 7858) will be used to secure the upstream connection. Type: list of string Default: [ "udp:1.1.1.1:53" "udp:1.0.0.1:53" "udp:8.8.8.8:53" "udp:8.8.4.4:53" ] Example: [ "udp:127.0.0.1:53" ] Declared by: <nixpkgs/nixos/modules/services/networking/doh-server.nix>

## services.doh-server.settings.verbose

Enable logging Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/doh-server.nix>
