---
module: services.prosody
option_count: 28
source: options.html
---

# services.prosody

## services.prosody.enable

Whether to enable the prosody server Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.package

The prosody package to use. Type: package Default: pkgs.prosody Example: pkgs.prosody.override { withExtraLibs = [ pkgs.luaPackages.lpty ]; withCommunityModules = [ "auth_external" ]; }; Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.admins

List of administrators of the current host Type: list of string Default: [ ] Example: [ "admin1@example.com" "admin2@example.com" ] Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.allowRegistration

Allow account creation Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.authentication

Authentication mechanism used for logins. Type: one of “internal_plain”, “internal_hashed”, “cyrus”, “anonymous”, “ldap” Default: "internal_hashed" Example: "internal_plain" Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.c2sRequireEncryption

Force clients to use encrypted connections? This option will prevent clients from authenticating unless they are using encryption. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.checkConfig

Check the configuration file with prosodyctl check config Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.dataDir

The prosody home directory used to store all data. If left as the default value this directory will automatically be created before the prosody server starts, otherwise you are responsible for ensuring the directory exists with appropriate ownership and permissions. Type: absolute path Default: "/var/lib/prosody" Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.disco_items

List of discoverable items you want to advertise. Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.extraConfig

Additional prosody configuration The generated file is processed by envsubst to allow secrets to be passed securely via environment variables. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.extraModules

Enable custom modules Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.extraPluginPaths

Additional path in which to look find plugins/modules Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.group

Group account under which prosody runs. Note If left as the default value this group will automatically be created on system activation, otherwise you are responsible for ensuring the group exists before the prosody service starts. Type: string Default: "prosody" Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.httpFileShare

Configures the http_file_share module to handle user uploads. See https://prosody.im/doc/modules/mod_http_file_share for a full list of options. Type: null or (open submodule of int, bool, string or list of them) Default: null Example: { domain = "uploads.my-xmpp-example-host.org"; } Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.httpInterfaces

Interfaces on which the HTTP server will listen on. Type: list of string Default: [ "*" "::" ] Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.httpPorts

Listening HTTP ports list for this service. Type: list of 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: [ 5280 ] Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.httpsInterfaces

Interfaces on which the HTTPS server will listen on. Type: list of string Default: [ "*" "::" ] Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.httpsPorts

Listening HTTPS ports list for this service. Type: list of 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: [ 5281 ] Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.log

Logging configuration. See for more details Type: strings concatenated with “\n” Default: "\"*syslog\"" Example: '' { { min = "warn"; to = "*syslog"; }; } '' Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.muc

Multi User Chat (MUC) configuration Type: list of (submodule) Default: [ ] Example: [ { domain = "conference.my-xmpp-example-host.org"; } ] Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.s2sInsecureDomains

Some servers have invalid or self-signed certificates. You can list remote domains here that will not be required to authenticate using certificates. They will be authenticated using DNS instead, even when s2s_secure_auth is enabled. Type: list of string Default: [ ] Example: [ "insecure.example.com" ] Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.s2sRequireEncryption

Force servers to use encrypted connections? This option will prevent servers from authenticating unless they are using encryption. Note that this is different from authentication. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.s2sSecureAuth

Force certificate authentication for server-to-server connections? This provides ideal security, but requires servers you communicate with to support encryption AND present valid, trusted certificates. For more information see https://prosody.im/doc/s2s#security Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.s2sSecureDomains

Even if you leave s2s_secure_auth disabled, you can still require valid certificates for some domains by specifying a list here. Type: list of string Default: [ ] Example: [ "jabber.org" ] Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.ssl

Paths to SSL files Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.user

User account under which prosody runs. Note If left as the default value this user will automatically be created on system activation, otherwise you are responsible for ensuring the user exists before the prosody service starts. Type: string Default: "prosody" Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.virtualHosts

Define the virtual hosts Type: attribute set of (submodule) Default: { localhost = { domain = "localhost"; enabled = true; }; } Example: { myhost = { domain = "my-xmpp-example-host.org"; enabled = true; }; } Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>

## services.prosody.xmppComplianceSuite

The XEP-0423 defines a set of recommended XEPs to implement for a server. It’s generally a good idea to implement this set of extensions if you want to provide your users with a good XMPP experience. This NixOS module aims to provide a “advanced server” experience as per defined in the XEP-0423[1] specification. Setting this option to true will prevent you from building a NixOS configuration which won’t comply with this standard. You can explicitly decide to ignore this standard if you know what you are doing by setting this option to false. [1] https://xmpp.org/extensions/xep-0423.html Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/prosody.nix>
