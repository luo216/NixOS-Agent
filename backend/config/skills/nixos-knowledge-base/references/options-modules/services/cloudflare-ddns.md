---
module: services.cloudflare-ddns
option_count: 22
source: options.html
---

# services.cloudflare-ddns

## services.cloudflare-ddns.enable

Whether to enable Cloudflare Dynamic DNS service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/cloudflare-ddns.nix>

## services.cloudflare-ddns.package

The cloudflare-ddns package to use. Type: package Default: pkgs.cloudflare-ddns Declared by: <nixpkgs/nixos/modules/services/networking/cloudflare-ddns.nix>

## services.cloudflare-ddns.cacheExpiration

Duration for which API responses (like Zone ID, Record IDs) are cached. Uses Go’s duration format (e.g., “6h”, “1h30m”). Type: string Default: "6h" Declared by: <nixpkgs/nixos/modules/services/networking/cloudflare-ddns.nix>

## services.cloudflare-ddns.credentialsFile

Path to a file containing the Cloudflare API authentication token. The file content should be in the format CLOUDFLARE_API_TOKEN=YOUR_SECRET_TOKEN. The service user needs read access to this file. Ensure permissions are secure (e.g., 0400 or 0440) and ownership is appropriate Using CLOUDFLARE_API_TOKEN is preferred over the deprecated CF_API_TOKEN. Type: absolute path Example: "/run/secrets/cloudflare-ddns-token" Declared by: <nixpkgs/nixos/modules/services/networking/cloudflare-ddns.nix>

## services.cloudflare-ddns.deleteOnStop

Whether to delete the managed DNS records and clear WAF lists when the service is stopped gracefully. Warning: Setting this to true with updateCron = "@once" will cause immediate deletion. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/cloudflare-ddns.nix>

## services.cloudflare-ddns.detectionTimeout

Timeout for detecting the public IP address. Type: string Default: "5s" Declared by: <nixpkgs/nixos/modules/services/networking/cloudflare-ddns.nix>

## services.cloudflare-ddns.domains

List of domain names (FQDNs) to manage. Wildcards like *.example.com are supported. These domains will be managed for both IPv4 and IPv6 unless overridden by ip4Domains or ip6Domains, or if the respective providers are disabled. This corresponds to the DOMAINS environment variable. Type: list of string Default: [ ] Example: [ "home.example.com" "*.dynamic.example.org" ] Declared by: <nixpkgs/nixos/modules/services/networking/cloudflare-ddns.nix>

## services.cloudflare-ddns.group

Group under which the service runs. Type: string Default: "cloudflare-ddns" Declared by: <nixpkgs/nixos/modules/services/networking/cloudflare-ddns.nix>

## services.cloudflare-ddns.healthchecks

URL for Healthchecks.io monitoring endpoint (optional). Type: null or string Default: null Example: "https://hc-ping.com/your-uuid" Declared by: <nixpkgs/nixos/modules/services/networking/cloudflare-ddns.nix>

## services.cloudflare-ddns.ip4Domains

Explicit list of domains to manage only for IPv4. If set, overrides domains for IPv4. Corresponds to the IP4_DOMAINS environment variable. Type: null or (list of string) Default: null Example: [ "ipv4.example.com" ] Declared by: <nixpkgs/nixos/modules/services/networking/cloudflare-ddns.nix>

## services.cloudflare-ddns.ip6Domains

Explicit list of domains to manage only for IPv6. If set, overrides domains for IPv6. Corresponds to the IP6_DOMAINS environment variable. Type: null or (list of string) Default: null Example: [ "ipv6.example.com" ] Declared by: <nixpkgs/nixos/modules/services/networking/cloudflare-ddns.nix>

## services.cloudflare-ddns.proxied

Whether the managed DNS records should be proxied through Cloudflare (‘orange cloud’). Accepts boolean values (true, false) or a domain expression. See cloudflare-ddns documentation for expression syntax (e.g., “is(a.com) || sub(b.org)”). Type: string Default: "false" Example: "true" Declared by: <nixpkgs/nixos/modules/services/networking/cloudflare-ddns.nix>

## services.cloudflare-ddns.recordComment

Comment to add to managed DNS records. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/cloudflare-ddns.nix>

## services.cloudflare-ddns.shoutrrr

List of Shoutrrr notification service URLs (optional). Type: null or (list of string) Default: null Example: [ "discord://token@id" "gotify://host/token" ] Declared by: <nixpkgs/nixos/modules/services/networking/cloudflare-ddns.nix>

## services.cloudflare-ddns.ttl

Time To Live (TTL) for the DNS records in seconds. Must be 1 (for automatic) or between 30 and 86400. Type: positive integer, meaning >0 Default: 1 Declared by: <nixpkgs/nixos/modules/services/networking/cloudflare-ddns.nix>

## services.cloudflare-ddns.updateCron

Cron expression for how often to check and update IPs. Use “@once” to run only once and then exit. Type: string Default: "@every 5m" Example: "@hourly" Declared by: <nixpkgs/nixos/modules/services/networking/cloudflare-ddns.nix>

## services.cloudflare-ddns.updateOnStart

Whether to perform an update check immediately on service start. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/cloudflare-ddns.nix>

## services.cloudflare-ddns.updateTimeout

Timeout for updating records via the Cloudflare API. Type: string Default: "30s" Declared by: <nixpkgs/nixos/modules/services/networking/cloudflare-ddns.nix>

## services.cloudflare-ddns.uptimeKuma

URL for Uptime Kuma push monitor endpoint (optional). Type: null or string Default: null Example: "https://status.example.com/api/push/tag?status=up&msg=OK&ping=" Declared by: <nixpkgs/nixos/modules/services/networking/cloudflare-ddns.nix>

## services.cloudflare-ddns.user

User account under which the service runs. Type: string Default: "cloudflare-ddns" Declared by: <nixpkgs/nixos/modules/services/networking/cloudflare-ddns.nix>

## services.cloudflare-ddns.wafListDescription

Description for managed WAF lists (used when creating or verifying lists). Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/cloudflare-ddns.nix>

## services.cloudflare-ddns.wafLists

List of WAF IP Lists to manage, in the format account-id/list-name. (Experimental feature as of cloudflare-ddns 1.14.0). Type: list of string Default: [ ] Example: [ "YOUR_ACCOUNT_ID/allowed_dynamic_ips" ] Declared by: <nixpkgs/nixos/modules/services/networking/cloudflare-ddns.nix>
