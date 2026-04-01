---
module: services.suricata.settings.pcap-file
option_count: 1
source: options.html
---

# services.suricata.settings.pcap-file

## services.suricata.settings.pcap-file.checksum-checks

Possible values are: yes: checksum validation is forced no: checksum validation is disabled auto: Suricata uses a statistical approach to detect when checksum off-loading is used. (default) Warning: ‘checksum-validation’ must be set to yes to have checksum tested. Type: one of “yes”, “no”, “auto” Default: "auto" Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>
