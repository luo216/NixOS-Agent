---
module: security.pam.ussh
option_count: 6
source: options.html
---

# security.pam.ussh

## security.pam.ussh.enable

Enables Uber’s USSH PAM (pam-ussh) module. This is similar to pam-ssh-agent, except that the presence of a CA-signed SSH key with a valid principal is checked instead. Note that this module must both be enabled using this option and on a per-PAM-service level as well (using usshAuth). More information can be found here. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.ussh.authorizedPrincipals

Comma-separated list of authorized principals to permit; if the user presents a certificate with one of these principals, then they will be authorized. Note that pam-ussh also requires that the certificate contain a principal matching the user’s username. The principals from this list are in addition to those principals. Mutually exclusive with authorizedPrincipalsFile. Type: null or strings concatenated with “,” Default: null Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.ussh.authorizedPrincipalsFile

Path to a list of principals; if the user presents a certificate with one of these principals, then they will be authorized. Note that pam-ussh also requires that the certificate contain a principal matching the user’s username. The principals from this file are in addition to those principals. Mutually exclusive with authorizedPrincipals. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.ussh.caFile

By default pam-ussh reads the trusted user CA keys from /etc/ssh/trusted_user_ca. This should be set the same as your TrustedUserCAKeys option for sshd. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.ussh.control

This option sets pam “control”. If you want to have multi factor authentication, use “required”. If you want to use the SSH certificate instead of the regular password, use “sufficient”. Read pam.conf(5) for better understanding of this option. Type: one of “required”, “requisite”, “sufficient”, “optional” Default: "sufficient" Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.ussh.group

If set, then the authenticating user must be a member of this group to use this module. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/security/pam.nix>
