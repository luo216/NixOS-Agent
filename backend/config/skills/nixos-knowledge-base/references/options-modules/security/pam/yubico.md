---
module: security.pam.yubico
option_count: 6
source: options.html
---

# security.pam.yubico

## security.pam.yubico.enable

Enables Yubico PAM (yubico-pam) module. If set, users listed in ~/.yubico/authorized_yubikeys are able to log in with the associated Yubikey tokens. The file must have only one line: username:yubikey_token_id1:yubikey_token_id2 More information can be found here. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.yubico.challengeResponsePath

If not null, set the path used by yubico pam module where the challenge expected response is stored. More information can be found here. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.yubico.control

This option sets pam “control”. If you want to have multi factor authentication, use “required”. If you want to use Yubikey instead of regular password, use “sufficient”. Read pam.conf(5) for better understanding of this option. Type: one of “required”, “requisite”, “sufficient”, “optional” Default: "sufficient" Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.yubico.debug

Debug output to stderr. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.yubico.id

client id Type: string Example: "42" Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.yubico.mode

Mode of operation. Use “client” for online validation with a YubiKey validation service such as the YubiCloud. Use “challenge-response” for offline validation using YubiKeys with HMAC-SHA-1 Challenge-Response configurations. See the man-page ykpamcfg(1) for further details on how to configure offline Challenge-Response validation. More information can be found here. Type: one of “client”, “challenge-response” Default: "client" Declared by: <nixpkgs/nixos/modules/security/pam.nix>
