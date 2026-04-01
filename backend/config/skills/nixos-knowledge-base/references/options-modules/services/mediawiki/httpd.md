---
module: services.mediawiki.httpd
option_count: 1
source: options.html
---

# services.mediawiki.httpd

## services.mediawiki.httpd.virtualHost

Apache configuration can be done by adapting services.httpd.virtualHosts. See services.httpd.virtualHosts for further information. Type: submodule Example: { hostName = "mediawiki.example.org"; adminAddr = "webmaster@example.org"; forceSSL = true; enableACME = true; } Declared by: <nixpkgs/nixos/modules/services/web-apps/mediawiki.nix>
