---
module: services.wstunnel.clients.<name>.settings
option_count: 1
source: options.html
---

# services.wstunnel.clients.<name>.settings

## services.wstunnel.clients.<name>.settings.http-headers

Custom headers to send in the upgrade request Type: (list of string) or (attribute set of string) convertible to it Default: { } Example: { X-Some-Header = "some-value"; } Declared by: <nixpkgs/nixos/modules/services/networking/wstunnel.nix>
