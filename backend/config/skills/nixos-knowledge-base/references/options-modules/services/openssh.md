---
module: services.openssh
option_count: 19
source: options.html
---

# services.openssh

## services.openssh.enable

Whether to enable the OpenSSH secure shell daemon, which allows secure remote logins. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>

## services.openssh.package

OpenSSH package to use for sshd. Type: package Default: programs.ssh.package Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>

## services.openssh.allowSFTP

Whether to enable the SFTP subsystem in the SSH daemon. This enables the use of commands such as sftp and sshfs. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>

## services.openssh.authorizedKeysCommand

Specifies a program to be used to look up the user’s public keys. The program must be owned by root, not writable by group or others and specified by an absolute path. Type: string Default: "none" Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>

## services.openssh.authorizedKeysCommandUser

Specifies the user under whose account the AuthorizedKeysCommand is run. It is recommended to use a dedicated user that has no other role on the host than running authorized keys commands. Type: string Default: "nobody" Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>

## services.openssh.authorizedKeysFiles

Specify the rules for which files to read on the host. This is an advanced option. If you’re looking to configure user keys, you can generally use users.users.<name>.openssh.authorizedKeys.keys or users.users.<name>.openssh.authorizedKeys.keyFiles. These are paths relative to the host root file system or home directories and they are subject to certain token expansion rules. See AuthorizedKeysFile in man sshd_config for details. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>

## services.openssh.authorizedKeysInHomedir

Enables the use of the ~/.ssh/authorized_keys file. Otherwise, the only files trusted by default are those in /etc/ssh/authorized_keys.d, i.e. SSH keys from users.users.<name>.openssh.authorizedKeys.keys. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>

## services.openssh.banner

Message to display to the remote user before authentication is allowed. Type: null or strings concatenated with “\n” Default: null Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>

## services.openssh.extraConfig

Verbatim contents of sshd_config. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>

## services.openssh.hostKeys

NixOS can automatically generate SSH host keys. This option specifies the path, type and size of each key. See ssh-keygen(1) for supported types and sizes. Type: list of (attribute set) Default: [ { bits = 4096; path = "/etc/ssh/ssh_host_rsa_key"; type = "rsa"; } { path = "/etc/ssh/ssh_host_ed25519_key"; type = "ed25519"; } ] Example: [ { bits = 4096; openSSHFormat = true; path = "/etc/ssh/ssh_host_rsa_key"; type = "rsa"; } { comment = "key comment"; path = "/etc/ssh/ssh_host_ed25519_key"; type = "ed25519"; } ] Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>

## services.openssh.knownHosts

Alias of programs.ssh.knownHosts. Type: attribute set of (submodule) Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>

## services.openssh.listenAddresses

List of addresses and ports to listen on (ListenAddress directive in config). If port is not specified for address sshd will listen on all ports specified by ports option. NOTE: this will override default listening on all local addresses and port 22. NOTE: setting this option won’t automatically enable given ports in firewall configuration. Type: list of (submodule) Default: [ ] Example: [ { addr = "192.168.3.1"; port = 22; } { addr = "0.0.0.0"; port = 64022; } ] Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>

## services.openssh.moduliFile

Path to moduli file to install in /etc/ssh/moduli. If this option is unset, then the moduli file shipped with OpenSSH will be used. Type: absolute path Example: "/etc/my-local-ssh-moduli;" Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>

## services.openssh.openFirewall

Whether to automatically open the specified ports in the firewall. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>

## services.openssh.ports

Specifies on which ports the SSH daemon listens. Type: list of 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: [ 22 ] Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>

## services.openssh.settings

Configuration for sshd_config(5). Type: open submodule of attribute set of (atom (null, bool, int, float or string)) Default: { } Example: { UseDns = true; PasswordAuthentication = false; } Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>

## services.openssh.sftpFlags

Commandline flags to add to sftp-server. Type: list of string Default: [ ] Example: [ "-f AUTHPRIV" "-l INFO" ] Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>

## services.openssh.sftpServerExecutable

The sftp server executable. Can be a path or “internal-sftp” to use the sftp server built into the sshd binary. Type: string Example: "internal-sftp" Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>

## services.openssh.startWhenNeeded

If set, sshd is socket-activated; that is, instead of having it permanently running as a daemon, systemd will start an instance for each incoming connection. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/ssh/sshd.nix>
