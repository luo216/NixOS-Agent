---
module: services.keycloak.settings
option_count: 6
source: options.html
---

# services.keycloak.settings

## services.keycloak.settings.hostname

The hostname part of the public URL used as base for all frontend requests. See https://www.keycloak.org/server/hostname for more information about hostname configuration. Type: null or string Example: "keycloak.example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/keycloak.nix>

## services.keycloak.settings.hostname-backchannel-dynamic

Enables dynamic resolving of backchannel URLs, including hostname, scheme, port and context path. See https://www.keycloak.org/server/hostname for more information about hostname configuration. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/keycloak.nix>

## services.keycloak.settings.http-host

On which address Keycloak should accept new connections. Type: string Default: "::" Example: "::1" Declared by: <nixpkgs/nixos/modules/services/web-apps/keycloak.nix>

## services.keycloak.settings.http-port

On which port Keycloak should listen for new HTTP connections. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 80 Example: 8080 Declared by: <nixpkgs/nixos/modules/services/web-apps/keycloak.nix>

## services.keycloak.settings.http-relative-path

The path relative to / for serving resources. Note In versions of Keycloak using Wildfly (<17), this defaulted to /auth. If upgrading from the Wildfly version of Keycloak, i.e. a NixOS version before 22.05, you’ll likely want to set this to /auth to keep compatibility with your clients. See https://www.keycloak.org/migration/migrating-to-quarkus for more information on migrating from Wildfly to Quarkus. Type: string Default: "/" Example: "/auth" Declared by: <nixpkgs/nixos/modules/services/web-apps/keycloak.nix>

## services.keycloak.settings.https-port

On which port Keycloak should listen for new HTTPS connections. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 443 Example: 8443 Declared by: <nixpkgs/nixos/modules/services/web-apps/keycloak.nix>
