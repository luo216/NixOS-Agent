---
module: services.teleport
option_count: 3
source: options.html
---

# services.teleport

## services.teleport.enable

Whether to enable the Teleport service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/teleport.nix>

## services.teleport.package

The teleport package to use. Type: package Default: pkgs.teleport Example: teleport_11 Declared by: <nixpkgs/nixos/modules/services/networking/teleport.nix>

## services.teleport.settings

Contents of the teleport.yaml config file. The --config arguments will only be passed if this set is not empty. See https://goteleport.com/docs/setup/reference/config/. Type: YAML 1.1 value Default: { } Example: { teleport = { nodename = "client"; advertise_ip = "192.168.1.2"; auth_token = "60bdc117-8ff4-478d-95e4-9914597847eb"; auth_servers = [ "192.168.1.1:3025" ]; log.severity = "DEBUG"; }; ssh_service = { enabled = true; labels = { role = "client"; }; }; proxy_service.enabled = false; auth_service.enabled = false; } Declared by: <nixpkgs/nixos/modules/services/networking/teleport.nix>
