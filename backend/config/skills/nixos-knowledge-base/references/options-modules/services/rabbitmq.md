---
module: services.rabbitmq
option_count: 10
source: options.html
---

# services.rabbitmq

## services.rabbitmq.enable

Whether to enable the RabbitMQ server, an Advanced Message Queuing Protocol (AMQP) broker. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/amqp/rabbitmq.nix>

## services.rabbitmq.package

The rabbitmq-server package to use. Type: package Default: pkgs.rabbitmq-server Declared by: <nixpkgs/nixos/modules/services/amqp/rabbitmq.nix>

## services.rabbitmq.config

Verbatim advanced configuration file contents using the Erlang syntax. This is also known as the advanced.config file or the old config format. configItems is preferred whenever possible. However, nested data structures can only be expressed properly using the config option. The contents of this option will be merged into the configItems by RabbitMQ at runtime to form the final configuration. See the second table on https://www.rabbitmq.com/configure.html#config-items For the distinct formats, see https://www.rabbitmq.com/configure.html#config-file-formats Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/amqp/rabbitmq.nix>

## services.rabbitmq.configItems

Configuration options in RabbitMQ’s new config file format, which is a simple key-value format that can not express nested data structures. This is known as the rabbitmq.conf file, although outside NixOS that filename may have Erlang syntax, particularly prior to RabbitMQ 3.7.0. If you do need to express nested data structures, you can use config option. Configuration from config will be merged into these options by RabbitMQ at runtime to form the final configuration. See https://www.rabbitmq.com/configure.html#config-items For the distinct formats, see https://www.rabbitmq.com/configure.html#config-file-formats Type: attribute set of string Default: { } Example: { "auth_backends.1.authn" = "rabbit_auth_backend_ldap"; "auth_backends.1.authz" = "rabbit_auth_backend_internal"; } Declared by: <nixpkgs/nixos/modules/services/amqp/rabbitmq.nix>

## services.rabbitmq.dataDir

Data directory for rabbitmq. Type: absolute path Default: "/var/lib/rabbitmq" Declared by: <nixpkgs/nixos/modules/services/amqp/rabbitmq.nix>

## services.rabbitmq.listenAddress

IP address on which RabbitMQ will listen for AMQP connections. Set to the empty string to listen on all interfaces. Note that RabbitMQ creates a user named guest with password guest by default, so you should delete this user if you intend to allow external access. Together with ‘port’ setting it’s mostly an alias for configItems.“listeners.tcp.1” and it’s left for backwards compatibility with previous version of this module. Type: string Default: "127.0.0.1" Example: "" Declared by: <nixpkgs/nixos/modules/services/amqp/rabbitmq.nix>

## services.rabbitmq.pluginDirs

The list of directories containing external plugins Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/amqp/rabbitmq.nix>

## services.rabbitmq.plugins

The names of plugins to enable Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/amqp/rabbitmq.nix>

## services.rabbitmq.port

Port on which RabbitMQ will listen for AMQP connections. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5672 Declared by: <nixpkgs/nixos/modules/services/amqp/rabbitmq.nix>

## services.rabbitmq.unsafeCookie

Erlang cookie is a string of arbitrary length which must be the same for several nodes to be allowed to communicate. Leave empty to generate automatically. Setting the cookie via this option exposes the cookie to the store, which is not recommended for security reasons. Only use this option in an isolated non-production environment such as NixOS VM tests. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/amqp/rabbitmq.nix>
