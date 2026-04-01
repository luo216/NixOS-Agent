---
module: services.geoipupdate.settings
option_count: 4
source: options.html
---

# services.geoipupdate.settings

## services.geoipupdate.settings.AccountID

Your MaxMind account ID. Type: signed integer Declared by: <nixpkgs/nixos/modules/services/misc/geoipupdate.nix>

## services.geoipupdate.settings.DatabaseDirectory

The directory to store the database files in. The directory will be automatically created, the owner changed to geoip and permissions set to world readable. This applies if the directory already exists as well, so don’t use a directory with sensitive contents. Type: absolute path Default: "/var/lib/GeoIP" Example: "/run/GeoIP" Declared by: <nixpkgs/nixos/modules/services/misc/geoipupdate.nix>

## services.geoipupdate.settings.EditionIDs

List of database edition IDs. This includes new string IDs like GeoIP2-City and old numeric IDs like 106. Type: list of (string or signed integer) Example: [ "GeoLite2-ASN" "GeoLite2-City" "GeoLite2-Country" ] Declared by: <nixpkgs/nixos/modules/services/misc/geoipupdate.nix>

## services.geoipupdate.settings.LicenseKey

A file containing the MaxMind license key. Always handled as a secret whether the value is wrapped in a { _secret = ...; } attrset or not (refer to services.geoipupdate.settings for details). Type: absolute path or attribute set of absolute path Declared by: <nixpkgs/nixos/modules/services/misc/geoipupdate.nix>
