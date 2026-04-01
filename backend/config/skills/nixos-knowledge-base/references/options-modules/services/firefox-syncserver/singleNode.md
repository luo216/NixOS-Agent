---
module: services.firefox-syncserver.singleNode
option_count: 6
source: options.html
---

# services.firefox-syncserver.singleNode

## services.firefox-syncserver.singleNode.enable

Whether to enable auto-configuration for a simple single-node setup. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/firefox-syncserver.nix>

## services.firefox-syncserver.singleNode.enableNginx

Whether to enable nginx virtualhost definitions. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/firefox-syncserver.nix>

## services.firefox-syncserver.singleNode.enableTLS

Whether to enable automatic TLS setup. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/firefox-syncserver.nix>

## services.firefox-syncserver.singleNode.capacity

How many sync accounts are allowed on this server. Setting this value equal to or less than the number of currently active accounts will effectively deny service to accounts not yet registered here. Type: unsigned integer, meaning >=0 Default: 10 Declared by: <nixpkgs/nixos/modules/services/networking/firefox-syncserver.nix>

## services.firefox-syncserver.singleNode.hostname

Host name to use for this service. Type: string Declared by: <nixpkgs/nixos/modules/services/networking/firefox-syncserver.nix>

## services.firefox-syncserver.singleNode.url

URL of the host. If you are not using the automatic webserver proxy setup you will have to change this setting or your sync server may not be functional. Type: string Default: ${if cfg.singleNode.enableTLS then "https" else "http"}://${config.services.firefox-syncserver.singleNode.hostname} Declared by: <nixpkgs/nixos/modules/services/networking/firefox-syncserver.nix>
