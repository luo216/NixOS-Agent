---
module: services.drupal.sites.<name>.virtualHost.locations.<name>
option_count: 5
source: options.html
---

# services.drupal.sites.<name>.virtualHost.locations.<name>

## services.drupal.sites.<name>.virtualHost.locations.<name>.alias

Alias directory for requests. See https://httpd.apache.org/docs/2.4/mod/mod_alias.html#alias. Type: null or absolute path Default: null Example: "/your/alias/directory" Declared by: <nixpkgs/nixos/modules/services/web-apps/drupal.nix>

## services.drupal.sites.<name>.virtualHost.locations.<name>.extraConfig

These lines go to the end of the location verbatim. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/web-apps/drupal.nix>

## services.drupal.sites.<name>.virtualHost.locations.<name>.index

Adds DirectoryIndex directive. See https://httpd.apache.org/docs/2.4/mod/mod_dir.html#directoryindex. Type: null or string Default: null Example: "index.php index.html" Declared by: <nixpkgs/nixos/modules/services/web-apps/drupal.nix>

## services.drupal.sites.<name>.virtualHost.locations.<name>.priority

Order of this location block in relation to the others in the vhost. The semantics are the same as with lib.mkOrder. Smaller values have a greater priority. Type: signed integer Default: 1000 Declared by: <nixpkgs/nixos/modules/services/web-apps/drupal.nix>

## services.drupal.sites.<name>.virtualHost.locations.<name>.proxyPass

Sets up a simple reverse proxy as described by https://httpd.apache.org/docs/2.4/howto/reverse_proxy.html#simple. Type: null or string Default: null Example: "http://www.example.org/" Declared by: <nixpkgs/nixos/modules/services/web-apps/drupal.nix>
