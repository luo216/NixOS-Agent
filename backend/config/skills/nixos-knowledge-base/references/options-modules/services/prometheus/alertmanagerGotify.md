---
module: services.prometheus.alertmanagerGotify
option_count: 15
source: options.html
---

# services.prometheus.alertmanagerGotify

## services.prometheus.alertmanagerGotify.enable

Whether to enable alertmagager-gotify. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager-gotify-bridge.nix>

## services.prometheus.alertmanagerGotify.package

The alertmanager-gotify-bridge package to use. Type: package Default: pkgs.alertmanager-gotify-bridge Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager-gotify-bridge.nix>

## services.prometheus.alertmanagerGotify.bindAddress

The address the server will listen on (bind address). Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager-gotify-bridge.nix>

## services.prometheus.alertmanagerGotify.debug

Enables extended logs for debugging purposes. Should be disabled in productive mode. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager-gotify-bridge.nix>

## services.prometheus.alertmanagerGotify.defaultPriority

The default priority for messages sent to gotify. Type: signed integer Default: 5 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager-gotify-bridge.nix>

## services.prometheus.alertmanagerGotify.dispatchErrors

When enabled, alerts will be tried to dispatch with an error message regarding faulty templating or missing fields to help debugging. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager-gotify-bridge.nix>

## services.prometheus.alertmanagerGotify.environmentFile

File containing additional config environment variables for alertmanager-gotify-bridge. This is especially for secrets like GOTIFY_TOKEN and AUTH_PASSWORD. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager-gotify-bridge.nix>

## services.prometheus.alertmanagerGotify.extendedDetails

When enabled, alerts are presented in HTML format and include colorized status (FIR|RES), alert start time, and a link to the generator of the alert. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager-gotify-bridge.nix>

## services.prometheus.alertmanagerGotify.messageAnnotation

Annotation holding the alert message. Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager-gotify-bridge.nix>

## services.prometheus.alertmanagerGotify.openFirewall

Opens the bridge port in the firewall. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager-gotify-bridge.nix>

## services.prometheus.alertmanagerGotify.port

The local port the bridge is listening on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager-gotify-bridge.nix>

## services.prometheus.alertmanagerGotify.priorityAnnotation

Annotation holding the priority of the alert. Type: string Default: "priority" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager-gotify-bridge.nix>

## services.prometheus.alertmanagerGotify.timeout

The time between sending a message and the timeout. Type: positive integer, meaning >0 Default: 5 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager-gotify-bridge.nix>

## services.prometheus.alertmanagerGotify.titleAnnotation

Annotation holding the title of the alert Type: string Default: "summary" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager-gotify-bridge.nix>

## services.prometheus.alertmanagerGotify.webhookPath

The URL path to handle requests on. Type: string Default: "/gotify_webhook" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager-gotify-bridge.nix>
