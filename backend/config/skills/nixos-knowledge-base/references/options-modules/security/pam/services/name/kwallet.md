---
module: security.pam.services.<name>.kwallet
option_count: 3
source: options.html
---

# security.pam.services.<name>.kwallet

## security.pam.services.<name>.kwallet.enable

If enabled, pam_wallet will attempt to automatically unlock the user’s default KDE wallet upon login. If the user has no wallet named “kdewallet”, or the login password does not match their wallet password, KDE will prompt separately after login. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.kwallet.package

The kwallet-pam package to use. Type: package Default: pkgs.kdePackages.kwallet-pam Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.kwallet.forceRun

The force_run option is used to tell the PAM module for KWallet to forcefully run even if no graphical session (such as a GUI display manager) is detected. This is useful for when you are starting an X Session or a Wayland Session from a TTY. If you intend to log-in from a TTY, it is recommended that you enable this option and ensure that plasma-kwallet-pam.service is started by graphical-session.target. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/security/pam.nix>
