---
module: services.pihole-web
option_count: 4
source: options.html
---

# services.pihole-web

## services.pihole-web.enable

Whether to enable Pi-hole dashboard. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/pihole-web.nix>

## services.pihole-web.package

The pihole-web package to use. Type: package Default: pkgs.pihole-web Declared by: <nixpkgs/nixos/modules/services/web-apps/pihole-web.nix>

## services.pihole-web.hostName

Domain name for the website. Type: string Default: "pi.hole" Declared by: <nixpkgs/nixos/modules/services/web-apps/pihole-web.nix>

## services.pihole-web.ports

Port(s) for the webserver to serve on. If provided as a string, optionally append suffixes to control behaviour: o: to make the port is optional - failure to bind will not be an error. s: for the port to be used for SSL. r: for a non-SSL port to redirect to the first available SSL port. Type: list of (16 bit unsigned integer; between 0 and 65535 (both inclusive) or string or (submodule)) Example: [ "80r" "443s" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/pihole-web.nix>
