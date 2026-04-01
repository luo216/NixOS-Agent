---
module: security.pam.services.<name>.googleAuthenticator
option_count: 3
source: options.html
---

# security.pam.services.<name>.googleAuthenticator

## security.pam.services.<name>.googleAuthenticator.enable

If set, users with enabled Google Authenticator (created ~/.google_authenticator) will be required to provide Google Authenticator token to log in. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.googleAuthenticator.allowNullOTP

Whether to allow login for accounts that have no OTP set (i.e., accounts with no OTP configured or no existing ~/.google_authenticator). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.googleAuthenticator.forwardPass

The authentication provides a single field requiring the user’s password followed by the one-time password (OTP). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam.nix>
