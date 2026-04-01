---
module: services.networkd-dispatcher
option_count: 3
source: options.html
---

# services.networkd-dispatcher

## services.networkd-dispatcher.enable

Whether to enable Networkd-dispatcher service for systemd-networkd connection status change. See upstream instructions for usage . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/networkd-dispatcher.nix>

## services.networkd-dispatcher.extraArgs

Extra arguments to pass to the networkd-dispatcher command. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/networkd-dispatcher.nix>

## services.networkd-dispatcher.rules

Declarative configuration of networkd-dispatcher rules. See upstream instructions for an introduction and example scripts. Type: attribute set of (submodule) Default: { } Example: { "restart-tor" = { onState = ["routable" "off"]; script = '' #!${pkgs.runtimeShell} if [[ $IFACE == "wlan0" && $AdministrativeState == "configured" ]]; then echo "Restarting Tor ..." systemctl restart tor fi exit 0 ''; }; }; Declared by: <nixpkgs/nixos/modules/services/networking/networkd-dispatcher.nix>
