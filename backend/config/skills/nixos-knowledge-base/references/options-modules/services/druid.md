---
module: services.druid
option_count: 6
source: options.html
---

# services.druid

## services.druid.package

The apache-druid package to use. Type: package Default: pkgs.druid Declared by: <nixpkgs/nixos/modules/services/cluster/druid/default.nix>

## services.druid.commonConfig

(key=value) Configuration to be written to common.runtime.properties Type: attribute set of anything Default: { } Example: { "druid.extensions.loadList" = "[ \"mysql-metadata-storage\" ]"; "druid.metadata.storage.connector.connectURI" = "jdbc:mysql://localhost:3306/druid"; "druid.metadata.storage.type" = "mysql"; "druid.zk.service.host" = "localhost:2181"; } Declared by: <nixpkgs/nixos/modules/services/cluster/druid/default.nix>

## services.druid.commonTmpDirs

Common List of directories used by druid processes Type: list of string Default: [ "/var/log/druid/requests" ] Declared by: <nixpkgs/nixos/modules/services/cluster/druid/default.nix>

## services.druid.extraClassPaths

Extra classpath to include in the jvm Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/cluster/druid/default.nix>

## services.druid.extraConfDirs

Extra Conf Dirs to include in the jvm Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/cluster/druid/default.nix>

## services.druid.log4j

Log4j Configuration for the druid process Type: absolute path Declared by: <nixpkgs/nixos/modules/services/cluster/druid/default.nix>
