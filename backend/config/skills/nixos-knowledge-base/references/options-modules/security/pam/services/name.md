---
module: security.pam.services.<name>
option_count: 35
source: options.html
---

# security.pam.services.<name>

## security.pam.services.<name>.enable

Whether to enable this PAM service. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.enableAppArmor

Enable support for attaching AppArmor profiles at the user/group level, e.g., as part of a role based access control scheme. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.enableGnomeKeyring

If enabled, pam_gnome_keyring will attempt to automatically unlock the user’s default Gnome keyring upon login. If the user login password does not match their keyring password, Gnome Keyring will prompt separately after login. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.enableUMask

If enabled, the pam_umask module will be loaded. Type: boolean Default: config.security.pam.enableUMask Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.allowNullPassword

Whether to allow logging into accounts that have no password set (i.e., have an empty password field in /etc/passwd or /etc/group). This does not enable logging into disabled accounts (i.e., that have the password field set to !). Note that regardless of what the pam_unix documentation says, accounts with hashed empty passwords are always allowed to log in. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.forwardXAuth

Whether X authentication keys should be passed from the calling user to the target user (e.g. for su) Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.fprintAuth

If set, fingerprint reader will be used (if exists and your fingerprints are enrolled). Type: boolean Default: config.services.fprintd.enable Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.googleOsLoginAccountVerification

If set, will use the Google OS Login PAM modules (pam_oslogin_login, pam_oslogin_admin) to verify possible OS Login users and set sudoers configuration accordingly. This only makes sense to enable for the sshd PAM service. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.googleOsLoginAuthentication

If set, will use the pam_oslogin_login’s user authentication methods to authenticate users using 2FA. This only makes sense to enable for the sshd PAM service. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.limits

Attribute set describing resource limits. Defaults to the value of security.pam.loginLimits. The meaning of the values is explained in limits.conf(5). Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.logFailures

Whether to log authentication failures in /var/log/faillog. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.makeHomeDir

Whether to try to create home directories for users with $HOMEs pointing to nonexistent locations on session login. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.mysqlAuth

If set, the pam_mysql module will be used to authenticate users against a MySQL/MariaDB database. Type: boolean Default: config.users.mysql.enable Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.name

Name of the PAM service. Type: string Example: "sshd" Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.nodelay

Whether the delay after typing a wrong password should be disabled. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.oathAuth

If set, the OATH Toolkit will be used. Type: boolean Default: config.security.pam.oath.enable Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.otpwAuth

If set, the OTPW system will be used (if ~/.otpw exists). Type: boolean Default: config.security.pam.enableOTPW Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.p11Auth

If set, keys listed in ~/.ssh/authorized_keys and ~/.eid/authorized_certificates can be used to log in with the associated PKCS#11 tokens. Type: boolean Default: config.security.pam.p11.enable Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.pamMount

Enable PAM mount (pam_mount) system to mount filesystems on user login. Type: boolean Default: config.security.pam.mount.enable Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.requireWheel

Whether to permit root access only to members of group wheel. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.rootOK

If set, root doesn’t need to authenticate (e.g. for the useradd service). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.rssh

If set, the calling user’s SSH agent is used to authenticate against the configured keys. This module works in a manner similar to pam_ssh_agent_auth, but supports a wider range of SSH key types, including those protected by security keys (FIDO2). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.setEnvironment

Whether the service should set the environment variables listed in environment.sessionVariables using pam_env.so. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.setLoginUid

Set the login uid of the process (/proc/self/loginuid) for auditing purposes. The login uid is only set by ‘entry points’ like login and sshd, not by commands like sudo. Type: boolean Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.showMotd

Whether to show the message of the day. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.sshAgentAuth

If set, the calling user’s SSH agent is used to authenticate against the keys in the calling user’s ~/.ssh/authorized_keys. This is useful for sudo on password-less remote systems. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.sssdStrictAccess

enforce sssd access control Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.startSession

If set, the service will register a new session with systemd’s login manager. For local sessions, this will give the user access to audio devices, CD-ROM drives. In the default PolicyKit configuration, it also allows the user to reboot the system. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.text

Contents of the PAM service file. Type: null or strings concatenated with “\n” Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.u2fAuth

If set, users listed in $XDG_CONFIG_HOME/Yubico/u2f_keys (or $HOME/.config/Yubico/u2f_keys if XDG variable is not set) are able to log in with the associated U2F key. Path can be changed using security.pam.u2f.authFile option. Type: boolean Default: config.security.pam.u2f.enable Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.unixAuth

Whether users can log in with passwords defined in /etc/shadow. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.updateWtmp

Whether to update /var/log/wtmp. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.usshAuth

If set, users with an SSH certificate containing an authorized principal in their SSH agent are able to log in. Specific options are controlled using the security.pam.ussh options. Note that the security.pam.ussh.enable must also be set for this option to take effect. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.yubicoAuth

If set, users listed in ~/.yubico/authorized_yubikeys are able to log in with the associated Yubikey tokens. Type: boolean Default: config.security.pam.yubico.enable Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.zfs

Enable unlocking and mounting of encrypted ZFS home dataset at login. Type: boolean Default: config.security.pam.zfs.enable Declared by: <nixpkgs/nixos/modules/security/pam.nix>
