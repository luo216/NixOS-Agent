---
module: services.kimai.sites.<name>
option_count: 4
source: options.html
---

# services.kimai.sites.<name>

## services.kimai.sites.<name>.package

The kimai package to use. Type: package Default: pkgs.kimai Declared by: <nixpkgs/nixos/modules/services/web-apps/kimai.nix>

## services.kimai.sites.<name>.environmentFile

Securely pass environment variabels to Kimai. This can be used to set other environement variables such as MAILER_URL. Type: null or absolute path Default: null Example: "/run/secrets/kimai.env" Declared by: <nixpkgs/nixos/modules/services/web-apps/kimai.nix>

## services.kimai.sites.<name>.poolConfig

Options for the Kimai PHP pool. See the documentation on php-fpm.conf for details on configuration directives. Type: attribute set of (string or signed integer or boolean) Default: { pm = "dynamic"; "pm.max_children" = 32; "pm.max_requests" = 500; "pm.max_spare_servers" = 4; "pm.min_spare_servers" = 2; "pm.start_servers" = 2; } Declared by: <nixpkgs/nixos/modules/services/web-apps/kimai.nix>

## services.kimai.sites.<name>.settings

Structural Kimai’s local.yaml configuration. Refer to https://www.kimai.org/documentation/local-yaml.html#localyaml for details. Type: attribute set of anything Default: { } Example: { kimai = { timesheet = { rounding = { default = { begin = 15; end = 15; }; }; }; }; } Declared by: <nixpkgs/nixos/modules/services/web-apps/kimai.nix>
