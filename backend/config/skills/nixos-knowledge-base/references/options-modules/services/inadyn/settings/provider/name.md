---
module: services.inadyn.settings.provider.<name>
option_count: 5
source: options.html
---

# services.inadyn.settings.provider.<name>

## services.inadyn.settings.provider.<name>.hostname

Hostname alias(es). Type: string or list of string Default: "*" Example: "your.cool-domain.com" Declared by: <nixpkgs/nixos/modules/services/networking/inadyn.nix>

## services.inadyn.settings.provider.<name>.include

File to include additional settings for this provider from. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/inadyn.nix>

## services.inadyn.settings.provider.<name>.password

Password for this DDNS provider. WARNING: This will be world-readable in the nix store. To store credentials securely, use the include or configFile options. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/inadyn.nix>

## services.inadyn.settings.provider.<name>.ssl

Whether to use HTTPS for this DDNS provider. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/inadyn.nix>

## services.inadyn.settings.provider.<name>.username

Username for this DDNS provider. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/inadyn.nix>
