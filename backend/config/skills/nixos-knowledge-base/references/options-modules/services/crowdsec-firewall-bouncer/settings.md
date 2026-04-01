---
module: services.crowdsec-firewall-bouncer.settings
option_count: 3
source: options.html
---

# services.crowdsec-firewall-bouncer.settings

## services.crowdsec-firewall-bouncer.settings.api_key

API key to authenticate with a local crowdsec API. You need to call cscli bouncers add <bouncer-name> to register the bouncer and get this API key. Setting this option will store this secret in the Nix store. Instead, you should set the services.crowdsec-firewall-bouncer.secrets.apiKeyPath option, which will read the value at runtime. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/security/crowdsec-firewall-bouncer.nix>

## services.crowdsec-firewall-bouncer.settings.api_url

URL of the local API. Type: string Default: http://$\{config.services.crowdsec.settings.general.api.server.listen_uri} Example: "http://127.0.0.1:8080" Declared by: <nixpkgs/nixos/modules/services/security/crowdsec-firewall-bouncer.nix>

## services.crowdsec-firewall-bouncer.settings.mode

Firewall mode to use. Type: string Default: if config.networking.nftables.enable then "nftables" else "iptables" Declared by: <nixpkgs/nixos/modules/services/security/crowdsec-firewall-bouncer.nix>
