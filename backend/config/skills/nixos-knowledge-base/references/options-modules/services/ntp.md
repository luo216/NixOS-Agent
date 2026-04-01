---
module: services.ntp
option_count: 6
source: options.html
---

# services.ntp

## services.ntp.enable

Whether to synchronise your machine’s time using ntpd, as a peer in the NTP network. Disables systemd.timesyncd if enabled. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/ntp/ntpd.nix>

## services.ntp.extraConfig

Additional text appended to ntp.conf. Type: strings concatenated with “\n” Default: "" Example: '' fudge 127.127.1.0 stratum 10 '' Declared by: <nixpkgs/nixos/modules/services/networking/ntp/ntpd.nix>

## services.ntp.extraFlags

Extra flags passed to the ntpd command. Type: list of string Default: [ ] Example: [ "--interface=eth0" ] Declared by: <nixpkgs/nixos/modules/services/networking/ntp/ntpd.nix>

## services.ntp.restrictDefault

The restriction flags to be set by default. The default flags prevent external hosts from using ntpd as a DDoS reflector, setting system time, and querying OS/ntpd version. As recommended in section 6.5.1.1.3, answer “No” of https://support.ntp.org/Support/AccessRestrictions Type: list of string Default: [ "limited" "kod" "nomodify" "notrap" "noquery" "nopeer" ] Declared by: <nixpkgs/nixos/modules/services/networking/ntp/ntpd.nix>

## services.ntp.restrictSource

The restriction flags to be set on source. The default flags allow peers to be added by ntpd from configured pool(s), but not by other means. Type: list of string Default: [ "limited" "kod" "nomodify" "notrap" "noquery" ] Declared by: <nixpkgs/nixos/modules/services/networking/ntp/ntpd.nix>

## services.ntp.servers

The set of NTP servers from which to synchronise. Type: list of string Default: config.networking.timeServers Declared by: <nixpkgs/nixos/modules/services/networking/ntp/ntpd.nix>
