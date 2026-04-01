---
module: services.crowdsec-firewall-bouncer.registerBouncer
option_count: 2
source: options.html
---

# services.crowdsec-firewall-bouncer.registerBouncer

## services.crowdsec-firewall-bouncer.registerBouncer.enable

Whether to automatically register the bouncer to the locally running crowdsec service. When authenticating to an external CrowdSec API, you may use the services.crowdsec-firewall-bouncer.secrets.apiKeyPath option instead. Type: boolean Default: config.services.crowdsec.enable Declared by: <nixpkgs/nixos/modules/services/security/crowdsec-firewall-bouncer.nix>

## services.crowdsec-firewall-bouncer.registerBouncer.bouncerName

Name to register the bouncer as to the CrowdSec API Type: non-empty string Default: "crowdsec-firewall-bouncer" Declared by: <nixpkgs/nixos/modules/services/security/crowdsec-firewall-bouncer.nix>
