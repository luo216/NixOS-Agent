---
module: services.hadoop
option_count: 14
source: options.html
---

# services.hadoop

## services.hadoop.package

The hadoop package to use. Type: package Default: pkgs.hadoop Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/default.nix>

## services.hadoop.containerExecutorCfg

Yarn container-executor.cfg definition https://hadoop.apache.org/docs/r2.7.2/hadoop-yarn/hadoop-yarn-site/SecureContainer.html Type: attribute set of anything Default: { "feature.mount-cgroup.enabled" = 1; "feature.terminal.enabled" = 1; "min.user.id" = 1000; "yarn.nodemanager.linux-container-executor.group" = "hadoop"; } Example: options.services.hadoop.containerExecutorCfg.default // { "feature.terminal.enabled" = 0; } Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/default.nix>

## services.hadoop.coreSite

Hadoop core-site.xml definition https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-common/core-default.xml Type: attribute set of anything Default: { } Example: { "fs.defaultFS" = "hdfs://localhost"; } Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/default.nix>

## services.hadoop.extraConfDirs

Directories containing additional config files to be added to HADOOP_CONF_DIR Type: list of absolute path Default: [ ] Example: [ ./extraHDFSConfs ./extraYARNConfs ] Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/default.nix>

## services.hadoop.hbaseSite

Additional options and overrides for hbase-site.xml https://github.com/apache/hbase/blob/rel/2.4.11/hbase-common/src/main/resources/hbase-default.xml Type: attribute set of anything Default: { } Example: { "hbase.hregion.max.filesize" = 20*1024*1024*1024; "hbase.table.normalization.enabled" = "true"; } Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hbase.nix>

## services.hadoop.hbaseSiteDefault

Default options for hbase-site.xml Type: attribute set of anything Default: { "hbase.cluster.distributed" = "true"; "hbase.master.info.bindAddress" = "0.0.0.0"; "hbase.master.ipc.address" = "0.0.0.0"; "hbase.regionserver.info.bindAddress" = "0.0.0.0"; "hbase.regionserver.ipc.address" = "0.0.0.0"; } Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/hbase.nix>

## services.hadoop.hdfsSite

Additional options and overrides for hdfs-site.xml https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/hdfs-default.xml Type: attribute set of anything Default: { } Example: { "dfs.nameservices" = "namenode1"; } Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/default.nix>

## services.hadoop.hdfsSiteDefault

Default options for hdfs-site.xml Type: attribute set of anything Default: { "dfs.namenode.http-address" = "0.0.0.0:9870"; "dfs.namenode.http-bind-host" = "0.0.0.0"; "dfs.namenode.rpc-bind-host" = "0.0.0.0"; "dfs.namenode.servicerpc-bind-host" = "0.0.0.0"; } Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/default.nix>

## services.hadoop.httpfsSite

Hadoop httpfs-site.xml definition https://hadoop.apache.org/docs/current/hadoop-hdfs-httpfs/httpfs-default.html Type: attribute set of anything Default: { } Example: { "hadoop.http.max.threads" = 500; } Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/default.nix>

## services.hadoop.log4jProperties

log4j.properties file added to HADOOP_CONF_DIR Type: absolute path Default: "${config.services.hadoop.package}/etc/hadoop/log4j.properties" Example: "${pkgs.hadoop}/etc/hadoop/log4j.properties"; Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/default.nix>

## services.hadoop.mapredSite

Additional options and overrides for mapred-site.xml https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/mapred-default.xml Type: attribute set of anything Default: { } Example: { "mapreduce.map.java.opts" = "-Xmx900m -XX:+UseParallelGC"; } Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/default.nix>

## services.hadoop.mapredSiteDefault

Default options for mapred-site.xml Type: attribute set of anything Default: { "mapreduce.framework.name" = "yarn"; "yarn.app.mapreduce.am.env" = "HADOOP_MAPRED_HOME=${config.services.hadoop.package}"; "mapreduce.map.env" = "HADOOP_MAPRED_HOME=${config.services.hadoop.package}"; "mapreduce.reduce.env" = "HADOOP_MAPRED_HOME=${config.services.hadoop.package}"; } Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/default.nix>

## services.hadoop.yarnSite

Additional options and overrides for yarn-site.xml https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-common/yarn-default.xml Type: attribute set of anything Default: { } Example: { "yarn.resourcemanager.hostname" = "${config.networking.hostName}"; } Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/default.nix>

## services.hadoop.yarnSiteDefault

Default options for yarn-site.xml Type: attribute set of anything Default: { "yarn.nodemanager.admin-env" = "PATH=$PATH"; "yarn.nodemanager.aux-services" = "mapreduce_shuffle"; "yarn.nodemanager.aux-services.mapreduce_shuffle.class" = "org.apache.hadoop.mapred.ShuffleHandler"; "yarn.nodemanager.bind-host" = "0.0.0.0"; "yarn.nodemanager.container-executor.class" = "org.apache.hadoop.yarn.server.nodemanager.LinuxContainerExecutor"; "yarn.nodemanager.env-whitelist" = "JAVA_HOME,HADOOP_COMMON_HOME,HADOOP_HDFS_HOME,HADOOP_CONF_DIR,CLASSPATH_PREPEND_DISTCACHE,HADOOP_YARN_HOME,HADOOP_HOME,LANG,TZ"; "yarn.nodemanager.linux-container-executor.group" = "hadoop"; "yarn.nodemanager.linux-container-executor.path" = "/run/wrappers/yarn-nodemanager/bin/container-executor"; "yarn.nodemanager.log-dirs" = "/var/log/hadoop/yarn/nodemanager"; "yarn.resourcemanager.bind-host" = "0.0.0.0"; "yarn.resourcemanager.scheduler.class" = "org.apache.hadoop.yarn.server.resourcemanager.scheduler.fair.FairScheduler"; } Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/default.nix>
