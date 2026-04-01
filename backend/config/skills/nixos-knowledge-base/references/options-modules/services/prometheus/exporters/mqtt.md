---
module: services.prometheus.exporters.mqtt
option_count: 28
source: options.html
---

# services.prometheus.exporters.mqtt

## services.prometheus.exporters.mqtt.enable

Whether to enable the prometheus mqtt exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mqtt.environmentFile

File to load as environment file. Useful for e.g. setting MQTT_PASSWORD without putting any secrets into the Nix store. Type: null or absolute path Default: null Example: [ "/run/secrets/mqtt-exporter" ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mqtt.esphomeTopicPrefixes

MQTT topic used for ESPHome messages. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mqtt.extraFlags

Extra commandline options to pass to the mqtt exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mqtt.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.mqtt.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9000" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mqtt.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.mqtt.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9000 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mqtt.group

Group under which the mqtt exporter shall be run. Type: string Default: "mqtt-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mqtt.hubitatTopicPrefixes

MQTT topic used for Hubitat messages. Type: list of string Default: [ "hubitat/" ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mqtt.keepFullTopic

Whether to enable Keep entire topic instead of the first two elements only. Usecase: Shelly 3EM. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mqtt.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mqtt.logLevel

Logging level Type: one of “CRITICAL”, “ERROR”, “WARNING”, “INFO”, “DEBUG” Default: "INFO" Example: "DEBUG" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mqtt.logMqttMessage

Whether to enable Log MQTT original message, only if LOG_LEVEL is set to DEBUG… Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mqtt.mqttAddress

IP or hostname of MQTT broker. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mqtt.mqttClientId

Set client ID manually for MQTT connection Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mqtt.mqttExposeClientId

Whether to enable Expose the client ID as a label in Prometheus metrics… Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mqtt.mqttIgnoredTopics

Lists of topics to ignore. Accepts wildcards. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mqtt.mqttKeepAlive

Keep alive interval to maintain connection with MQTT broker. Type: signed integer Default: 60 Example: 30 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mqtt.mqttPort

TCP port of MQTT broker. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 1883 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mqtt.mqttTopic

Topic path to subscribe to. Type: string Default: "#" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mqtt.mqttUsername

Username which should be used to authenticate against the MQTT broker. Type: null or string Default: null Example: "mqttexporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mqtt.mqttV5Protocol

Whether to enable Force to use MQTT protocol v5 instead of 3.1.1… Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mqtt.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mqtt.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9000 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mqtt.prometheusPrefix

Prefix added to the metric name. Type: string Default: "mqtt_" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mqtt.topicLabel

Define the Prometheus label for the topic. Type: string Default: "topic" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mqtt.user

User name under which the mqtt exporter shall be run. Type: string Default: "mqtt-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mqtt.zigbee2MqttAvailability

Whether to enable Normalize sensor name for device availability metric added by Zigbee2MQTT… Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mqtt.zwaveTopicPrefix

MQTT topic used for Zwavejs2Mqtt messages. Type: string Default: "zwave/" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
