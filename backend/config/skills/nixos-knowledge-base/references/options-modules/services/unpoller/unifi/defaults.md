---
module: services.unpoller.unifi.defaults
option_count: 12
source: options.html
---

# services.unpoller.unifi.defaults

## services.unpoller.unifi.defaults.hash_pii

Hash, with md5, client names and MAC addresses. This attempts to protect personally identifiable information. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/unpoller.nix>

## services.unpoller.unifi.defaults.pass

Path of a file containing the password for the unifi service user. This file needs to be readable by the unifi-poller user. Type: absolute path Default: unpoller-unifi-default.password Declared by: <nixpkgs/nixos/modules/services/monitoring/unpoller.nix>

## services.unpoller.unifi.defaults.save_alarms

Collect and save data from UniFi alarms to influxdb and Loki. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/unpoller.nix>

## services.unpoller.unifi.defaults.save_anomalies

Collect and save data from UniFi anomalies to influxdb and Loki. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/unpoller.nix>

## services.unpoller.unifi.defaults.save_dpi

Collect and save data from deep packet inspection. Adds around 150 data points and impacts performance. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/unpoller.nix>

## services.unpoller.unifi.defaults.save_events

Collect and save data from UniFi events to influxdb and Loki. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/unpoller.nix>

## services.unpoller.unifi.defaults.save_ids

Collect and save data from the intrusion detection system to influxdb and Loki. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/unpoller.nix>

## services.unpoller.unifi.defaults.save_sites

Collect and save site data. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/monitoring/unpoller.nix>

## services.unpoller.unifi.defaults.sites

List of site names for which statistics should be exported. Or the string “default” for the default site or the string “all” for all sites. Type: one of “default”, “all” or list of string Default: "all" Declared by: <nixpkgs/nixos/modules/services/monitoring/unpoller.nix>

## services.unpoller.unifi.defaults.url

URL of the Unifi controller. Type: string Default: "https://unifi:8443" Declared by: <nixpkgs/nixos/modules/services/monitoring/unpoller.nix>

## services.unpoller.unifi.defaults.user

Unifi service user name. Type: string Default: "unifi" Declared by: <nixpkgs/nixos/modules/services/monitoring/unpoller.nix>

## services.unpoller.unifi.defaults.verify_ssl

Verify the Unifi controller’s certificate. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/monitoring/unpoller.nix>
