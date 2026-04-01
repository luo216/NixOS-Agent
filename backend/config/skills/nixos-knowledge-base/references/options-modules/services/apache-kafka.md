---
module: services.apache-kafka
option_count: 9
source: options.html
---

# services.apache-kafka

## services.apache-kafka.enable

Whether to enable Apache Kafka event streaming broker. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/apache-kafka.nix>

## services.apache-kafka.package

The apacheKafka package to use. Type: package Default: pkgs.apacheKafka Declared by: <nixpkgs/nixos/modules/services/misc/apache-kafka.nix>

## services.apache-kafka.clusterId

KRaft mode ClusterId used for formatting log directories. Can be generated with kafka-storage.sh random-uuid Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/misc/apache-kafka.nix>

## services.apache-kafka.formatLogDirs

Whether to format log dirs in KRaft mode if all log dirs are unformatted, ie. they contain no meta.properties. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/apache-kafka.nix>

## services.apache-kafka.formatLogDirsIgnoreFormatted

Whether to ignore already formatted log dirs when formatting log dirs, instead of failing. Useful when replacing or adding disks. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/apache-kafka.nix>

## services.apache-kafka.jre

The JRE with which to run Kafka Type: package Default: pkgs.apacheKafka.passthru.jre Declared by: <nixpkgs/nixos/modules/services/misc/apache-kafka.nix>

## services.apache-kafka.jvmOptions

Extra command line options for the JVM running Kafka. Type: list of string Default: [ ] Example: [ "-Djava.net.preferIPv4Stack=true" "-Dcom.sun.management.jmxremote" "-Dcom.sun.management.jmxremote.local.only=true" ] Declared by: <nixpkgs/nixos/modules/services/misc/apache-kafka.nix>

## services.apache-kafka.log4jProperties

Kafka log4j property configuration. Type: strings concatenated with “\n” Default: '' log4j.rootLogger=INFO, stdout log4j.appender.stdout=org.apache.log4j.ConsoleAppender log4j.appender.stdout.layout=org.apache.log4j.PatternLayout log4j.appender.stdout.layout.ConversionPattern=[%d] %p %m (%c)%n '' Declared by: <nixpkgs/nixos/modules/services/misc/apache-kafka.nix>

## services.apache-kafka.settings

Kafka broker configuration server.properties. Note that .properties files contain mappings from string to string. Keys with dots are NOT represented by nested attrs in these settings, but instead as quoted strings (ie. settings."broker.id", NOT settings.broker.id). Type: open submodule of lazy attribute set of (null or boolean or signed integer or string or list of (boolean or signed integer or string)) Declared by: <nixpkgs/nixos/modules/services/misc/apache-kafka.nix>
