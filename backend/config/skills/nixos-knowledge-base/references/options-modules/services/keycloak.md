---
module: services.keycloak
option_count: 9
source: options.html
---

# services.keycloak

## services.keycloak.enable

Whether to enable the Keycloak identity and access management server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/keycloak.nix>

## services.keycloak.package

The keycloak package to use. Type: package Default: pkgs.keycloak Declared by: <nixpkgs/nixos/modules/services/web-apps/keycloak.nix>

## services.keycloak.initialAdminPassword

Initial password set for the temporary admin user. The password is not stored safely and should be changed immediately in the admin panel. See Admin bootstrap and recovery for details. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/keycloak.nix>

## services.keycloak.plugins

Keycloak plugin jar, ear files or derivations containing them. Packaged plugins are available through pkgs.keycloak.plugins. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/web-apps/keycloak.nix>

## services.keycloak.realmFiles

Realm files that the server is going to import during startup. If a realm already exists in the server, the import operation is skipped. Importing the master realm is not supported. All files are expected to be in json format. See the documentation for further information. Type: list of absolute path Default: [ ] Example: [ ./some/realm.json ./another/realm.json ] Declared by: <nixpkgs/nixos/modules/services/web-apps/keycloak.nix>

## services.keycloak.settings

Configuration options corresponding to parameters set in conf/keycloak.conf. Most available options are documented at https://www.keycloak.org/server/all-config. Options containing secret data should be set to an attribute set containing the attribute _secret - a string pointing to a file containing the value the option should be set to. See the example to get a better picture of this: in the resulting conf/keycloak.conf file, the https-key-store-password key will be set to the contents of the /run/keys/store_password file. Type: open submodule of attribute set of (null or string or signed integer or boolean or attribute set of absolute path) Example: { hostname = "keycloak.example.com"; https-key-store-file = "/path/to/file"; https-key-store-password = { _secret = "/run/keys/store_password"; }; } Declared by: <nixpkgs/nixos/modules/services/web-apps/keycloak.nix>

## services.keycloak.sslCertificate

The path to a PEM formatted certificate to use for TLS/SSL connections. Type: null or absolute path Default: null Example: "/run/keys/ssl_cert" Declared by: <nixpkgs/nixos/modules/services/web-apps/keycloak.nix>

## services.keycloak.sslCertificateKey

The path to a PEM formatted private key to use for TLS/SSL connections. Type: null or absolute path Default: null Example: "/run/keys/ssl_key" Declared by: <nixpkgs/nixos/modules/services/web-apps/keycloak.nix>

## services.keycloak.themes

Additional theme packages for Keycloak. Each theme is linked into subdirectory with a corresponding attribute name. Theme packages consist of several subdirectories which provide different theme types: for example, account, login etc. After adding a theme to this option you can select it by its name in Keycloak administration console. Type: attribute set of package Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/keycloak.nix>
