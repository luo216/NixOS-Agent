---
module: services.pgadmin.emailServer
option_count: 8
source: options.html
---

# services.pgadmin.emailServer

## services.pgadmin.emailServer.enable

Whether to enable SMTP email server. This is necessary, if you want to use password recovery or change your own password. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/admin/pgadmin.nix>

## services.pgadmin.emailServer.address

SMTP server for email delivery Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/admin/pgadmin.nix>

## services.pgadmin.emailServer.passwordFile

Password for SMTP email account. NOTE: Should be string not a store path, to prevent the password from being world readable Type: absolute path Declared by: <nixpkgs/nixos/modules/services/admin/pgadmin.nix>

## services.pgadmin.emailServer.port

SMTP server port for email delivery Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 25 Declared by: <nixpkgs/nixos/modules/services/admin/pgadmin.nix>

## services.pgadmin.emailServer.sender

SMTP server sender email for email delivery. Some servers require this to be a valid email address from that server Type: string Example: "noreply@example.com" Declared by: <nixpkgs/nixos/modules/services/admin/pgadmin.nix>

## services.pgadmin.emailServer.useSSL

Whether to enable SSL for connecting to the SMTP server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/admin/pgadmin.nix>

## services.pgadmin.emailServer.useTLS

Whether to enable TLS for connecting to the SMTP server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/admin/pgadmin.nix>

## services.pgadmin.emailServer.username

SMTP server username for email delivery Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/admin/pgadmin.nix>
