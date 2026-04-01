---
module: services.unpoller.influxdb
option_count: 7
source: options.html
---

# services.unpoller.influxdb

## services.unpoller.influxdb.db

Database name. Database should exist. Type: string Default: "unifi" Declared by: <nixpkgs/nixos/modules/services/monitoring/unpoller.nix>

## services.unpoller.influxdb.disable

Whether to disable the influxdb output plugin. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/unpoller.nix>

## services.unpoller.influxdb.interval

Setting this lower than the Unifi controller’s refresh interval may lead to zeroes in your database. Type: string Default: "30s" Declared by: <nixpkgs/nixos/modules/services/monitoring/unpoller.nix>

## services.unpoller.influxdb.pass

Path of a file containing the password for influxdb. This file needs to be readable by the unifi-poller user. Type: absolute path Default: unpoller-influxdb-default.password Declared by: <nixpkgs/nixos/modules/services/monitoring/unpoller.nix>

## services.unpoller.influxdb.url

URL of the influxdb host. Type: string Default: "http://127.0.0.1:8086" Declared by: <nixpkgs/nixos/modules/services/monitoring/unpoller.nix>

## services.unpoller.influxdb.user

Username for the influxdb. Type: string Default: "unifipoller" Declared by: <nixpkgs/nixos/modules/services/monitoring/unpoller.nix>

## services.unpoller.influxdb.verify_ssl

Verify the influxdb’s certificate. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/monitoring/unpoller.nix>
