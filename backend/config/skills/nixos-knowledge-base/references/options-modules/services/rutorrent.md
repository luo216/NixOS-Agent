---
module: services.rutorrent
option_count: 8
source: options.html
---

# services.rutorrent

## services.rutorrent.enable

Whether to enable ruTorrent. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/rutorrent.nix>

## services.rutorrent.dataDir

Storage path of ruTorrent. Type: string Default: "/var/lib/rutorrent" Declared by: <nixpkgs/nixos/modules/services/web-apps/rutorrent.nix>

## services.rutorrent.group

Group which runs the ruTorrent service. Type: string Default: "rutorrent" Declared by: <nixpkgs/nixos/modules/services/web-apps/rutorrent.nix>

## services.rutorrent.hostName

FQDN for the ruTorrent instance. Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/rutorrent.nix>

## services.rutorrent.plugins

List of plugins to enable. See the list of <link xlink:href=“https://github.com/Novik/ruTorrent/wiki/Plugins#currently-there-are-the-following-plugins”>available plugins</link>. Note: the <literal>unpack</literal> plugin needs the nonfree <literal>unrar</literal> package. You need to either enable one of the <literal>rpc</literal> or <literal>httprpc</literal> plugin or enable the <xref linkend=“opt-services.rutorrent.nginx.exposeInsecureRPC2mount”/> option. Type: list of (string or package) Default: [ "httprpc" ] Example: [ "httprpc" "data" "diskspace" "edit" "erasedata" "theme" "trafic" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/rutorrent.nix>

## services.rutorrent.poolSettings

Options for ruTorrent’s PHP pool. See the documentation on <literal>php-fpm.conf</literal> for details on configuration directives. Type: attribute set of (string or signed integer or boolean) Default: { pm = "dynamic"; "pm.max_children" = 32; "pm.max_requests" = 500; "pm.max_spare_servers" = 4; "pm.min_spare_servers" = 2; "pm.start_servers" = 2; } Declared by: <nixpkgs/nixos/modules/services/web-apps/rutorrent.nix>

## services.rutorrent.rpcSocket

Path to rtorrent rpc socket. Type: string Default: "config.services.rtorrent.rpcSocket" Declared by: <nixpkgs/nixos/modules/services/web-apps/rutorrent.nix>

## services.rutorrent.user

User which runs the ruTorrent service. Type: string Default: "rutorrent" Declared by: <nixpkgs/nixos/modules/services/web-apps/rutorrent.nix>
