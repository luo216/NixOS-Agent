---
module: services.crowdsec-firewall-bouncer
option_count: 4
source: options.html
---

# services.crowdsec-firewall-bouncer

## services.crowdsec-firewall-bouncer.enable

Whether to enable CrowdSec Firewall Bouncer. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/crowdsec-firewall-bouncer.nix>

## services.crowdsec-firewall-bouncer.package

The crowdsec-firewall-bouncer package to use. Type: package Default: pkgs.crowdsec-firewall-bouncer Declared by: <nixpkgs/nixos/modules/services/security/crowdsec-firewall-bouncer.nix>

## services.crowdsec-firewall-bouncer.createRulesets

Whether to have the module create the appropriate firewall configuration based on the bouncer settings. You may disable this option to manually configure it. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/security/crowdsec-firewall-bouncer.nix>

## services.crowdsec-firewall-bouncer.settings

Settings for the main CrowdSec Firewall Bouncer. Refer to the defaults at https://github.com/crowdsecurity/cs-firewall-bouncer/blob/main/config/crowdsec-firewall-bouncer.yaml. Type: open submodule of (YAML 1.1 value) Default: { } Declared by: <nixpkgs/nixos/modules/services/security/crowdsec-firewall-bouncer.nix>
