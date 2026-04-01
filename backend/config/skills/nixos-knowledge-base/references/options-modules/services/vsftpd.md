---
module: services.vsftpd
option_count: 28
source: options.html
---

# services.vsftpd

## services.vsftpd.enable

Whether to enable vsftpd. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/vsftpd.nix>

## services.vsftpd.enableVirtualUsers

Whether to enable the pam_userdb-based virtual user system Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/vsftpd.nix>

## services.vsftpd.allowWriteableChroot

Allow the use of writeable root inside chroot(). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/vsftpd.nix>

## services.vsftpd.anonymousMkdirEnable

Whether any uploads are permitted to anonymous users. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/vsftpd.nix>

## services.vsftpd.anonymousUmask

Anonymous write umask. Type: string Default: "077" Example: "002" Declared by: <nixpkgs/nixos/modules/services/networking/vsftpd.nix>

## services.vsftpd.anonymousUploadEnable

Whether any uploads are permitted to anonymous users. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/vsftpd.nix>

## services.vsftpd.anonymousUser

Whether to enable the anonymous FTP user. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/vsftpd.nix>

## services.vsftpd.anonymousUserHome

Directory to consider the HOME of the anonymous user. Type: absolute path Default: "/home/ftp/" Declared by: <nixpkgs/nixos/modules/services/networking/vsftpd.nix>

## services.vsftpd.anonymousUserNoPassword

Whether to disable the password for the anonymous FTP user. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/vsftpd.nix>

## services.vsftpd.chrootlocalUser

Whether local users are confined to their home directory. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/vsftpd.nix>

## services.vsftpd.extraConfig

Extra configuration to add at the bottom of the generated configuration file. Type: strings concatenated with “\n” Default: "" Example: "ftpd_banner=Hello" Declared by: <nixpkgs/nixos/modules/services/networking/vsftpd.nix>

## services.vsftpd.forceLocalDataSSL

Only applies if sslEnable is true. Non anonymous (local) users must use a secure SSL connection for sending/receiving data on data connection. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/vsftpd.nix>

## services.vsftpd.forceLocalLoginsSSL

Only applies if sslEnable is true. Non anonymous (local) users must use a secure SSL connection to send a password. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/vsftpd.nix>

## services.vsftpd.localRoot

This option represents a directory which vsftpd will try to change into after a local (i.e. non- anonymous) login. Failure is silently ignored. Type: null or string Default: null Example: "/var/www/$USER" Declared by: <nixpkgs/nixos/modules/services/networking/vsftpd.nix>

## services.vsftpd.localUsers

Whether to enable FTP for local users. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/vsftpd.nix>

## services.vsftpd.portPromiscuous

Set to YES if you want to disable the PORT security check that ensures that outgoing data connections can only connect to the client. Only enable if you know what you are doing! Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/vsftpd.nix>

## services.vsftpd.rsaCertFile

RSA certificate file. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/vsftpd.nix>

## services.vsftpd.rsaKeyFile

RSA private key file. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/vsftpd.nix>

## services.vsftpd.ssl_sslv2

Only applies if ssl_enable is activated. If enabled, this option will permit SSL v2 protocol connections. TLS v1 connections are preferred. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/vsftpd.nix>

## services.vsftpd.ssl_sslv3

Only applies if ssl_enable is activated. If enabled, this option will permit SSL v3 protocol connections. TLS v1 connections are preferred. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/vsftpd.nix>

## services.vsftpd.ssl_tlsv1

Only applies if ssl_enable is activated. If enabled, this option will permit TLS v1 protocol connections. TLS v1 connections are preferred. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/vsftpd.nix>

## services.vsftpd.userDbPath

Only applies if enableVirtualUsers is true. Path pointing to the pam_userdb user database used by vsftpd to authenticate the virtual users. This user list should be stored in the Berkeley DB database format. To generate a new user database, create a text file, add your users using the following format: user1 password1 user2 password2 You can then install pkgs.db to generate the Berkeley DB using db_load -T -t hash -f logins.txt userDb.db Caution: pam_userdb will automatically append a .db suffix to the filename you provide though this option. This option shouldn’t include this filetype suffix. Type: null or string Default: null Example: "/etc/vsftpd/userDb" Declared by: <nixpkgs/nixos/modules/services/networking/vsftpd.nix>

## services.vsftpd.userlist

See userlistFile. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/vsftpd.nix>

## services.vsftpd.userlistDeny

Specifies whether userlistFile is a list of user names to allow or deny access. The default false means whitelist/allow. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/vsftpd.nix>

## services.vsftpd.userlistEnable

Whether users are included. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/vsftpd.nix>

## services.vsftpd.userlistFile

Newline separated list of names to be allowed/denied if userlistEnable is true. Meaning see userlistDeny. The default is a file containing the users from userlist. If explicitly set to null userlist_file will not be set in vsftpd’s config file. Type: absolute path Default: pkgs.writeText "userlist" (concatMapStrings (x: "${x}\n") cfg.userlist) Declared by: <nixpkgs/nixos/modules/services/networking/vsftpd.nix>

## services.vsftpd.virtualUseLocalPrivs

If enabled, virtual users will use the same privileges as local users. By default, virtual users will use the same privileges as anonymous users, which tends to be more restrictive (especially in terms of write access). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/vsftpd.nix>

## services.vsftpd.writeEnable

Whether any write activity is permitted to users. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/vsftpd.nix>
