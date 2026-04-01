---
module: services.tomcat.virtualHosts.*
option_count: 3
source: options.html
---

# services.tomcat.virtualHosts.*

## services.tomcat.virtualHosts.*.aliases

aliases of the virtualhost Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/web-servers/tomcat.nix>

## services.tomcat.virtualHosts.*.name

name of the virtualhost Type: string Declared by: <nixpkgs/nixos/modules/services/web-servers/tomcat.nix>

## services.tomcat.virtualHosts.*.webapps

List containing web application WAR files and/or directories containing web applications and configuration files for the virtual host. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/web-servers/tomcat.nix>
