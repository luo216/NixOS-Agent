---
module: services.glpiAgent
option_count: 4
source: options.html
---

# services.glpiAgent

## services.glpiAgent.enable

Whether to enable GLPI Agent. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/glpi-agent.nix>

## services.glpiAgent.package

The glpi-agent package to use. Type: package Default: pkgs.glpi-agent Declared by: <nixpkgs/nixos/modules/services/monitoring/glpi-agent.nix>

## services.glpiAgent.settings

GLPI Agent configuration options. See https://glpi-agent.readthedocs.io/en/latest/configuration.html for all available options. The ‘server’ option is mandatory and must point to your GLPI server. Type: attribute set of (boolean or signed integer or string or list of string) Default: { } Example: { server = [ "https://glpi.example.com/inventory" ]; delaytime = 3600; tag = "production"; logger = [ "stderr" "file" ]; debug = 1; "no-category" = [ "printer" "software" ]; } Declared by: <nixpkgs/nixos/modules/services/monitoring/glpi-agent.nix>

## services.glpiAgent.stateDir

Directory where GLPI Agent stores its state. Type: string Default: "/var/lib/glpi-agent" Declared by: <nixpkgs/nixos/modules/services/monitoring/glpi-agent.nix>
