---
module: services.hbase-standalone
option_count: 7
source: options.html
---

# services.hbase-standalone

## services.hbase-standalone.enable

Whether to enable HBase master in standalone mode with embedded regionserver and zookeper. Do not use this configuration for production nor for evaluating HBase performance . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/databases/hbase-standalone.nix>

## services.hbase-standalone.package

The hbase package to use. Type: package Default: pkgs.hbase Declared by: <nixpkgs/nixos/modules/services/databases/hbase-standalone.nix>

## services.hbase-standalone.dataDir

Specifies location of HBase database files. This location should be writable and readable for the user the HBase service runs as (hbase by default). Type: absolute path Default: "/var/lib/hbase" Declared by: <nixpkgs/nixos/modules/services/databases/hbase-standalone.nix>

## services.hbase-standalone.group

Group account under which HBase runs. Type: string Default: "hbase" Declared by: <nixpkgs/nixos/modules/services/databases/hbase-standalone.nix>

## services.hbase-standalone.logDir

Specifies the location of HBase log files. Type: absolute path Default: "/var/log/hbase" Declared by: <nixpkgs/nixos/modules/services/databases/hbase-standalone.nix>

## services.hbase-standalone.settings

configurations in hbase-site.xml, see https://github.com/apache/hbase/blob/master/hbase-server/src/test/resources/hbase-site.xml for details. Type: attribute set of (string or signed integer or boolean) Default: { "hbase.rootdir" = "file://${config.services.hbase-standalone.dataDir}/hbase"; "hbase.zookeeper.property.dataDir" = "${config.services.hbase-standalone.dataDir}/zookeeper"; } Declared by: <nixpkgs/nixos/modules/services/databases/hbase-standalone.nix>

## services.hbase-standalone.user

User account under which HBase runs. Type: string Default: "hbase" Declared by: <nixpkgs/nixos/modules/services/databases/hbase-standalone.nix>
