---
module: services.livebook
option_count: 5
source: options.html
---

# services.livebook

## services.livebook.enableUserService

Whether to enable a user service for Livebook. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/development/livebook.nix>

## services.livebook.package

The livebook package to use. Type: package Default: pkgs.livebook Declared by: <nixpkgs/nixos/modules/services/development/livebook.nix>

## services.livebook.environment

Environment variables to set. Livebook is configured through the use of environment variables. The available configuration options can be found in the Livebook documentation. Note that all environment variables set through this configuration parameter will be readable by anyone with access to the host machine. Therefore, sensitive information like LIVEBOOK_PASSWORD or LIVEBOOK_COOKIE should never be set using this configuration option, but should instead use services.livebook.environmentFile. See the documentation for that option for more information. Any environment variables specified in the services.livebook.environmentFile will supersede environment variables specified in this option. Type: attribute set of (null or boolean or signed integer or string) Default: { } Example: { LIVEBOOK_PORT = 8080; } Declared by: <nixpkgs/nixos/modules/services/development/livebook.nix>

## services.livebook.environmentFile

Additional environment file as defined in systemd.exec(5). Secrets like LIVEBOOK_PASSWORD (which is used to specify the password needed to access the livebook site) or LIVEBOOK_COOKIE (which is used to specify the cookie used to connect to the running Elixir system) may be passed to the service without making them readable to everyone with access to systemctl by using this configuration parameter. Note that this file needs to be available on the host on which livebook is running. For security purposes, this file should contain at least LIVEBOOK_PASSWORD or LIVEBOOK_TOKEN_ENABLED=false. See the Livebook documentation and the services.livebook.environment configuration parameter for further options. Type: null or absolute path Default: null Example: "/var/lib/livebook.env" Declared by: <nixpkgs/nixos/modules/services/development/livebook.nix>

## services.livebook.extraPackages

Extra packages to make available to the Livebook service. Type: list of package Default: [ ] Example: with pkgs; [ gcc gnumake ] Declared by: <nixpkgs/nixos/modules/services/development/livebook.nix>
