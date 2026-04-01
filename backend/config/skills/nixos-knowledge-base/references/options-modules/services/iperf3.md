---
module: services.iperf3
option_count: 12
source: options.html
---

# services.iperf3

## services.iperf3.enable

Whether to enable iperf3 network throughput testing server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/iperf3.nix>

## services.iperf3.package

The iperf3 package to use. Type: package Default: pkgs.iperf3 Declared by: <nixpkgs/nixos/modules/services/networking/iperf3.nix>

## services.iperf3.affinity

CPU affinity for the process. Type: null or (unsigned integer, meaning >=0) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/iperf3.nix>

## services.iperf3.authorizedUsersFile

Path to the configuration file containing authorized users credentials to run iperf tests. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/iperf3.nix>

## services.iperf3.bind

Bind to the specific interface associated with the given address. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/iperf3.nix>

## services.iperf3.debug

Emit debugging output. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/iperf3.nix>

## services.iperf3.extraFlags

Extra flags to pass to iperf3(1). Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/iperf3.nix>

## services.iperf3.forceFlush

Force flushing output at every interval. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/iperf3.nix>

## services.iperf3.openFirewall

Open ports in the firewall for iperf3. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/iperf3.nix>

## services.iperf3.port

Server port to listen on for iperf3 client requests. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5201 Declared by: <nixpkgs/nixos/modules/services/networking/iperf3.nix>

## services.iperf3.rsaPrivateKey

Path to the RSA private key (not password-protected) used to decrypt authentication credentials from the client. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/iperf3.nix>

## services.iperf3.verbose

Give more detailed output. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/iperf3.nix>
