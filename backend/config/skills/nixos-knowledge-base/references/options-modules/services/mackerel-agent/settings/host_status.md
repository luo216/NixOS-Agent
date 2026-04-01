---
module: services.mackerel-agent.settings.host_status
option_count: 2
source: options.html
---

# services.mackerel-agent.settings.host_status

## services.mackerel-agent.settings.host_status.on_start

Host status after agent startup. Type: one of “working”, “standby”, “maintenance”, “poweroff” Default: "working" Declared by: <nixpkgs/nixos/modules/services/monitoring/mackerel-agent.nix>

## services.mackerel-agent.settings.host_status.on_stop

Host status after agent shutdown. Type: one of “working”, “standby”, “maintenance”, “poweroff” Default: "poweroff" Declared by: <nixpkgs/nixos/modules/services/monitoring/mackerel-agent.nix>
