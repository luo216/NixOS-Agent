---
module: services.onlyoffice
option_count: 14
source: options.html
---

# services.onlyoffice

## services.onlyoffice.enable

Whether to enable OnlyOffice DocumentServer. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/onlyoffice.nix>

## services.onlyoffice.enableExampleServer

Whether to enable OnlyOffice example server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/onlyoffice.nix>

## services.onlyoffice.package

The onlyoffice-documentserver package to use. Type: package Default: pkgs.onlyoffice-documentserver Declared by: <nixpkgs/nixos/modules/services/web-apps/onlyoffice.nix>

## services.onlyoffice.examplePort

Port the OnlyOffice example server should listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/onlyoffice.nix>

## services.onlyoffice.hostname

FQDN for the OnlyOffice instance. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/onlyoffice.nix>

## services.onlyoffice.jwtSecretFile

Path to a file that contains the secret to sign web requests using JSON Web Tokens. If left at the default value null signing is disabled. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/onlyoffice.nix>

## services.onlyoffice.port

Port the OnlyOffice document server should listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8000 Declared by: <nixpkgs/nixos/modules/services/web-apps/onlyoffice.nix>

## services.onlyoffice.postgresHost

The Postgresql hostname or socket path OnlyOffice should connect to. Type: string Default: "/run/postgresql" Declared by: <nixpkgs/nixos/modules/services/web-apps/onlyoffice.nix>

## services.onlyoffice.postgresName

The name of database OnlyOffice should use. Type: string Default: "onlyoffice" Declared by: <nixpkgs/nixos/modules/services/web-apps/onlyoffice.nix>

## services.onlyoffice.postgresPasswordFile

Path to a file that contains the password OnlyOffice should use to connect to Postgresql. Unused when using socket authentication. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/onlyoffice.nix>

## services.onlyoffice.postgresUser

The username OnlyOffice should use to connect to Postgresql. Unused when using socket authentication. Type: string Default: "onlyoffice" Declared by: <nixpkgs/nixos/modules/services/web-apps/onlyoffice.nix>

## services.onlyoffice.rabbitmqUrl

The Rabbitmq in amqp URI style OnlyOffice should connect to. Type: string Default: "amqp://guest:guest@localhost:5672" Declared by: <nixpkgs/nixos/modules/services/web-apps/onlyoffice.nix>

## services.onlyoffice.securityNonceFile

File holding nginx configuration that sets the nonce used to create secret links. Example: set $secure_link_secret "changeme"; Type: string Example: "/run/keys/onlyoffice-nginx-nonce.conf" Declared by: <nixpkgs/nixos/modules/services/web-apps/onlyoffice.nix>

## services.onlyoffice.x2t

The x2t package to use. Type: package Default: pkgs.x2t Declared by: <nixpkgs/nixos/modules/services/web-apps/onlyoffice.nix>
