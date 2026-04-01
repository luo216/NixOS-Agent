---
module: security.pam.services.<name>.gnupg
option_count: 3
source: options.html
---

# security.pam.services.<name>.gnupg

## security.pam.services.<name>.gnupg.enable

If enabled, pam_gnupg will attempt to automatically unlock the user’s GPG keys with the login password via gpg-agent. The keygrips of all keys to be unlocked should be written to ~/.pam-gnupg, and can be queried with gpg -K --with-keygrip. Presetting passphrases must be enabled by adding allow-preset-passphrase in ~/.gnupg/gpg-agent.conf. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.gnupg.noAutostart

Don’t start gpg-agent if it is not running. Useful in conjunction with starting gpg-agent as a systemd user service. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.gnupg.storeOnly

Don’t send the password immediately after login, but store for PAM session. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam.nix>
