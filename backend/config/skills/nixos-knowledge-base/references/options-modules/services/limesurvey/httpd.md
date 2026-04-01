---
module: services.limesurvey.httpd
option_count: 1
source: options.html
---

# services.limesurvey.httpd

## services.limesurvey.httpd.virtualHost

Apache configuration can be done by adapting services.httpd.virtualHosts.<name>. See services.httpd.virtualHosts for further information. Type: submodule Example: { hostName = "survey.example.org"; adminAddr = "webmaster@example.org"; forceSSL = true; enableACME = true; } Declared by: <nixpkgs/nixos/modules/services/web-apps/limesurvey.nix>
