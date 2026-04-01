---
module: services.alloy
option_count: 5
source: options.html
---

# services.alloy

## services.alloy.enable

Whether to enable Grafana Alloy. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/alloy.nix>

## services.alloy.package

The grafana-alloy package to use. Type: package Default: pkgs.grafana-alloy Declared by: <nixpkgs/nixos/modules/services/monitoring/alloy.nix>

## services.alloy.configPath

Alloy configuration file/directory path. We default to /etc/alloy here, and expect the user to configure a configuration file via environment.etc."alloy/config.alloy". This allows config reload, contrary to specifying a store path. All .alloy files in the same directory (ignoring subdirs) are also honored and are added to systemd.services.alloy.reloadTriggers to enable config reload during nixos-rebuild switch. This can also point to another directory containing *.alloy files, or a single Alloy file in the Nix store (at the cost of reload). Component names must be unique across all Alloy configuration files, and configuration blocks must not be repeated. Alloy will continue to run if subsequent reloads of the configuration file fail, potentially marking components as unhealthy depending on the nature of the failure. When this happens, Alloy will continue functioning in the last valid state. Type: absolute path Default: "/etc/alloy" Declared by: <nixpkgs/nixos/modules/services/monitoring/alloy.nix>

## services.alloy.environmentFile

EnvironmentFile as defined in systemd.exec(5). Type: null or absolute path Default: null Example: "/run/secrets/alloy.env" Declared by: <nixpkgs/nixos/modules/services/monitoring/alloy.nix>

## services.alloy.extraFlags

Extra command-line flags passed to alloy run. See https://grafana.com/docs/alloy/latest/reference/cli/run/ Type: list of string Default: [ ] Example: [ "--server.http.listen-addr=127.0.0.1:12346" "--disable-reporting" ] Declared by: <nixpkgs/nixos/modules/services/monitoring/alloy.nix>
