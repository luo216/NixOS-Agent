---
module: services.go-httpbin
option_count: 3
source: options.html
---

# services.go-httpbin

## services.go-httpbin.enable

Whether to enable go-httpbin. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/go-httpbin.nix>

## services.go-httpbin.package

The go-httpbin package to use. Type: package Default: pkgs.go-httpbin Declared by: <nixpkgs/nixos/modules/services/web-apps/go-httpbin.nix>

## services.go-httpbin.settings

Configuration of go-httpbin. See https://github.com/mccutchen/go-httpbin#configuration for a list of options. Type: open submodule of attribute set of (string or signed integer or boolean) Example: { HOST = "0.0.0.0"; PORT = 8080; } Declared by: <nixpkgs/nixos/modules/services/web-apps/go-httpbin.nix>
