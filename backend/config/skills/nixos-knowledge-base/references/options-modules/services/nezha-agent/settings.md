---
module: services.nezha-agent.settings
option_count: 12
source: options.html
---

# services.nezha-agent.settings

## services.nezha-agent.settings.disable_command_execute

Disable executing the command from dashboard. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/monitoring/nezha-agent.nix>

## services.nezha-agent.settings.disable_nat

Disable NAT penetration. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/nezha-agent.nix>

## services.nezha-agent.settings.disable_send_query

Disable sending TCP/ICMP/HTTP requests. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/nezha-agent.nix>

## services.nezha-agent.settings.gpu

Enable GPU monitoring. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/nezha-agent.nix>

## services.nezha-agent.settings.report_delay

The interval between system status reportings. The value must be an integer from 1 to 4. Type: integer between 1 and 4 (both inclusive) Default: 3 Declared by: <nixpkgs/nixos/modules/services/monitoring/nezha-agent.nix>

## services.nezha-agent.settings.server

Address to the dashboard. Type: string Example: "127.0.0.1:8008" Declared by: <nixpkgs/nixos/modules/services/monitoring/nezha-agent.nix>

## services.nezha-agent.settings.skip_connection_count

Do not monitor the number of connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/nezha-agent.nix>

## services.nezha-agent.settings.skip_procs_count

Do not monitor the number of processes. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/nezha-agent.nix>

## services.nezha-agent.settings.temperature

Enable temperature monitoring. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/monitoring/nezha-agent.nix>

## services.nezha-agent.settings.tls

Enable SSL/TLS encryption. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/nezha-agent.nix>

## services.nezha-agent.settings.use_ipv6_country_code

Use ipv6 countrycode to report location. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/monitoring/nezha-agent.nix>

## services.nezha-agent.settings.uuid

Must be set to a unique identifier, preferably a UUID according to RFC 4122. UUIDs can be generated with uuidgen command, found in the util-linux package. Set services.nezha-agent.genUuid to true to generate uuid from networking.fqdn automatically. Type: null or string Default: null Example: "6ba7b810-9dad-11d1-80b4-00c04fd430c8" Declared by: <nixpkgs/nixos/modules/services/monitoring/nezha-agent.nix>
