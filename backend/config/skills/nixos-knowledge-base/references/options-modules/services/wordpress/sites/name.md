---
module: services.wordpress.sites.<name>
option_count: 11
source: options.html
---

# services.wordpress.sites.<name>

## services.wordpress.sites.<name>.package

The wordpress package to use. Type: package Default: pkgs.wordpress Declared by: <nixpkgs/nixos/modules/services/web-apps/wordpress.nix>

## services.wordpress.sites.<name>.extraConfig

Any additional text to be appended to the wp-config.php configuration file. This is a PHP script. For configuration settings, see https://codex.wordpress.org/Editing_wp-config.php. Note: Please pass structured settings via services.wordpress.sites.‹name›.settings instead. Type: strings concatenated with “\n” Default: "" Example: '' @ini_set( 'log_errors', 'Off' ); @ini_set( 'display_errors', 'On' ); '' Declared by: <nixpkgs/nixos/modules/services/web-apps/wordpress.nix>

## services.wordpress.sites.<name>.fontsDir

This directory is used to download fonts from a remote location, e.g. to host google fonts locally. Type: absolute path Default: "/var/lib/wordpress/‹name›/fonts" Declared by: <nixpkgs/nixos/modules/services/web-apps/wordpress.nix>

## services.wordpress.sites.<name>.languages

List of path(s) to respective language(s) which are copied from the ‘languages’ directory. Type: list of absolute path Default: [ ] Example: [ # Let's package the German language. # For other languages try to replace language and country code in the download URL with your desired one. # Reference https://translate.wordpress.org for available translations and # codes. (pkgs.stdenv.mkDerivation { name = "language-de"; src = pkgs.fetchurl { url = "https://de.wordpress.org/wordpress-${pkgs.wordpress.version}-de_DE.tar.gz"; # Name is required to invalidate the hash when wordpress is updated name = "wordpress-${pkgs.wordpress.version}-language-de"; sha256 = "sha256-dlas0rXTSV4JAl8f/UyMbig57yURRYRhTMtJwF9g8h0="; }; installPhase = "mkdir -p $out; cp -r ./wp-content/languages/* $out/"; }) ]; Declared by: <nixpkgs/nixos/modules/services/web-apps/wordpress.nix>

## services.wordpress.sites.<name>.mergedConfig

Read only representation of the final configuration. Type: unspecified value (read only) Default: { DISALLOW_FILE_EDIT = true; AUTOMATIC_UPDATER_DISABLED = true; } Declared by: <nixpkgs/nixos/modules/services/web-apps/wordpress.nix>

## services.wordpress.sites.<name>.plugins

Path(s) to respective plugin(s) which are copied from the ‘plugins’ directory. Note These plugins need to be packaged before use, see example. Type: (attribute set of absolute path) or (list of absolute path) convertible to it Default: { } Example: { inherit (pkgs.wordpressPackages.plugins) embed-pdf-viewer-plugin; } Declared by: <nixpkgs/nixos/modules/services/web-apps/wordpress.nix>

## services.wordpress.sites.<name>.poolConfig

Options for the WordPress PHP pool. See the documentation on php-fpm.conf for details on configuration directives. Type: attribute set of (string or signed integer or boolean) Default: { pm = "dynamic"; "pm.max_children" = 32; "pm.max_requests" = 500; "pm.max_spare_servers" = 4; "pm.min_spare_servers" = 2; "pm.start_servers" = 2; } Declared by: <nixpkgs/nixos/modules/services/web-apps/wordpress.nix>

## services.wordpress.sites.<name>.settings

Structural Wordpress configuration. Refer to https://developer.wordpress.org/apis/wp-config-php for details and supported values. Type: attribute set of anything Default: { } Example: { WP_DEFAULT_THEME = "twentytwentytwo"; WP_SITEURL = "https://example.org"; WP_HOME = "https://example.org"; WP_DEBUG = true; WP_DEBUG_DISPLAY = true; WPLANG = "de_DE"; FORCE_SSL_ADMIN = true; AUTOMATIC_UPDATER_DISABLED = true; } Declared by: <nixpkgs/nixos/modules/services/web-apps/wordpress.nix>

## services.wordpress.sites.<name>.themes

Path(s) to respective theme(s) which are copied from the ‘theme’ directory. Note These themes need to be packaged before use, see example. Type: (attribute set of absolute path) or (list of absolute path) convertible to it Default: { inherit (pkgs.wordpressPackages.themes) twentytwentyfive; } Example: { inherit (pkgs.wordpressPackages.themes) responsive-theme; } Declared by: <nixpkgs/nixos/modules/services/web-apps/wordpress.nix>

## services.wordpress.sites.<name>.uploadsDir

This directory is used for uploads of pictures. The directory passed here is automatically created and permissions adjusted as required. Type: absolute path Default: "/var/lib/wordpress/‹name›/uploads" Declared by: <nixpkgs/nixos/modules/services/web-apps/wordpress.nix>

## services.wordpress.sites.<name>.virtualHost

Apache configuration can be done by adapting services.httpd.virtualHosts. Type: submodule Example: { adminAddr = "webmaster@example.org"; forceSSL = true; enableACME = true; } Declared by: <nixpkgs/nixos/modules/services/web-apps/wordpress.nix>
