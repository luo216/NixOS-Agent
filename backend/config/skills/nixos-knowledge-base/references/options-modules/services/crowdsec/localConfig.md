---
module: services.crowdsec.localConfig
option_count: 8
source: options.html
---

# services.crowdsec.localConfig

## services.crowdsec.localConfig.acquisitions

A list of acquisition specifications, which define the data sources you want to be parsed. See https://docs.crowdsec.net/docs/data_sources/intro for details. Type: list of (YAML 1.1 value) Default: [ ] Example: [ { journalctl_filter = [ "_SYSTEMD_UNIT=sshd.service" ]; labels = { type = "syslog"; }; source = "journalctl"; } ] Declared by: <nixpkgs/nixos/modules/services/security/crowdsec.nix>

## services.crowdsec.localConfig.contexts

A list of additional contexts to specify. See https://docs.crowdsec.net/docs/next/log_processor/alert_context/intro for details. Type: list of (YAML 1.1 value) Default: [ ] Example: [ { context = { method = [ "evt.Meta.http_verb" ]; status = [ "evt.Meta.http_status" ]; target_uri = [ "evt.Meta.http_path" ]; user_agent = [ "evt.Meta.http_user_agent" ]; }; } ] Declared by: <nixpkgs/nixos/modules/services/security/crowdsec.nix>

## services.crowdsec.localConfig.notifications

A list of notifications to enable and use in your profiles. Note that for now, only the plugins shipped by default with CrowdSec are supported. See https://docs.crowdsec.net/docs/notification_plugins/intro for details. Type: list of (YAML 1.1 value) Default: [ ] Example: [ { format = '' {{.|toJson}} ''; log_level = "info"; method = "POST"; name = "default_http_notification"; type = "http"; url = "https://example.com/hook"; } ] Declared by: <nixpkgs/nixos/modules/services/security/crowdsec.nix>

## services.crowdsec.localConfig.parsers

The set of parser specifications. See https://docs.crowdsec.net/docs/parsers/intro for details. Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/security/crowdsec.nix>

## services.crowdsec.localConfig.patterns

A list of files containing custom grok patterns. Type: list of package Default: [ ] Example: [ (pkgs.writeTextDir "custom_service_logs" (builtins.readFile ./custom_service_logs)) ] Declared by: <nixpkgs/nixos/modules/services/security/crowdsec.nix>

## services.crowdsec.localConfig.postOverflows

The set of Postoverflows specifications. See https://docs.crowdsec.net/docs/next/log_processor/parsers/intro#postoverflows for details. Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/security/crowdsec.nix>

## services.crowdsec.localConfig.profiles

A list of profiles to enable. See https://docs.crowdsec.net/docs/profiles/intro for more details. Type: list of (YAML 1.1 value) Default: [ { decisions = [ { duration = "4h"; type = "ban"; } ]; filters = [ "Alert.Remediation == true && Alert.GetScope() == 'Ip'" ]; name = "default_ip_remediation"; on_success = "break"; } { decisions = [ { duration = "4h"; type = "ban"; } ]; filters = [ "Alert.Remediation == true && Alert.GetScope() == 'Range'" ]; name = "default_range_remediation"; on_success = "break"; } ] Example: [ { decisions = [ { duration = "4h"; type = "ban"; } ]; filters = [ "Alert.Remediation == true && Alert.GetScope() == 'Ip'" ]; name = "default_ip_remediation"; on_success = "break"; } { decisions = [ { duration = "4h"; type = "ban"; } ]; filters = [ "Alert.Remediation == true && Alert.GetScope() == 'Range'" ]; name = "default_range_remediation"; on_success = "break"; } ] Declared by: <nixpkgs/nixos/modules/services/security/crowdsec.nix>

## services.crowdsec.localConfig.scenarios

A list of scenarios specifications. See https://docs.crowdsec.net/docs/scenarios/intro for details. Type: list of (YAML 1.1 value) Default: [ ] Example: [ { capacity = 5; description = "Detect myservice bruteforce"; filter = "evt.Meta.log_type == 'myservice_failed_auth'"; groupby = "evt.Meta.source_ip"; leakspeed = "10s"; name = "crowdsecurity/myservice-bf"; type = "leaky"; } ] Declared by: <nixpkgs/nixos/modules/services/security/crowdsec.nix>
