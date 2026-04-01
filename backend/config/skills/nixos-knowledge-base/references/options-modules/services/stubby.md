---
module: services.stubby
option_count: 3
source: options.html
---

# services.stubby

## services.stubby.enable

Whether to enable Stubby DNS resolver. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/stubby.nix>

## services.stubby.logLevel

Log verbosity (syslog keyword or level). Type: null or one of “alert”, “crit”, “debug”, “emerg”, “error”, “info”, “notice”, “warning”, 1, 2, 7, 0, 3, 6, 5, 4 Default: null Declared by: <nixpkgs/nixos/modules/services/networking/stubby.nix>

## services.stubby.settings

Content of the Stubby configuration file. All Stubby settings may be set or queried here. The default settings are available at pkgs.stubby.passthru.settingsExample. See https://dnsprivacy.org/wiki/display/DP/Configuring+Stubby. A list of the public recursive servers can be found here: https://dnsprivacy.org/wiki/display/DP/DNS+Privacy+Test+Servers. Type: attribute set of (YAML 1.1 value) Example: pkgs.stubby.passthru.settingsExample // { upstream_recursive_servers = [{ address_data = "158.64.1.29"; tls_auth_name = "kaitain.restena.lu"; tls_pubkey_pinset = [{ digest = "sha256"; value = "7ftvIkA+UeN/ktVkovd/7rPZ6mbkhVI7/8HnFJIiLa4="; }]; }]; }; Declared by: <nixpkgs/nixos/modules/services/networking/stubby.nix>
