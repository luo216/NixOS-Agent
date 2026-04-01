---
module: services.hostapd
option_count: 3
source: options.html
---

# services.hostapd

## services.hostapd.enable

Whether to enable hostapd, a user space daemon for access point and authentication servers. It implements IEEE 802.11 access point management, IEEE 802.1X/WPA/WPA2/EAP Authenticators, RADIUS client, EAP server, and RADIUS authentication server . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.package

The hostapd package to use. Type: package Default: pkgs.hostapd Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>

## services.hostapd.radios

This option allows you to define APs for one or multiple physical radios. At least one radio must be specified. For each radio, hostapd requires a separate logical interface (like wlp3s0, wlp3s1, …). A default interface is usually be created automatically by your system, but to use multiple radios of a single device, it may be required to create additional logical interfaces for example by using networking.wlanInterfaces. Each physical radio can only support a single hardware-mode that is configured via (services.hostapd.radios.<radio>.band). To create a dual-band or tri-band AP, you will have to use a device that has multiple physical radios and supports configuring multiple APs (Refer to valid interface combinations in iw list). Type: attribute set of (submodule) Default: { } Example: { # Simple 2.4GHz AP wlp2s0 = { # countryCode = "US"; networks.wlp2s0 = { ssid = "AP 1"; authentication.saePasswords = [{ passwordFile = "/run/secrets/my-password"; }]; }; }; # WiFi 5 (5GHz) with two advertised networks wlp3s0 = { band = "5g"; channel = 0; # Enable automatic channel selection (ACS). Use only if your hardware supports it. # countryCode = "US"; networks.wlp3s0 = { ssid = "My AP"; authentication.saePasswords = [{ passwordFile = "/run/secrets/my-password"; }]; }; networks.wlp3s0-1 = { ssid = "Open AP with WiFi5"; authentication.mode = "none"; }; }; # Legacy WPA2 example wlp4s0 = { # countryCode = "US"; networks.wlp4s0 = { ssid = "AP 2"; authentication = { mode = "wpa2-sha256"; wpaPassword = "a flakey password"; # Use wpaPasswordFile if possible. }; }; }; } Declared by: <nixpkgs/nixos/modules/services/networking/hostapd.nix>
