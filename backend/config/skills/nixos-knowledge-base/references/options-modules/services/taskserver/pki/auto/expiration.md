---
module: services.taskserver.pki.auto.expiration
option_count: 4
source: options.html
---

# services.taskserver.pki.auto.expiration

## services.taskserver.pki.auto.expiration.ca

The expiration time of the CA certificate in days or null for no expiration time. Note This option is for the automatically handled CA and will be ignored if any of the services.taskserver.pki.manual.* options are set. Type: null or signed integer Default: null Example: 365 Declared by: <nixpkgs/nixos/modules/services/misc/taskserver>

## services.taskserver.pki.auto.expiration.client

The expiration time of client certificates in days or null for no expiration time. Note This option is for the automatically handled CA and will be ignored if any of the services.taskserver.pki.manual.* options are set. Type: null or signed integer Default: null Example: 365 Declared by: <nixpkgs/nixos/modules/services/misc/taskserver>

## services.taskserver.pki.auto.expiration.crl

The expiration time of the certificate revocation list (CRL) in days or null for no expiration time. Note This option is for the automatically handled CA and will be ignored if any of the services.taskserver.pki.manual.* options are set. Type: null or signed integer Default: null Example: 365 Declared by: <nixpkgs/nixos/modules/services/misc/taskserver>

## services.taskserver.pki.auto.expiration.server

The expiration time of the server certificate in days or null for no expiration time. Note This option is for the automatically handled CA and will be ignored if any of the services.taskserver.pki.manual.* options are set. Type: null or signed integer Default: null Example: 365 Declared by: <nixpkgs/nixos/modules/services/misc/taskserver>
