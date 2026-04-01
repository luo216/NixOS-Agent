---
module: services.gpsd
option_count: 8
source: options.html
---

# services.gpsd

## services.gpsd.enable

Whether to enable gpsd, a GPS service daemon. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/gpsd.nix>

## services.gpsd.debugLevel

The debugging level. Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/services/misc/gpsd.nix>

## services.gpsd.devices

List of devices that gpsd should subscribe to. A device may be a local serial device for GPS input, or a URL of the form: [{dgpsip|ntrip}://][user:passwd@]host[:port][/stream] in which case it specifies an input source for DGPS or ntrip data. Type: list of string Default: [ "/dev/ttyUSB0" ] Declared by: <nixpkgs/nixos/modules/services/misc/gpsd.nix>

## services.gpsd.extraArgs

A list of extra command line arguments to pass to gpsd. Check gpsd(8) mangpage for possible arguments. Type: list of string Default: [ ] Example: [ "-r" "-s" "19200" ] Declared by: <nixpkgs/nixos/modules/services/misc/gpsd.nix>

## services.gpsd.listenany

Listen on all addresses rather than just loopback. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/gpsd.nix>

## services.gpsd.nowait

don’t wait for client connects to poll GPS Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/gpsd.nix>

## services.gpsd.port

The port where to listen for TCP connections. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 2947 Declared by: <nixpkgs/nixos/modules/services/misc/gpsd.nix>

## services.gpsd.readonly

Whether to enable the broken-device-safety, otherwise known as read-only mode. Some popular bluetooth and USB receivers lock up or become totally inaccessible when probed or reconfigured. This switch prevents gpsd from writing to a receiver. This means that gpsd cannot configure the receiver for optimal performance, but it also means that gpsd cannot break the receiver. A better solution would be for Bluetooth to not be so fragile. A platform independent method to identify serial-over-Bluetooth devices would also be nice. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/misc/gpsd.nix>
