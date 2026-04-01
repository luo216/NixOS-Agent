---
module: services.ocsinventory-agent
option_count: 4
source: options.html
---

# services.ocsinventory-agent

## services.ocsinventory-agent.enable

Whether to enable OCS Inventory Agent. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/ocsinventory-agent.nix>

## services.ocsinventory-agent.package

The ocsinventory-agent package to use. Type: package Default: pkgs.ocsinventory-agent Declared by: <nixpkgs/nixos/modules/services/monitoring/ocsinventory-agent.nix>

## services.ocsinventory-agent.interval

How often we run the ocsinventory-agent service. Runs by default every daily. The format is described in systemd.time(7). Type: string Default: "daily" Example: "06:00" Declared by: <nixpkgs/nixos/modules/services/monitoring/ocsinventory-agent.nix>

## services.ocsinventory-agent.settings

Configuration for /etc/ocsinventory-agent/ocsinventory-agent.cfg. Refer to ocsinventory-agent(1) for available options. Type: open submodule of (atom (null, bool, int, float or string)) Default: { } Example: { debug = true; server = "https://ocsinventory.localhost:8080/ocsinventory"; tag = "01234567890123"; } Declared by: <nixpkgs/nixos/modules/services/monitoring/ocsinventory-agent.nix>
