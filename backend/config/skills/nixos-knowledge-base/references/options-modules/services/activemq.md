---
module: services.activemq
option_count: 6
source: options.html
---

# services.activemq

## services.activemq.enable

Enable the Apache ActiveMQ message broker service. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/amqp/activemq/default.nix>

## services.activemq.baseDir

The base directory where ActiveMQ stores its persistent data and logs. This will be overridden if you set “activemq.base” and “activemq.data” in the javaProperties option. You can also override this in activemq.xml. Type: string Default: "/var/activemq" Declared by: <nixpkgs/nixos/modules/services/amqp/activemq/default.nix>

## services.activemq.configurationDir

The base directory for ActiveMQ’s configuration. By default, this directory is searched for a file named activemq.xml, which should contain the configuration for the broker service. Type: string Default: "${pkgs.activemq}/conf" Declared by: <nixpkgs/nixos/modules/services/amqp/activemq/default.nix>

## services.activemq.configurationURI

The URI that is passed along to the BrokerFactory to set up the configuration of the ActiveMQ broker service. You should not need to change this. For custom configuration, set the configurationDir instead, and create an activemq.xml configuration file in it. Type: string Default: "xbean:activemq.xml" Declared by: <nixpkgs/nixos/modules/services/amqp/activemq/default.nix>

## services.activemq.extraJavaOptions

Add extra options here that you want to be sent to the Java runtime when the broker service is started. Type: strings concatenated with " " Default: "" Example: "-Xmx2G -Xms2G -XX:MaxPermSize=512M" Declared by: <nixpkgs/nixos/modules/services/amqp/activemq/default.nix>

## services.activemq.javaProperties

Specifies Java properties that are sent to the ActiveMQ broker service with the “-D” option. You can set properties here to change the behaviour and configuration of the broker. All essential properties that are not set here are automatically given reasonable defaults. Type: attribute set Default: { } Example: { "java.net.preferIPv4Stack" = "true"; } Declared by: <nixpkgs/nixos/modules/services/amqp/activemq/default.nix>
