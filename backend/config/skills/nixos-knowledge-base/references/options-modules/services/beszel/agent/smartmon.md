---
module: services.beszel.agent.smartmon
option_count: 3
source: options.html
---

# services.beszel.agent.smartmon

## services.beszel.agent.smartmon.enable

Include services.beszel.agent.smartmon.package in the Beszel agent path for disk monitoring and add the agent to the disk group. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/beszel-agent.nix>

## services.beszel.agent.smartmon.package

The smartmontools package to use. Type: package Default: pkgs.smartmontools Declared by: <nixpkgs/nixos/modules/services/monitoring/beszel-agent.nix>

## services.beszel.agent.smartmon.deviceAllow

List of device paths to allow access to for SMART monitoring. This is only needed if the ambient capabilities are not sufficient. Devices will be granted read-only access. Type: list of string Default: [ ] Example: [ "/dev/sda" "/dev/sdb" "/dev/nvme0" ] Declared by: <nixpkgs/nixos/modules/services/monitoring/beszel-agent.nix>
