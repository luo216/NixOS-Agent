---
module: services.alerta
option_count: 10
source: options.html
---

# services.alerta

## services.alerta.enable

Whether to enable alerta. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/alerta.nix>

## services.alerta.authenticationRequired

Whether users must authenticate when using the web UI or command-line tool Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/alerta.nix>

## services.alerta.bind

Address to bind to. The default is to bind to all addresses Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/alerta.nix>

## services.alerta.corsOrigins

List of URLs that can access the API for Cross-Origin Resource Sharing (CORS) Type: list of string Default: [ "http://localhost" "http://localhost:5000" ] Declared by: <nixpkgs/nixos/modules/services/monitoring/alerta.nix>

## services.alerta.databaseName

Name of the database instance to connect to Type: string Default: "monitoring" Declared by: <nixpkgs/nixos/modules/services/monitoring/alerta.nix>

## services.alerta.databaseUrl

URL of the MongoDB or PostgreSQL database to connect to Type: string Default: "mongodb://localhost" Declared by: <nixpkgs/nixos/modules/services/monitoring/alerta.nix>

## services.alerta.extraConfig

These lines go into alertad.conf verbatim. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/monitoring/alerta.nix>

## services.alerta.logDir

Location where the logfiles are stored Type: absolute path Default: "/var/log/alerta" Declared by: <nixpkgs/nixos/modules/services/monitoring/alerta.nix>

## services.alerta.port

Port of Alerta Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5000 Declared by: <nixpkgs/nixos/modules/services/monitoring/alerta.nix>

## services.alerta.signupEnabled

Whether to prevent sign-up of new users via the web UI Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/monitoring/alerta.nix>
