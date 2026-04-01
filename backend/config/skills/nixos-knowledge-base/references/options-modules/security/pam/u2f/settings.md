---
module: security.pam.u2f.settings
option_count: 6
source: options.html
---

# security.pam.u2f.settings

## security.pam.u2f.settings.appid

By default pam-u2f module sets the application ID to pam://$HOSTNAME. When using pamu2fcfg, you can specify your application ID with the -i flag. More information can be found here Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.u2f.settings.authfile

By default pam-u2f module reads the keys from $XDG_CONFIG_HOME/Yubico/u2f_keys (or $HOME/.config/Yubico/u2f_keys if XDG variable is not set). If you want to change auth file locations or centralize database (for example use /etc/u2f-mappings) you can set this option. File format is: username:first_keyHandle,first_public_key: second_keyHandle,second_public_key This file can be generated using pamu2fcfg command. More information can be found here. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.u2f.settings.cue

By default pam-u2f module does not inform user that he needs to use the u2f device, it just waits without a prompt. If you set this option to true, cue option is added to pam-u2f module and reminder message will be displayed. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.u2f.settings.debug

Debug output to stderr. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.u2f.settings.interactive

Set to prompt a message and wait before testing the presence of a U2F device. Recommended if your device doesn’t have a tactile trigger. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.u2f.settings.origin

By default pam-u2f module sets the origin to pam://$HOSTNAME. Setting origin to an host independent value will allow you to reuse credentials across machines When using pamu2fcfg, you can specify your application ID with the -o flag. More information can be found here Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/security/pam.nix>
