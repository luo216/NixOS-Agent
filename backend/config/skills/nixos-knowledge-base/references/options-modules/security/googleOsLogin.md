---
module: security.googleOsLogin
option_count: 1
source: options.html
---

# security.googleOsLogin

## security.googleOsLogin.enable

Whether to enable Google OS Login. The OS Login package enables the following components: AuthorizedKeysCommand to query valid SSH keys from the user’s OS Login profile during ssh authentication phase. NSS Module to provide user and group information PAM Module for the sshd service, providing authorization and authentication support, allowing the system to use data stored in Google Cloud IAM permissions to control both, the ability to log into an instance, and to perform operations as root (sudo). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/google_oslogin.nix>
