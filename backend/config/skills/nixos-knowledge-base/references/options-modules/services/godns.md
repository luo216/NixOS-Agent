---
module: services.godns
option_count: 4
source: options.html
---

# services.godns

## services.godns.enable

Whether to enable GoDNS service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/godns.nix>

## services.godns.package

The godns package to use. Type: package Default: pkgs.godns Declared by: <nixpkgs/nixos/modules/services/networking/godns.nix>

## services.godns.loadCredential

This can be used to pass secrets to the systemd service without adding them to the nix store. Type: list of string Default: [ ] Example: [ "login_token:/path/to/login_token" ] Declared by: <nixpkgs/nixos/modules/services/networking/godns.nix>

## services.godns.settings

Configuration for GoDNS. Refer to the configuration section in the GoDNS GitHub repository for details. Type: open submodule of (YAML 1.1 value) Example: { domains = [ { domain_name = "example.com"; sub_domains = [ "foo" ]; } ]; interval = 300; ip_type = "IPv6"; ipv6_urls = [ "https://api6.ipify.org" "https://ip2location.io/ip" "https://v6.ipinfo.io/ip" ]; login_token_file = "$CREDENTIALS_DIRECTORY/login_token"; provider = "Cloudflare"; } Declared by: <nixpkgs/nixos/modules/services/networking/godns.nix>
