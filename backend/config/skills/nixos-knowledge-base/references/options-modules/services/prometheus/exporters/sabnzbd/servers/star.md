---
module: services.prometheus.exporters.sabnzbd.servers.*
option_count: 2
source: options.html
---

# services.prometheus.exporters.sabnzbd.servers.*

## services.prometheus.exporters.sabnzbd.servers.*.apiKeyFile

The path to a file containing the API key. The file is securely passed to the service by leveraging systemd credentials. No special permissions need to be set on this file. Type: string Example: "/run/secrets/sabnzbd_apikey" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.sabnzbd.servers.*.baseUrl

Base URL of the sabnzbd server. Type: string Example: "http://localhost:8080/sabnzbd" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
