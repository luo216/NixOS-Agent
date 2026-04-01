---
module: security.pam.u2f
option_count: 3
source: options.html
---

# security.pam.u2f

## security.pam.u2f.enable

Enables U2F PAM (pam-u2f) module. If set, users listed in $XDG_CONFIG_HOME/Yubico/u2f_keys (or $HOME/.config/Yubico/u2f_keys if XDG variable is not set) are able to log in with the associated U2F key. The path can be changed using security.pam.u2f.authFile option. File format is: <username1>:<KeyHandle1>,<UserKey1>,<CoseType1>,<Options1>:<KeyHandle2>,<UserKey2>,<CoseType2>,<Options2>:... <username2>:<KeyHandle1>,<UserKey1>,<CoseType1>,<Options1>:<KeyHandle2>,<UserKey2>,<CoseType2>,<Options2>:... This file can be generated using pamu2fcfg command. More information can be found here. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.u2f.control

This option sets pam “control”. If you want to have multi factor authentication, use “required”. If you want to use U2F device instead of regular password, use “sufficient”. Read pam.conf(5) for better understanding of this option. Type: one of “required”, “requisite”, “sufficient”, “optional” Default: "sufficient" Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.u2f.settings

Options to pass to the PAM module. Boolean values render just the key if true, and nothing if false. Null values are ignored. All other values are rendered as key-value pairs. Type: open submodule of attribute set of (null or boolean or string or signed integer or path in the Nix store) Default: { } Example: { authfile = "/etc/u2f_keys"; authpending_file = ""; pinverification = 1; userpresence = 0; } Declared by: <nixpkgs/nixos/modules/security/pam.nix>
