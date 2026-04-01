---
module: security.ipa
option_count: 13
source: options.html
---

# security.ipa

## security.ipa.enable

Whether to enable FreeIPA domain integration. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/security/ipa.nix>

## security.ipa.basedn

Base DN to use when performing LDAP operations. Type: string Example: "dc=example,dc=com" Declared by: <nixpkgs/nixos/modules/security/ipa.nix>

## security.ipa.cacheCredentials

Whether to cache credentials. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/security/ipa.nix>

## security.ipa.certificate

IPA server CA certificate. Use nix-prefetch-url http://$server/ipa/config/ca.crt to obtain the file and the hash. Type: package Example: pkgs.fetchurl { url = "http://ipa.example.com/ipa/config/ca.crt"; hash = lib.fakeHash; }; Declared by: <nixpkgs/nixos/modules/security/ipa.nix>

## security.ipa.chromiumSupport

Whether to whitelist the FreeIPA domain in Chromium. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/security/ipa.nix>

## security.ipa.domain

Domain of the IPA server. Type: string Example: "example.com" Declared by: <nixpkgs/nixos/modules/security/ipa.nix>

## security.ipa.ifpAllowedUids

A list of users allowed to access the ifp dbus interface. Type: list of string Default: [ "root" ] Declared by: <nixpkgs/nixos/modules/security/ipa.nix>

## security.ipa.ipaHostname

Fully-qualified hostname used to identify this host in the IPA domain. Type: string Default: if config.networking.domain != null then config.networking.fqdn else "${networking.hostName}.${security.ipa.domain}" Example: "myworkstation.example.com" Declared by: <nixpkgs/nixos/modules/security/ipa.nix>

## security.ipa.offlinePasswords

Whether to store offline passwords when the server is down. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/security/ipa.nix>

## security.ipa.realm

Kerberos realm. Type: string Example: "EXAMPLE.COM" Declared by: <nixpkgs/nixos/modules/security/ipa.nix>

## security.ipa.server

IPA Server hostname. Type: string Example: "ipa.example.com" Declared by: <nixpkgs/nixos/modules/security/ipa.nix>

## security.ipa.shells

List of shells which binaries should be installed to /bin/<name>. FreeIPA typicly configures somesthing like /bin/bash into the users shell attribute. Type: list of package Default: with pkgs; [ bash zsh ]; Declared by: <nixpkgs/nixos/modules/security/ipa.nix>

## security.ipa.useAsTimeserver

Whether to add the IPA server to the timeserver. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/security/ipa.nix>
