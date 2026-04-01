---
module: services.moodle
option_count: 6
source: options.html
---

# services.moodle

## services.moodle.enable

Whether to enable Moodle web application. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/moodle.nix>

## services.moodle.package

The moodle package to use. Type: package Default: pkgs.moodle Declared by: <nixpkgs/nixos/modules/services/web-apps/moodle.nix>

## services.moodle.extraConfig

Any additional text to be appended to the config.php configuration file. This is a PHP script. For configuration details, see https://docs.moodle.org/37/en/Configuration_file. Type: strings concatenated with “\n” Default: "" Example: '' $CFG->disableupdatenotifications = true; '' Declared by: <nixpkgs/nixos/modules/services/web-apps/moodle.nix>

## services.moodle.initialPassword

Specifies the initial password for the admin, i.e. the password assigned if the user does not already exist. The password specified here is world-readable in the Nix store, so it should be changed promptly. Type: string Example: "correcthorsebatterystaple" Declared by: <nixpkgs/nixos/modules/services/web-apps/moodle.nix>

## services.moodle.poolConfig

Options for the Moodle PHP pool. See the documentation on php-fpm.conf for details on configuration directives. Type: attribute set of (string or signed integer or boolean) Default: { pm = "dynamic"; "pm.max_children" = 32; "pm.max_requests" = 500; "pm.max_spare_servers" = 4; "pm.min_spare_servers" = 2; "pm.start_servers" = 2; } Declared by: <nixpkgs/nixos/modules/services/web-apps/moodle.nix>

## services.moodle.virtualHost

Apache configuration can be done by adapting services.httpd.virtualHosts. See services.httpd.virtualHosts for further information. Type: submodule Example: { hostName = "moodle.example.org"; adminAddr = "webmaster@example.org"; forceSSL = true; enableACME = true; } Declared by: <nixpkgs/nixos/modules/services/web-apps/moodle.nix>
