---
module: users.mysql.nss
option_count: 10
source: options.html
---

# users.mysql.nss

## users.mysql.nss.getgrent

SQL query for the getgrent syscall. Type: null or string Default: null Example: SELECT name,password,gid FROM groups Declared by: <nixpkgs/nixos/modules/config/mysql.nix>

## users.mysql.nss.getgrgid

SQL query for the getgrgid syscall. Type: null or string Default: null Example: SELECT name,password,gid FROM groups WHERE gid='%1$u' LIMIT 1 Declared by: <nixpkgs/nixos/modules/config/mysql.nix>

## users.mysql.nss.getgrnam

SQL query for the getgrnam syscall. Type: null or string Default: null Example: SELECT name,password,gid FROM groups WHERE name='%1$s' LIMIT 1 Declared by: <nixpkgs/nixos/modules/config/mysql.nix>

## users.mysql.nss.getpwent

SQL query for the getpwent syscall. Type: null or string Default: null Example: SELECT username,'x',uid,'5000','MySQL User', CONCAT('/home/',username),'/run/sw/current-system/bin/bash' FROM users Declared by: <nixpkgs/nixos/modules/config/mysql.nix>

## users.mysql.nss.getpwnam

SQL query for the getpwnam syscall. Type: null or string Default: null Example: SELECT username,'x',uid,'5000','MySQL User', CONCAT('/home/',username),'/run/sw/current-system/bin/bash' \ FROM users \ WHERE username='%1$s' \ LIMIT 1 Declared by: <nixpkgs/nixos/modules/config/mysql.nix>

## users.mysql.nss.getpwuid

SQL query for the getpwuid syscall. Type: null or string Default: null Example: SELECT username,'x',uid,'5000','MySQL User', CONCAT('/home/',username),'/run/sw/current-system/bin/bash' \ FROM users \ WHERE uid='%1$u' \ LIMIT 1 Declared by: <nixpkgs/nixos/modules/config/mysql.nix>

## users.mysql.nss.getspent

SQL query for the getspent syscall. Type: null or string Default: null Example: SELECT username,password,'1','0','99999','0','0','-1','0' FROM users Declared by: <nixpkgs/nixos/modules/config/mysql.nix>

## users.mysql.nss.getspnam

SQL query for the getspnam syscall. Type: null or string Default: null Example: SELECT username,password,'1','0','99999','0','0','-1','0' \ FROM users \ WHERE username='%1$s' \ LIMIT 1 Declared by: <nixpkgs/nixos/modules/config/mysql.nix>

## users.mysql.nss.gidsbymem

SQL query for the gidsbymem syscall. Type: null or string Default: null Example: SELECT gid FROM grouplist WHERE username='%1$s' Declared by: <nixpkgs/nixos/modules/config/mysql.nix>

## users.mysql.nss.memsbygid

SQL query for the memsbygid syscall. Type: null or string Default: null Example: SELECT username FROM grouplist WHERE gid='%1$u' Declared by: <nixpkgs/nixos/modules/config/mysql.nix>
