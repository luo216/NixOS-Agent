---
module: networking.networkmanager.ensureProfiles
option_count: 2
source: options.html
---

# networking.networkmanager.ensureProfiles

## networking.networkmanager.ensureProfiles.environmentFiles

Files to load as environment file. Environment variables from this file will be substituted into the static configuration file using envsubst. Type: list of absolute path Default: [ ] Example: [ "/run/secrets/network-manager.env" ] Declared by: <nixpkgs/nixos/modules/services/networking/networkmanager.nix>

## networking.networkmanager.ensureProfiles.profiles

Declaratively define NetworkManager profiles. You can find information about the generated file format here and here. You current profiles which are most likely stored in /etc/NetworkManager/system-connections and there is a tool to convert them to the needed nix code. If you add a new ad-hoc connection via a GUI or nmtui or anything similar it should just work together with the declarative ones. And if you edit a declarative profile NetworkManager will move it to the persistent storage and treat it like a ad-hoc one, but there will be two profiles as soon as the systemd unit from this option runs again which can be confusing since NetworkManager tools will start displaying two profiles with the same name and probably a bit different settings depending on what you edited. A profile won’t be deleted even if it’s removed from the config until the system reboots because that’s when NetworkManager clears it’s temp directory. If networking.resolvconf.enable is true, attributes affecting the name resolution (such as ignore-auto-dns) may not end up changing /etc/resolv.conf as expected when other name services (for example networking.dhcpcd) are enabled. Run resolvconf -l in the terminal to see what each service produces. Type: attribute set of (open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string))) Default: { } Example: { home-wifi = { connection = { id = "home-wifi"; permissions = ""; type = "wifi"; }; ipv4 = { dns-search = ""; method = "auto"; }; ipv6 = { addr-gen-mode = "stable-privacy"; dns-search = ""; method = "auto"; }; wifi = { mac-address-blacklist = ""; mode = "infrastructure"; ssid = "Home Wi-Fi"; }; wifi-security = { auth-alg = "open"; key-mgmt = "wpa-psk"; psk = "$HOME_WIFI_PASSWORD"; }; }; } Declared by: <nixpkgs/nixos/modules/services/networking/networkmanager.nix>
