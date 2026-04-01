---
module: services.certmgr
option_count: 9
source: options.html
---

# services.certmgr

## services.certmgr.enable

Whether to enable certmgr. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/certmgr.nix>

## services.certmgr.package

The certmgr package to use. Type: package Default: pkgs.certmgr Declared by: <nixpkgs/nixos/modules/services/security/certmgr.nix>

## services.certmgr.defaultRemote

The default CA host:port to use. Type: string Default: "127.0.0.1:8888" Declared by: <nixpkgs/nixos/modules/services/security/certmgr.nix>

## services.certmgr.metricsAddress

The address for the Prometheus HTTP endpoint. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/security/certmgr.nix>

## services.certmgr.metricsPort

The port for the Prometheus HTTP endpoint. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9488 Declared by: <nixpkgs/nixos/modules/services/security/certmgr.nix>

## services.certmgr.renewInterval

How often to check certificate expirations and how often to update the cert_next_expires metric. Type: string Default: "30m" Declared by: <nixpkgs/nixos/modules/services/security/certmgr.nix>

## services.certmgr.specs

Certificate specs as described by: https://github.com/cloudflare/certmgr#certificate-specs These will be added to the Nix store, so they will be world readable. Type: attribute set of (absolute path or (submodule)) Default: { } Example: { exampleCert = let domain = "example.com"; secret = name: "/var/lib/secrets/${name}.pem"; in { service = "nginx"; action = "reload"; authority = { file.path = secret "ca"; }; certificate = { path = secret domain; }; private_key = { owner = "root"; group = "root"; mode = "0600"; path = secret "${domain}-key"; }; request = { CN = domain; hosts = [ "mail.${domain}" "www.${domain}" ]; key = { algo = "rsa"; size = 2048; }; names = { O = "Example Organization"; C = "USA"; }; }; }; otherCert = "/var/certmgr/specs/other-cert.json"; } Declared by: <nixpkgs/nixos/modules/services/security/certmgr.nix>

## services.certmgr.svcManager

This specifies the service manager to use for restarting or reloading services. See: https://github.com/cloudflare/certmgr#certmgryaml. For how to use the “command” service manager in particular, see: https://github.com/cloudflare/certmgr#command-svcmgr-and-how-to-use-it. Type: one of “circus”, “command”, “dummy”, “openrc”, “systemd”, “sysv” Default: "systemd" Declared by: <nixpkgs/nixos/modules/services/security/certmgr.nix>

## services.certmgr.validMin

The interval before a certificate expires to start attempting to renew it. Type: string Default: "72h" Declared by: <nixpkgs/nixos/modules/services/security/certmgr.nix>
