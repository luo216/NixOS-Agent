---
module: services.bacula-fd.director.<name>.tls
option_count: 7
source: options.html
---

# services.bacula-fd.director.<name>.tls

## services.bacula-fd.director.<name>.tls.enable

Specifies if TLS should be enabled. If this set to false TLS will be completely disabled, even if services.bacula-fd.director.<name>.tls.require is true. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>

## services.bacula-fd.director.<name>.tls.allowedCN

Common name attribute of allowed peer certificates. This directive is valid for a server and in a client context. If this directive is specified, the peer certificate will be verified against this list. In the case this directive is configured on a server side, the allowed CN list will not be checked if services.bacula-fd.director.<name>.tls.verifyPeer is false. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>

## services.bacula-fd.director.<name>.tls.caCertificateFile

The path specifying a PEM encoded TLS CA certificate(s). Multiple certificates are permitted in the file. One of TLS CA Certificate File or TLS CA Certificate Dir are required in a server context, unless services.bacula-fd.director.<name>.tls.verifyPeer is false, and are always required in a client context. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>

## services.bacula-fd.director.<name>.tls.certificate

The full path to the PEM encoded TLS certificate. It will be used as either a client or server certificate, depending on the connection direction. This directive is required in a server context, but it may not be specified in a client context if services.bacula-fd.director.<name>.tls.verifyPeer is false in the corresponding server context. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>

## services.bacula-fd.director.<name>.tls.key

The path of a PEM encoded TLS private key. It must correspond to the TLS certificate. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>

## services.bacula-fd.director.<name>.tls.require

Require TLS or TLS-PSK encryption. This directive is ignored unless one of services.bacula-fd.director.<name>.tls.enable is true or TLS PSK Enable is set to yes. If TLS is not required while TLS or TLS-PSK are enabled, then the Bacula component will connect with other components either with or without TLS or TLS-PSK If services.bacula-fd.director.<name>.tls.enable or TLS-PSK is enabled and TLS is required, then the Bacula component will refuse any connection request that does not use TLS. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>

## services.bacula-fd.director.<name>.tls.verifyPeer

Verify peer certificate. Instructs server to request and verify the client’s X.509 certificate. Any client certificate signed by a known-CA will be accepted. Additionally, the client’s X509 certificate Common Name must meet the value of the Address directive. If services.bacula-fd.director.<name>.tls.allowedCN is used, the client’s x509 certificate Common Name must also correspond to one of the CN specified in the services.bacula-fd.director.<name>.tls.allowedCN directive. This directive is valid only for a server and not in client context. Standard from Bacula is true. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>
