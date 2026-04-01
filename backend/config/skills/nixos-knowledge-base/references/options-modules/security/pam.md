---
module: security.pam
option_count: 7
source: options.html
---

# security.pam

## security.pam.enableEcryptfs

Whether to enable eCryptfs PAM module (mounting ecryptfs home directory on login). Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.enableFscrypt

Whether to enable fscrypt, to automatically unlock directories with the user’s login password. This also enables a service at security.pam.services.fscrypt which is used by fscrypt to verify the user’s password when setting up a new protector. If you use something other than pam_unix to verify user passwords, please remember to adjust this PAM service . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.enableOTPW

Whether to enable the OTPW (one-time password) PAM module. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.enableUMask

Whether to enable umask PAM module. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.package

The pam package to use. Type: package Default: pkgs.pam Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.loginLimits

Define resource limits that should apply to users or groups. Each item in the list should be an attribute set with a domain, type, item, and value attribute. The syntax and semantics of these attributes must be that described in limits.conf(5). Note that these limits do not apply to systemd services, whose limits can be changed via systemd.settings.Manager instead. Type: list of (submodule) Default: [ ] Example: [ { domain = "ftp"; item = "nproc"; type = "hard"; value = "0"; } { domain = "@student"; item = "maxlogins"; type = "-"; value = "4"; } ] Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services

This option defines the PAM services. A service typically corresponds to a program that uses PAM, e.g. login or passwd. Each attribute of this set defines a PAM service, with the attribute name defining the name of the service. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/security/pam.nix>
