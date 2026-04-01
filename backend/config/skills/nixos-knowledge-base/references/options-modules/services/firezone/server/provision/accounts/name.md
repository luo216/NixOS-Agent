---
module: services.firezone.server.provision.accounts.<name>
option_count: 8
source: options.html
---

# services.firezone.server.provision.accounts.<name>

## services.firezone.server.provision.accounts.<name>.actors

All actors (users) to provision. The attribute name will only be used to track the actor and does not have any significance for Firezone. Type: attribute set of (submodule) Default: { } Example: { admin = { email = "admin@myorg.example.com"; name = "Admin"; type = "account_admin_user"; }; } Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.provision.accounts.<name>.auth

All authentication providers to provision. The attribute name will only be used to track the provider and does not have any significance for Firezone. Type: attribute set of (open submodule of (JSON value)) Default: { } Example: { myoidcprovider = { adapter = "openid_connect"; adapter_config = { clientSecretFile = "/run/secrets/oidc-client-secret"; client_id = "clientid"; discovery_document_uri = "https://auth.example.com/.well-known/openid-configuration"; response_type = "code"; scope = "openid email name"; }; }; } Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.provision.accounts.<name>.gatewayGroups

All gateway groups (sites) to provision. The attribute name will only be used to track the gateway group and does not have any significance for Firezone. Type: attribute set of (submodule) Default: { } Example: { my-gateways = { name = "My Gateways"; }; } Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.provision.accounts.<name>.groups

All groups to provision. The attribute name will only be used to track the group and does not have any significance for Firezone. A group named everyone will automatically be managed by Firezone. Type: attribute set of (submodule) Default: { } Example: { users = { name = "Users"; }; } Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.provision.accounts.<name>.name

The account name Type: string Example: "My Organization" Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.provision.accounts.<name>.policies

All policies to provision. The attribute name will only be used to track the policy and does not have any significance for Firezone. Type: attribute set of (submodule) Default: { } Example: { access_vaultwarden = { group = "everyone"; name = "Allow anyone to access vaultwarden"; resource = "vaultwarden"; }; } Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.provision.accounts.<name>.relayGroups

All relay groups to provision. The attribute name will only be used to track the relay group and does not have any significance for Firezone. Type: attribute set of (submodule) Default: { } Example: { my-relays = { name = "My Relays"; }; } Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.provision.accounts.<name>.resources

All resources to provision. The attribute name will only be used to track the resource and does not have any significance for Firezone. Type: attribute set of (submodule) Default: { } Example: { vaultwarden = { address = "vault.example.com"; address_description = "https://vault.example.com"; filters = [ { protocol = "icmp"; } { ports = [ 80 443 ]; protocol = "tcp"; } ]; gatewayGroups = [ "my-site" ]; name = "Vaultwarden"; type = "dns"; }; } Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>
