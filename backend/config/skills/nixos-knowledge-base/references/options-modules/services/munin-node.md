---
module: services.munin-node
option_count: 6
source: options.html
---

# services.munin-node

## services.munin-node.enable

Enable Munin Node agent. Munin node listens on 0.0.0.0 and by default accepts connections only from 127.0.0.1 for security reasons. See https://guide.munin-monitoring.org/en/latest/architecture/index.html. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/munin.nix>

## services.munin-node.disabledPlugins

Munin plugins to disable, even if munin-node-configure --suggest tries to enable them. To disable a wildcard plugin, use an actual wildcard, as in the example. munin_stats is disabled by default as it tries to read /var/log/munin/munin-update.log for timing information, and the NixOS build of Munin does not write this file. Type: list of string Default: [ "munin_stats" ] Example: [ "diskstats" "zfs_usage_*" ] Declared by: <nixpkgs/nixos/modules/services/monitoring/munin.nix>

## services.munin-node.extraAutoPlugins

Additional Munin plugins to autoconfigure, using munin-node-configure --suggest. These should be the actual paths to the plugin files (or directories containing them), not just their names. If you want to manually enable individual plugins instead, use services.munin-node.extraPlugins. Note that only plugins that have the ‘autoconfig’ capability will do anything if listed here, since plugins that cannot autoconfigure won’t be automatically enabled by munin-node-configure. Plugins will be copied into the Nix store, and it will attempt to modify them to run properly by fixing hardcoded references to /bin, /usr/bin, /sbin, and /usr/sbin. Type: list of absolute path Default: [ ] Example: [ /src/munin-contrib/plugins/zfs /src/munin-contrib/plugins/ssh ]; Declared by: <nixpkgs/nixos/modules/services/monitoring/munin.nix>

## services.munin-node.extraConfig

munin-node.conf extra configuration. See https://guide.munin-monitoring.org/en/latest/reference/munin-node.conf.html Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/monitoring/munin.nix>

## services.munin-node.extraPluginConfig

plugin-conf.d extra plugin configuration. See https://guide.munin-monitoring.org/en/latest/plugin/use.html Type: strings concatenated with “\n” Default: "" Example: '' [fail2ban_*] user root '' Declared by: <nixpkgs/nixos/modules/services/monitoring/munin.nix>

## services.munin-node.extraPlugins

Additional Munin plugins to activate. Keys are the name of the plugin symlink, values are the path to the underlying plugin script. You can use the same plugin script multiple times (e.g. for wildcard plugins). Note that these plugins do not participate in autoconfiguration. If you want to autoconfigure additional plugins, use services.munin-node.extraAutoPlugins. Plugins enabled in this manner take precedence over autoconfigured plugins. Plugins will be copied into the Nix store, and it will attempt to modify them to run properly by fixing hardcoded references to /bin, /usr/bin, /sbin, and /usr/sbin. Type: attribute set of absolute path Default: { } Example: { zfs_usage_bigpool = /src/munin-contrib/plugins/zfs/zfs_usage_; zfs_usage_smallpool = /src/munin-contrib/plugins/zfs/zfs_usage_; zfs_list = /src/munin-contrib/plugins/zfs/zfs_list; }; Declared by: <nixpkgs/nixos/modules/services/monitoring/munin.nix>
