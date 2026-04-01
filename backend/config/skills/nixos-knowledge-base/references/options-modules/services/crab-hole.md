---
module: services.crab-hole
option_count: 5
source: options.html
---

# services.crab-hole

## services.crab-hole.enable

Whether to enable Crab-hole Service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/crab-hole.nix>

## services.crab-hole.package

The crab-hole package to use. Type: package Default: pkgs.crab-hole Declared by: <nixpkgs/nixos/modules/services/networking/crab-hole.nix>

## services.crab-hole.configFile

The config file of crab-hole. If files are added via url, make sure the service has access to them. Setting this option will override any configuration applied by the settings option. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/networking/crab-hole.nix>

## services.crab-hole.settings

Crab-holes config. See big example https://github.com/LuckyTurtleDev/crab-hole/blob/main/example-config.toml Type: open submodule of (TOML value) Example: { api = { admin_key = "1234"; listen = "127.0.0.1"; port = 8080; show_doc = true; }; blocklist = { allow_list = [ "file:///allowed.txt" ]; include_subdomains = true; lists = [ "https://raw.githubusercontent.com/StevenBlack/hosts/master/alternates/fakenews-gambling-porn/hosts" "https://s3.amazonaws.com/lists.disconnect.me/simple_tracking.txt" "file:///blocked.txt" ]; }; downstream = [ { listen = "localhost"; port = 8080; protocol = "udp"; } { certificate = "dns.example.com.crt"; dns_hostname = "dns.example.com"; key = "dns.example.com.key"; listen = "[::]"; port = 8055; protocol = "https"; timeout_ms = 3000; } ]; upstream = { name_servers = [ { protocol = "tls"; socket_addr = "[2606:4700:4700::1111]:853"; tls_dns_name = "1dot1dot1dot1.cloudflare-dns.com"; trust_nx_responses = false; } { protocol = "tls"; socket_addr = "1.1.1.1:853"; tls_dns_name = "1dot1dot1dot1.cloudflare-dns.com"; trust_nx_responses = false; } ]; options = { validate = false; }; }; } Declared by: <nixpkgs/nixos/modules/services/networking/crab-hole.nix>

## services.crab-hole.supplementaryGroups

Adds additional groups to the crab-hole service. Can be useful to prevent permission issues. Type: list of string Default: [ ] Example: [ "acme" ] Declared by: <nixpkgs/nixos/modules/services/networking/crab-hole.nix>
