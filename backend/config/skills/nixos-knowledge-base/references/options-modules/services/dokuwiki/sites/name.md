---
module: services.dokuwiki.sites.<name>
option_count: 13
source: options.html
---

# services.dokuwiki.sites.<name>

## services.dokuwiki.sites.<name>.package

The dokuwiki package to use. Type: package Default: pkgs.dokuwiki Declared by: <nixpkgs/nixos/modules/services/web-apps/dokuwiki.nix>

## services.dokuwiki.sites.<name>.acl

Access Control Lists: see https://www.dokuwiki.org/acl Mutually exclusive with services.dokuwiki.aclFile Set this to a value other than null to take precedence over aclFile option. Warning: Consider using aclFile instead if you do not want to store the ACL in the world-readable Nix store. Type: null or (list of (submodule)) Default: null Example: [ { page = "start"; actor = "@external"; level = "read"; } { page = "*"; actor = "@users"; level = "upload"; } ] Declared by: <nixpkgs/nixos/modules/services/web-apps/dokuwiki.nix>

## services.dokuwiki.sites.<name>.aclFile

Location of the dokuwiki acl rules. Mutually exclusive with services.dokuwiki.acl Mutually exclusive with services.dokuwiki.acl which is preferred. Consult documentation https://www.dokuwiki.org/acl for further instructions. Example: https://github.com/splitbrain/dokuwiki/blob/master/conf/acl.auth.php.dist Type: null or string Default: "/var/lib/dokuwiki/‹name›/acl.auth.php" Example: "/var/lib/dokuwiki/‹name›/acl.auth.php" Declared by: <nixpkgs/nixos/modules/services/web-apps/dokuwiki.nix>

## services.dokuwiki.sites.<name>.mergedConfig

Read only representation of the final configuration. Type: unspecified value (read only) Default: { useacl = true; } Declared by: <nixpkgs/nixos/modules/services/web-apps/dokuwiki.nix>

## services.dokuwiki.sites.<name>.phpOptions

Options for PHP’s php.ini file for this dokuwiki site. Type: attribute set of string Default: { } Example: { "opcache.interned_strings_buffer" = "8"; "opcache.max_accelerated_files" = "10000"; "opcache.memory_consumption" = "128"; "opcache.revalidate_freq" = "15"; "opcache.fast_shutdown" = "1"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/dokuwiki.nix>

## services.dokuwiki.sites.<name>.phpPackage

The php package to use. Type: package Default: pkgs.php84 Declared by: <nixpkgs/nixos/modules/services/web-apps/dokuwiki.nix>

## services.dokuwiki.sites.<name>.plugins

List of path(s) to respective plugin(s) which are copied from the ‘plugin’ directory. Note These plugins need to be packaged before use, see example. Type: list of absolute path Default: [ ] Example: let plugin-icalevents = pkgs.stdenv.mkDerivation rec { name = "icalevents"; version = "2017-06-16"; src = pkgs.fetchzip { stripRoot = false; url = "https://github.com/real-or-random/dokuwiki-plugin-icalevents/releases/download/${version}/dokuwiki-plugin-icalevents-${version}.zip"; hash = "sha256-IPs4+qgEfe8AAWevbcCM9PnyI0uoyamtWeg4rEb+9Wc="; }; installPhase = "mkdir -p $out; cp -R * $out/"; }; # And then pass this theme to the plugin list like this: in [ plugin-icalevents ] Declared by: <nixpkgs/nixos/modules/services/web-apps/dokuwiki.nix>

## services.dokuwiki.sites.<name>.pluginsConfig

List of the dokuwiki (un)loaded plugins. Type: attribute set of boolean Default: { authad = false; authldap = false; authmysql = false; authpgsql = false; } Declared by: <nixpkgs/nixos/modules/services/web-apps/dokuwiki.nix>

## services.dokuwiki.sites.<name>.poolConfig

Options for the DokuWiki PHP pool. See the documentation on php-fpm.conf for details on configuration directives. Type: attribute set of (string or signed integer or boolean) Default: { pm = "dynamic"; "pm.max_children" = 32; "pm.max_requests" = 500; "pm.max_spare_servers" = 4; "pm.min_spare_servers" = 2; "pm.start_servers" = 2; } Declared by: <nixpkgs/nixos/modules/services/web-apps/dokuwiki.nix>

## services.dokuwiki.sites.<name>.settings

Structural DokuWiki configuration. Refer to https://www.dokuwiki.org/config for details and supported values. Settings can either be directly set from nix, loaded from a file using ._file or obtained from any PHP function calls using ._raw. Type: attribute set of anything Default: { superuser = "admin"; useacl = true; } Example: { title = "My Wiki"; userewrite = 1; disableactions = [ "register" ]; # Will be concatenated with commas plugin.smtp = { smtp_pass._file = "/var/run/secrets/dokuwiki/smtp_pass"; smtp_user._raw = "getenv('DOKUWIKI_SMTP_USER')"; }; } Declared by: <nixpkgs/nixos/modules/services/web-apps/dokuwiki.nix>

## services.dokuwiki.sites.<name>.stateDir

Location of the DokuWiki state directory. Type: absolute path Default: "/var/lib/dokuwiki/‹name›/data" Declared by: <nixpkgs/nixos/modules/services/web-apps/dokuwiki.nix>

## services.dokuwiki.sites.<name>.templates

List of path(s) to respective template(s) which are copied from the ‘tpl’ directory. Note These templates need to be packaged before use, see example. Type: list of absolute path Default: [ ] Example: let template-bootstrap3 = pkgs.stdenv.mkDerivation rec { name = "bootstrap3"; version = "2022-07-27"; src = pkgs.fetchFromGitHub { owner = "giterlizzi"; repo = "dokuwiki-template-bootstrap3"; rev = "v${version}"; hash = "sha256-B3Yd4lxdwqfCnfmZdp+i/Mzwn/aEuZ0ovagDxuR6lxo="; }; installPhase = "mkdir -p $out; cp -R * $out/"; }; # And then pass this theme to the template list like this: in [ template-bootstrap3 ] Declared by: <nixpkgs/nixos/modules/services/web-apps/dokuwiki.nix>

## services.dokuwiki.sites.<name>.usersFile

Location of the dokuwiki users file. List of users. Format: login:passwordhash:Real Name:email:groups,comma,separated Create passwordHash easily by using: mkpasswd -5 password `pwgen 8 1` Example: https://github.com/splitbrain/dokuwiki/blob/master/conf/users.auth.php.dist Type: null or string Default: "/var/lib/dokuwiki/‹name›/users.auth.php" Example: "/var/lib/dokuwiki/‹name›/users.auth.php" Declared by: <nixpkgs/nixos/modules/services/web-apps/dokuwiki.nix>
