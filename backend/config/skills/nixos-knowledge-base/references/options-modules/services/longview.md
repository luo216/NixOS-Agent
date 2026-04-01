---
module: services.longview
option_count: 8
source: options.html
---

# services.longview

## services.longview.enable

If enabled, system metrics will be sent to Linode LongView. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/longview.nix>

## services.longview.apacheStatusUrl

The Apache status page URL. If provided, Longview will gather statistics from this location. This requires Apache mod_status to be loaded and enabled. Type: string Default: "" Example: "http://127.0.0.1/server-status" Declared by: <nixpkgs/nixos/modules/services/monitoring/longview.nix>

## services.longview.apiKey

Longview API key. To get this, look in Longview settings which are found at https://manager.linode.com/longview/. Warning: this secret is stored in the world-readable Nix store! Use apiKeyFile instead. Type: string Default: "" Example: "01234567-89AB-CDEF-0123456789ABCDEF" Declared by: <nixpkgs/nixos/modules/services/monitoring/longview.nix>

## services.longview.apiKeyFile

A file containing the Longview API key. To get this, look in Longview settings which are found at https://manager.linode.com/longview/. apiKeyFile takes precedence over apiKey. Type: null or absolute path Default: null Example: "/run/keys/longview-api-key" Declared by: <nixpkgs/nixos/modules/services/monitoring/longview.nix>

## services.longview.mysqlPassword

The password corresponding to mysqlUser. Warning: this is stored in cleartext in the Nix store! Use mysqlPasswordFile instead. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/monitoring/longview.nix>

## services.longview.mysqlPasswordFile

A file containing the password corresponding to mysqlUser. Type: null or absolute path Default: null Example: "/run/keys/dbpassword" Declared by: <nixpkgs/nixos/modules/services/monitoring/longview.nix>

## services.longview.mysqlUser

The user for connecting to the MySQL database. If provided, Longview will connect to MySQL and collect statistics about queries, etc. This user does not need to have been granted any extra privileges. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/monitoring/longview.nix>

## services.longview.nginxStatusUrl

The Nginx status page URL. Longview will gather statistics from this URL. This requires the Nginx stub_status module to be enabled and configured at the given location. Type: string Default: "" Example: "http://127.0.0.1/nginx_status" Declared by: <nixpkgs/nixos/modules/services/monitoring/longview.nix>
