---
module: services.geoipupdate
option_count: 3
source: options.html
---

# services.geoipupdate

## services.geoipupdate.enable

Whether to enable periodic downloading of GeoIP databases using geoipupdate . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/geoipupdate.nix>

## services.geoipupdate.interval

Update the GeoIP databases at this time / interval. The format is described in systemd.time(7). Type: string Default: "weekly" Declared by: <nixpkgs/nixos/modules/services/misc/geoipupdate.nix>

## services.geoipupdate.settings

geoipupdate configuration options. See https://github.com/maxmind/geoipupdate/blob/main/doc/GeoIP.conf.md for a full list of available options. Settings containing secret data should be set to an attribute set containing the attribute _secret - a string pointing to a file containing the value the option should be set to. See the example to get a better picture of this: in the resulting GeoIP.conf file, the ProxyUserPassword key will be set to the contents of the /run/keys/proxy_pass file. Type: open submodule of attribute set of (string or signed integer or boolean or list of (string or signed integer or boolean)) Example: { AccountID = 200001; DatabaseDirectory = "/var/lib/GeoIP"; LicenseKey = { _secret = "/run/keys/maxmind_license_key"; }; Proxy = "10.0.0.10:8888"; ProxyUserPassword = { _secret = "/run/keys/proxy_pass"; }; } Declared by: <nixpkgs/nixos/modules/services/misc/geoipupdate.nix>
