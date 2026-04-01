---
module: security.pam.oath
option_count: 4
source: options.html
---

# security.pam.oath

## security.pam.oath.enable

Enable the OATH (one-time password) PAM module. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/oath.nix>

## security.pam.oath.digits

Specify the lib.length of the one-time password in number of digits. Type: one of 6, 7, 8 Default: 6 Declared by: <nixpkgs/nixos/modules/security/oath.nix>

## security.pam.oath.usersFile

Set the path to file where the user’s credentials are stored. This file must not be world readable! Type: absolute path Default: "/etc/users.oath" Declared by: <nixpkgs/nixos/modules/security/oath.nix>

## security.pam.oath.window

Specify the number of one-time passwords to check in order to accommodate for situations where the system and the client are slightly out of sync (iteration for HOTP or time steps for TOTP). Type: signed integer Default: 5 Declared by: <nixpkgs/nixos/modules/security/oath.nix>
