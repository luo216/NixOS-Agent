---
module: services.chhoto-url
option_count: 4
source: options.html
---

# services.chhoto-url

## services.chhoto-url.enable

Whether to enable Chhoto URL. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/chhoto-url.nix>

## services.chhoto-url.package

The chhoto-url package to use. Type: package Default: pkgs.chhoto-url Declared by: <nixpkgs/nixos/modules/services/web-apps/chhoto-url.nix>

## services.chhoto-url.environmentFiles

Files to load environment variables from in addition to services.chhoto-url.settings. This is useful to avoid putting secrets into the nix store. See https://github.com/SinTan1729/chhoto-url/blob/main/compose.yaml for a list of options. Type: list of absolute path Default: [ ] Example: [ "/run/secrets/chhoto-url.env" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/chhoto-url.nix>

## services.chhoto-url.settings

Configuration of Chhoto URL. See https://github.com/SinTan1729/chhoto-url/blob/main/compose.yaml for a list of options. Type: open submodule of attribute set of (string or signed integer or boolean) Example: { port = 4567; } Declared by: <nixpkgs/nixos/modules/services/web-apps/chhoto-url.nix>
