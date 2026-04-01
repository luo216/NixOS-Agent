---
module: services.suricata.settings.unix-command
option_count: 2
source: options.html
---

# services.suricata.settings.unix-command

## services.suricata.settings.unix-command.enabled

Enable unix-command socket. Type: boolean or value “auto” (singular enum) Default: "auto" Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>

## services.suricata.settings.unix-command.filename

Filename for unix-command socket. Type: absolute path Default: "/run/suricata/suricata-command.socket" Declared by: <nixpkgs/nixos/modules/services/networking/suricata/default.nix>
