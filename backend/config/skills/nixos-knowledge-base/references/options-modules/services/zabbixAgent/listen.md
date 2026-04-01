---
module: services.zabbixAgent.listen
option_count: 2
source: options.html
---

# services.zabbixAgent.listen

## services.zabbixAgent.listen.ip

List of comma delimited IP addresses that the agent should listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/zabbix-agent.nix>

## services.zabbixAgent.listen.port

Agent will listen on this port for connections from the server. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 10050 Declared by: <nixpkgs/nixos/modules/services/monitoring/zabbix-agent.nix>
