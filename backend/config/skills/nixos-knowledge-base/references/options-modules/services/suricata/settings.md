---
module: services.suricata.settings
option_count: 19
source: options.html
---

# services.suricata.settings

## services.suricata.settings.af-packet

Linux high speed capture support. Type: null or (list of (open submodule of (YAML 1.1 value))) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>

## services.suricata.settings.af-xdp

Linux high speed af-xdp capture support, see docs/capture-hardware/af-xdp. Type: null or (list of (open submodule of (YAML 1.1 value))) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>

## services.suricata.settings.app-layer

app-layer configuration, see upstream docs. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>

## services.suricata.settings.classification-file

Suricata classification configuration file. Type: string Default: "/var/lib/suricata/rules/classification.config" Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>

## services.suricata.settings.default-log-dir

The default logging directory. Any log or output file will be placed here if it’s not specified with a full path name. This can be overridden with the -l command line parameter. Type: string Default: "/var/log/suricata" Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>

## services.suricata.settings.default-rule-path

Path in which suricata-update managed rules are stored by default. Type: absolute path Default: "/var/lib/suricata/rules" Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>

## services.suricata.settings.dpdk

Data Plane Development Kit is a framework for fast packet processing in data plane applications running on a wide variety of CPU architectures. DPDK’s Environment Abstraction Layer (EAL) provides a generic interface to low-level resources. It is a unique way how DPDK libraries access NICs. EAL creates an API for an application to access NIC resources from the userspace level. In DPDK, packets are not retrieved via interrupt handling. Instead, the application polls the NIC for newly received packets. DPDK allows the user space application to directly access memory where the NIC stores the packets. As a result, neither DPDK nor the application copies the packets for the inspection. The application directly processes packets via passed packet descriptors. See docs/capture-hardware/dpdk and docs/configuration/suricata-yaml.html#data-plane-development-kit-dpdk. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>

## services.suricata.settings.exception-policy

Define a common behavior for all exception policies. In IPS mode, the default is drop-flow. For cases when that’s not possible, the engine will fall to drop-packet. To fallback to old behavior (setting each of them individually, or ignoring all), set this to ignore. All values available for exception policies can be used, and there is one extra option: auto - which means drop-flow or drop-packet (as explained above) in IPS mode, and ignore in IDS mode. Exception policy values are: drop-packet, drop-flow, reject, bypass, pass-packet, pass-flow, ignore (disable). Type: one of “auto”, “drop-packet”, “drop-flow”, “reject”, “bypass”, “pass-packet”, “pass-flow”, “ignore” Default: "auto" Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>

## services.suricata.settings.host-mode

If the Suricata box is a router for the sniffed networks, set it to ‘router’. If it is a pure sniffing setup, set it to ‘sniffer-only’. If set to auto, the variable is internally switched to ‘router’ in IPS mode and ‘sniffer-only’ in IDS mode. This feature is currently only used by the reject* keywords. Type: one of “router”, “sniffer-only”, “auto” Default: "auto" Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>

## services.suricata.settings.includes

Files to include in the suricata configuration. See docs/configuration/suricata-yaml for available options. Type: null or (list of absolute path) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>

## services.suricata.settings.outputs

Configure the type of alert (and other) logging you would like. Valid values for <NAME> are e. g. fast, eve-log, syslog, file-store, … fast: a line based alerts log similar to Snort’s fast.log eve-log: Extensible Event Format (nicknamed EVE) event log in JSON format For more details regarding the configuration, checkout the shipped suricata.yaml nix-shell -p suricata yq coreutils-full --command 'yq < $(dirname $(which suricata))/../etc/suricata/suricata.yaml' and the suricata documentation. Type: null or (list of attribute set of (open submodule of (YAML 1.1 value))) Default: null Example: [ { fast = { enabled = "yes"; filename = "fast.log"; append = "yes"; }; } { eve-log = { enabled = "yes"; filetype = "regular"; filename = "eve.json"; community-id = true; types = [ { alert.tagged-packets = "yes"; } ]; }; } ]; Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>

## services.suricata.settings.pcap

Cross platform libpcap capture support. Type: null or (list of (open submodule of (YAML 1.1 value))) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>

## services.suricata.settings.plugins

Plugins – Experimental – specify the filename for each plugin shared object. Type: null or (list of absolute path) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>

## services.suricata.settings.reference-config-file

Suricata reference configuration file. Type: string Default: "\${config.services.suricata.package}/etc/suricata/reference.config" Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>

## services.suricata.settings.rule-files

Files to load suricata-update managed rules, relative to ‘default-rule-path’. Type: list of string Default: [ "suricata.rules" ] Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>

## services.suricata.settings.stats

Engine statistics such as packet counters, memory use counters and others can be logged in several ways. A separate text log ‘stats.log’ and an EVE record type ‘stats’ are enabled by default. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>

## services.suricata.settings.threshold-file

Suricata threshold configuration file. Type: string Default: "\${config.services.suricata.package}/etc/suricata/threshold.config" Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>

## services.suricata.settings.unix-command

Unix command socket that can be used to pass commands to Suricata. An external tool can then connect to get information from Suricata or trigger some modifications of the engine. Set enabled to yes to activate the feature. In auto mode, the feature will only be activated in live capture mode. You can use the filename variable to set the file name of the socket. Type: null or (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>

## services.suricata.settings.vars

Variables to be used within the suricata rules. Type: null or (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>
