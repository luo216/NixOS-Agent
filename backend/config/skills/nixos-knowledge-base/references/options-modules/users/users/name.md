---
module: users.users.<name>
option_count: 27
source: options.html
---

# users.users.<name>

## users.users.<name>.enable

If set to false, the user account will not be created. This is useful for when you wish to conditionally disable user accounts. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>

## users.users.<name>.packages

The set of packages that should be made available to the user. This is in contrast to environment.systemPackages, which adds packages to all users. Type: list of package Default: [ ] Example: [ pkgs.firefox pkgs.thunderbird ] Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>

## users.users.<name>.autoSubUidGidRange

Automatically allocate subordinate user and group ids for this user. Allocated range is currently always of size 65536. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>

## users.users.<name>.createHome

Whether to create the home directory and ensure ownership as well as permissions to match the user. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>

## users.users.<name>.cryptHomeLuks

Path to encrypted luks device that contains the user’s home directory. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>

## users.users.<name>.description

A short description of the user account, typically the user’s full name. This is actually the “GECOS” or “comment” field in /etc/passwd. Type: string, not containing newlines or colons Default: "" Example: "Alice Q. User" Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>

## users.users.<name>.expires

Set the date on which the user’s account will no longer be accessible. The date is expressed in the format YYYY-MM-DD, or null to disable the expiry. A user whose account is locked must contact the system administrator before being able to use the system again. Type: null or string matching the pattern [[:digit:]]{4}-[[:digit:]]{2}-[[:digit:]]{2} Default: null Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>

## users.users.<name>.extraGroups

The user’s auxiliary groups. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>

## users.users.<name>.group

The user’s primary group. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>

## users.users.<name>.hashedPassword

Specifies the hashed password for the user. The initialHashedPassword, hashedPassword, initialPassword, password and hashedPasswordFile options all control what password is set for the user. In a system where systemd.sysusers.enable is false, typically only one of hashedPassword, password, or hashedPasswordFile will be set. In a system where systemd.sysusers.enable or services.userborn.enable is true, typically only one of initialPassword, initialHashedPassword, or hashedPasswordFile will be set. If the option users.mutableUsers is true, the password defined in one of the above password options will only be set when the user is created for the first time. After that, you are free to change the password with the ordinary user management commands. If users.mutableUsers is false, you cannot change user passwords, they will always be set according to the password options. If none of the password options are set, then no password is assigned to the user, and the user will not be able to do password-based logins. If multiple of these password options are set at the same time then a specific order of precedence is followed, which can lead to surprising results. The order of precedence differs depending on whether the users.mutableUsers option is set. If the option users.mutableUsers is false, then the order of precedence is as shown below, where values on the left are overridden by values on the right: initialHashedPassword -> hashedPassword -> initialPassword -> password -> hashedPasswordFile If the option users.mutableUsers is true, then the order of precedence is as shown below, where values on the left are overridden by values on the right: initialHashedPassword -> initialPassword -> hashedPassword -> password -> hashedPasswordFile To generate a hashed password run mkpasswd. If set to an empty string (""), this user will be able to log in without being asked for a password (but not via remote services such as SSH, or indirectly via su or sudo). This should only be used for e.g. bootable live systems. Note: this is different from setting an empty password, which can be achieved using users.users.<name?>.password. If set to null (default) this user will not be able to log in using a password (i.e. via login command). Type: null or (string, not containing newlines or colons) Default: null Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>

## users.users.<name>.hashedPasswordFile

The full path to a file that contains the hash of the user’s password. The password file is read on each system activation. The file should contain exactly one line, which should be the password in an encrypted form that is suitable for the chpasswd -e command. The initialHashedPassword, hashedPassword, initialPassword, password and hashedPasswordFile options all control what password is set for the user. In a system where systemd.sysusers.enable is false, typically only one of hashedPassword, password, or hashedPasswordFile will be set. In a system where systemd.sysusers.enable or services.userborn.enable is true, typically only one of initialPassword, initialHashedPassword, or hashedPasswordFile will be set. If the option users.mutableUsers is true, the password defined in one of the above password options will only be set when the user is created for the first time. After that, you are free to change the password with the ordinary user management commands. If users.mutableUsers is false, you cannot change user passwords, they will always be set according to the password options. If none of the password options are set, then no password is assigned to the user, and the user will not be able to do password-based logins. If multiple of these password options are set at the same time then a specific order of precedence is followed, which can lead to surprising results. The order of precedence differs depending on whether the users.mutableUsers option is set. If the option users.mutableUsers is false, then the order of precedence is as shown below, where values on the left are overridden by values on the right: initialHashedPassword -> hashedPassword -> initialPassword -> password -> hashedPasswordFile If the option users.mutableUsers is true, then the order of precedence is as shown below, where values on the left are overridden by values on the right: initialHashedPassword -> initialPassword -> hashedPassword -> password -> hashedPasswordFile Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>

