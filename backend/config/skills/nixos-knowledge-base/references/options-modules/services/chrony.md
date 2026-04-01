---
module: services.chrony
option_count: 11
source: options.html
---

# services.chrony

## services.chrony.enable

Whether to synchronise your machine’s time using chrony. Make sure you disable NTP if you enable this service. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/ntp/chrony.nix>

## services.chrony.enableMemoryLocking

Whether to add the -m flag to lock memory. Type: boolean Default: config.environment.memoryAllocator.provider != "graphene-hardened" && config.environment.memoryAllocator.provider != "graphene-hardened-light" Declared by: <nixpkgs/nixos/modules/services/networking/ntp/chrony.nix>

## services.chrony.enableNTS

Whether to enable Network Time Security authentication. Make sure it is supported by your selected NTP server(s). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/ntp/chrony.nix>

## services.chrony.enableRTCTrimming

Enable tracking of the RTC offset to the system clock and automatic trimming. See also services.chrony.autotrimThreshold Note This is not compatible with the rtcsync directive, which naively syncs the RTC time every 11 minutes. Tracking the RTC drift will allow more precise timekeeping, especially on intermittently running devices, where the RTC is very relevant. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/ntp/chrony.nix>

## services.chrony.package

The chrony package to use. Type: package Default: pkgs.chrony Declared by: <nixpkgs/nixos/modules/services/networking/ntp/chrony.nix>

## services.chrony.autotrimThreshold

Maximum estimated error threshold for the rtcautotrim command. When reached, the RTC will be trimmed. Only used when services.chrony.enableRTCTrimming is enabled. Type: positive integer, meaning >0 Default: 30 Example: 10 Declared by: <nixpkgs/nixos/modules/services/networking/ntp/chrony.nix>

## services.chrony.directory

Directory where chrony state is stored. Type: string Default: "/var/lib/chrony" Declared by: <nixpkgs/nixos/modules/services/networking/ntp/chrony.nix>

## services.chrony.extraConfig

Extra configuration directives that should be added to chrony.conf Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/ntp/chrony.nix>

## services.chrony.extraFlags

Extra flags passed to the chronyd command. Type: list of string Default: [ ] Example: [ "-s" ] Declared by: <nixpkgs/nixos/modules/services/networking/ntp/chrony.nix>

## services.chrony.serverOption

Set option for server directives. Use “iburst” to rapidly poll on startup. Recommended if your machine is consistently online. Use “offline” to prevent polling on startup. Recommended if your machine boots offline or is otherwise frequently offline. Type: one of “iburst”, “offline” Default: "iburst" Declared by: <nixpkgs/nixos/modules/services/networking/ntp/chrony.nix>

## services.chrony.servers

The set of NTP servers from which to synchronise. Type: list of string Default: config.networking.timeServers Declared by: <nixpkgs/nixos/modules/services/networking/ntp/chrony.nix>
