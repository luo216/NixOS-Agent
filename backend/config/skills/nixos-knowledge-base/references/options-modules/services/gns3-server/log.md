---
module: services.gns3-server.log
option_count: 2
source: options.html
---

# services.gns3-server.log

## services.gns3-server.log.debug

Whether to enable debug logging. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/gns3-server.nix>

## services.gns3-server.log.file

Path of the file GNS3 Server should log to. Type: null or absolute path Default: "/var/log/gns3/server.log" Declared by: <nixpkgs/nixos/modules/services/networking/gns3-server.nix>
