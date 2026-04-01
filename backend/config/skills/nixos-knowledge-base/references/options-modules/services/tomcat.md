---
module: services.tomcat
option_count: 20
source: options.html
---

# services.tomcat

## services.tomcat.enable

Whether to enable Apache Tomcat. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-servers/tomcat.nix>

## services.tomcat.package

The tomcat9 package to use. Type: package Default: pkgs.tomcat9 Example: tomcat10 Declared by: <nixpkgs/nixos/modules/services/web-servers/tomcat.nix>

## services.tomcat.baseDir

Location where Tomcat stores configuration files, web applications and logfiles. Note that it is partially cleared on each service startup if purifyOnStart is enabled. Type: absolute path Default: "/var/tomcat" Declared by: <nixpkgs/nixos/modules/services/web-servers/tomcat.nix>

## services.tomcat.catalinaOpts

Parameters to pass to the Java Virtual Machine which spawns the Catalina servlet container Type: (list of string) or string Default: "" Declared by: <nixpkgs/nixos/modules/services/web-servers/tomcat.nix>

## services.tomcat.commonLibs

List containing JAR files or directories with JAR files which are libraries shared by the web applications and the servlet container Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/web-servers/tomcat.nix>

## services.tomcat.extraConfigFiles

Extra configuration files to pull into the tomcat conf directory Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/web-servers/tomcat.nix>

## services.tomcat.extraEnvironment

Environment Variables to pass to the tomcat service Type: list of string Default: [ ] Example: [ "ENVIRONMENT=production" ] Declared by: <nixpkgs/nixos/modules/services/web-servers/tomcat.nix>

## services.tomcat.extraGroups

Defines extra groups to which the tomcat user belongs. Type: list of string Default: [ ] Example: [ "users" ] Declared by: <nixpkgs/nixos/modules/services/web-servers/tomcat.nix>

## services.tomcat.group

Group account under which Apache Tomcat runs. Type: string Default: "tomcat" Declared by: <nixpkgs/nixos/modules/services/web-servers/tomcat.nix>

## services.tomcat.javaOpts

Parameters to pass to the Java Virtual Machine which spawns Apache Tomcat Type: (list of string) or string Default: "" Declared by: <nixpkgs/nixos/modules/services/web-servers/tomcat.nix>

## services.tomcat.jdk

The jdk package to use. Type: package Default: pkgs.jdk Declared by: <nixpkgs/nixos/modules/services/web-servers/tomcat.nix>

## services.tomcat.logDirs

Directories to create in baseDir/logs/ Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/web-servers/tomcat.nix>

## services.tomcat.logPerVirtualHost

Whether to enable logging per virtual host. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-servers/tomcat.nix>

## services.tomcat.port

The TCP port Tomcat should listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Declared by: <nixpkgs/nixos/modules/services/web-servers/tomcat.nix>

## services.tomcat.purifyOnStart

On startup, the baseDir directory is populated with various files, subdirectories and symlinks. If this option is enabled, these items (except for the logs and work subdirectories) are first removed. This prevents interference from remainders of an old configuration (libraries, webapps, etc.), so it’s recommended to enable this option. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-servers/tomcat.nix>

## services.tomcat.serverXml

Verbatim server.xml configuration. This is mutually exclusive with the virtualHosts options. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/web-servers/tomcat.nix>

## services.tomcat.sharedLibs

List containing JAR files or directories with JAR files which are libraries shared by the web applications Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/web-servers/tomcat.nix>

## services.tomcat.user

User account under which Apache Tomcat runs. Type: string Default: "tomcat" Declared by: <nixpkgs/nixos/modules/services/web-servers/tomcat.nix>

## services.tomcat.virtualHosts

List consisting of a virtual host name and a list of web applications to deploy on each virtual host Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/web-servers/tomcat.nix>

## services.tomcat.webapps

List containing WAR files or directories with WAR files which are web applications to be deployed on Tomcat Type: list of absolute path Default: [ config.services.tomcat.package.webapps ] Declared by: <nixpkgs/nixos/modules/services/web-servers/tomcat.nix>
