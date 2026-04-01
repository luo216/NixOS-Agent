---
module: services.nipap.nipap-www
option_count: 8
source: options.html
---

# services.nipap.nipap-www

## services.nipap.nipap-www.enable

Whether to enable nipap-www server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/nipap.nix>

## services.nipap.nipap-www.package

The nipap-www package to use. Type: package Default: pkgs.nipap-www Declared by: <nixpkgs/nixos/modules/services/web-apps/nipap.nix>

## services.nipap.nipap-www.host

Host to bind to. Type: null or string Default: "::" Declared by: <nixpkgs/nixos/modules/services/web-apps/nipap.nix>

## services.nipap.nipap-www.port

Port to bind to. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 21337 Declared by: <nixpkgs/nixos/modules/services/web-apps/nipap.nix>

## services.nipap.nipap-www.umask

umask for files written by Gunicorn, including UNIX socket. Type: string Default: "0" Declared by: <nixpkgs/nixos/modules/services/web-apps/nipap.nix>

## services.nipap.nipap-www.unixSocket

Path to UNIX socket to bind to. Type: null or string Default: null Example: "/run/nipap/nipap-www.sock" Declared by: <nixpkgs/nixos/modules/services/web-apps/nipap.nix>

## services.nipap.nipap-www.workers

Number of worker processes for Gunicorn to fork. Type: signed integer Default: 4 Declared by: <nixpkgs/nixos/modules/services/web-apps/nipap.nix>

## services.nipap.nipap-www.xmlrpcURIFile

Path to file containing XMLRPC URI for use by web UI - this is a secret, since it contains auth credentials. If null, it will be initialized assuming that the auth database is local. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/nipap.nix>
