---
module: services.mosquitto
option_count: 10
source: options.html
---

# services.mosquitto

## services.mosquitto.enable

Whether to enable the MQTT Mosquitto broker. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/mosquitto.nix>

## services.mosquitto.package

The mosquitto package to use. Type: package Default: pkgs.mosquitto Declared by: <nixpkgs/nixos/modules/services/networking/mosquitto.nix>

## services.mosquitto.bridges

Bridges to build to other MQTT brokers. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/mosquitto.nix>

## services.mosquitto.dataDir

The data directory. Type: absolute path Default: "/var/lib/mosquitto" Declared by: <nixpkgs/nixos/modules/services/networking/mosquitto.nix>

## services.mosquitto.includeDirs

Directories to be scanned for further config files to include. Directories will processed in the order given, *.conf files in the directory will be read in case-sensitive alphabetical order. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/mosquitto.nix>

## services.mosquitto.listeners

Listeners to configure on this broker. Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/mosquitto.nix>

## services.mosquitto.logDest

Destinations to send log messages to. Type: list of (absolute path or one of “stdout”, “stderr”, “syslog”, “topic”, “dlt”) Default: [ "stderr" ] Declared by: <nixpkgs/nixos/modules/services/networking/mosquitto.nix>

## services.mosquitto.logType

Types of messages to log. Type: list of (one of “debug”, “error”, “warning”, “notice”, “information”, “subscribe”, “unsubscribe”, “websockets”, “none”, “all”) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/mosquitto.nix>

## services.mosquitto.persistence

Enable persistent storage of subscriptions and messages. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/mosquitto.nix>

## services.mosquitto.settings

Global configuration options for the mosquitto broker. Type: open submodule of attribute set of (string, path, bool, or integer) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/mosquitto.nix>
