---
module: services.jboss
option_count: 8
source: options.html
---

# services.jboss

## services.jboss.enable

Whether to enable JBoss. WARNING : this package is outdated and is known to have vulnerabilities. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-servers/jboss/default.nix>

## services.jboss.deployDir

Location of the deployment files Type: string Default: "/nix/var/nix/profiles/default/server/default/deploy/" Declared by: <nixpkgs/nixos/modules/services/web-servers/jboss/default.nix>

## services.jboss.libUrl

Location where the shared library JARs are stored Type: string Default: "file:///nix/var/nix/profiles/default/server/default/lib" Declared by: <nixpkgs/nixos/modules/services/web-servers/jboss/default.nix>

## services.jboss.logDir

Location of the logfile directory of JBoss Type: string Default: "/var/log/jboss" Declared by: <nixpkgs/nixos/modules/services/web-servers/jboss/default.nix>

## services.jboss.serverDir

Location of the server instance files Type: string Default: "/var/jboss/server" Declared by: <nixpkgs/nixos/modules/services/web-servers/jboss/default.nix>

## services.jboss.tempDir

Location where JBoss stores its temp files Type: string Default: "/tmp" Declared by: <nixpkgs/nixos/modules/services/web-servers/jboss/default.nix>

## services.jboss.useJK

Whether to use to connector to the Apache HTTP server Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-servers/jboss/default.nix>

## services.jboss.user

User account under which jboss runs. Type: string Default: "nobody" Declared by: <nixpkgs/nixos/modules/services/web-servers/jboss/default.nix>
