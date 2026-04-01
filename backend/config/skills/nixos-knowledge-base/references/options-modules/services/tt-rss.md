---
module: services.tt-rss
option_count: 18
source: options.html
---

# services.tt-rss

## services.tt-rss.enable

Whether to enable tt-rss. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>

## services.tt-rss.enableGZipOutput

Selectively gzip output to improve wire performance. This requires PHP Zlib extension on the server. Enabling this can break tt-rss in several httpd/php configurations, if you experience weird errors and tt-rss failing to start, blank pages after login, or content encoding errors, disable it. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>

## services.tt-rss.extraConfig

Additional lines to append to config.php. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>

## services.tt-rss.feedCryptKey

Key used for encryption of passwords for password-protected feeds in the database. A string of 24 random characters. If left blank, encryption is not used. Requires mcrypt functions. Warning: changing this key will make your stored feed passwords impossible to decrypt. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>

## services.tt-rss.forceArticlePurge

When this option is not 0, users ability to control feed purging intervals is disabled and all articles (which are not starred) older than this amount of days are purged. Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>

## services.tt-rss.logDestination

Log destination to use. Possible values: sql (uses internal logging you can read in Preferences -> System), syslog - logs to system log. Setting this to blank uses PHP logging (usually to http server error.log). Type: one of “”, “sql”, “syslog” Default: "sql" Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>

## services.tt-rss.phpPackage

php package to use for php fpm and update daemon. Type: package Default: "pkgs.php" Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>

## services.tt-rss.pluginPackages

List of plugins to install. The list elements are expected to be derivations. All elements in this derivation are automatically copied to the plugins.local directory. Type: list of package Default: [ ] Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>

## services.tt-rss.plugins

List of plugins to load automatically for all users. System plugins have to be specified here. Please enable at least one authentication plugin here (auth_*). Users may enable other user plugins from Preferences/Plugins but may not disable plugins specified in this list. Disabling auth_internal in this list would automatically disable reset password link on the login form. Type: list of string Default: [ "auth_internal" "note" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>

## services.tt-rss.pool

Name of existing phpfpm pool that is used to run web-application. If not specified a pool will be created automatically with default values. Type: string Default: "tt-rss" Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>

## services.tt-rss.root

Root of the application. Type: absolute path Default: "/var/lib/tt-rss" Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>

## services.tt-rss.selfUrlPath

Full URL of your tt-rss installation. This should be set to the location of tt-rss directory, e.g. http://example.org/tt-rss/ You need to set this option correctly otherwise several features including PUSH, bookmarklets and browser integration will not work properly. Type: string Example: "http://localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>

## services.tt-rss.sessionCookieLifetime

Default lifetime of a session (e.g. login) cookie. In seconds, 0 means cookie will be deleted when browser closes. Type: signed integer Default: 86400 Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>

## services.tt-rss.simpleUpdateMode

Enables fallback update mode where tt-rss tries to update feeds in background while tt-rss is open in your browser. If you don’t have a lot of feeds and don’t want to or can’t run background processes while not running tt-rss, this method is generally viable to keep your feeds up to date. Still, there are more robust (and recommended) updating methods available, you can read about them here: https://tt-rss.org/wiki/UpdatingFeeds Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>

## services.tt-rss.singleUserMode

Operate in single user mode, disables all functionality related to multiple users and authentication. Enabling this assumes you have your tt-rss directory protected by other means (e.g. http auth). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>

## services.tt-rss.themePackages

List of themes to install. The list elements are expected to be derivations. All elements in this derivation are automatically copied to the themes.local directory. Type: list of package Default: [ ] Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>

## services.tt-rss.user

User account under which both the update daemon and the web-application run. Type: string Default: "tt_rss" Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>

## services.tt-rss.virtualHost

Name of the nginx virtualhost to use and setup. If null, do not setup any virtualhost. Type: null or string Default: "tt-rss" Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>
