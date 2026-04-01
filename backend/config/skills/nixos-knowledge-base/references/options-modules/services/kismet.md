---
module: services.kismet
option_count: 10
source: options.html
---

# services.kismet

## services.kismet.enable

Whether to enable kismet. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/kismet.nix>

## services.kismet.package

The kismet package to use. Type: package Default: pkgs.kismet Declared by: <nixpkgs/nixos/modules/services/networking/kismet.nix>

## services.kismet.dataDir

The Kismet data directory. Type: absolute path Default: "/var/lib/kismet" Declared by: <nixpkgs/nixos/modules/services/networking/kismet.nix>

## services.kismet.extraConfig

Literal Kismet config lines appended to the site config. Note that services.kismet.settings allows you to define all options here using Nix attribute sets. Type: string Default: "" Example: '' # Looks like the following in `services.kismet.settings`: # wepkey = [ "00:DE:AD:C0:DE:00" "FEEDFACE42" ]; wepkey=00:DE:AD:C0:DE:00,FEEDFACE42 '' Declared by: <nixpkgs/nixos/modules/services/networking/kismet.nix>

## services.kismet.group

The group to run Kismet as. Type: string Default: "kismet" Declared by: <nixpkgs/nixos/modules/services/networking/kismet.nix>

## services.kismet.logTypes

The log types. Type: list of string Default: [ "kismet" ] Declared by: <nixpkgs/nixos/modules/services/networking/kismet.nix>

## services.kismet.serverDescription

The description of the server. Type: string Default: "NixOS Kismet server" Declared by: <nixpkgs/nixos/modules/services/networking/kismet.nix>

## services.kismet.serverName

The name of the server. Type: string Default: "Kismet" Declared by: <nixpkgs/nixos/modules/services/networking/kismet.nix>

## services.kismet.settings

Options for Kismet. See: https://www.kismetwireless.net/docs/readme/configuring/configfiles/ Type: Kismet config stanza Default: { } Example: { /* Examples for atoms */ # dot11_link_bssts=false dot11_link_bssts = false; # Boolean # dot11_related_bss_window=10000000 dot11_related_bss_window = 10000000; # Integer # devicefound=00:11:22:33:44:55 devicefound = "00:11:22:33:44:55"; # String # log_types+=wiglecsv log_types' = "wiglecsv"; /* Examples for lists of atoms */ # wepkey=00:DE:AD:C0:DE:00,FEEDFACE42 wepkey = [ "00:DE:AD:C0:DE:00" "FEEDFACE42" ]; # alert=ADHOCCONFLICT,5/min,1/sec # alert=ADVCRYPTCHANGE,5/min,1/sec alert = [ [ "ADHOCCONFLICT" "5/min" "1/sec" ] [ "ADVCRYPTCHANGE" "5/min" "1/sec" ] ]; /* Examples for sets of atoms */ # source=wlan0:name=ath11k source.wlan0 = { name = "ath11k"; }; /* Examples with colon-suffixed headers */ # gps=gpsd:host=localhost,port=2947 gps.gpsd = { host = "localhost"; port = 2947; }; # apspoof=Foo1:ssid=Bar1,validmacs="00:11:22:33:44:55,aa:bb:cc:dd:ee:ff" # apspoof=Foo1:ssid=Bar2,validmacs="01:12:23:34:45:56,ab:bc:cd:de:ef:f0" # apspoof=Foo2:ssid=Baz1,validmacs="11:22:33:44:55:66,bb:cc:dd:ee:ff:00" apspoof.Foo1 = [ { ssid = "Bar1"; validmacs = [ "00:11:22:33:44:55" "aa:bb:cc:dd:ee:ff" ]; } { ssid = "Bar2"; validmacs = [ "01:12:23:34:45:56" "ab:bc:cd:de:ef:f0" ]; } ]; # because Foo1 is a list, Foo2 needs to be as well apspoof.Foo2 = [ { ssid = "Bar2"; validmacs = [ "00:11:22:33:44:55" "aa:bb:cc:dd:ee:ff" ]; }; ]; } Declared by: <nixpkgs/nixos/modules/services/networking/kismet.nix>

## services.kismet.user

The user to run Kismet as. Type: string Default: "kismet" Declared by: <nixpkgs/nixos/modules/services/networking/kismet.nix>
