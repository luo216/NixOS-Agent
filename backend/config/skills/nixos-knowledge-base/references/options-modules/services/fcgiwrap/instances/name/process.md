---
module: services.fcgiwrap.instances.<name>.process
option_count: 3
source: options.html
---

# services.fcgiwrap.instances.<name>.process

## services.fcgiwrap.instances.<name>.process.group

Group as which this instance of fcgiwrap will be run. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-servers/fcgiwrap.nix>

## services.fcgiwrap.instances.<name>.process.prefork

Number of processes to prefork. Type: positive integer, meaning >0 Default: 1 Declared by: <nixpkgs/nixos/modules/services/web-servers/fcgiwrap.nix>

## services.fcgiwrap.instances.<name>.process.user

User as which this instance of fcgiwrap will be run. Set to null (the default) to use a dynamically allocated user. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-servers/fcgiwrap.nix>
