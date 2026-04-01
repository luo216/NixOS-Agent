---
module: services.oink
option_count: 5
source: options.html
---

# services.oink

## services.oink.enable

Whether to enable Oink, a dynamic DNS client for Porkbun. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/oink.nix>

## services.oink.package

The oink package to use. Type: package Default: pkgs.oink Declared by: <nixpkgs/nixos/modules/services/networking/oink.nix>

## services.oink.apiKeyFile

Path to a file containing the API key to use when modifying DNS records. Type: absolute path Example: "/run/keys/oink-api-key" Declared by: <nixpkgs/nixos/modules/services/networking/oink.nix>

## services.oink.domains

List of attribute sets containing configuration for each domain. Each attribute set must have two attributes, one named domain and another named subdomain. The domain attribute must specify the root domain that you want to configure, and the subdomain attribute must specify its subdomain if any. If you want to configure the root domain rather than a subdomain, leave the subdomain attribute as an empty string. Additionally, you can use attributes from services.oink.settings to override settings per-domain. Every domain listed here must have API access enabled in Porkbun’s control panel. Type: list of attribute set of anything Default: [ ] Example: [ { domain = "nixos.org"; subdomain = ""; ttl = 1200; } { domain = "nixos.org"; subdomain = "hydra"; } ] Declared by: <nixpkgs/nixos/modules/services/networking/oink.nix>

## services.oink.secretApiKeyFile

Path to a file containing the secret API key to use when modifying DNS records. Type: absolute path Example: "/run/keys/oink-secret-api-key" Declared by: <nixpkgs/nixos/modules/services/networking/oink.nix>
