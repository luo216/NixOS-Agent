---
module: services.lighttpd.collectd
option_count: 2
source: options.html
---

# services.lighttpd.collectd

## services.lighttpd.collectd.enable

Whether to enable collectd subservice accessible at http://yourserver/collectd. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-servers/lighttpd/collectd.nix>

## services.lighttpd.collectd.collectionCgi

Path to collection.cgi script from (collectd sources)/contrib/collection.cgi This option allows to use a customized version Type: absolute path Default: config.services.collectd.package configured for lighttpd Declared by: <nixpkgs/nixos/modules/services/web-servers/lighttpd/collectd.nix>