## users.users.<name>.home

The user’s home directory. Type: absolute path, not containing newlines or colons Default: "/var/empty" Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>

## users.users.<name>.homeMode

The user’s home directory mode in numeric format. See chmod(1). The mode is only applied if users.users.<name>.createHome is true. Type: string matching the pattern [0-7]{1,5} Default: "700" Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>

## users.users.<name>.ignoreShellProgramCheck

By default, nixos will check that programs.SHELL.enable is set to true if the user has a custom shell specified. If that behavior isn’t required and there are custom overrides in place to make sure that the shell is functional, set this to true. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>

## users.users.<name>.initialHashedPassword

Specifies the initial hashed password for the user, i.e. the hashed password assigned if the user does not already exist. If users.mutableUsers is true, the password can be changed subsequently using the passwd command. Otherwise, it’s equivalent to setting the hashedPassword option. The initialHashedPassword, hashedPassword, initialPassword, password and hashedPasswordFile options all control what password is set for the user. In a system where systemd.sysusers.enable is false, typically only one of hashedPassword, password, or hashedPasswordFile will be set. In a system where systemd.sysusers.enable or services.userborn.enable is true, typically only one of initialPassword, initialHashedPassword, or hashedPasswordFile will be set. If the option users.mutableUsers is true, the password defined in one of the above password options will only be set when the user is created for the first time. After that, you are free to change the password with the ordinary user management commands. If users.mutableUsers is false, you cannot change user passwords, they will always be set according to the password options. If none of the password options are set, then no password is assigned to the user, and the user will not be able to do password-based logins. If multiple of these password options are set at the same time then a specific order of precedence is followed, which can lead to surprising results. The order of precedence differs depending on whether the users.mutableUsers option is set. If the option users.mutableUsers is false, then the order of precedence is as shown below, where values on the left are overridden by values on the right: initialHashedPassword -> hashedPassword -> initialPassword -> password -> hashedPasswordFile If the option users.mutableUsers is true, then the order of precedence is as shown below, where values on the left are overridden by values on the right: initialHashedPassword -> initialPassword -> hashedPassword -> password -> hashedPasswordFile To generate a hashed password run mkpasswd. If set to an empty string (""), this user will be able to log in without being asked for a password (but not via remote services such as SSH, or indirectly via su or sudo). This should only be used for e.g. bootable live systems. Note: this is different from setting an empty password, which can be achieved using users.users.<name?>.password. If set to null (default) this user will not be able to log in using a password (i.e. via login command). Type: null or (string, not containing newlines or colons) Default: null Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>

## users.users.<name>.initialPassword

Specifies the initial password for the user, i.e. the password assigned if the user does not already exist. If users.mutableUsers is true, the password can be changed subsequently using the passwd command. Otherwise, it’s equivalent to setting the password option. The same caveat applies: the password specified here is world-readable in the Nix store, so it should only be used for guest accounts or passwords that will be changed promptly. The initialHashedPassword, hashedPassword, initialPassword, password and hashedPasswordFile options all control what password is set for the user. In a system where systemd.sysusers.enable is false, typically only one of hashedPassword, password, or hashedPasswordFile will be set. In a system where systemd.sysusers.enable or services.userborn.enable is true, typically only one of initialPassword, initialHashedPassword, or hashedPasswordFile will be set. If the option users.mutableUsers is true, the password defined in one of the above password options will only be set when the user is created for the first time. After that, you are free to change the password with the ordinary user management commands. If users.mutableUsers is false, you cannot change user passwords, they will always be set according to the password options. If none of the password options are set, then no password is assigned to the user, and the user will not be able to do password-based logins. If multiple of these password options are set at the same time then a specific order of precedence is followed, which can lead to surprising results. The order of precedence differs depending on whether the users.mutableUsers option is set. If the option users.mutableUsers is false, then the order of precedence is as shown below, where values on the left are overridden by values on the right: initialHashedPassword -> hashedPassword -> initialPassword -> password -> hashedPasswordFile If the option users.mutableUsers is true, then the order of precedence is as shown below, where values on the left are overridden by values on the right: initialHashedPassword -> initialPassword -> hashedPassword -> password -> hashedPasswordFile Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>

