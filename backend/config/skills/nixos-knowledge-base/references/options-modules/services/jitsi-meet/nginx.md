---
module: services.jitsi-meet.nginx
option_count: 1
source: options.html
---

# services.jitsi-meet.nginx

## services.jitsi-meet.nginx.enable

Whether to enable nginx virtual host that will serve the javascript application and act as a proxy for the XMPP server. Further nginx configuration can be done by adapting services.nginx.virtualHosts.<hostName>. When this is enabled, ACME will be used to retrieve a TLS certificate by default. To disable this, set the services.nginx.virtualHosts.<hostName>.enableACME to false and if appropriate do the same for services.nginx.virtualHosts.<hostName>.forceSSL. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/jitsi-meet.nix>
