---
module: services.drupal.sites.<name>
option_count: 12
source: options.html
---

# services.drupal.sites.<name>

## services.drupal.sites.<name>.enable

Whether to enable Drupal web application. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/drupal.nix>

## services.drupal.sites.<name>.package

The drupal package to use. Type: package Default: pkgs.drupal Declared by: <nixpkgs/nixos/modules/services/web-apps/drupal.nix>

## services.drupal.sites.<name>.configSyncDir

The location of the Drupal config sync directory. Type: absolute path Default: "/var/lib/drupal/<name>/config/sync" Declared by: <nixpkgs/nixos/modules/services/web-apps/drupal.nix>

## services.drupal.sites.<name>.extraConfig

Extra configuration values that you want to insert into settings.php. All configuration must be written as PHP script. Type: strings concatenated with “\n” Default: "" Example: '' $config['user.settings']['anonymous'] = 'Visitor'; $settings['entity_update_backup'] = TRUE; '' Declared by: <nixpkgs/nixos/modules/services/web-apps/drupal.nix>

## services.drupal.sites.<name>.filesDir

The location of the Drupal files directory. Type: absolute path Default: "/var/lib/drupal/<name>/sites/default/files" Declared by: <nixpkgs/nixos/modules/services/web-apps/drupal.nix>

## services.drupal.sites.<name>.modulesDir

The location for users to install Drupal modules. Type: absolute path Default: "/var/lib/drupal/<name>/modules" Declared by: <nixpkgs/nixos/modules/services/web-apps/drupal.nix>

## services.drupal.sites.<name>.phpOptions

Options for PHP’s php.ini file for this Drupal site. Type: attribute set of string Default: { } Example: { "opcache.interned_strings_buffer" = "8"; "opcache.max_accelerated_files" = "10000"; "opcache.memory_consumption" = "128"; "opcache.revalidate_freq" = "15"; "opcache.fast_shutdown" = "1"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/drupal.nix>

## services.drupal.sites.<name>.poolConfig

Options for the Drupal PHP pool. See the documentation on php-fpm.conf for details on configuration directives. Type: attribute set of (string or signed integer or boolean) Default: { pm = "dynamic"; "pm.max_children" = 32; "pm.max_requests" = 500; "pm.max_spare_servers" = 4; "pm.min_spare_servers" = 2; "pm.start_servers" = 2; } Declared by: <nixpkgs/nixos/modules/services/web-apps/drupal.nix>

## services.drupal.sites.<name>.privateFilesDir

The location of the Drupal private files directory. Type: absolute path Default: "/var/lib/drupal/<name>/private" Declared by: <nixpkgs/nixos/modules/services/web-apps/drupal.nix>

## services.drupal.sites.<name>.stateDir

The location of the Drupal site state directory. Type: absolute path Default: "/var/lib/drupal/<name>" Declared by: <nixpkgs/nixos/modules/services/web-apps/drupal.nix>

## services.drupal.sites.<name>.themesDir

The location for users to install Drupal themes. Type: absolute path Default: "/var/lib/drupal/<name>/themes" Declared by: <nixpkgs/nixos/modules/services/web-apps/drupal.nix>

## services.drupal.sites.<name>.virtualHost

Apache configuration can be done by adapting services.httpd.virtualHosts. Type: submodule Example: { adminAddr = "webmaster@example.org"; forceSSL = true; enableACME = true; } Declared by: <nixpkgs/nixos/modules/services/web-apps/drupal.nix>
