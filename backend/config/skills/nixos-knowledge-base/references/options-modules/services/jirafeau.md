---
module: services.jirafeau
option_count: 10
source: options.html
---

# services.jirafeau

## services.jirafeau.enable

Whether to enable Jirafeau file upload application. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/jirafeau.nix>

## services.jirafeau.package

The jirafeau package to use. Type: package Default: pkgs.jirafeau Declared by: <nixpkgs/nixos/modules/services/web-apps/jirafeau.nix>

## services.jirafeau.adminPasswordSha256

SHA-256 of the desired administration password. Leave blank/unset for no password. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/web-apps/jirafeau.nix>

## services.jirafeau.dataDir

Location of Jirafeau storage directory. Type: absolute path Default: "/var/lib/jirafeau/data/" Declared by: <nixpkgs/nixos/modules/services/web-apps/jirafeau.nix>

## services.jirafeau.extraConfig

Jirefeau configuration. Refer to https://gitlab.com/mojo42/Jirafeau/-/blob/4.4.0/lib/config.original.php for supported values. Type: strings concatenated with “\n” Default: "" Example: '' $cfg['style'] = 'courgette'; $cfg['organisation'] = 'ACME'; '' Declared by: <nixpkgs/nixos/modules/services/web-apps/jirafeau.nix>

## services.jirafeau.hostName

URL of instance. Must have trailing slash. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/jirafeau.nix>

## services.jirafeau.maxUploadSizeMegabytes

Maximum upload size of accepted files. Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/services/web-apps/jirafeau.nix>

## services.jirafeau.maxUploadTimeout

Timeout for reading client request bodies and headers. Refer to http://nginx.org/en/docs/http/ngx_http_core_module.html#client_body_timeout and http://nginx.org/en/docs/http/ngx_http_core_module.html#client_header_timeout for accepted values. Type: string Default: "30m" Declared by: <nixpkgs/nixos/modules/services/web-apps/jirafeau.nix>

## services.jirafeau.nginxConfig

Extra configuration for the nginx virtual host of Jirafeau. Type: submodule Default: { } Example: { serverAliases = [ "wiki.${config.networking.domain}" ]; } Declared by: <nixpkgs/nixos/modules/services/web-apps/jirafeau.nix>

## services.jirafeau.poolConfig

Options for Jirafeau PHP pool. See documentation on php-fpm.conf for details on configuration directives. Type: attribute set of (string or signed integer or boolean) Default: { pm = "dynamic"; "pm.max_children" = 32; "pm.max_requests" = 500; "pm.max_spare_servers" = 4; "pm.min_spare_servers" = 2; "pm.start_servers" = 2; } Declared by: <nixpkgs/nixos/modules/services/web-apps/jirafeau.nix>
