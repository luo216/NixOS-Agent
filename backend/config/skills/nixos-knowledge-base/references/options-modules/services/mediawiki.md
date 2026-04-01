---
module: services.mediawiki
option_count: 15
source: options.html
---

# services.mediawiki

## services.mediawiki.enable

Whether to enable MediaWiki. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/mediawiki.nix>

## services.mediawiki.package

The mediawiki package to use. Type: package Default: pkgs.mediawiki Declared by: <nixpkgs/nixos/modules/services/web-apps/mediawiki.nix>

## services.mediawiki.extensions

Attribute set of paths whose content is copied to the extensions subdirectory of the MediaWiki installation and enabled in configuration. Use null instead of path to enable extensions that are part of MediaWiki. Type: attribute set of (null or absolute path) Default: { } Example: { Matomo = pkgs.fetchzip { url = "https://github.com/DaSchTour/matomo-mediawiki-extension/archive/v4.0.1.tar.gz"; sha256 = "0g5rd3zp0avwlmqagc59cg9bbkn3r7wx7p6yr80s644mj6dlvs1b"; }; ParserFunctions = null; } Declared by: <nixpkgs/nixos/modules/services/web-apps/mediawiki.nix>

## services.mediawiki.extraConfig

Any additional text to be appended to MediaWiki’s LocalSettings.php configuration file. For configuration settings, see https://www.mediawiki.org/wiki/Manual:Configuration_settings. Type: strings concatenated with “\n” Default: "" Example: '' $wgEnableEmail = false; '' Declared by: <nixpkgs/nixos/modules/services/web-apps/mediawiki.nix>

## services.mediawiki.finalPackage

The final package used by the module. This is the package that will have extensions and skins installed. Type: package (read only) Default: pkg Declared by: <nixpkgs/nixos/modules/services/web-apps/mediawiki.nix>

## services.mediawiki.name

Name of the wiki. Type: string Default: "MediaWiki" Example: "Foobar Wiki" Declared by: <nixpkgs/nixos/modules/services/web-apps/mediawiki.nix>

## services.mediawiki.passwordFile

A file containing the initial password for the administrator account “admin”. Type: absolute path Example: "/run/keys/mediawiki-password" Declared by: <nixpkgs/nixos/modules/services/web-apps/mediawiki.nix>

## services.mediawiki.passwordSender

Contact address for password reset. Type: string Default: if cfg.webserver == "apache" then if cfg.httpd.virtualHost.adminAddr != null then cfg.httpd.virtualHost.adminAddr else config.services.httpd.adminAddr else "root@localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/mediawiki.nix>

## services.mediawiki.path

Extra packages to add to the PATH of phpfpm-pool. Type: list of package Default: with pkgs; [ diffutils imagemagick ] Example: with pkgs; [ librsvg ] Declared by: <nixpkgs/nixos/modules/services/web-apps/mediawiki.nix>

## services.mediawiki.phpPackage

The php package to use. Type: package Default: pkgs.php83 Declared by: <nixpkgs/nixos/modules/services/web-apps/mediawiki.nix>

## services.mediawiki.poolConfig

Options for the MediaWiki PHP pool. See the documentation on php-fpm.conf for details on configuration directives. Type: attribute set of (string or signed integer or boolean) Default: { pm = "dynamic"; "pm.max_children" = 32; "pm.max_requests" = 500; "pm.max_spare_servers" = 4; "pm.min_spare_servers" = 2; "pm.start_servers" = 2; } Declared by: <nixpkgs/nixos/modules/services/web-apps/mediawiki.nix>

## services.mediawiki.skins

Attribute set of paths whose content is copied to the skins subdirectory of the MediaWiki installation in addition to the default skins. Type: attribute set of absolute path Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/mediawiki.nix>

## services.mediawiki.uploadsDir

This directory is used for uploads of pictures. The directory passed here is automatically created and permissions adjusted as required. Type: null or absolute path Default: "/var/lib/mediawiki/uploads" Declared by: <nixpkgs/nixos/modules/services/web-apps/mediawiki.nix>

## services.mediawiki.url

URL of the wiki. Type: string Default: '' if "mediawiki uses ssl" then "{"https" else "http"}://''${cfg.hostName}" else "http://localhost"; '' Example: "https://wiki.example.org" Declared by: <nixpkgs/nixos/modules/services/web-apps/mediawiki.nix>

## services.mediawiki.webserver

Webserver to use. Type: one of “apache”, “none”, “nginx” Default: "apache" Declared by: <nixpkgs/nixos/modules/services/web-apps/mediawiki.nix>
