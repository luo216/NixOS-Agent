---
module: services.librenms.distributedPoller
option_count: 8
source: options.html
---

# services.librenms.distributedPoller

## services.librenms.distributedPoller.enable

Configure this LibreNMS instance as a distributed poller. This will disable all web features and just configure the poller features. Use the mysql database of your main LibreNMS instance in the database settings. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/librenms.nix>

## services.librenms.distributedPoller.distributedBilling

Enable distributed billing on this poller. Note: according to the docs, billing should only be calculated on a single node per poller group. You can disable billing on some nodes with the services.librenms.enableLocalBilling option. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/librenms.nix>

## services.librenms.distributedPoller.group

Group(s) of this poller. Type: string Default: "0" Example: "1,2" Declared by: <nixpkgs/nixos/modules/services/monitoring/librenms.nix>

## services.librenms.distributedPoller.memcachedHost

Hostname or IP of the memcached server. Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/librenms.nix>

## services.librenms.distributedPoller.memcachedPort

Port of the memcached server. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 11211 Declared by: <nixpkgs/nixos/modules/services/monitoring/librenms.nix>

## services.librenms.distributedPoller.name

Custom name of this poller. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/librenms.nix>

## services.librenms.distributedPoller.rrdcachedHost

Hostname or IP of the rrdcached server. Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/librenms.nix>

## services.librenms.distributedPoller.rrdcachedPort

Port of the memcached server. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 42217 Declared by: <nixpkgs/nixos/modules/services/monitoring/librenms.nix>
