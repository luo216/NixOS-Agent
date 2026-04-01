---
module: services.gitlab.pages
option_count: 2
source: options.html
---

# services.gitlab.pages

## services.gitlab.pages.enable

Whether to enable the GitLab Pages service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>

## services.gitlab.pages.settings

Configuration options to set in the GitLab Pages config file. Options containing secret data should be set to an attribute set containing the attribute _secret - a string pointing to a file containing the value the option should be set to. See the example to get a better picture of this: in the resulting configuration file, the auth-client-secret and auth-secret keys will be set to the contents of the /var/keys/auth-client-secret and /var/keys/auth-secret files respectively. Type: open submodule of attribute set of (null or string or signed integer or boolean or (attribute set)) Example: { pages-domain = "example.com"; auth-client-id = "generated-id-xxxxxxx"; auth-client-secret = { _secret = "/var/keys/auth-client-secret"; }; auth-redirect-uri = "https://projects.example.com/auth"; auth-secret = { _secret = "/var/keys/auth-secret"; }; auth-server = "https://gitlab.example.com"; } Declared by: <nixpkgs/nixos/modules/services/misc/gitlab.nix>
