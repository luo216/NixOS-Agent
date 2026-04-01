---
module: services.privatebin
option_count: 9
source: options.html
---

# services.privatebin

## services.privatebin.enable

Whether to enable Privatebin: A minimalist, open source online pastebin where the server has zero knowledge of pasted data… Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/privatebin.nix>

## services.privatebin.enableNginx

Whether to enable nginx or not. If enabled, an nginx virtual host will be created for access to privatebin. If not enabled, then you may use ${config.services.privatebin.package} as your document root in whichever webserver you wish to setup. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/privatebin.nix>

## services.privatebin.package

The privatebin package to use. Type: package Default: pkgs.privatebin Declared by: <nixpkgs/nixos/modules/services/web-apps/privatebin.nix>

## services.privatebin.dataDir

The place where privatebin stores its state. Type: absolute path Default: "/var/lib/privatebin" Declared by: <nixpkgs/nixos/modules/services/web-apps/privatebin.nix>

## services.privatebin.group

Group under which privatebin runs. It is best to set this to the group of whatever webserver is being used as the frontend. Type: string Default: if config.services.privatebin.enableNginx then "nginx" else "privatebin" Declared by: <nixpkgs/nixos/modules/services/web-apps/privatebin.nix>

## services.privatebin.poolConfig

Options for the PrivateBin PHP pool. See the documentation on <literal>php-fpm.conf</literal> for details on configuration directives. Type: attribute set of (string or signed integer or boolean) Default: { "pm" = "dynamic"; "pm.max_children" = 32; "pm.start_servers" = 2; "pm.min_spare_servers" = 2; "pm.max_spare_servers" = 4; "pm.max_requests" = 500; } Declared by: <nixpkgs/nixos/modules/services/web-apps/privatebin.nix>

## services.privatebin.settings

Options for privatebin configuration. Refer to https://github.com/PrivateBin/PrivateBin/wiki/Configuration for details on supported values. Type: open submodule of attribute set of anything Default: { } Example: { main = { name = "NixOS Based Privatebin"; discussion = false; defaultformatter = "plalib.types.intext"; qrcode = true }; model.class = "Filesystem"; model_options.dir = "/var/lib/privatebin/data"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/privatebin.nix>

## services.privatebin.user

User account under which privatebin runs. Type: string Default: "privatebin" Declared by: <nixpkgs/nixos/modules/services/web-apps/privatebin.nix>

## services.privatebin.virtualHost

The hostname at which you wish privatebin to be served. If you have enabled nginx using services.privatebin.enableNginx then this will be used. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/privatebin.nix>
