---
module: services.llama-swap
option_count: 5
source: options.html
---

# services.llama-swap

## services.llama-swap.enable

Whether to enable enable the llama-swap service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/llama-swap.nix>

## services.llama-swap.package

The llama-swap package to use. Type: package Default: pkgs.llama-swap Declared by: <nixpkgs/nixos/modules/services/networking/llama-swap.nix>

## services.llama-swap.openFirewall

Whether to open the firewall for llama-swap. This adds port to networking.firewall.allowedTCPPorts. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/llama-swap.nix>

## services.llama-swap.port

Port that llama-swap listens on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Example: 11343 Declared by: <nixpkgs/nixos/modules/services/networking/llama-swap.nix>

## services.llama-swap.settings

llama-swap configuration. Refer to the llama-swap example configuration for details on supported values. Type: open submodule of (YAML 1.1 value) Example: let llama-cpp = pkgs.llama-cpp.override { rocmSupport = true; }; llama-server = lib.getExe' llama-cpp "llama-server"; in { healthCheckTimeout = 60; models = { "some-model" = { cmd = "${llama-server} --port ${PORT} -m /var/lib/llama-cpp/models/some-model.gguf -ngl 0 --no-webui"; aliases = [ "the-best" ]; }; "other-model" = { proxy = "http://127.0.0.1:5555"; cmd = "$\{llama-server\} --port 5555 -m /var/lib/llama-cpp/models/other-model.gguf -ngl 0 -c 4096 -np 4 --no-webui"; concurrencyLimit = 4; }; }; }; Declared by: <nixpkgs/nixos/modules/services/networking/llama-swap.nix>
