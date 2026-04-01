---
module: networking.openconnect.interfaces.<name>
option_count: 8
source: options.html
---

# networking.openconnect.interfaces.<name>

## networking.openconnect.interfaces.<name>.autoStart

Whether this VPN connection should be started automatically. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/openconnect.nix>

## networking.openconnect.interfaces.<name>.certificate

Certificate to authenticate with. Type: null or absolute path or PKCS#11 URI Default: null Example: "/var/lib/secrets/openconnect_certificate.pem" Declared by: <nixpkgs/nixos/modules/services/networking/openconnect.nix>

## networking.openconnect.interfaces.<name>.extraOptions

Extra config to be appended to the interface config. It should contain long-format options as would be accepted on the command line by openconnect (see https://www.infradead.org/openconnect/manual.html). Non-key-value options like deflate can be used by declaring them as booleans, i. e. deflate = true;. Type: attribute set of (string or boolean) Default: { } Example: { compression = "stateless"; no-dtls = true; no-http-keepalive = true; } Declared by: <nixpkgs/nixos/modules/services/networking/openconnect.nix>

## networking.openconnect.interfaces.<name>.gateway

Gateway server to connect to. Type: string Example: "gateway.example.com" Declared by: <nixpkgs/nixos/modules/services/networking/openconnect.nix>

## networking.openconnect.interfaces.<name>.passwordFile

File containing the password to authenticate with. This is passed to openconnect via the --passwd-on-stdin option. Type: null or absolute path Default: null Example: "/var/lib/secrets/openconnect-passwd" Declared by: <nixpkgs/nixos/modules/services/networking/openconnect.nix>

## networking.openconnect.interfaces.<name>.privateKey

Private key to authenticate with. Type: null or absolute path or PKCS#11 URI Default: null Example: "/var/lib/secrets/openconnect_private_key.pem" Declared by: <nixpkgs/nixos/modules/services/networking/openconnect.nix>

## networking.openconnect.interfaces.<name>.protocol

Protocol to use. Type: one of “anyconnect”, “array”, “nc”, “pulse”, “gp”, “f5”, “fortinet” Example: "anyconnect" Declared by: <nixpkgs/nixos/modules/services/networking/openconnect.nix>

## networking.openconnect.interfaces.<name>.user

Username to authenticate with. Type: null or string Default: null Example: "example-user" Declared by: <nixpkgs/nixos/modules/services/networking/openconnect.nix>
