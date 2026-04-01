---
module: services.warpgate.settings
option_count: 4
source: options.html
---

# services.warpgate.settings

## services.warpgate.settings.config_provider

Source of truth of users. DO NOT change this, Warpgate only implemented database provider. Type: one of “file”, “database” Default: "database" Declared by: <nixpkgs/nixos/modules/services/security/warpgate.nix>

## services.warpgate.settings.database_url

Database connection string. See SeaORM documentation. Type: null or string Default: "sqlite:/var/lib/warpgate/db" Declared by: <nixpkgs/nixos/modules/services/security/warpgate.nix>

## services.warpgate.settings.external_host

Configure the domain name of this Warpgate instance. See HTTP domain binding. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/security/warpgate.nix>

## services.warpgate.settings.sso_providers

Configure OIDC single sign-on providers. Type: list of (open submodule of (YAML 1.1 value)) Default: [ ] Example: [ { name = "3rd party SSO"; label = "ACME SSO"; provider = { type = "custom"; client_id = "123..."; client_secret = "BC..."; issuer_url = "https://sso.acme.inc"; scopes = ["email"]; }; } { ... } ] Declared by: <nixpkgs/nixos/modules/services/security/warpgate.nix>
