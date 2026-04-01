---
module: services.sftpgo.settings.httpd.bindings.*
option_count: 4
source: options.html
---

# services.sftpgo.settings.httpd.bindings.*

## services.sftpgo.settings.httpd.bindings.*.enable_web_admin

Enable the built-in web admin for this interface binding. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/sftpgo.nix>

## services.sftpgo.settings.httpd.bindings.*.enable_web_client

Enable the built-in web client for this interface binding. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/sftpgo.nix>

## services.sftpgo.settings.httpd.bindings.*.address

Network listen address. Leave blank to listen on all available network interfaces. On *NIX you can specify an absolute path to listen on a Unix-domain socket. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/web-apps/sftpgo.nix>

## services.sftpgo.settings.httpd.bindings.*.port

The port for serving HTTP(S) requests. Setting the port to 0 disables listening on this interface binding. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Declared by: <nixpkgs/nixos/modules/services/web-apps/sftpgo.nix>
