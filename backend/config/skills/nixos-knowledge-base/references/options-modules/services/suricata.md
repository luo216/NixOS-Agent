---
module: services.suricata
option_count: 5
source: options.html
---

# services.suricata

## services.suricata.enable

Whether to enable Suricata. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>

## services.suricata.enabledSources

List of sources that should be enabled. Currently sources which require a secret-code are not supported. Type: list of string Default: [ "et/open" "etnetera/aggressive" "stamus/lateral" "oisf/trafficid" "tgreen/hunting" "sslbl/ja3-fingerprints" "sslbl/ssl-fp-blacklist" "malsilo/win-malware" "pawpatrules" ] Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>

## services.suricata.package

The suricata package to use. Type: package Default: pkgs.suricata Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>

## services.suricata.disabledRules

List of rules that should be disabled. Type: list of string Default: [ "2270000" "2270001" "2270002" "2270003" "2270004" ] Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>

## services.suricata.settings

Suricata settings Type: open submodule of (YAML 1.1 value) Example: vars.address-groups.HOME_NET = "192.168.178.0/24"; outputs = [ { fast = { enabled = true; filename = "fast.log"; append = "yes"; }; } { eve-log = { enabled = true; filetype = "regular"; filename = "eve.json"; community-id = true; types = [ { alert.tagged-packets = "yes"; } ]; }; } ]; af-packet = [ { interface = "eth0"; cluster-id = "99"; cluster-type = "cluster_flow"; defrag = "yes"; } { interface = "default"; } ]; af-xdp = [ { interface = "eth1"; } ]; dpdk.interfaces = [ { interface = "eth2"; } ]; pcap = [ { interface = "eth3"; } ]; app-layer.protocols = { telnet.enabled = "yes"; dnp3.enabled = "yes"; modbus.enabled = "yes"; }; Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>
