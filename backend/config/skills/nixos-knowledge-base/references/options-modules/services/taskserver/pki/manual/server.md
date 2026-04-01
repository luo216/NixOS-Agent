---
module: services.taskserver.pki.manual.server
option_count: 3
source: options.html
---

# services.taskserver.pki.manual.server

## services.taskserver.pki.manual.server.cert

Fully qualified path to the server certificate. Note Setting this option will prevent automatic CA creation and handling. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/misc/taskserver>

## services.taskserver.pki.manual.server.crl

Fully qualified path to the server certificate revocation list. Note Setting this option will prevent automatic CA creation and handling. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/misc/taskserver>

## services.taskserver.pki.manual.server.key

Fully qualified path to the server key. Note Setting this option will prevent automatic CA creation and handling. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/misc/taskserver>
