---
module: services.prometheus.exporters.ecoflow
option_count: 20
source: options.html
---

# services.prometheus.exporters.ecoflow

## services.prometheus.exporters.ecoflow.enable

Whether to enable the prometheus ecoflow exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.ecoflow.debug

Enable debug log messages. Disabled by default. Set to “1” to enable. Type: string Default: "0" Example: "1" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.ecoflow.ecoflowAccessKeyFile

Path to the file with your personal api access string from the Ecoflow development website https://developer-eu.ecoflow.com. Do to share or commit your plaintext scecrets to a public repo use: agenix or soaps. Type: absolute path Default: /etc/ecoflow-access-key Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.ecoflow.ecoflowDevicesFile

File must contain one line, example: R3300000,R3400000,NC430000,… The list of devices serial numbers separated by comma. For instance: SN1,SN2,SN3. Instead of “devicesFile” you can specify “devicesPrettynamesFile” which will also work. You can specify both. Do to share or commit your plaintext serial numbers to a public repo use: agenix or soaps. Type: absolute path Default: /etc/ecoflow-devices Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.ecoflow.ecoflowDevicesPrettyNamesFile

File must contain one line, example: {“R3300000”:“Delta 2”,“R3400000”:“Delta Pro”,…} The key/value map of custom names for your devices. Key is a serial number, value is a device name you want to see in Grafana Dashboard. It’s helpful to see a meaningful name in Grafana dashboard instead of a serialnumber. Do to share or commit your plaintext serial numbers to a public repo use: agenix or soaps. Type: absolute path Default: /etc/ecoflow-devices-pretty-names Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.ecoflow.ecoflowEmailFile

Path to the file with your personal ecoflow app login email address. Do to share or commit your plaintext scecrets to a public repo use: agenix or soaps. Type: absolute path Default: /etc/ecoflow-email Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.ecoflow.ecoflowPasswordFile

Path to the file with your personal ecoflow app login email password. Do to share or commit your plaintext passwords to a public repo use: agenix or soaps here! Type: absolute path Default: /etc/ecoflow-password Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.ecoflow.ecoflowSecretKeyFile

Path to the file with your personal api secret string from the Ecoflow development website https://developer-eu.ecoflow.com. Do to share or commit your plaintext scecrets to a public repo use: agenix or soaps. Type: absolute path Default: /etc/ecoflow-secret-key Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.ecoflow.exporterType

The type of exporter you’d like to use. Possible values: “rest” and “mqtt”. Default value is “rest”. Choose “rest” for the ecoflow online cloud api use “rest” and define: accessKey, secretKey. Choose “mqtt” for the lan realtime integration use “mqtt” and define: email, password, devices. Type: one of “rest”, “mqtt” Default: "rest" Example: "mqtt" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.ecoflow.extraFlags

Extra commandline options to pass to the ecoflow exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.ecoflow.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.ecoflow.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 2112" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.ecoflow.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.ecoflow.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 2112 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.ecoflow.group

Group under which the ecoflow exporter shall be run. Type: string Default: "ecoflow-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.ecoflow.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.ecoflow.mqttDeviceOfflineThreshold

The threshold in seconds which indicates how long we should wait for a metric message from MQTT broker. Default value: 60 seconds. If we don’t receive message within 60 seconds we consider that device is offline. If we don’t receive messages within the threshold for all devices, we’ll try to reconnect to the MQTT broker. There is a strange behavior that MQTT stop sends messages if you open Ecoflow mobile app and then close it). Type: positive integer, meaning >0 Default: 60 Example: 120 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.ecoflow.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.ecoflow.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 2112 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.ecoflow.prefix

The prefix that will be added to all metrics. Default value is ecoflow. For instance metric bms_bmsStatus.minCellTemp will be exported to prometheus as ecoflow.bms_bmsStatus.minCellTemp. With default value “ecoflow” you can use Grafana Dashboard with ID 17812 without any changes. Type: string Default: "ecoflow" Example: "ecoflow_privateSite" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.ecoflow.scrapingInterval

Scrapping interval in seconds. How often should the exporter execute requests to Ecoflow Rest API in order to get the data. Default value is 30 seconds. Align this value with your prometheus scraper interval settings. Type: positive integer, meaning >0 Default: 30 Example: 120 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.ecoflow.user

User name under which the ecoflow exporter shall be run. Type: string Default: "ecoflow-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
