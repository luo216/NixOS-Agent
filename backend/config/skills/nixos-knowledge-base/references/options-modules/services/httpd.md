---
module: services.httpd
option_count: 22
source: options.html
---

# services.httpd

## services.httpd.enable

Whether to enable the Apache HTTP Server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-servers/apache-httpd/default.nix>

## services.httpd.enableMellon

Whether to enable the mod_auth_mellon module. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-servers/apache-httpd/default.nix>

## services.httpd.enablePHP

Whether to enable the PHP module. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-servers/apache-httpd/default.nix>

## services.httpd.enablePerl

Whether to enable the Perl module (mod_perl). Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-servers/apache-httpd/default.nix>

## services.httpd.package

The apacheHttpd package to use. Type: package Default: pkgs.apacheHttpd Declared by: <nixpkgs/nixos/modules/services/web-servers/apache-httpd/default.nix>

## services.httpd.adminAddr

E-mail address of the server administrator. Type: null or string Default: null Example: "admin@example.org" Declared by: <nixpkgs/nixos/modules/services/web-servers/apache-httpd/default.nix>

## services.httpd.configFile

Override the configuration file used by Apache. By default, NixOS generates one automatically. Type: absolute path Default: confFile Example: pkgs.writeText "httpd.conf" "# my custom config file ..." Declared by: <nixpkgs/nixos/modules/services/web-servers/apache-httpd/default.nix>

## services.httpd.extraConfig

Configuration lines appended to the generated Apache configuration file. Note that this mechanism will not work when configFile is overridden. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/web-servers/apache-httpd/default.nix>

## services.httpd.extraModules

Additional Apache modules to be used. These can be specified as a string in the case of modules distributed with Apache, or as an attribute set specifying the name and path of the module. Type: list of unspecified value Default: [ ] Example: [ "proxy_connect" { name = "jk"; path = "${pkgs.apacheHttpdPackages.mod_jk}/modules/mod_jk.so"; } ] Declared by: <nixpkgs/nixos/modules/services/web-servers/apache-httpd/default.nix>

## services.httpd.group

Group under which httpd children processes run. Type: string Default: "wwwrun" Declared by: <nixpkgs/nixos/modules/services/web-servers/apache-httpd/default.nix>

## services.httpd.logDir

Directory for Apache’s log files. It is created automatically. Type: absolute path Default: "/var/log/httpd" Declared by: <nixpkgs/nixos/modules/services/web-servers/apache-httpd/default.nix>

## services.httpd.logFormat

Log format for log files. Possible values are: combined, common, referer, agent, none. See https://httpd.apache.org/docs/2.4/logs.html for more details. Type: string Default: "common" Example: "combined" Declared by: <nixpkgs/nixos/modules/services/web-servers/apache-httpd/default.nix>

## services.httpd.logPerVirtualHost

If enabled, each virtual host gets its own access.log and error.log, namely suffixed by the hostName of the virtual host. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-servers/apache-httpd/default.nix>

## services.httpd.maxClients

Maximum number of httpd processes (prefork) Type: positive integer, meaning >0 Default: 150 Example: 8 Declared by: <nixpkgs/nixos/modules/services/web-servers/apache-httpd/default.nix>

## services.httpd.maxRequestsPerChild

Maximum number of httpd requests answered per httpd child (prefork), 0 means unlimited. Type: unsigned integer, meaning >=0 Default: 0 Example: 500 Declared by: <nixpkgs/nixos/modules/services/web-servers/apache-httpd/default.nix>

## services.httpd.mpm

Multi-processing module to be used by Apache. Available modules are prefork (handles each request in a separate child process), worker (hybrid approach that starts a number of child processes each running a number of threads) and event (the default; a recent variant of worker that handles persistent connections more efficiently). Type: one of “event”, “prefork”, “worker” Default: "event" Example: "worker" Declared by: <nixpkgs/nixos/modules/services/web-servers/apache-httpd/default.nix>

## services.httpd.phpOptions

Options appended to the PHP configuration file php.ini. Type: strings concatenated with “\n” Default: "" Example: '' date.timezone = "CET" '' Declared by: <nixpkgs/nixos/modules/services/web-servers/apache-httpd/default.nix>

## services.httpd.phpPackage

The php package to use. Type: package Default: pkgs.php Declared by: <nixpkgs/nixos/modules/services/web-servers/apache-httpd/default.nix>

## services.httpd.sslCiphers

Cipher Suite available for negotiation in SSL proxy handshake. Type: string Default: "HIGH:!aNULL:!MD5:!EXP" Declared by: <nixpkgs/nixos/modules/services/web-servers/apache-httpd/default.nix>

## services.httpd.sslProtocols

Allowed SSL/TLS protocol versions. Type: string Default: "All -SSLv2 -SSLv3 -TLSv1 -TLSv1.1" Example: "All -SSLv2 -SSLv3" Declared by: <nixpkgs/nixos/modules/services/web-servers/apache-httpd/default.nix>

## services.httpd.user

User account under which httpd children processes run. If you require the main httpd process to run as root add the following configuration: systemd.services.httpd.serviceConfig.User = lib.mkForce "root"; Type: string Default: "wwwrun" Declared by: <nixpkgs/nixos/modules/services/web-servers/apache-httpd/default.nix>

## services.httpd.virtualHosts

Specification of the virtual hosts served by Apache. Each element should be an attribute set specifying the configuration of the virtual host. Type: attribute set of (submodule) Default: { localhost = { documentRoot = "${package.out}/htdocs"; }; } Example: { "foo.example.com" = { forceSSL = true; documentRoot = "/var/www/foo.example.com" }; "bar.example.com" = { addSSL = true; documentRoot = "/var/www/bar.example.com"; }; } Declared by: <nixpkgs/nixos/modules/services/web-servers/apache-httpd/default.nix>
