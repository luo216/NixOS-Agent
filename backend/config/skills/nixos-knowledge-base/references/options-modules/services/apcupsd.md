---
module: services.apcupsd
option_count: 3
source: options.html
---

# services.apcupsd

## services.apcupsd.enable

Whether to enable the APC UPS daemon. apcupsd monitors your UPS and permits orderly shutdown of your computer in the event of a power failure. User manual: http://www.apcupsd.com/manual/manual.html. Note that apcupsd runs as root (to allow shutdown of computer). You can check the status of your UPS with the “apcaccess” command. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/apcupsd.nix>

## services.apcupsd.configText

Contents of the runtime configuration file, apcupsd.conf. The default settings makes apcupsd autodetect USB UPSes, limit network access to localhost and shutdown the system when the battery level is below 50 percent, or when the UPS has calculated that it has 5 minutes or less of remaining power-on time. See man apcupsd.conf for details. Type: strings concatenated with “\n” Default: '' UPSTYPE usb NISIP 127.0.0.1 BATTERYLEVEL 50 MINUTES 5 '' Declared by: <nixpkgs/nixos/modules/services/monitoring/apcupsd.nix>

## services.apcupsd.hooks

Each attribute in this option names an apcupsd event and the string value it contains will be executed in a shell, in response to that event (prior to the default action). See “man apccontrol” for the list of events and what they represent. A hook script can stop apccontrol from doing its default action by exiting with value 99. Do not do this unless you know what you’re doing. Type: attribute set of strings concatenated with “\n” Default: { } Example: { doshutdown = "# shell commands to notify that the computer is shutting down"; } Declared by: <nixpkgs/nixos/modules/services/monitoring/apcupsd.nix>
