---
module: services.tt-rss.sphinx
option_count: 2
source: options.html
---

# services.tt-rss.sphinx

## services.tt-rss.sphinx.index

Index names in Sphinx configuration. Example configuration files are available on tt-rss wiki. Type: list of string Default: [ "ttrss" "delta" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>

## services.tt-rss.sphinx.server

Hostname:port combination for the Sphinx server. Type: string Default: "localhost:9312" Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>
