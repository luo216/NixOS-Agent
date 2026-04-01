---
module: services.rutorrent.nginx
option_count: 2
source: options.html
---

# services.rutorrent.nginx

## services.rutorrent.nginx.enable

Whether to enable nginx virtual host management. Further nginx configuration can be done by adapting <literal>services.nginx.virtualHosts.<name></literal>. See <xref linkend=“opt-services.nginx.virtualHosts”/> for further information. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/rutorrent.nix>

## services.rutorrent.nginx.exposeInsecureRPC2mount

If you do not enable one of the <literal>rpc</literal> or <literal>httprpc</literal> plugins you need to expose an RPC mount through scgi using this option. Warning: This allow to run arbitrary commands, as the rtorrent user, so make sure to use authentification. The simplest way would be to use the <literal>services.nginx.virtualHosts.<name>.basicAuth</literal> option. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/rutorrent.nix>
