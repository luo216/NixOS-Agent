---
module: services.firezone.server.provision
option_count: 2
source: options.html
---

# services.firezone.server.provision

## services.firezone.server.provision.enable

Whether to enable provisioning of the Firezone domain server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>

## services.firezone.server.provision.accounts

All accounts to provision. The attribute name specified here will become the account slug. By using "{file:/path/to/file}" as a string value anywhere in these settings, the provisioning script will replace that value with the content of the given file at runtime. Please refer to the Firezone source code for all available properties. Type: attribute set of (open submodule of (JSON value)) Default: { } Example: { main = { features = { rest_api = false; }; metadata = { stripe = { billing_email = "org@myorg.example.com"; }; }; name = "My Account / Organization"; }; } Declared by: <nixpkgs/nixos/modules/services/networking/firezone/server.nix>
