---
module: environment
option_count: 28
source: options.html
---

# environment

## environment.enableAllTerminfo

Whether to install all terminfo outputs Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/config/terminfo.nix>

## environment.enableDebugInfo

Some NixOS packages provide debug symbols. However, these are not included in the system closure by default to save disk space. Enabling this option causes the debug symbols to appear in /run/current-system/sw/lib/debug/.build-id, where tools such as gdb can find them. If you need debug symbols for a package that doesn’t provide them by default, you can enable them as follows: nixpkgs.config.packageOverrides = pkgs: { hello = pkgs.hello.overrideAttrs (oldAttrs: { separateDebugInfo = true; }); }; Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/config/debug-info.nix>

## environment.checkConfigurationOptions

Alias of _module.check. Type: boolean Declared by: <nixpkgs/nixos/modules/rename.nix>

## environment.corePackages

Set of core packages for a normal interactive system. Only change this if you know what you’re doing! Like with systemPackages, packages are installed to /run/current-system/sw. They are automatically available to all users, and are automatically updated every time you rebuild the system configuration. Type: list of package Default: these packages, with their meta.priority numerically increased (thus lowering their installation priority): [ pkgs.acl pkgs.attr pkgs.bashInteractive pkgs.bzip2 pkgs.coreutils-full pkgs.cpio pkgs.curl pkgs.diffutils pkgs.findutils pkgs.gawk pkgs.getent pkgs.getconf pkgs.gnugrep pkgs.gnupatch pkgs.gnused pkgs.gnutar pkgs.gzip pkgs.xz pkgs.less pkgs.libcap pkgs.ncurses pkgs.netcat pkgs.mkpasswd pkgs.procps pkgs.su pkgs.time pkgs.util-linux pkgs.which pkgs.zstd ] Example: [ ] Declared by: <nixpkgs/nixos/modules/config/system-path.nix>

## environment.debuginfodServers

List of urls of debuginfod servers for tools like gdb and valgrind to use. Unrelated to environment.enableDebugInfo. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/config/debug-info.nix>

## environment.defaultPackages

Set of default packages that aren’t strictly necessary for a running system, entries can be removed for a more minimal NixOS installation. Like with systemPackages, packages are installed to /run/current-system/sw. They are automatically available to all users, and are automatically updated every time you rebuild the system configuration. Type: list of package Default: these packages, with their meta.priority numerically increased (thus lowering their installation priority): [ pkgs.perl pkgs.rsync pkgs.strace ] Example: [ ] Declared by: <nixpkgs/nixos/modules/config/system-path.nix>

## environment.etc

Set of files that have to be linked in /etc. Type: attribute set of (submodule) Default: { } Example: { example-configuration-file = { source = "/nix/store/.../etc/dir/file.conf.example"; mode = "0440"; }; "default/useradd".text = "GROUP=100 ..."; } Declared by: <nixpkgs/nixos/modules/system/etc/etc.nix>

## environment.extraInit

Shell script code called during global environment initialisation after all variables and profileVariables have been set. This code is assumed to be shell-independent, which means you should stick to pure sh without sh word split. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/config/shells-environment.nix>

## environment.extraOutputsToInstall

Entries listed here will be appended to the meta.outputsToInstall attribute for each package in environment.systemPackages, and the files from the corresponding derivation outputs symlinked into /run/current-system/sw. For example, this can be used to install the dev and info outputs for all packages in the system environment, if they are available. To use specific outputs instead of configuring them globally, select the corresponding attribute on the package derivation, e.g. libxml2.dev or coreutils.info. Type: list of string Default: [ ] Example: [ "dev" "info" ] Declared by: <nixpkgs/nixos/modules/config/system-path.nix>

## environment.extraSetup

Shell fragments to be run after the system environment has been created. This should only be used for things that need to modify the internals of the environment, e.g. generating MIME caches. The environment being built can be accessed at $out. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/config/system-path.nix>

## environment.freetds

Configure freetds database entries. Each attribute denotes a section within freetds.conf, and the value (a string) is the config content for that section. When at least one entry is configured the global environment variables FREETDSCONF, FREETDS and SYBASE will be configured to allow the programs that use freetds to find the library and config. Type: attribute set of string Default: { } Example: { MYDATABASE = '' host = 10.0.2.100 port = 1433 tds version = 7.2 ''; } Declared by: <nixpkgs/nixos/modules/programs/freetds.nix>

## environment.homeBinInPath

Include ~/bin/ in $PATH. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/config/shells-environment.nix>

## environment.interactiveShellInit

Shell script code called during interactive shell initialisation. This code is assumed to be shell-independent, which means you should stick to pure sh without sh word split. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/config/shells-environment.nix>

## environment.ldso

