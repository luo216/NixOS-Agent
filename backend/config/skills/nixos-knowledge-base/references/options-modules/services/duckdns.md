---
module: services.duckdns
option_count: 4
source: options.html
---

# services.duckdns

## services.duckdns.enable

Whether to enable DuckDNS Dynamic DNS Client. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/duckdns.nix>

## services.duckdns.domains

The domain(s) to update in DuckDNS (without the .duckdns.org suffix) Type: null or (list of string) Default: null Example: [ "examplehost" ] Declared by: <nixpkgs/nixos/modules/services/misc/duckdns.nix>

## services.duckdns.domainsFile

The path to a file containing a newline-separated list of DuckDNS domain(s) to be updated (without the .duckdns.org suffix) Type: null or absolute path Default: null Example: pkgs.writeText "duckdns-domains.txt" '' examplehost examplehost2 examplehost3 '' Declared by: <nixpkgs/nixos/modules/services/misc/duckdns.nix>

## services.duckdns.tokenFile

The path to a file containing the token used to authenticate with DuckDNS. Type: absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/misc/duckdns.nix>
