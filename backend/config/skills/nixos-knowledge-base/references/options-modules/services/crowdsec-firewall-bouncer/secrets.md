---
module: services.crowdsec-firewall-bouncer.secrets
option_count: 1
source: options.html
---

# services.crowdsec-firewall-bouncer.secrets

## services.crowdsec-firewall-bouncer.secrets.apiKeyPath

Path to the API key to authenticate with a local CrowdSec API. You need to call cscli bouncers add <bouncer-name> to register the bouncer and get this API key. When authenticating to the locally running crowdsec service, you may use the services.crowdsec-firewall-bouncer.registerBouncer.enable option instead. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/security/crowdsec-firewall-bouncer.nix>
