---
module: services.parsedmarc.provision
option_count: 2
source: options.html
---

# services.parsedmarc.provision

## services.parsedmarc.provision.elasticsearch

Whether to set up and use a local instance of Elasticsearch. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/monitoring/parsedmarc.nix>

## services.parsedmarc.provision.geoIp

Whether to enable and configure the geoipupdate service to automatically fetch GeoIP databases. Not crucial, but recommended for full functionality. To finish the setup, you need to manually set the services.geoipupdate.settings.AccountID and services.geoipupdate.settings.LicenseKey options. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/monitoring/parsedmarc.nix>
