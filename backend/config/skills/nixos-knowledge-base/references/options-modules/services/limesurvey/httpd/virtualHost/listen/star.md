---
module: services.limesurvey.httpd.virtualHost.listen.*
option_count: 3
source: options.html
---

# services.limesurvey.httpd.virtualHost.listen.*

## services.limesurvey.httpd.virtualHost.listen.*.ip

IP to listen on. 0.0.0.0 for IPv4 only, * for all. Type: string Default: "*" Declared by: <nixpkgs/nixos/modules/services/web-apps/limesurvey.nix>

## services.limesurvey.httpd.virtualHost.listen.*.port

Port to listen on Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Declared by: <nixpkgs/nixos/modules/services/web-apps/limesurvey.nix>

## services.limesurvey.httpd.virtualHost.listen.*.ssl

Whether to enable SSL (https) support. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/limesurvey.nix>
