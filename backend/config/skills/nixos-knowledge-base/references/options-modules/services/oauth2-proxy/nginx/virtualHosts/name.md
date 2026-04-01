---
module: services.oauth2-proxy.nginx.virtualHosts.<name>
option_count: 3
source: options.html
---

# services.oauth2-proxy.nginx.virtualHosts.<name>

## services.oauth2-proxy.nginx.virtualHosts.<name>.allowed_email_domains

List of email domains to allow access to this vhost, or null to allow all. Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy-nginx.nix>

## services.oauth2-proxy.nginx.virtualHosts.<name>.allowed_emails

List of emails to allow access to this vhost, or null to allow all. Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy-nginx.nix>

## services.oauth2-proxy.nginx.virtualHosts.<name>.allowed_groups

List of groups to allow access to this vhost, or null to allow all. Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy-nginx.nix>