## users.users.<name>.isNormalUser

Indicates whether this is an account for a “real” user. This automatically sets group to users, createHome to true, home to /home/«username», useDefaultShell to true, and isSystemUser to false. Exactly one of isNormalUser and isSystemUser must be true. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>

## users.users.<name>.isSystemUser

Indicates if the user is a system user or not. This option only has an effect if uid is null, in which case it determines whether the user’s UID is allocated in the range for system users (below 1000) or in the range for normal users (starting at 1000). Exactly one of isNormalUser and isSystemUser must be true. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>

## users.users.<name>.linger

Whether to enable or disable lingering for this user. Without lingering, user units will not be started until the user logs in, and may be stopped on logout depending on the settings in logind.conf. By default, NixOS will not manage lingering, new users will default to not lingering, and lingering can be configured imperatively using loginctl enable-linger or loginctl disable-linger. Setting this option to true or false is the declarative equivalent of running loginctl enable-linger or loginctl disable-linger respectively. Type: null or boolean Default: null Example: true Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>

## users.users.<name>.name

The name of the user account. If undefined, the name of the attribute set will be used. Type: string, not containing newlines or colons Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>

## users.users.<name>.pamMount

Attributes for user’s entry in pam_mount.conf.xml. Useful attributes might include path, options, fstype, and server. See https://pam-mount.sourceforge.net/pam_mount.conf.5.html for more information. Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>

## users.users.<name>.password

Specifies the (clear text) password for the user. Warning: do not set confidential information here because it is world-readable in the Nix store. This option should only be used for public accounts. The initialHashedPassword, hashedPassword, initialPassword, password and hashedPasswordFile options all control what password is set for the user. In a system where systemd.sysusers.enable is false, typically only one of hashedPassword, password, or hashedPasswordFile will be set. In a system where systemd.sysusers.enable or services.userborn.enable is true, typically only one of initialPassword, initialHashedPassword, or hashedPasswordFile will be set. If the option users.mutableUsers is true, the password defined in one of the above password options will only be set when the user is created for the first time. After that, you are free to change the password with the ordinary user management commands. If users.mutableUsers is false, you cannot change user passwords, they will always be set according to the password options. If none of the password options are set, then no password is assigned to the user, and the user will not be able to do password-based logins. If multiple of these password options are set at the same time then a specific order of precedence is followed, which can lead to surprising results. The order of precedence differs depending on whether the users.mutableUsers option is set. If the option users.mutableUsers is false, then the order of precedence is as shown below, where values on the left are overridden by values on the right: initialHashedPassword -> hashedPassword -> initialPassword -> password -> hashedPasswordFile If the option users.mutableUsers is true, then the order of precedence is as shown below, where values on the left are overridden by values on the right: initialHashedPassword -> initialPassword -> hashedPassword -> password -> hashedPasswordFile Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>

## users.users.<name>.shell

The path to the user’s shell. Can use shell derivations, like pkgs.bashInteractive. Don’t forget to enable your shell in programs if necessary, like programs.zsh.enable = true;. Type: null or package or (absolute path, not containing newlines or colons) Default: pkgs.shadow Example: pkgs.bashInteractive Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>

## users.users.<name>.subGidRanges

Subordinate group ids that user is allowed to use. They are set into /etc/subgid and are used by newgidmap for user namespaces. Type: list of (submodule) Default: [ ] Example: [ { count = 1; startGid = 100; } { count = 999; startGid = 1001; } ] Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>

## users.users.<name>.subUidRanges

Subordinate user ids that user is allowed to use. They are set into /etc/subuid and are used by newuidmap for user namespaces. Type: list of (submodule) Default: [ ] Example: [ { count = 1; startUid = 1000; } { count = 65534; startUid = 100001; } ] Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>

## users.users.<name>.uid

The account UID. If the UID is null, a free UID is picked on activation. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>

## users.users.<name>.useDefaultShell

If true, the user’s shell will be set to users.defaultUserShell. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>
