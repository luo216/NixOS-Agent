---
module: services.movim
option_count: 21
source: options.html
---

# services.movim

## services.movim.enable

Whether to enable a Movim instance. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/movim.nix>

## services.movim.package

The movim package to use. Type: package Default: pkgs.movim Declared by: <nixpkgs/nixos/modules/services/web-apps/movim.nix>

## services.movim.dataDir

State directory of the movim user which holds the application’s state & data. Type: absolute path Default: "/var/lib/movim" Declared by: <nixpkgs/nixos/modules/services/web-apps/movim.nix>

## services.movim.debug

Debugging logs. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/movim.nix>

## services.movim.domain

Fully-qualified domain name (FQDN) for the Movim instance. Type: non-empty string Declared by: <nixpkgs/nixos/modules/services/web-apps/movim.nix>

## services.movim.group

Group running Movim service Type: non-empty string Default: "movim" Declared by: <nixpkgs/nixos/modules/services/web-apps/movim.nix>

## services.movim.h2o

With this option, you can customize an H2O virtual host which already has sensible defaults for Movim. Set to { } if you do not need any customization to the virtual host. If enabled, then by default, the serverName is ${domain}, If this is set to null (the default), no H2O hosts will be configured. Type: null or (submodule) Default: null Example: { serverAliases = [ "pics.${config.movim.domain}" ]; acme.enable = true; tls.policy = "force"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/movim.nix>

## services.movim.logDir

Log directory of the movim user which holds the application’s logs. Type: absolute path Default: "/var/log/movim" Declared by: <nixpkgs/nixos/modules/services/web-apps/movim.nix>

## services.movim.minifyStaticFiles

Do minification on public static files which reduces the size of assets — saving data for the server & users as well as offering a performance improvement. This adds typing for the minifyStaticFiles attribute for the Movim package which will override any existing override value. The default true will enable minification for all supported asset types with sane defaults. Type: boolean or (submodule) Default: true Example: { script.enable = false; style = { enable = true; target = "> 0.5%, last 2 versions, Firefox ESR, not dead"; }; svg.enable = true; } Declared by: <nixpkgs/nixos/modules/services/web-apps/movim.nix>

## services.movim.nginx

With this option, you can customize an Nginx virtual host which already has sensible defaults for Movim. Set to { } if you do not need any customization to the virtual host. If enabled, then by default, the serverName is ${domain}, If this is set to null (the default), no Nginx virtualHost will be configured. Type: null or (submodule) Default: null Example: { serverAliases = [ "pics.${config.movim.domain}" ]; enableACME = true; forceHttps = true; } Declared by: <nixpkgs/nixos/modules/services/web-apps/movim.nix>

## services.movim.phpCfg

Extra PHP INI options such as memory_limit, max_execution_time, etc. Type: attribute set of (signed integer or string or boolean) Default: { error_reporting = "E_ALL & ~E_DEPRECATED & ~E_STRICT"; "opcache.enable_cli" = 1; "opcache.fast_shutdown" = 1; "opcache.interned_strings_buffer" = 8; "opcache.max_accelerated_files" = 6144; "opcache.memory_consumption" = 128; "opcache.revalidate_freq" = 2; output_buffering = 0; } Declared by: <nixpkgs/nixos/modules/services/web-apps/movim.nix>

## services.movim.phpPackage

The php package to use. Type: package Default: pkgs.php Declared by: <nixpkgs/nixos/modules/services/web-apps/movim.nix>

## services.movim.podConfig

Pod configuration (values from php daemon.php config --help). Note that these values will now be disabled in the admin panel. Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/movim.nix>

## services.movim.poolConfig

Options for Movim’s PHP-FPM pool. Type: attribute set of (signed integer or string or boolean) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/movim.nix>

## services.movim.port

Movim daemon port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Declared by: <nixpkgs/nixos/modules/services/web-apps/movim.nix>

## services.movim.precompressStaticFiles

Aggressively precompress static files Type: submodule Default: { brotli = { enable = true; }; gzip = { enable = false; }; } Declared by: <nixpkgs/nixos/modules/services/web-apps/movim.nix>

## services.movim.runtimeDir

Runtime directory of the movim user which holds the application’s caches & temporary files. Type: absolute path Default: "/run/movim" Declared by: <nixpkgs/nixos/modules/services/web-apps/movim.nix>

## services.movim.secretFile

The secret file to be sourced for the .env settings. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/movim.nix>

## services.movim.settings

.env settings for Movim. Secrets should use secretFile option instead. nulls will be culled. Type: attribute set of (null or signed integer or string or boolean) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/movim.nix>

## services.movim.user

User running Movim service Type: non-empty string Default: "movim" Declared by: <nixpkgs/nixos/modules/services/web-apps/movim.nix>

## services.movim.verbose

Verbose logs. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/movim.nix>
