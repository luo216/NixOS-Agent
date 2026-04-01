---
module: services.openssh.settings
option_count: 18
source: options.html
---

# services.openssh.settings

## services.openssh.settings.AllowGroups

If specified, login is allowed only for users part of the listed groups. See sshd_config(5) for details. Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>

## services.openssh.settings.AllowUsers

If specified, login is allowed only for the listed users. See sshd_config(5) for details. Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>

## services.openssh.settings.AuthorizedPrincipalsFile

Specifies a file that lists principal names that are accepted for certificate authentication. The default is "none", i.e. not to use a principals file. Type: null or string Default: "none" Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>

## services.openssh.settings.Ciphers

Allowed ciphers Defaults to recommended settings from both https://stribika.github.io/2015/01/04/secure-secure-shell.html and https://infosec.mozilla.org/guidelines/openssh#modern-openssh-67 Type: null or (list of string) Default: [ "chacha20-poly1305@openssh.com" "aes256-gcm@openssh.com" "aes128-gcm@openssh.com" "aes256-ctr" "aes192-ctr" "aes128-ctr" ] Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>

## services.openssh.settings.DenyGroups

If specified, login is denied for all users part of the listed groups. Takes precedence over services.openssh.settings.AllowGroups. See sshd_config(5) for details. Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>

## services.openssh.settings.DenyUsers

If specified, login is denied for all listed users. Takes precedence over services.openssh.settings.AllowUsers. See sshd_config(5) for details. Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>

## services.openssh.settings.GatewayPorts

Specifies whether remote hosts are allowed to connect to ports forwarded for the client. See sshd_config(5). Type: null or string Default: "no" Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>

## services.openssh.settings.KbdInteractiveAuthentication

Specifies whether keyboard-interactive authentication is allowed. Type: null or boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>

## services.openssh.settings.KexAlgorithms

Allowed key exchange algorithms Uses the lower bound recommended in both https://stribika.github.io/2015/01/04/secure-secure-shell.html and https://infosec.mozilla.org/guidelines/openssh#modern-openssh-67 Type: null or (list of string) Default: [ "mlkem768x25519-sha256" "sntrup761x25519-sha512" "sntrup761x25519-sha512@openssh.com" "curve25519-sha256" "curve25519-sha256@libssh.org" "diffie-hellman-group-exchange-sha256" ] Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>

## services.openssh.settings.LogLevel

Gives the verbosity level that is used when logging messages from sshd(8). Logging with a DEBUG level violates the privacy of users and is not recommended. Type: null or one of “QUIET”, “FATAL”, “ERROR”, “INFO”, “VERBOSE”, “DEBUG”, “DEBUG1”, “DEBUG2”, “DEBUG3” Default: "INFO" Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>

## services.openssh.settings.Macs

Allowed MACs Defaults to recommended settings from both https://stribika.github.io/2015/01/04/secure-secure-shell.html and https://infosec.mozilla.org/guidelines/openssh#modern-openssh-67 Type: null or (list of string) Default: [ "hmac-sha2-512-etm@openssh.com" "hmac-sha2-256-etm@openssh.com" "umac-128-etm@openssh.com" ] Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>

## services.openssh.settings.PasswordAuthentication

Specifies whether password authentication is allowed. Type: null or boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>

## services.openssh.settings.PermitRootLogin

Whether the root user can login using ssh. Type: null or one of “yes”, “without-password”, “prohibit-password”, “forced-commands-only”, “no” Default: "prohibit-password" Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>

## services.openssh.settings.PrintMotd

Whether to enable printing /etc/motd when a user logs in interactively. Type: null or boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>

## services.openssh.settings.StrictModes

Whether sshd should check file modes and ownership of directories Type: null or boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>

## services.openssh.settings.UseDns

Specifies whether sshd(8) should look up the remote host name, and to check that the resolved host name for the remote IP address maps back to the very same IP address. If this option is set to no (the default) then only addresses and not host names may be used in ~/.ssh/authorized_keys from and sshd_config Match Host directives. Type: null or boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>

## services.openssh.settings.UsePAM

Whether to enable PAM authentication. Type: null or boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>

## services.openssh.settings.X11Forwarding

Whether to allow X11 connections to be forwarded. Type: null or boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>
