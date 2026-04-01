---
module: services.beanstalkd.listen
option_count: 2
source: options.html
---

# services.beanstalkd.listen

## services.beanstalkd.listen.address

IP address to listen on. Type: string Default: "127.0.0.1" Example: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/misc/beanstalkd.nix>

## services.beanstalkd.listen.port

TCP port that will be used to accept client connections. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 11300 Declared by: <nixpkgs/nixos/modules/services/misc/beanstalkd.nix>
