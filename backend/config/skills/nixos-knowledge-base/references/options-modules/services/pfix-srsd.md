---
module: services.pfix-srsd
option_count: 4
source: options.html
---

# services.pfix-srsd

## services.pfix-srsd.enable

Whether to run the postfix sender rewriting scheme daemon. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/mail/pfix-srsd.nix>

## services.pfix-srsd.configurePostfix

Whether to configure the required settings to use pfix-srsd in the local Postfix instance. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/mail/pfix-srsd.nix>

## services.pfix-srsd.domain

The domain for which to enable srs Type: string Example: "example.com" Declared by: <nixpkgs/nixos/modules/services/mail/pfix-srsd.nix>

## services.pfix-srsd.secretsFile

The secret data used to encode the SRS address. to generate, use a command like: for n in $(seq 5); do dd if=/dev/urandom count=1 bs=1024 status=none | sha256sum | sed 's/ -$//' | sed 's/^/ /'; done Type: absolute path Default: "/var/lib/pfix-srsd/secrets" Declared by: <nixpkgs/nixos/modules/services/mail/pfix-srsd.nix>
