---
module: security.agnos
option_count: 9
source: options.html
---

# security.agnos

## security.agnos.enable

Whether to enable agnos. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/security/agnos.nix>

## security.agnos.group

Group to run Agnos as. The acquired certificates will be owned by this group. Type: string Default: "agnos" Declared by: <nixpkgs/nixos/modules/security/agnos.nix>

## security.agnos.persistent

When true, use a persistent systemd timer. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/security/agnos.nix>

## security.agnos.server

ACME Directory Resource URI. Defaults to Let’s Encrypt’s production endpoint, https://acme-v02.api.letsencrypt.org/directory, if unset. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/security/agnos.nix>

## security.agnos.serverCa

The root certificate (in PEM format) of the ACME server’s HTTPS interface. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/security/agnos.nix>

## security.agnos.settings

Settings Type: open submodule of attribute set of (TOML value) Declared by: <nixpkgs/nixos/modules/security/agnos.nix>

## security.agnos.startAt

How often or when to run agnos. The format is described in systemd.time(7). Type: string or list of string Default: "daily" Example: "02:00" Declared by: <nixpkgs/nixos/modules/security/agnos.nix>

## security.agnos.temporarilyOpenFirewall

When true, will open the port specified in settings.dns_listen_addr before running the agnos service, and close it when agnos finishes running. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/agnos.nix>

## security.agnos.user

User to run Agnos as. The acquired certificates will be owned by this user. Type: string Default: "agnos" Declared by: <nixpkgs/nixos/modules/security/agnos.nix>
