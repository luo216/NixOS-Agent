---
module: security.pam.dp9ik
option_count: 3
source: options.html
---

# security.pam.dp9ik

## security.pam.dp9ik.enable

Whether to enable the dp9ik pam module provided by tlsclient. If set, users can be authenticated against the 9front authentication server given in security.pam.dp9ik.authserver . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.dp9ik.authserver

This controls the hostname for the 9front authentication server that users will be authenticated against. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.dp9ik.control

This option sets the pam “control” used for this module. Type: string Default: "sufficient" Declared by: <nixpkgs/nixos/modules/security/pam.nix>
