---
module: services.limesurvey.nginx
option_count: 1
source: options.html
---

# services.limesurvey.nginx

## services.limesurvey.nginx.virtualHost

Nginx configuration can be done by adapting services.nginx.virtualHosts.<name>. See services.nginx.virtualHosts for further information. Type: submodule Example: { serverName = "survey.example.org"; forceSSL = true; enableACME = true; } Declared by: <nixpkgs/nixos/modules/services/web-apps/limesurvey.nix>
