---
module: services.unit
option_count: 7
source: options.html
---

# services.unit

## services.unit.enable

Whether to enable Unit App Server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-servers/unit/default.nix>

## services.unit.package

The unit package to use. Type: package Default: pkgs.unit Declared by: <nixpkgs/nixos/modules/services/web-servers/unit/default.nix>

## services.unit.config

Unit configuration in JSON format. More details here https://unit.nginx.org/configuration Type: string Default: '' { "listeners": {}, "applications": {} } '' Example: '' { "listeners": { "*:8300": { "application": "example-php-72" } }, "applications": { "example-php-72": { "type": "php 7.2", "processes": 4, "user": "nginx", "group": "nginx", "root": "/var/www", "index": "index.php", "options": { "file": "/etc/php.d/default.ini", "admin": { "max_execution_time": "30", "max_input_time": "30", "display_errors": "off", "display_startup_errors": "off", "open_basedir": "/dev/urandom:/proc/cpuinfo:/proc/meminfo:/etc/ssl/certs:/var/www", "disable_functions": "exec,passthru,shell_exec,system" } } } } } '' Declared by: <nixpkgs/nixos/modules/services/web-servers/unit/default.nix>

## services.unit.group

Group account under which unit runs. Type: string Default: "unit" Declared by: <nixpkgs/nixos/modules/services/web-servers/unit/default.nix>

## services.unit.logDir

Unit log directory. Type: absolute path Default: "/var/log/unit" Declared by: <nixpkgs/nixos/modules/services/web-servers/unit/default.nix>

## services.unit.stateDir

Unit data directory. Type: absolute path Default: "/var/spool/unit" Declared by: <nixpkgs/nixos/modules/services/web-servers/unit/default.nix>

## services.unit.user

User account under which unit runs. Type: string Default: "unit" Declared by: <nixpkgs/nixos/modules/services/web-servers/unit/default.nix>
