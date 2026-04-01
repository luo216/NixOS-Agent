---
module: security.pam.makeHomeDir
option_count: 2
source: options.html
---

# security.pam.makeHomeDir

## security.pam.makeHomeDir.skelDirectory

Path to skeleton directory whose contents are copied to home directories newly created by pam_mkhomedir. Type: string Default: "/var/empty" Example: "/etc/skel" Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.makeHomeDir.umask

The user file mode creation mask to use on home directories newly created by pam_mkhomedir. Type: string Default: "0077" Example: "0022" Declared by: <nixpkgs/nixos/modules/security/pam.nix>