The executable to link into the normal FHS location of the ELF loader. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/config/ldso.nix>

## environment.ldso32

The executable to link into the normal FHS location of the 32-bit ELF loader. This currently only works on x86_64 architectures. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/config/ldso.nix>

## environment.localBinInPath

Add ~/.local/bin/ to $PATH Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/config/shells-environment.nix>

## environment.loginShellInit

Shell script code called during login shell initialisation. This code is assumed to be shell-independent, which means you should stick to pure sh without sh word split. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/config/shells-environment.nix>

## environment.pathsToLink

List of directories to be symlinked in /run/current-system/sw. Type: list of string Default: [ ] Example: [ "/" ] Declared by: <nixpkgs/nixos/modules/config/system-path.nix>

## environment.profileRelativeEnvVars

Attribute set of environment variable. Each attribute maps to a list of relative paths. Each relative path is appended to the each profile of environment.profiles to form the content of the corresponding environment variable. Type: attribute set of list of string Example: { MANPATH = [ "/man" "/share/man" ]; PATH = [ "/bin" ]; } Declared by: <nixpkgs/nixos/modules/config/shells-environment.nix>

## environment.profileRelativeSessionVariables

Attribute set of environment variable used in the global environment. These variables will be set by PAM early in the login process. Variable substitution is available as described in pam_env.conf(5). Each attribute maps to a list of relative paths. Each relative path is appended to the each profile of environment.profiles to form the content of the corresponding environment variable. Also, these variables are merged into environment.profileRelativeEnvVars and it is therefore not possible to use PAM style variables such as @{HOME}. Type: attribute set of list of string Example: { MANPATH = [ "/man" "/share/man" ]; PATH = [ "/bin" ]; } Declared by: <nixpkgs/nixos/modules/config/system-environment.nix>

## environment.profiles

A list of profiles used to setup the global environment. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/config/shells-environment.nix>

## environment.sessionVariables

A set of environment variables used in the global environment. These variables will be set by PAM early in the login process. The value of each session variable can be either a string or a list of strings. The latter is concatenated, interspersed with colon characters. Setting a variable to null does nothing. You can override a variable set by another module to null to unset it. Note, due to limitations in the PAM format values may not contain the " character. Also, these variables are merged into environment.variables and it is therefore not possible to use PAM style variables such as @{HOME}. Type: attribute set of (null or (list of (signed integer or string or absolute path)) or signed integer or string or absolute path) Default: { } Declared by: <nixpkgs/nixos/modules/config/system-environment.nix>

## environment.shellAliases

An attribute set that maps aliases (the top level attribute names in this option) to command strings or directly to build outputs. The aliases are added to all users’ shells. Aliases mapped to null are ignored. Type: attribute set of (null or string or absolute path) Example: { l = null; ll = "ls -l"; } Declared by: <nixpkgs/nixos/modules/config/shells-environment.nix>

## environment.shellInit

Shell script code called during shell initialisation. This code is assumed to be shell-independent, which means you should stick to pure sh without sh word split. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/config/shells-environment.nix>

## environment.shells

A list of permissible login shells for user accounts. No need to mention /bin/sh here, it is placed into this list implicitly. Type: list of (package or absolute path) Default: [ ] Example: [ pkgs.bashInteractive pkgs.zsh ] Declared by: <nixpkgs/nixos/modules/config/shells-environment.nix>

## environment.systemPackages

The set of packages that appear in /run/current-system/sw. These packages are automatically available to all users, and are automatically updated every time you rebuild the system configuration. (The latter is the main difference with installing them in the default profile, /nix/var/nix/profiles/default. Type: list of package Default: [ ] Example: [ pkgs.firefox pkgs.thunderbird ] Declared by: <nixpkgs/nixos/modules/config/system-path.nix>

## environment.unixODBCDrivers

Specifies Unix ODBC drivers to be registered in /etc/odbcinst.ini. You may also want to add pkgs.unixODBC to the system path to get a command line client to connect to ODBC databases. Type: list of package Default: [ ] Example: with pkgs.unixODBCDrivers; [ sqlite psql ] Declared by: <nixpkgs/nixos/modules/config/unix-odbc-drivers.nix>

## environment.variables

A set of environment variables used in the global environment. These variables will be set on shell initialisation (e.g. in /etc/profile). The value of each variable can be either a string or a list of strings. The latter is concatenated, interspersed with colon characters. Setting a variable to null does nothing. You can override a variable set by another module to null to unset it. Type: attribute set of (null or (list of (signed integer or string or absolute path)) or signed integer or string or absolute path) Default: { } Example: { EDITOR = "nvim"; VISUAL = "nvim"; } Declared by: <nixpkgs/nixos/modules/config/shells-environment.nix>
