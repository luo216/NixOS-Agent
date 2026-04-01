---
module: services.sftpgo.settings.webdavd.bindings.*
option_count: 2
source: options.html
---

# services.sftpgo.settings.webdavd.bindings.*

## services.sftpgo.settings.webdavd.bindings.*.address

Network listen address. Leave blank to listen on all available network interfaces. On *NIX you can specify an absolute path to listen on a Unix-domain socket. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/web-apps/sftpgo.nix>

## services.sftpgo.settings.webdavd.bindings.*.port

The port for serving WebDAV requests. Setting the port to 0 disables listening on this interface binding. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 0 Declared by: <nixpkgs/nixos/modules/services/web-apps/sftpgo.nix>
