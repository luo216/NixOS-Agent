---
module: security.pam.krb5
option_count: 1
source: options.html
---

# security.pam.krb5

## security.pam.krb5.enable

Enables Kerberos PAM modules (pam-krb5, pam-ccreds). If set, users can authenticate with their Kerberos password. This requires a valid Kerberos configuration (security.krb5.enable should be set to true). Note that the Kerberos PAM modules are not necessary when using SSS to handle Kerberos authentication. Type: boolean Default: config.security.krb5.enable Declared by: <nixpkgs/nixos/modules/security/pam.nix>
