---
module: services.dnsproxy
option_count: 4
source: options.html
---

# services.dnsproxy

## services.dnsproxy.enable

Whether to enable dnsproxy. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/dnsproxy.nix>

## services.dnsproxy.package

The dnsproxy package to use. Type: package Default: pkgs.dnsproxy Declared by: <nixpkgs/nixos/modules/services/networking/dnsproxy.nix>

## services.dnsproxy.flags

A list of extra command-line flags to pass to dnsproxy. For details on the available options, see https://github.com/AdguardTeam/dnsproxy#usage. Keep in mind that options passed through command-line flags override config options. Type: list of string Default: [ ] Example: [ "--upstream=1.1.1.1:53" ] Declared by: <nixpkgs/nixos/modules/services/networking/dnsproxy.nix>

## services.dnsproxy.settings

Contents of the config.yaml config file. The --config-path argument will only be passed if this set is not empty. See https://github.com/AdguardTeam/dnsproxy/blob/master/config.yaml.dist. Type: YAML 1.1 value Default: { } Example: { bootstrap = [ "8.8.8.8:53" ]; listen-addrs = [ "0.0.0.0" ]; listen-ports = [ 53 ]; upstream = [ "1.1.1.1:53" ]; } Declared by: <nixpkgs/nixos/modules/services/networking/dnsproxy.nix>
