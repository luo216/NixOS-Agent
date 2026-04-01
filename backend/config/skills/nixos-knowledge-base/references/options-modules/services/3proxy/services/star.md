---
module: services._3proxy.services.*
option_count: 8
source: options.html
---

# services._3proxy.services.*

## services._3proxy.services.*.acl

Use this option to limit user access to resources. Type: list of (submodule) Default: [ ] Example: [ { rule = "allow"; users = [ "user1" ]; } { rule = "allow"; sources = [ "192.168.1.0/24" ]; } { rule = "deny"; } ] Declared by: <nixpkgs/nixos/modules/services/networking/3proxy.nix>

## services._3proxy.services.*.auth

Authentication type. The following values are valid: "none": disables both authentication and authorization. You can not use ACLs. "iponly": specifies no authentication. ACLs authorization is used. "strong": authentication by username/password. If user is not registered their access is denied regardless of ACLs. Double authentication is possible, e.g. { auth = [ "iponly" "strong" ]; acl = [ { rule = "allow"; targets = [ "192.168.0.0/16" ]; } { rule = "allow" users = [ "user1" "user2" ]; } ]; } In this example strong username authentication is not required to access 192.168.0.0/16. Type: list of (one of “none”, “iponly”, “strong”) Example: [ "iponly" "strong" ] Declared by: <nixpkgs/nixos/modules/services/networking/3proxy.nix>

## services._3proxy.services.*.bindAddress

Address used for service. Type: string Default: "[::]" Example: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/networking/3proxy.nix>

## services._3proxy.services.*.bindPort

Override default port used for service. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Example: 3128 Declared by: <nixpkgs/nixos/modules/services/networking/3proxy.nix>

## services._3proxy.services.*.extraArguments

Extra arguments for service. Consult “Options” section in documentation for available arguments. Type: null or string Default: null Example: "-46" Declared by: <nixpkgs/nixos/modules/services/networking/3proxy.nix>

## services._3proxy.services.*.extraConfig

Extra configuration for service. Use this to configure things like bandwidth limiter or ACL-based redirection. Consult documentation for available options. Type: null or strings concatenated with “\n” Default: null Declared by: <nixpkgs/nixos/modules/services/networking/3proxy.nix>

## services._3proxy.services.*.maxConnections

Maximum number of simulationeous connections to this service. Type: signed integer Default: 100 Example: 1000 Declared by: <nixpkgs/nixos/modules/services/networking/3proxy.nix>

## services._3proxy.services.*.type

Service type. The following values are valid: "proxy": HTTP/HTTPS proxy (default port 3128). "socks": SOCKS 4/4.5/5 proxy (default port 1080). "pop3p": POP3 proxy (default port 110). "ftppr": FTP proxy (default port 21). "admin": Web interface (default port 80). "dnspr": Caching DNS proxy (default port 53). "tcppm": TCP portmapper. "udppm": UDP portmapper. Type: one of “proxy”, “socks”, “pop3p”, “ftppr”, “admin”, “dnspr”, “tcppm”, “udppm” Example: "proxy" Declared by: <nixpkgs/nixos/modules/services/networking/3proxy.nix>
