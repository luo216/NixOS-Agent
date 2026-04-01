---
module: services.rabbitmq.managementPlugin
option_count: 2
source: options.html
---

# services.rabbitmq.managementPlugin

## services.rabbitmq.managementPlugin.enable

Whether to enable the management plugin. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/amqp/rabbitmq.nix>

## services.rabbitmq.managementPlugin.port

On which port to run the management plugin Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 15672 Declared by: <nixpkgs/nixos/modules/services/amqp/rabbitmq.nix>
