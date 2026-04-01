---
module: services.zookeeper
option_count: 12
source: options.html
---

# services.zookeeper

## services.zookeeper.enable

Whether to enable Zookeeper. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/zookeeper.nix>

## services.zookeeper.package

The zookeeper package to use. Type: package Default: pkgs.zookeeper Declared by: <nixpkgs/nixos/modules/services/misc/zookeeper.nix>

## services.zookeeper.dataDir

Data directory for Zookeeper Type: absolute path Default: "/var/lib/zookeeper" Declared by: <nixpkgs/nixos/modules/services/misc/zookeeper.nix>

## services.zookeeper.extraCmdLineOptions

Extra command line options for the Zookeeper launcher. Type: list of string Default: [ "-Dcom.sun.management.jmxremote" "-Dcom.sun.management.jmxremote.local.only=true" ] Example: [ "-Djava.net.preferIPv4Stack=true" "-Dcom.sun.management.jmxremote" "-Dcom.sun.management.jmxremote.local.only=true" ] Declared by: <nixpkgs/nixos/modules/services/misc/zookeeper.nix>

## services.zookeeper.extraConf

Extra configuration for Zookeeper. Type: strings concatenated with “\n” Default: '' initLimit=5 syncLimit=2 tickTime=2000 '' Declared by: <nixpkgs/nixos/modules/services/misc/zookeeper.nix>

## services.zookeeper.id

Zookeeper ID. Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/services/misc/zookeeper.nix>

## services.zookeeper.jre

The JRE with which to run Zookeeper Type: package Default: pkgs.zookeeper.jre Example: pkgs.jre Declared by: <nixpkgs/nixos/modules/services/misc/zookeeper.nix>

## services.zookeeper.logging

Zookeeper logging configuration, logback.xml. Type: strings concatenated with “\n” Default: '' <configuration> <property name="zookeeper.console.threshold" value="INFO" /> <property name="zookeeper.log.dir" value="." /> <property name="zookeeper.log.file" value="zookeeper.log" /> <property name="zookeeper.log.threshold" value="INFO" /> <property name="zookeeper.log.maxfilesize" value="256MB" /> <property name="zookeeper.log.maxbackupindex" value="20" /> <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender"> <encoder> <pattern>%d{ISO8601} [myid:%X{myid}] - %-5p [%t:%C{1}@%L] - %m%n</pattern> </encoder> <filter class="ch.qos.logback.classic.filter.ThresholdFilter"> <level>''${zookeeper.console.threshold}</level> </filter> </appender> <root level="INFO"> <appender-ref ref="CONSOLE" /> </root> </configuration> '' Declared by: <nixpkgs/nixos/modules/services/misc/zookeeper.nix>

## services.zookeeper.port

Zookeeper Client port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 2181 Declared by: <nixpkgs/nixos/modules/services/misc/zookeeper.nix>

## services.zookeeper.preferIPv4

Add the -Djava.net.preferIPv4Stack=true flag to the Zookeeper server. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/misc/zookeeper.nix>

## services.zookeeper.purgeInterval

The time interval in hours for which the purge task has to be triggered. Set to a positive integer (1 and above) to enable the auto purging. Type: signed integer Default: 1 Declared by: <nixpkgs/nixos/modules/services/misc/zookeeper.nix>

## services.zookeeper.servers

All Zookeeper Servers. Type: strings concatenated with “\n” Default: "" Example: '' server.0=host0:2888:3888 server.1=host1:2888:3888 server.2=host2:2888:3888 '' Declared by: <nixpkgs/nixos/modules/services/misc/zookeeper.nix>
