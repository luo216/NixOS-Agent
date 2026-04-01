---
module: services.kanidm.unixSettings
option_count: 2
source: options.html
---

# services.kanidm.unixSettings

## services.kanidm.unixSettings.hsm_pin_path

Path to a HSM pin. Type: absolute path Default: "/var/cache/kanidm-unixd/hsm-pin" Declared by: <nixpkgs/nixos/modules/services/security/kanidm.nix>

## services.kanidm.unixSettings.pam_allowed_login_groups

Kanidm groups that are allowed to login using PAM. Type: list of string Example: "my_pam_group" Declared by: <nixpkgs/nixos/modules/services/security/kanidm.nix>
