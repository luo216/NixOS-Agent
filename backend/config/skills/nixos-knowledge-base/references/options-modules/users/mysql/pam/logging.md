---
module: users.mysql.pam.logging
option_count: 8
source: options.html
---

# users.mysql.pam.logging

## users.mysql.pam.logging.enable

Enables logging of authentication attempts in the MySQL database. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/config/mysql.nix>

## users.mysql.pam.logging.hostColumn

The name of the column in the log table to which the name of the user being authenticated is stored. Type: string Example: "host" Declared by: <nixpkgs/nixos/modules/config/mysql.nix>

## users.mysql.pam.logging.msgColumn

The name of the column in the log table to which the description of the performed operation is stored. Type: string Example: "msg" Declared by: <nixpkgs/nixos/modules/config/mysql.nix>

## users.mysql.pam.logging.pidColumn

The name of the column in the log table to which the pid of the process utilising the pam_mysql authentication service is stored. Type: string Example: "pid" Declared by: <nixpkgs/nixos/modules/config/mysql.nix>

## users.mysql.pam.logging.rHostColumn

The name of the column in the log table to which the name of the remote host that initiates the session is stored. The value is supposed to be set by the PAM-aware application with pam_set_item(PAM_RHOST). Type: string Example: "rhost" Declared by: <nixpkgs/nixos/modules/config/mysql.nix>

## users.mysql.pam.logging.table

The name of the table to which logs are written. Type: string Example: "logs" Declared by: <nixpkgs/nixos/modules/config/mysql.nix>

## users.mysql.pam.logging.timeColumn

The name of the column in the log table to which the timestamp of the log entry is stored. Type: string Example: "timestamp" Declared by: <nixpkgs/nixos/modules/config/mysql.nix>

## users.mysql.pam.logging.userColumn

The name of the column in the log table to which the name of the user being authenticated is stored. Type: string Example: "user" Declared by: <nixpkgs/nixos/modules/config/mysql.nix>
