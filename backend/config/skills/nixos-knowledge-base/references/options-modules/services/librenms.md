---
module: services.librenms
option_count: 18
source: options.html
---

# services.librenms

## services.librenms.enable

Whether to enable LibreNMS network monitoring system. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/librenms.nix>

## services.librenms.enableLocalBilling

Enable billing Cron-Jobs on the local instance. Enabled by default, but you may disable it on some nodes within a distributed poller setup. See the docs for more informations about billing with distributed pollers. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/monitoring/librenms.nix>

## services.librenms.enableOneMinutePolling

Enables the 1-Minute Polling. Changing this option will automatically convert your existing rrd files. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/librenms.nix>

## services.librenms.package

The librenms package to use. Type: package Default: pkgs.librenms Declared by: <nixpkgs/nixos/modules/services/monitoring/librenms.nix>

## services.librenms.dataDir

Path of the LibreNMS state directory. Type: absolute path Default: "/var/lib/librenms" Declared by: <nixpkgs/nixos/modules/services/monitoring/librenms.nix>

## services.librenms.environmentFile

File containing env-vars to be substituted into the final config. Useful for secrets. Does not apply to settings defined in extraConfig. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/librenms.nix>

## services.librenms.extraConfig

Additional config for LibreNMS that will be appended to the config.php. See https://github.com/librenms/librenms/blob/master/misc/config_definitions.json for possible options. Useful if you want to use PHP-Functions in your config. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/librenms.nix>

## services.librenms.finalPackage

The final package used by the module. This is the package that has all overrides. Type: package (read only) Default: package Declared by: <nixpkgs/nixos/modules/services/monitoring/librenms.nix>

## services.librenms.group

Name of the LibreNMS group. Type: string Default: "librenms" Declared by: <nixpkgs/nixos/modules/services/monitoring/librenms.nix>

## services.librenms.hostname

The hostname to serve LibreNMS on. Type: string Default: config.networking.fqdnOrHostName Declared by: <nixpkgs/nixos/modules/services/monitoring/librenms.nix>

## services.librenms.logDir

Path of the LibreNMS logging directory. Type: absolute path Default: "/var/log/librenms" Declared by: <nixpkgs/nixos/modules/services/monitoring/librenms.nix>

## services.librenms.nginx

With this option, you can customize the nginx virtualHost settings. Type: submodule Default: { } Example: { serverAliases = [ "librenms.${config.networking.domain}" ]; # To enable encryption and let let's encrypt take care of certificate forceSSL = true; enableACME = true; # To set the LibreNMS virtualHost as the default virtualHost; default = true; } Declared by: <nixpkgs/nixos/modules/services/monitoring/librenms.nix>

## services.librenms.phpOptions

Options for PHP’s php.ini file for librenms. Please note that this option is additive on purpose while the attribute values inside the default are option defaults: that means that { services.librenms.phpOptions."opcache.enable" = 1; } will override the php.ini option opcache.enable without discarding the rest of the defaults. Overriding all of phpOptions can be done like this: { services.librenms.phpOptions = lib.mkForce { /* ... */ }; } Type: attribute set of (string or signed integer) Default: { "date.timezone" = { _type = "literalExpression"; text = "config.time.timeZone"; }; log_errors = "on"; memory_limit = { _type = "literalExpression"; text = "\${toString cfg.settings.php_memory_limit}M"; }; "opcache.enable" = { _type = "literalExpression"; text = "1"; }; "opcache.memory_consumption" = { _type = "literalExpression"; text = "256"; }; post_max_size = "100M"; upload_max_filesize = "100M"; zend_extension = { _type = "literalExpression"; text = "opcache"; }; } Declared by: <nixpkgs/nixos/modules/services/monitoring/librenms.nix>

## services.librenms.pollerThreads

Amount of threads of the cron-poller. Type: signed integer Default: 16 Declared by: <nixpkgs/nixos/modules/services/monitoring/librenms.nix>

## services.librenms.poolConfig

Options for the LibreNMS PHP pool. See the documentation on php-fpm.conf for details on configuration directives. Type: attribute set of (string or signed integer or boolean) Default: { pm = "dynamic"; "pm.max_children" = 32; "pm.max_requests" = 500; "pm.max_spare_servers" = 4; "pm.min_spare_servers" = 2; "pm.start_servers" = 2; } Declared by: <nixpkgs/nixos/modules/services/monitoring/librenms.nix>

## services.librenms.settings

Attrset of the LibreNMS configuration. See https://docs.librenms.org/Support/Configuration/ for reference. All possible options are listed here. See https://docs.librenms.org/Extensions/Authentication/ for setting other authentication methods. Type: open submodule of (JSON value) Default: { } Example: { base_url = "/librenms/"; top_devices = true; top_ports = false; } Declared by: <nixpkgs/nixos/modules/services/monitoring/librenms.nix>

## services.librenms.useDistributedPollers

Enables distributed pollers for this LibreNMS instance. This will enable a local rrdcached and memcached server. To use this feature, make sure to configure your firewall that the distributed pollers can reach the local mysql, rrdcached and memcached ports. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/librenms.nix>

## services.librenms.user

Name of the LibreNMS user. Type: string Default: "librenms" Declared by: <nixpkgs/nixos/modules/services/monitoring/librenms.nix>
