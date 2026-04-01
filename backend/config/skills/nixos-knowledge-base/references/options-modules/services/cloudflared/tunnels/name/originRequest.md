---
module: services.cloudflared.tunnels.<name>.originRequest
option_count: 14
source: options.html
---

# services.cloudflared.tunnels.<name>.originRequest

## services.cloudflared.tunnels.<name>.originRequest.caPool

Path to the certificate authority (CA) for the certificate of your origin. This option should be used only if your certificate is not signed by Cloudflare. Type: null or string or absolute path Default: null Example: "" Declared by: <nixpkgs/nixos/modules/services/networking/cloudflared.nix>

## services.cloudflared.tunnels.<name>.originRequest.connectTimeout

Timeout for establishing a new TCP connection to your origin server. This excludes the time taken to establish TLS, which is controlled by tlsTimeout. Type: null or string Default: null Example: "30s" Declared by: <nixpkgs/nixos/modules/services/networking/cloudflared.nix>

## services.cloudflared.tunnels.<name>.originRequest.disableChunkedEncoding

Disables chunked transfer encoding. Useful if you are running a WSGI server. Type: null or boolean Default: null Example: false Declared by: <nixpkgs/nixos/modules/services/networking/cloudflared.nix>

## services.cloudflared.tunnels.<name>.originRequest.httpHostHeader

Sets the HTTP Host header on requests sent to the local service. Type: null or string Default: null Example: "" Declared by: <nixpkgs/nixos/modules/services/networking/cloudflared.nix>

## services.cloudflared.tunnels.<name>.originRequest.keepAliveConnections

Maximum number of idle keepalive connections between Tunnel and your origin. This does not restrict the total number of concurrent connections. Type: null or signed integer Default: null Example: 100 Declared by: <nixpkgs/nixos/modules/services/networking/cloudflared.nix>

## services.cloudflared.tunnels.<name>.originRequest.keepAliveTimeout

Timeout after which an idle keepalive connection can be discarded. Type: null or string Default: null Example: "1m30s" Declared by: <nixpkgs/nixos/modules/services/networking/cloudflared.nix>

## services.cloudflared.tunnels.<name>.originRequest.noHappyEyeballs

Disable the “happy eyeballs” algorithm for IPv4/IPv6 fallback if your local network has misconfigured one of the protocols. Type: null or boolean Default: null Example: false Declared by: <nixpkgs/nixos/modules/services/networking/cloudflared.nix>

## services.cloudflared.tunnels.<name>.originRequest.noTLSVerify

Disables TLS verification of the certificate presented by your origin. Will allow any certificate from the origin to be accepted. Type: null or boolean Default: null Example: false Declared by: <nixpkgs/nixos/modules/services/networking/cloudflared.nix>

## services.cloudflared.tunnels.<name>.originRequest.originServerName

Hostname that cloudflared should expect from your origin server certificate. Type: null or string Default: null Example: "" Declared by: <nixpkgs/nixos/modules/services/networking/cloudflared.nix>

## services.cloudflared.tunnels.<name>.originRequest.proxyAddress

cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP. This configures the listen address for that proxy. Type: null or string Default: null Example: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/networking/cloudflared.nix>

## services.cloudflared.tunnels.<name>.originRequest.proxyPort

cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP. This configures the listen port for that proxy. If set to zero, an unused port will randomly be chosen. Type: null or signed integer Default: null Example: 0 Declared by: <nixpkgs/nixos/modules/services/networking/cloudflared.nix>

## services.cloudflared.tunnels.<name>.originRequest.proxyType

cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP. This configures what type of proxy will be started. Valid options are: "" for the regular proxy "socks" for a SOCKS5 proxy. Refer to the tutorial on connecting through Cloudflare Access using kubectl for more information. Type: null or one of “”, “socks” Default: null Example: "" Declared by: <nixpkgs/nixos/modules/services/networking/cloudflared.nix>

## services.cloudflared.tunnels.<name>.originRequest.tcpKeepAlive

The timeout after which a TCP keepalive packet is sent on a connection between Tunnel and the origin server. Type: null or string Default: null Example: "30s" Declared by: <nixpkgs/nixos/modules/services/networking/cloudflared.nix>

## services.cloudflared.tunnels.<name>.originRequest.tlsTimeout

Timeout for completing a TLS handshake to your origin server, if you have chosen to connect Tunnel to an HTTPS server. Type: null or string Default: null Example: "10s" Declared by: <nixpkgs/nixos/modules/services/networking/cloudflared.nix>
