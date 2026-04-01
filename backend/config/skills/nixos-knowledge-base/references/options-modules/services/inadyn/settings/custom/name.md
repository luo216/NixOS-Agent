---
module: services.inadyn.settings.custom.<name>
option_count: 7
source: options.html
---

# services.inadyn.settings.custom.<name>

## services.inadyn.settings.custom.<name>.ddns-path

DDNS server path. See inadnyn.conf (5) for a list for format specifiers that can be used. Type: string Example: "/update?user=%u&password=%p&domain=%h&myip=%i" Declared by: <nixpkgs/nixos/modules/services/networking/inadyn.nix>

## services.inadyn.settings.custom.<name>.ddns-server

DDNS server name. Type: string Declared by: <nixpkgs/nixos/modules/services/networking/inadyn.nix>

## services.inadyn.settings.custom.<name>.hostname

Hostname alias(es). Type: string or list of string Default: "*" Example: "your.cool-domain.com" Declared by: <nixpkgs/nixos/modules/services/networking/inadyn.nix>

## services.inadyn.settings.custom.<name>.include

File to include additional settings for this provider from. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/inadyn.nix>

## services.inadyn.settings.custom.<name>.password

Password for this DDNS provider. WARNING: This will be world-readable in the nix store. To store credentials securely, use the include or configFile options. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/inadyn.nix>

## services.inadyn.settings.custom.<name>.ssl

Whether to use HTTPS for this DDNS provider. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/inadyn.nix>

## services.inadyn.settings.custom.<name>.username

Username for this DDNS provider. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/inadyn.nix>
