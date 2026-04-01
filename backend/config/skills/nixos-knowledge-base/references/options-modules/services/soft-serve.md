---
module: services.soft-serve
option_count: 3
source: options.html
---

# services.soft-serve

## services.soft-serve.enable

Whether to enable soft-serve. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/soft-serve.nix>

## services.soft-serve.package

The soft-serve package to use. Type: package Default: pkgs.soft-serve Declared by: <nixpkgs/nixos/modules/services/misc/soft-serve.nix>

## services.soft-serve.settings

The contents of the configuration file for soft-serve. See https://charm.sh/blog/self-hosted-soft-serve/. Type: YAML 1.1 value Default: { } Example: { name = "dadada's repos"; log_format = "text"; ssh = { listen_addr = ":23231"; public_url = "ssh://localhost:23231"; max_timeout = 30; idle_timeout = 120; }; stats.listen_addr = ":23233"; } Declared by: <nixpkgs/nixos/modules/services/misc/soft-serve.nix>
