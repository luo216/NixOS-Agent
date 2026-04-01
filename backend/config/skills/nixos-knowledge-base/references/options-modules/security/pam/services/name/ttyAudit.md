---
module: security.pam.services.<name>.ttyAudit
option_count: 4
source: options.html
---

# security.pam.services.<name>.ttyAudit

## security.pam.services.<name>.ttyAudit.enable

Enable or disable TTY auditing for specified users Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.ttyAudit.enablePattern

For each user matching one of comma-separated glob patterns, enable TTY auditing Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.ttyAudit.disablePattern

For each user matching one of comma-separated glob patterns, disable TTY auditing Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.ttyAudit.openOnly

Set the TTY audit flag when opening the session, but do not restore it when closing the session. Using this option is necessary for some services that don’t fork() to run the authenticated session, such as sudo. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam.nix>
