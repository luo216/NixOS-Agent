---
module: services.geoclue2
option_count: 19
source: options.html
---

# services.geoclue2

## services.geoclue2.enable

Whether to enable GeoClue 2 daemon, a DBus service that provides location information for accessing. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/desktops/geoclue2.nix>

## services.geoclue2.enable3G

Whether to enable 3G source. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/desktops/geoclue2.nix>

## services.geoclue2.enableCDMA

Whether to enable CDMA source. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/desktops/geoclue2.nix>

## services.geoclue2.enableDemoAgent

Whether to use the GeoClue demo agent. This should be overridden by desktop environments that provide their own agent. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/desktops/geoclue2.nix>

## services.geoclue2.enableModemGPS

Whether to enable Modem-GPS source. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/desktops/geoclue2.nix>

## services.geoclue2.enableNmea

Whether to fetch location from NMEA sources on local network. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/desktops/geoclue2.nix>

## services.geoclue2.enableStatic

Whether to enable the static source. This source defines a fixed location using the staticLatitude, staticLongitude, staticAltitude, and staticAccuracy options. Setting enableStatic to true will disable all other sources, to prevent conflicts. Use lib.mkForce true when enabling other sources if for some reason you want to override this. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/desktops/geoclue2.nix>

## services.geoclue2.enableWifi

Whether to enable WiFi source. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/desktops/geoclue2.nix>

## services.geoclue2.package

The geoclue2 package to use Type: package Default: pkgs.geoclue2 Declared by: <nixpkgs/nixos/modules/services/desktops/geoclue2.nix>

## services.geoclue2.appConfig

Specify extra settings per application. Type: attribute set of (submodule) Default: { } Example: "com.github.app" = { isAllowed = true; isSystem = true; users = [ "300" ]; }; Declared by: <nixpkgs/nixos/modules/services/desktops/geoclue2.nix>

## services.geoclue2.geoProviderUrl

The url to the wifi GeoLocation Service. Type: string Default: "https://api.beacondb.net/v1/geolocate" Example: "https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_KEY" Declared by: <nixpkgs/nixos/modules/services/desktops/geoclue2.nix>

## services.geoclue2.staticAccuracy

Accuracy radius in meters to use for the static source. Type: positive integer or floating point number, meaning >0 Declared by: <nixpkgs/nixos/modules/services/desktops/geoclue2.nix>

## services.geoclue2.staticAltitude

Altitude in meters to use for the static source. Type: signed integer or floating point number Declared by: <nixpkgs/nixos/modules/services/desktops/geoclue2.nix>

## services.geoclue2.staticLatitude

Latitude to use for the static source. Defaults to location.latitude. Type: integer or floating point number between -90 and 90 (both inclusive) Declared by: <nixpkgs/nixos/modules/services/desktops/geoclue2.nix>

## services.geoclue2.staticLongitude

Longitude to use for the static source. Defaults to location.longitude. Type: integer or floating point number between -180 and 180 (both inclusive) Declared by: <nixpkgs/nixos/modules/services/desktops/geoclue2.nix>

## services.geoclue2.submissionNick

A nickname to submit network data with. Must be 2-32 characters long. Type: string Default: "geoclue" Declared by: <nixpkgs/nixos/modules/services/desktops/geoclue2.nix>

## services.geoclue2.submissionUrl

The url to submit data to a GeoLocation Service. Type: string Default: "https://api.beacondb.net/v2/geosubmit" Declared by: <nixpkgs/nixos/modules/services/desktops/geoclue2.nix>

## services.geoclue2.submitData

Whether to submit data to a GeoLocation Service. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/desktops/geoclue2.nix>

## services.geoclue2.whitelistedAgents

Desktop IDs (without the .desktop extension) of whitelisted agents. Type: list of string Default: [ "gnome-shell" "io.elementary.desktop.agent-geoclue2" ] Declared by: <nixpkgs/nixos/modules/services/desktops/geoclue2.nix>
